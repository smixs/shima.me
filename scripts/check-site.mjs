import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
const root=new URL("../dist/",import.meta.url).pathname, origin="https://www.shima.me";
const walk=async dir=>(await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(join(dir,e.name)):join(dir,e.name)))).flat();
const files=await walk(root), pages=files.filter(f=>f.endsWith(".html")&&!f.endsWith("/404.html")&&!/googlef78|yandex_/.test(f));
const attr=(tag,name)=>tag.match(new RegExp('\\b'+name+'="([^"]*)"'))?.[1];
const tags=(html,name)=>[...html.matchAll(new RegExp('<'+name+'\\b[^>]*>','g'))].map(x=>x[0]);
const resolve=path=>join(root,path.endsWith("/")?path+"index.html":path);
const known=new Map(await Promise.all(pages.map(async f=>[f,await readFile(f,"utf8")])));
let checkedLinks=0;
for(const [file,html] of known){
 const path=file.slice(root.length).replace(/index\.html$/,""),url=origin+"/"+path;
 assert.equal((html.match(/<h1\b/g)||[]).length,1,url+" must have one H1");
 assert.equal(tags(html,"link").find(t=>attr(t,"rel")==="canonical")?.match(/href="([^"]*)"/)?.[1],url);
 assert.match(html,/<meta name="description" content="[^"]+"/);
 const alternates=tags(html,"link").filter(t=>attr(t,"hreflang"));
 assert.equal(alternates.length,3,url+" alternate count");
 for(const tag of alternates) {
  const u=new URL(attr(tag,"href")); assert.equal(u.origin,origin);
  assert.ok(known.has(resolve(u.pathname)),url+" missing alternate "+u.href);
  const counterpart=known.get(resolve(u.pathname));
  assert.ok(tags(counterpart,"link").some(t=>attr(t,"href")===url&&attr(t,"hreflang")===(path.startsWith("ru/")?"ru":"en")),url+" missing reciprocal");
 }
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
 const person=graph.find(n=>n["@type"]==="Person");
 assert.equal(person["@id"],"https://sergeshima.com/#person");
 assert.ok(!("founder" in person));
 assert.ok(!person.sameAs.some(u=>/majento|aimasters/.test(u)));
 for(const org of graph.filter(n=>n["@type"]==="Organization")) assert.equal(org.founder["@id"],person["@id"]);
 for(const image of tags(html,"img")) {
  assert.ok(attr(image,"alt")!==undefined,url+" missing alt");
  assert.ok(attr(image,"width")&&attr(image,"height"),url+" unsized image");
 }
 for(const tag of [...tags(html,"a"),...tags(html,"img"),...tags(html,"link"),...tags(html,"script")]){
  const href=attr(tag,"href")??attr(tag,"src"); if(!href||/^(mailto:|tel:|data:)/.test(href))continue;
  const u=new URL(href,url);if(u.origin!==origin)continue;
  const target=resolve(decodeURIComponent(u.pathname));
  assert.ok(files.includes(target),url+" missing target "+u.href);
  if(u.hash&&target.endsWith(".html")){
   const h=known.get(target)??await readFile(target,"utf8");
   assert.ok(h.includes('id="'+decodeURIComponent(u.hash.slice(1))+'"'),url+" missing anchor "+u.href);
  } checkedLinks++;
 }
}
assert.equal(pages.length,44,"Expected 44 public EN/RU pages");
const sitemap=await readFile(join(root,"sitemap-0.xml"),"utf8");
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
assert.equal(urls.length,44);
for(const [file]of known) assert.ok(urls.includes(origin+"/"+file.slice(root.length).replace(/index\.html$/,"")));
for(const file of ["index.md","ru/index.md","llms.txt","social.png","BingSiteAuth.xml","googlef78eca5b20431859.html","yandex_712d8fceb11ec3c8.html"])assert.ok(files.includes(join(root,file)));
const en=await readFile(join(root,"index.md"),"utf8");
assert.ok(en.includes("13M+")&&en.includes("$21M")&&en.includes("1000+")&&en.includes("50+"));
const home=known.get(join(root,"index.html"));
assert.ok(home.includes("Client work includes IBT / PepsiCo.")&&home.includes("Programs for Alfa Bank"));
assert.ok(!home.includes("gsap"));
console.log(JSON.stringify({status:"PASS",publicPages:pages.length,sitemapUrls:urls.length,internalLinksAndResources:checkedLinks,checks:["canonical","reciprocal hreflang","H1","description","identity graph","image dimensions","internal targets and anchors","sitemap coverage","Markdown facts","verification files retained"]},null,2));
