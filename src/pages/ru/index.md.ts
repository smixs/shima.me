import { profileMarkdown } from "../../lib/profile-markdown";
export function GET(){return new Response(profileMarkdown("ru"),{headers:{"Content-Type":"text/markdown; charset=utf-8"}});}
