// Facts about Serge Shima for shima.me. Canon: ~/vault/vault/identity/user-full.md,
// sergeshima.com (serge-cv/data.mjs), PRODUCT.md. Edit facts here only.

export const PERSON_ID = "https://sergeshima.com/#person";

export const person = {
  name: "Serge Shima",
  alternateNames: ["Сергей Шима", "Sergey Shima"],
  role: "Co-founder & CTO at Majento",
  city: "Tashkent",
  country: "Uzbekistan",
  from: "Minsk, Belarus",
  telegram: "https://t.me/shimaoz",
  email: "hello@shima.me",
  cv: "https://sergeshima.com",
  sameAs: [
    "https://sergeshima.com",
    "https://www.linkedin.com/in/sergeshima",
    "https://github.com/smixs",
    "https://www.youtube.com/@SergeShima",
    "https://www.instagram.com/serge.shima",
    "https://t.me/shimaoz",
    "https://www.mixcloud.com/sergeshima/",
  ],
};

export type Link = { label: string; href: string };

export type Release = {
  id: string;
  name: string;
  logo?: string;
  kind: string;
  line: string;
  notes: string[];
  links: Link[];
};

// Current products and companies, newest focus first.
export const releases: Release[] = [
  {
    id: "majento",
    logo: "majento.png",
    name: "Majento",
    kind: "Company · co-founder & CTO · since May 2026",
    line: "An AI-native product company in Tashkent, founded with Batyr Latipov.",
    notes: [
      "Builds AI software and multi-agent systems for marketing and business processes.",
      "Deploys them inside the client's team on a forward-deployed-engineer model.",
      "Ships its own products: sotish, sezish, Claimp.",
    ],
    links: [{ label: "majento.ai", href: "https://majento.ai" }],
  },
  {
    id: "aimasters",
    logo: "aimasters.svg",
    name: "Aimasters",
    kind: "Education · founder",
    line: "Corporate AI training and a Telegram channel about working with AI.",
    notes: [
      "1000+ specialists and 50+ teams trained.",
      "Programs for Alfa Bank, A1, ADM Group, Kaspersky, MTS, Roodell.",
      "Notes on agents and tools at @aimastersme.",
    ],
    links: [
      { label: "aimasters.me", href: "https://aimasters.me" },
      { label: "t.me/aimastersme", href: "https://t.me/aimastersme" },
    ],
  },
  {
    id: "sotish",
    logo: "sotish.svg",
    name: "sotish",
    kind: "Product · Majento",
    line: "A Telegram storefront that sells on its own, with an AI marketer inside.",
    notes: [
      "Built for shops in Uzbekistan on top of their point-of-sale system.",
      "Each shop gets its own bot, mini app, admin and campaigns.",
    ],
    links: [{ label: "soti.sh", href: "https://soti.sh" }],
  },
  {
    id: "sezish",
    logo: "sezish.svg",
    name: "sezish",
    kind: "Product · Majento",
    line: "Voice to text in Uzbek, Kazakh and Kyrgyz.",
    notes: [
      "Apps for Mac, Windows, iOS and Android, plus a Telegram bot.",
    ],
    links: [{ label: "sezi.sh", href: "https://sezi.sh" }],
  },
  {
    id: "claimp",
    logo: "claimp.svg",
    name: "Claimp",
    kind: "Product · open source",
    line: "A free waveform player for building DJ sets on macOS.",
    notes: [
      "Spectral waveforms, drag the real file into your DJ software.",
      "Written in Swift by a DJ who has played since 1998.",
    ],
    links: [
      { label: "claimp.app", href: "https://claimp.app" },
      { label: "GitHub", href: "https://github.com/smixs/claimp" },
    ],
  },
];

export type Commit = {
  date: string; // YYYY.MM or YYYY
  logo?: string;
  invert?: boolean;
  tag: string;
  org: string;
  role: string;
  place?: string;
  notes: string[];
  head?: boolean;
  branches?: { name: string; href: string }[];
};

