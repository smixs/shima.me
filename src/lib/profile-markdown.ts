import {person,music,clients,remotes} from "../data/site";
import {intro,getReleases,getLog,getMentions,getIva,projectIntro,type Locale} from "../data/localized";
import {contentUpdated,sourcePolicy} from "../data/editorial";
import repos from "../data/repos.json";
import docs from "../data/repo-docs.json";
import snapshot from "../data/repos-meta.json";
export function profileMarkdown(lang:Locale) {
 const ru=lang==="ru", prefix=ru?"/ru":"";
 const out=[`# ${ru?"Сергей Шима":"Serge Shima"}`,intro[lang],
  `Canonical: https://www.shima.me${prefix}/`,`Identity: https://sergeshima.com/#person`,
  `${ru?"Обновлено":"Updated"}: ${contentUpdated}`, sourcePolicy[lang],
  `Telegram: ${person.telegram}`,`Email: ${person.email}`,
  `## ${ru?"Компании и продукты":"Companies and products"}`];
 for(const r of getReleases(lang)) out.push(`### ${r.name}`,r.kind,r.line,...r.notes.map(n=>"- "+n),`https://www.shima.me${prefix}/projects/${r.id}/`,...r.links.map(l=>`- ${l.label}: ${l.href}`));
 const iva=getIva(lang);
 out.push("## Iva",projectIntro[lang],`https://www.shima.me${prefix}/projects/iva/`,iva.site,iva.repo);
 for(const f of [...iva.tree,...iva.features]) out.push(`### ${f.name}`,f.text);
 out.push(`## ${ru?"Карьера":"Career"}`);
 for(const c of getLog(lang)) out.push(`### ${c.date} · ${c.org}`,c.role,c.place??"",...c.notes.map(n=>"- "+n));
 out.push(`## ${ru?"Клиенты":"Clients"}`,clients.map(c=>c.name).join(", "),
  `## Open source`,`GitHub snapshot: ${snapshot.fetchedAt}`);
 for(const r of repos) out.push(`### ${r.name}`,r.description??"",`${r.language??"Documentation"} · ${r.stars} stars`,r.url,...(docs.some(d=>d.name===r.name)?[`https://www.shima.me${prefix}/open-source/${r.name}/`]:[]));
 out.push(`## ${ru?"Выступления и публикации":"Talks and publications"}`);
 for(const m of getMentions(lang)) out.push(`- ${m.date??""} ${m.outlet}: ${m.title}${m.href?" — "+m.href:""}`);
 out.push(`## ${ru?"Музыка":"Music"}`,ru?"DJ с 1998 года. Re:fresh, Минск, 2005–2011. Хаус и техно.":"DJ since 1998. Re:fresh, Minsk, 2005–2011. House and techno.");
 for(const m of music.mixes) out.push(`- ${m.name} (${m.length}): ${m.href}`);
 for(const l of [...music.links,...remotes]) out.push(`- ${l.label}: ${l.href}`);
 return out.join("\n\n")+"\n";
}
