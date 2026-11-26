/**
 * Vercel Edge Function: 폴짝 install link, https://poljjak.lunenlabs.com/app (rewrite, vercel.json).
 *
 * Shared from the app (같이 놀자 invites, 친구에게 폴짝 알려주기) to people on any phone, and used in
 * launch posts as /app?c=<channel>. 폴짝 is on the App Store only, so an Apple device goes to the
 * App Store page and anything else (Android, a PC) to the landing page, which says so.
 *
 * The App Store link carries a campaign name (ct): the post's channel from ?c=, or "app-share" for
 * the bare link the app shares. App Store Connect › Analytics counts downloads by campaign (for people
 * who share analytics with developers), so we can tell which channel worked without the app or this
 * site storing anything. The chat shows only the short /app link. Looks at the User-Agent and the
 * query only; nothing is stored.
 */

export const config = {
  runtime: "edge",
};

const APP_ID = "6834524472";
// Provider token from App Store Connect's campaign link generator.
const PROVIDER_TOKEN = "129701862";
const LANDING = "https://poljjak.lunenlabs.com/";
const SHARED_FROM_APP = "app-share";

// A channel name passes on only as short lowercase words, so nothing odd reaches the App Store URL.
export function campaign(c: string | null): string {
  return c && /^[a-z0-9-]{1,30}$/.test(c) ? c : SHARED_FROM_APP;
}

export function appStoreLink(ct: string): string {
  return `https://apps.apple.com/app/apple-store/id${APP_ID}?pt=${PROVIDER_TOKEN}&ct=${ct}&mt=8`;
}

// iPadOS asks for desktop sites with a Mac User-Agent; a Mac opens the App Store page too.
export function installTarget(userAgent: string, c: string | null = null): string {
  return /iPhone|iPad|iPod|Macintosh/i.test(userAgent) ? appStoreLink(campaign(c)) : LANDING;
}

export default function handler(request: Request): Response {
  const c = new URL(request.url).searchParams.get("c");
  return new Response(null, {
    status: 302,
    headers: {
      Location: installTarget(request.headers.get("user-agent") ?? "", c),
      "Cache-Control": "private, no-store",
      Vary: "User-Agent",
    },
  });
}
