import sharp from "sharp";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const avatar = await sharp(fileURLToPath(new URL("src/assets/avatar.png",root))).resize(236,236).png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#f3f3f1"/>
<rect x="48" y="48" width="1104" height="534" rx="30" fill="#e9e9e6"/>
<circle cx="924" cy="300" r="128" fill="#fbfbfa"/>
<image href="data:image/png;base64,${avatar.toString("base64")}" x="806" y="182" width="236" height="236"/>
<g fill="#17181c" font-family="sans-serif">
<text x="90" y="142" font-size="24" letter-spacing="3">SHIMA.ME</text>
<text x="90" y="285" font-size="66" font-weight="700">Serge Shima</text>
<text x="90" y="350" font-size="30">Babai of creative AI</text>
<text x="90" y="433" font-size="23">AI products · Open source · Tashkent</text>
<text x="90" y="520" font-size="23">Co-founder &amp; CTO, Majento</text>
</g></svg>`;
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("public/social.png",root)));
console.log("public/social.png: 1200 × 630");