// Career as a commit log, newest first. Dates from the LinkedIn CV (2026).
export const log: Commit[] = [
  {
    date: "2026.05",
    tag: "v2026.05",
    org: "Majento",
    logo: "majento-wordmark.svg",
    role: "Co-founder & CTO",
    place: "Tashkent",
    head: true,
    notes: ["AI software and multi-agent systems for business, deployed at the client team.", "Client work includes IBT / PepsiCo."],
    branches: [
      { name: "iva", href: "#iva" },
      { name: "sotish", href: "#release-sotish" },
      { name: "sezish", href: "#release-sezish" },
      { name: "claimp", href: "#release-claimp" },
      { name: "aimasters", href: "#release-aimasters" },
    ],
  },
  {
    date: "2024.06",
    tag: "v2024.06",
    org: "TDI Group",
    logo: "tdi-group.svg",
    role: "CEO / CTO",
    place: "Tashkent",
    notes: ["Ran the agency and its technology.", "Clients: PepsiCo, Nestlé, Honor, Haval, KIA, Beeline."],
  },
  {
    date: "2023.03",
    tag: "v2023.03",
    org: "Belarusian People's Bank",
    logo: "bnb-bank.svg",
    role: "Head of Brand Marketing & AI",
    place: "Minsk",
    notes: ["Put AI into the bank's in-house creative team.", "Taught Smart Marketing with AI on MBA programs."],
  },
  {
    date: "2022.01",
    tag: "v2022.01",
    org: "UniLayer",
    logo: "unilayer.png",
    invert: true,
    role: "Product marketing, blockchain",
    place: "Dubai",
    notes: ["MVP of a cross-chain product, market analysis and the white paper."],
  },
  {
    date: "2019.04",
    tag: "v2019.04",
    org: "kemliva",
    logo: "kemliva.svg",
    invert: true,
    role: "Co-founder / COO",
    place: "Almaty",
    notes: ["Creative agency: branding, R&D and communications in one team."],
  },
  {
    date: "2018.09",
    tag: "v2018.09",
    org: "IKRA",
    logo: "ikra.svg",
    invert: true,
    role: "Education mentor",
    place: "Minsk",
    notes: ["Author of the course Strategist's Path."],
  },
  {
    date: "2017.03",
    tag: "v2017.03",
    org: "Eurotorg",
    logo: "eurotorg.svg",
    role: "Deputy Head of R&D & Gamification",
    place: "Minsk",
    notes: ["Bonsticks children's promos: +$21M profit for the retailer.", "First NLP chatbot in production, 2017."],
  },
  {
    date: "2014.10",
    tag: "v2014.10",
    org: "AIDA Pioneer",
    logo: "aida-pioneer.svg",
    role: "Creative Strategist",
    place: "Minsk",
    notes: ["Grand Prix Effie for Exponenta; 60+ campaigns, the agency became #1 in Belarus."],
  },
  {
    date: "2013.04",
    tag: "v2013.04",
    org: "BBDO Group",
    logo: "bbdo.svg",
    role: "Creative Group Head",
    place: "Minsk",
    notes: ["Co-created Halva, the installment card with 13M+ users in Belarus and Russia."],
  },
  {
    date: "2012.06",
    tag: "v2012.06",
    org: "Publicis Groupe",
    logo: "publicis-lion.svg",
    role: "Event manager, copywriter",
    place: "Minsk",
    notes: ["Events and promotional copy for network clients."],
  },
  {
    date: "2005.02",
    tag: "v2005.02",
    org: "Re:fresh",
    role: "Co-founder / DJ",
    place: "Minsk",
    notes: ["The biggest raves in Belarus of the 2000s, until 2011.", "Graduated BSPU the same year: history and English."],
  },
  {
    date: "1998",
    tag: "initial commit",
    org: "First DJ set",
    role: "Behind the decks for the first time",
    place: "Minsk",
    notes: ["House and techno ever since."],
  },
];

// Showcase order for open source; everything else follows by stars.
export const showcase = ["agent-second-brain", "visual-skills", "iva-agent", "skill-conductor", "creative-director-skill", "humanizer-ru"];

