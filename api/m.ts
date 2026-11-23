/**
 * Vercel Edge Function: 폴짝 같이 놀자 short map link.
 *
 * GET /m/<code> (rewritten to /api/m?c=<code>, vercel.json) → 302 to Kakao Map with a pin labelled
 * 약속 장소. <code> is 6 base62 characters packing a point in Korea at 1e-4 degree steps (about 10 m):
 * n = round((lat - 33) * 1e4) * 80001 + round((lng - 124) * 1e4). The app encodes it
 * (Poljjak src/domain/appLink.ts mapCode); keep the two in step.
 *
 * Only a public place's coordinates are ever in it. Anything that does not decode goes to the
 * Poljjak landing page.
 */

export const config = {
  runtime: "edge",
};

const B62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LAT0 = 33;
const LNG0 = 124;
const LAT_STEPS = 60000; // 33.0000 … 39.0000
const LNG_SPAN = 80001; // 124.0000 … 132.0000
const PIN = "%EC%95%BD%EC%86%8D%20%EC%9E%A5%EC%86%8C"; // 약속 장소
const LANDING = "https://poljjak.lunenlabs.com/";

export function decodeMapCode(code: string): { lat: string; lng: string } | null {
  if (!/^[0-9A-Za-z]{6}$/.test(code)) return null;
  let n = 0;
  for (const ch of code) n = n * 62 + B62.indexOf(ch);
  const a = Math.floor(n / LNG_SPAN);
  const b = n % LNG_SPAN;
  if (a > LAT_STEPS) return null;
  return { lat: (LAT0 + a / 1e4).toFixed(4), lng: (LNG0 + b / 1e4).toFixed(4) };
}

export default function handler(request: Request): Response {
  const at = decodeMapCode(new URL(request.url).searchParams.get("c") ?? "");
  const location = at ? `https://map.kakao.com/link/map/${PIN},${at.lat},${at.lng}` : LANDING;
  return new Response(null, {
    status: 302,
    headers: { Location: location, "Cache-Control": "public, max-age=86400" },
  });
}
