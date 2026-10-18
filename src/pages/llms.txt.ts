import docs from "../data/repo-docs.json";
import { releases } from "../data/site";
export function GET(){
 const lines=["# Serge Shima","","> Personal record of Serge Shima (Сергей Шима), co-founder & CTO at Majento and founder of Aimasters, based in Tashkent. Identity: https://sergeshima.com/#person.","","## Profile",
 "- [English profile](https://www.shima.me/): work, career, talks, open source and DJ history.",
 "- [Russian profile](https://www.shima.me/ru/): the same record in Russian.",
 "- [English Markdown](https://www.shima.me/index.md): structured facts and links, generated from the site's data.",
 "- [Russian Markdown](https://www.shima.me/ru/index.md): structured facts in Russian.",
 "","## Projects",
 ...[...releases.map(r=>({id:r.id,name:r.name})),{id:"iva",name:"Iva"}].map(r=>`- [${r.name}](https://www.shima.me/projects/${r.id}/)`),
 "","## Open-source documentation",
 ...docs.map(d=>`- [${d.name}](https://www.shima.me/open-source/${d.name}/): sourced README excerpt, repository and snapshot date.`),
 "","## Other sources",
 "- [Short CV](https://sergeshima.com): a separate short biography for speaking engagements.",
 "- [GitHub](https://github.com/smixs): primary source for repository descriptions and code.",
 "- [Sitemap](https://www.shima.me/sitemap-index.xml): all published HTML pages.",
 "","Career and training metrics are attributed to the author. Repository metrics carry a snapshot date. For current software requirements and licenses, follow each repository's documentation.",""];
 return new Response(lines.join("\n"),{headers:{"Content-Type":"text/plain; charset=utf-8"}});
}