export type Mention = { outlet: string; date?: string; title: string; href?: string };

export const mentions: Mention[] = [
  { outlet: "Techstars Startup Weekend Tashkent", date: "2026.09", title: "Mentor, MDIST, September 25–27", href: "https://www.techstars.com/location/uzbekistan" },
  { outlet: "Hackonnect bootcamp at Yandex Uzbekistan", date: "2026.09", title: "How to create software products using AI", href: "https://www.instagram.com/reel/Ddlf1RsORur" },
  { outlet: "PRO BUSINESS Expert Talk", date: "2026.09", title: "A personal AI assistant in Telegram: how to choose, set up and use it", href: "https://www.spot.uz/ru/2026/09/15/ai-agent/" },
  { outlet: "NextGen Business Club, American Corner Tashkent", date: "2026.08", title: "AI agents: why it's not just ChatGPT", href: "https://www.instagram.com/p/DbX_ApguXrz" },
  { outlet: "Online workshop", date: "2026.06", title: "Human + AI = a new formula" },
  { outlet: "Alpha open lecture", date: "2026.02", title: "5 AI tools that do the work of 10 people" },
  { outlet: "NeyroSummit 16.0", title: "Clone your expertise: skills for AI agents", href: "https://vc.ru/id667/2871202-vystuplenie-na-neyrosummit-kontekstnaya-inzheneriya-i-instrumenty" },
  { outlet: "Tashkent Marketing Forum", date: "2025", title: "Key AI tools for marketers", href: "https://tmf25.marketing.uz/speakers/shima1.htm" },
  { outlet: "AI DAY Conference", date: "2024.05", title: "Building a team of AI experts for business", href: "https://business-pro.by/marketing/ne-stoit-polzovatsya-besplatnymi-servisami-s-nejronkami-v-kotoryh-eshhe-i-reklama-integrirovana-kak-sdelat-komandu-ai-ekspertov-dlya-biznesa/" },
  { outlet: "White Square", date: "2024", title: "From idea to visualization with neural nets" },
  { outlet: "GRP.uz", title: "Author column", href: "https://grp.uz/tj/publications/shima.html" },
  { outlet: "probusiness.by", date: "2014", title: "Effective branding: the metaphor", href: "http://probusiness.by/markets/2014-kak-sdelat-tak-chtoby-nachinka-sootvetstvovala-upakovke-strateg-aida-pioneer-ob-effektivnom-brende.html" },
];

export type Client = { name: string; logo: string; invert?: boolean };

export const clients: Client[] = [
  { name: "PepsiCo", logo: "pepsico.svg" },
  { name: "Nestlé", logo: "nestle.svg" },
  { name: "KIA", logo: "kia.svg" },
  { name: "Haval", logo: "haval.svg" },
  { name: "Honor", logo: "honor.svg" },
  { name: "Beeline", logo: "beeline.svg" },
  { name: "IBT, PepsiCo bottler in Uzbekistan", logo: "ibt.png", invert: true },
  { name: "Kaspersky", logo: "kaspersky.svg" },
  { name: "MTS", logo: "mts.svg" },
  { name: "Alfa Bank", logo: "alfa-bank.svg" },
  { name: "A1", logo: "a1.svg" },
  { name: "ADM Group", logo: "adm-group.png" },
  { name: "Roodell", logo: "roodell.png", invert: true },
];

export const remotes: Link[] = [
  { label: "Telegram", href: "https://t.me/shimaoz" },
  { label: "Channel", href: "https://t.me/aimastersme" },
  { label: "GitHub", href: "https://github.com/smixs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sergeshima" },
  { label: "YouTube", href: "https://www.youtube.com/@SergeShima" },
  { label: "Instagram", href: "https://www.instagram.com/serge.shima" },
  { label: "Mixcloud", href: "https://www.mixcloud.com/sergeshima/" },
  { label: "CV for organizers", href: "https://sergeshima.com" },
];

