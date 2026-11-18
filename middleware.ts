import { next, rewrite } from "@vercel/functions";

// "/" is served from the static dist/index.html (LunenLabs) before vercel.json rewrites run,
// so each app's host needs a rewrite that happens ahead of the filesystem.
export const config = { matcher: "/", runtime: "nodejs" };

const APP_PAGES: Record<string, string> = {
  "dangmasil.lunenlabs.com": "/dangmasil/index.html",
  "poljjak.lunenlabs.com": "/poljjak/index.html",
};

export default function middleware(request: Request) {
  const host = request.headers.get("host") ?? "";
  const page = APP_PAGES[host];
  return page ? rewrite(new URL(page, request.url)) : next();
}
