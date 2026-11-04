import { next, rewrite } from "@vercel/functions";

// "/" is served from the static dist/index.html (LunenLabs) before vercel.json rewrites run,
// so the Dangmasil host needs a rewrite that happens ahead of the filesystem.
export const config = { matcher: "/", runtime: "nodejs" };

export default function middleware(request: Request) {
  const host = request.headers.get("host") ?? "";
  if (host === "dangmasil.lunenlabs.com") {
    return rewrite(new URL("/dangmasil/index.html", request.url));
  }
  return next();
}
