// Run only for an approved production release. Dry run is the default.
import { readFile } from "node:fs/promises";
const config = JSON.parse(await readFile(new URL("../src/data/indexnow.json",import.meta.url),"utf8"));
const args=process.argv.slice(2), submit=args.includes("--submit");
const revision=args.find(a=>a.startsWith("--revision="))?.slice(11);
const urls=args.filter(a=>!a.startsWith("--"));
if(!urls.length || urls.length>10000) throw new Error("Provide 1–10000 changed production URLs");
for(const raw of urls){
 const u=new URL(raw);
 if(u.protocol!=="https:" || u.host!==config.host || u.username || u.password || u.hash || u.search) throw new Error("Unexpected production URL: "+raw);
}
const body={host:config.host,key:config.key,keyLocation:`https://${config.host}/${config.key}.txt`,urlList:[...new Set(urls)]};
if(!submit){console.log(JSON.stringify({dryRun:true,body},null,2));process.exit(0);}
if(!revision || !/^[0-9a-f]{40}$/.test(revision)) throw new Error("Supply the approved 40-character --revision");
const proof=await fetch(body.keyLocation);
if(!proof.ok || (await proof.text()).trim()!==config.key) throw new Error("Production key is not published");
const response=await fetch("https://api.indexnow.org/indexnow",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
const evidence={observedAt:new Date().toISOString(),revision,...body,status:response.status,response:await response.text()};
console.log(JSON.stringify(evidence,null,2));
if(![200,202].includes(response.status)) process.exitCode=1;
