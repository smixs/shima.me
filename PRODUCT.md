# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static build, islands only where interaction needs JS) on Cloudflare Pages. Replaces the current Next.js + Vercel build. Decided by Serge Shima, 17.10.2026. Heavy runs (dev server, build, screenshots) happen on the Mac mini, never on the MacBook.

## Users

- Anyone in the world who asks "who is Serge Shima / Сергей Шима": prospective clients and partners, conference organizers, journalists, hiring founders, developers who found one of his GitHub repos.
- AI answer engines and search crawlers (ChatGPT, Perplexity, Gemini, Claude, Grok, Google, Bing, Yandex/Alice) that assemble that answer from the site.

## Product Purpose

shima.me is the complete record of Serge Shima's work: current companies and products, open-source projects, career history since 1998, talks and press, DJ history. Success: a visitor or an AI engine asking about him gets a detailed, consistent, linked answer from this site.

sergeshima.com stays a separate site: his short CV for speaking engagements and the identity home (`https://sergeshima.com/#person`). shima.me references that @id as the author and links to it; it does not duplicate the CV.

## Positioning

Builder, not commentator: co-founder & CTO of Majento who ships products (sotish, sezish, Claimp, iva-agent, agent-second-brain) and widely starred open-source agent tooling, on top of 20 years in strategy and creative (Halva, Grand Prix Effie, Bonsticks +$21M).

## Capabilities and Constraints

- Languages: EN (default) and RU at /ru/, hreflang both ways.
- Sections: home, projects (one page per product and per top-15 public repo), open source (auto list of all public repos, stars refreshed by a daily build), history 1998-2026 with cases and clients, talks and press, music (DJ history), now.
- Shown beyond work: DJ history only. Not shown: height, weight, appearance details, family, MBTI, beliefs.
- Name forms: Serge Shima, Сергей Шима, Sergey Shima. The passport surname is not used anywhere.
- Repo `pohuy` appears in the list without emphasis; showcase leads with agent-second-brain, visual-skills, iva-agent, skill-conductor.
- Technical floor: robots.txt allowing AI crawlers, sitemap, hreflang, llms.txt, Person/ProfilePage/Organization/SoftwareSourceCode JSON-LD tied to `https://sergeshima.com/#person`.
- Second stage (not now): "ask about Serge" AI chat.

## Brand Commitments

- Keep the greeting hero: round 3D cartoon avatar (yellow background, bald with two horn-like spikes, braided beard, glasses), a tilted "Serge Shima" speech bubble, and the animated grey grain shader background. Reference screenshot: `/Users/shima/.bb/thread-storage/thr_tebpvaavne/Attachments/Dia_17_October_2026_mnyVSVMq-1792204273418-ox04m3.png`.
- Overall look: editorial monochrome (decision 17.10.2026); tabs are replaced by real pages.
- Self-ironic voice: "Babai of creative AI". No emoji in UI.

## Evidence on Hand

- Career canon: `~/vault/vault/identity/user-full.md`, `~/dev/serge-cv/data.mjs`, sergeshima.com.
- Numbers confirmed by Serge: 1000+ people trained, 50+ teams. Halva 13M+ users. Bonsticks +$21M. Grand Prix Effie (Exponenta). AIDA Pioneer #1 agency in Belarus. NLP chatbot in production 2017.
- Clients allowed by name: PepsiCo, Nestlé, Honor, Haval, KIA, Beeline, IBT; training clients Alfa Bank, A1, ADM Group, Kaspersky, MTS, Roodell.
- Products: majento.ai, soti.sh, sezi.sh, claimp.app, aimasters.me, t.me/aimastersme (6 847 subscribers), iva-agent.com.
- GitHub smixs: 72 public repos, research in `.scratch/2026-10-17-redesign-research.md`.
- Press and talks: spot.uz (15.09.2026), Tashkent Marketing Forum 2025, GRP.uz column, AI DAY Minsk 05.2024 (business-pro.by, probusiness.io), NeyroSummit 16.0, probusiness.by 2014.
- Assets: `public/avatar.png`, `public/dj-shima.jpg`, `~/dev/serge-cv/assets/serge-cutout.webp`, company logos in `public/logos/`.
- Do not invent testimonials, metrics, or clients beyond this list.

## Product Principles

1. Facts over adjectives: every claim carries a year, a number, or a link.
2. One person, one identity graph: every page ties back to the same @id and the same name forms.
3. Show the work itself: products and repos are first-class pages, not logos.
4. Readable by people and machines alike: the visible text alone answers "who is Serge Shima".
