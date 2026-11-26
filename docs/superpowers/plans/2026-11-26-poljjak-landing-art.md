# 폴짝 랜딩 그림 교체 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the emoji and the placeholder story-card art on poljjak.lunenlabs.com with Canva AI illustrations in the family.jpg style. Bring the copy up to 1.1.0.

**Architecture:** The original illustrations live in the Poljjak repo (`assets/source/landing/`), next to `family-walk.png`. `Poljjak/scripts/brand/web-images.mjs` already turns sources into the landing's web images, and it will now also write `feature-*.png` and the new `story-card.png`. The lunenlabs page (`src/poljjak/Landing.tsx`) only changes copy and `<img>` tags.

**Tech Stack:** Canva MCP (generate-image), sharp (Poljjak devDependency), React + Tailwind + Vite (lunenlabs).

**Spec:** `docs/superpowers/specs/2026-11-26-poljjak-landing-art-design.md`

## Global Constraints

- No emoji anywhere on the landing.
- Copy uses only features that are in the app. No superlatives. No word from Poljjak `src/copy/bannedWords.ts`. Tone is "~해요".
- Do not change `family.jpg`, `og.png`, Privacy, or the app.
- Work in the lunenlabs worktree `../lunenlabs-poljjak-art` (branch `feat/poljjak-landing-art`). In Poljjak, commit by path only.
- If Canva has no credits, stop and ask the owner whether to switch to hand-drawn SVG.

## Review Focus

- Narrow phone (360px): four feature rows with 72px art must not squeeze the text into one-word lines. Check this with a 360px screenshot (Task 3).
- Slow network: every `<img>` has width/height so the layout does not jump. Check this in Task 3.
- Transparent vs square art: Canva output has a background, so tiles use the art as a full rounded square, not a cut-out. Owned by Task 2.
- Korean text baked into story-card.png must render in Pretendard/Malgun Gothic, not tofu boxes. Check the PNG by eye (Task 2).
- Old `story-card.png` cached by the CDN: use a new filename `story-card-2.png`. Owned by Task 2.

---

### Task 1: Canva candidates and owner's pick

**Files:**
- Create: `Poljjak/assets/source/landing/{map,shows,playdate,record,story}.png` (the picked originals)

- [ ] **Step 1:** Generate 2–3 candidates each with Canva generate-image. All prompts share one style line: "flat pastel children's book illustration, soft rounded shapes, warm yellow #FFE45C sky or pale yellow background, light blue and grass green accents, cute Korean child about 4 years old, no text, same style as a smiling family walking in a park". The subjects are:
  - map: a child on a small slide in a playground, a big red map pin beside it
  - shows: a tiny puppet-theatre stage with curtains, a puppet, balloons
  - playdate: two small children holding hands and running
  - record: a footprint trail on a path that ends at a photo frame of a child
  - story (9:16): a child jumping on grass under a yellow sky, with empty space in the lower third for text
- [ ] **Step 2:** Show the candidates to the owner side by side and record the picks.
- [ ] **Step 3:** Download the picks into `assets/source/landing/`.

### Task 2: Web images from the picks

**Files:**
- Modify: `Poljjak/scripts/brand/web-images.mjs`
- Output: `lunenlabs-poljjak-art/public/poljjak/img/feature-{map,shows,playdate,record}.png`, `story-card-2.png`

**Interfaces:**
- Produces: `feature-<key>.png`, 216×216 (3× of a 72px tile), cropped square from centre. Also `story-card-2.png`, 720×1280: story.png with cover-crop, a bottom gradient for legibility, and text in the existing card layout (date line `2026년 11월 15일 (토)`, `1.8km`, `45분 · 지우랑 폴짝`), drawn as SVG text over the image. There is no emoji in the text; the sparkle is drawn as an SVG shape.

- [ ] **Step 1:** Add the feature and story steps to web-images.mjs. The old placeholder story card goes away, and its SVG `face` helper too, if nothing else uses it.
- [ ] **Step 2:** Run `node scripts/brand/web-images.mjs ../lunenlabs-poljjak-art/public/poljjak/img`. Expected: it lists the files it wrote, and each size matches the spec.
- [ ] **Step 3:** Open each PNG and check the Korean renders and the art isn't cut off at the edges.
- [ ] **Step 4:** Commit in Poljjak: `git add scripts/brand/web-images.mjs assets/source/landing && git commit`.

### Task 3: Landing page copy and art

**Files:**
- Modify: `lunenlabs-poljjak-art/src/poljjak/Landing.tsx`
- Delete: `public/poljjak/img/story-card.png` (no longer referenced)

- [ ] **Step 1:** Change the Landing to:
  - title "이번 주말, / 아이랑 어디 가지?"
  - subtitle "가까운 놀이터·키즈카페·어린이 공연을 한눈에, / 다녀온 나들이는 기록으로."
  - `document.title` "폴짝 - 아이랑 갈 곳·나들이 기록"
  - a line under the CTA note: "회원가입 없이 · 기록은 내 폰에만"
  - story card `story-card-2.png`, caption with no ✨
  - FEATURES as `{ img, title, body }`, with a 72px rounded-2xl tile (`w-[72px] h-[72px]`, `width/height` attrs, `alt=""`). Titles are 놀이터·키즈카페 지도 / 어린이 공연·축제 / 같이 놀자 / 나들이 기록. Bodies are condensed from `Poljjak/docs/store/app-store-ko.md` (one or two short sentences each).
- [ ] **Step 2:** Run `npm run build` in the worktree. Expected: exit 0.
- [ ] **Step 3:** Run `npm run dev`, then screenshot `/poljjak/` at 390px and 360px wide. Check the Review Focus lines and grep the page source for emoji (none expected). Show the owner.
- [ ] **Step 4:** Commit by path, push the branch, and open a PR to LunenLabs/lunenlabs main. The owner merges it.
- [ ] **Step 5:** After the merge, check that poljjak.lunenlabs.com serves the new images.