// Iva in depth. Source: iva-agent.com (fetched 17.10.2026).
export const iva = {
  site: "https://iva-agent.com",
  repo: "https://github.com/smixs/iva-agent",
  install: "curl -fsSL https://raw.githubusercontent.com/smixs/iva-agent/main/install.sh | bash",
  tree: [
    { name: "Leaves", text: "The word-for-word transcript of each day, Iva's replies included. Nothing is paraphrased on arrival." },
    { name: "Branches", text: "Every night at 04:00 the days fold into weeks, months and years. Facts that change get rewritten." },
    { name: "Trunk", text: "CORE.md, a profile under 1,200 characters that rides in every prompt, plus cards for people, projects and decisions." },
  ],
  features: [
    { name: "Voice", text: "Voice, audio and video notes transcribed; English, Russian and Uzbek detected automatically." },
    { name: "Documents", text: "Send a PDF, DOCX or XLSX and Iva answers on its content and files it into the vault." },
    { name: "Userbot", text: "Works from your own account like a secretary: reads group chats, summarises them, replies as you." },
    { name: "Your model", text: "OpenCode Go, Ollama Cloud, OpenRouter or your ChatGPT subscription. Your keys." },
    { name: "Personal CRM", text: "Who your people are, what you agreed and when to follow up." },
    { name: "Google Workspace", text: "Gmail, Calendar, Drive, Sheets, Docs and Tasks from the chat." },
    { name: "Security", text: "Web pages and forwards pass a prompt-injection sanitizer; every reply passes a secret-redaction gate." },
    { name: "Self-updating", text: "A daily check, then a one-tap update in Telegram, staged, with rollback." },
  ],
};

// DJ side. Source: mixcloud.com/sergeshima and t.me/taxiaudio (checked 17.10.2026).
export const music = {
  mixes: [
    { name: "Joyman 2026, classic house", length: "3:00", href: "https://www.mixcloud.com/sergeshima/shima-joyman-2026-3-hours-of-classic-house/" },
    { name: "Vebecoder vol.1", length: "1:20", href: "https://www.mixcloud.com/sergeshima/shima-vebecoder-vol1/" },
    { name: "Bike Rider 2024", length: "1:00", href: "https://www.mixcloud.com/sergeshima/shima-bike-rider-2024/" },
    { name: "Studio 54, poolside disco", length: "2:28", href: "https://www.mixcloud.com/sergeshima/shima-studio-54-25-hour-poolside-disco-mix/" },
    { name: "Organic Deep House", length: "4:03", href: "https://www.mixcloud.com/sergeshima/shima-organic-deep-house-aug-4-hour-mix/" },
  ],
  links: [
    { label: "Mixcloud", href: "https://www.mixcloud.com/sergeshima/" },
    { label: "Taxi Audio on Telegram", href: "https://t.me/taxiaudio" },
  ],
};

// Width / height of each logo's visible ink (measured 17.10.2026), for optical sizing.
export const logoRatio: Record<string, number> = {
  "majento-wordmark.svg": 3.93, "tdi-group.svg": 3.26, "bnb-bank.svg": 4.26, "unilayer.png": 6.8,
  "kemliva.svg": 2.73, "ikra.svg": 2.91, "eurotorg.svg": 5.33, "aida-pioneer.svg": 8.13,
  "bbdo.svg": 3.48, "publicis-lion.svg": 1, "pepsico.svg": 5.47, "nestle.svg": 3.71, "kia.svg": 4.05,
  "haval.svg": 8.18, "honor.svg": 5.2, "beeline.svg": 4.53, "ibt.png": 2.49, "kaspersky.svg": 5.24,
  "mts.svg": 4.02, "alfa-bank.svg": 5.0, "a1.svg": 0.98, "adm-group.png": 3.38, "roodell.png": 3.34,
};

// Same visual weight for every logo: fixed ink area, clamped height and width.
export function logoHeight(file: string, area: number, maxH: number, maxW: number) {
  const r = logoRatio[file] ?? 3;
  let h = Math.sqrt(area / r);
  h = Math.min(h, maxH, maxW / r);
  return Math.round(Math.max(h, 14));
}
