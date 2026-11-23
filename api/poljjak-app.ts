/**
 * Vercel Edge Function: 폴짝 install link, https://poljjak.lunenlabs.com/app (rewrite, vercel.json).
 *
 * Shared from the app (같이 놀자 invites, 친구에게 폴짝 알려주기) to people on any phone. 폴짝 is on
 * the App Store only, so an Apple device goes to the App Store page and anything else (Android, a
 * PC) to the landing page, which says so. Looks at the User-Agent only; nothing is stored.
 */

export const config = {
  runtime: "edge",
};

const APP_STORE = "https://apps.apple.com/kr/app/id6834524472";
const LANDING = "https://poljjak.lunenlabs.com/";

// iPadOS asks for desktop sites with a Mac User-Agent; a Mac opens the App Store page too.
export function installTarget(userAgent: string): string {
  return /iPhone|iPad|iPod|Macintosh/i.test(userAgent) ? APP_STORE : LANDING;
}

export default function handler(request: Request): Response {
  return new Response(null, {
    status: 302,
    headers: {
      Location: installTarget(request.headers.get("user-agent") ?? ""),
      "Cache-Control": "private, no-store",
      Vary: "User-Agent",
    },
  });
}
