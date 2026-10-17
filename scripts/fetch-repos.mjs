// Refreshes src/data/repos.json from the public GitHub API at build time.
// On any failure the committed snapshot stays, so the build never breaks.
import { writeFile } from "node:fs/promises";

const OUT = new URL("../src/data/repos.json", import.meta.url);
const headers = { Accept: "application/vnd.github+json", "User-Agent": "shima.me-build" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

try {
  const res = await fetch("https://api.github.com/users/smixs/repos?per_page=100&type=owner&sort=updated", { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const repos = (await res.json())
    .filter((r) => !r.fork && !r.private)
    .map((r) => ({
      name: r.name,
      description: r.description,
      stars: r.stargazers_count,
      language: r.language,
      homepage: r.homepage || null,
      url: r.html_url,
      pushed: r.pushed_at,
      topics: r.topics ?? [],
    }))
    .sort((a, b) => b.stars - a.stars);
  await writeFile(OUT, JSON.stringify(repos, null, 2) + "\n");
  console.log(`repos.json: ${repos.length} public repos`);
} catch (err) {
  console.warn(`repos.json kept as is: ${err.message}`);
}
