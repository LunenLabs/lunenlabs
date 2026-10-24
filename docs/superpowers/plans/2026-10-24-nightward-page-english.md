# nightward Page in English — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `https://www.lunenlabs.com/nightward` an English page with current facts (public on GitHub, on PyPI) and a nightward-specific link preview.

**Architecture:** The site is one Vite/React SPA served by Vercel. All routes share `index.html` (`lang="ko"`, PetTracker OG tags), and link-preview crawlers do not run JS, so `/nightward` previews as PetTracker. We add a second Vite HTML entry, `nightward/index.html`, with English head + nightward OG tags that boots the same `src/main.tsx`; Vercel serves it for `/nightward` before the SPA catch-all. The page's section components (`src/components/tw/*`) are translated in place, the pre-launch interest form is replaced by an install CTA, and the page gets an English footer. The Korean landing keeps its Korean copy; only its stale "개발 중" status for nightward is corrected.

**Tech Stack:** Vite 8, React 19, react-router-dom 7, Tailwind 4, TypeScript 5.9, Vercel (static + edge `api/`), headless Chrome for the OG image and screenshots.

**Spec:** this conversation's agreed scope (2026-10-24): (1) translate `/nightward` to English, (2) fix stale facts ("coming soon / notify me" → public on GitHub + PyPI), (3) fix the shared OG preview. No separate spec file.

## Global Constraints

- Work in `C:\jhryu\01_project\lunenlabs` on branch `feat/nightward-english`; open a PR to `main`. **Do not merge** — merging deploys to production; the owner merges.
- Facts come from the nightward repo only (`README.md`, `examples/petshop/README.md`): petshop tax `0.10 → 0.095`; `checkout_total` 30.03 → 29.89; `loyalty_points` silver · 3p → bronze · 2p; `shipping_fee` free shipping → +$3.50; `pytest` "3 passed". No invented numbers.
- Never claim nightward finds bugs or judges correctness (no correctness oracle). Product line: "A regression gate for AI-made changes."
- Do not hard-code a nightward version number in copy (it goes stale); say "on PyPI".
- Links: GitHub `https://github.com/LunenLabs/nightward`, PyPI `https://pypi.org/project/nightward/`, quickstart `https://github.com/LunenLabs/nightward#quickstart-5-minutes`.
- Canonical host is `https://www.lunenlabs.com` (`lunenlabs.com` 307-redirects to it). OG URLs are absolute on that host.
- Code comments may stay Korean (repo convention); everything rendered on `/nightward` (text, `alt`, `aria-*`, `<title>`, meta) is English.
- Do not touch `api/signup.ts`, PetTracker pages, or the Korean landing beyond Task 4.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`; PR body ends with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.

## Review Focus

1. A link-preview crawler (no JS) requesting `/nightward` must get nightward OG tags, not PetTracker's → Task 1 Step 5 / Task 5 Step 4 curl the served HTML.
2. Client-side navigation Korean landing → `/nightward` → back must set `<html lang="en">` + English title on the page and restore `ko` + the previous title on leave → Task 1 Step 6.
3. Both `/nightward` and `/nightward/` must render the page (React Router must still match; not a blank screen) → Task 5 Step 3.
4. At 390px width the longer English strings (real-case table, CTA code block) must not cause horizontal page scroll → Task 5 Step 3 (mobile screenshot + scrollWidth check).
5. No Hangul may remain in the rendered `/nightward` DOM, including `alt` text → Task 5 Step 2.

---

### Task 0: Branch

- [ ] **Step 1: Create the branch from an up-to-date main**

```bash
cd /c/jhryu/01_project/lunenlabs
git checkout main && git pull --ff-only
git checkout -b feat/nightward-english
git add docs/superpowers/plans/2026-10-24-nightward-page-english.md
git commit -m "docs: plan for the English nightward page"
```

---

### Task 1: English entry HTML, OG image, page meta

**Files:**
- Create: `nightward/index.html`
- Create: `og-template-nightward.html` (repo root; not a build input)
- Create: `public/og-image-nightward.png` (generated)
- Modify: `vite.config.ts` (rollup `input`)
- Modify: `vercel.json` (rewrites)
- Modify: `src/pages/Nightward.tsx` (title / description / lang effect)

**Interfaces:**
- Produces: `dist/nightward/index.html` served at `/nightward`; `/og-image-nightward.png` (1280×720).

- [ ] **Step 1: Write the failing check**

```bash
npm run build && grep -c 'og:title" content="nightward' dist/nightward/index.html
```
Expected now: FAIL (`dist/nightward/index.html: No such file or directory`).

- [ ] **Step 2: Create `nightward/index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>nightward — a regression gate for AI-made changes</title>
    <meta
      name="description"
      content="nightward shows every behavior an AI code change quietly moved (the blast radius) and blocks anything a human hasn't approved, even when the tests stay green. Open source, MIT. By LunenLabs."
    />
    <meta name="theme-color" content="#0F1626" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href="https://www.lunenlabs.com/nightward" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="nightward — a regression gate for AI-made changes" />
    <meta
      property="og:description"
      content="AI fixes one bug and quietly breaks something else. nightward shows the blast radius and stops at the boundary a human approved. Open source, MIT."
    />
    <meta property="og:image" content="https://www.lunenlabs.com/og-image-nightward.png" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    <meta property="og:image:alt" content="nightward — a regression gate for AI-made changes" />
    <meta property="og:url" content="https://www.lunenlabs.com/nightward" />
    <meta property="og:site_name" content="nightward by LunenLabs" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="nightward — a regression gate for AI-made changes" />
    <meta
      name="twitter:description"
      content="AI fixes one bug and quietly breaks something else. nightward shows the blast radius and stops at the boundary a human approved."
    />
    <meta name="twitter:image" content="https://www.lunenlabs.com/og-image-nightward.png" />

    <link
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Register the entry and the Vercel route**

`vite.config.ts` — replace the `input` block:

```ts
      input: {
        main: "index.html",
        nightward: "nightward/index.html",
      },
```

`vercel.json` — replace `rewrites`:

```json
  "rewrites": [
    { "source": "/nightward", "destination": "/nightward/index.html" },
    { "source": "/nightward/", "destination": "/nightward/index.html" },
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
```

- [ ] **Step 4: Page meta + lang in `src/pages/Nightward.tsx`**

Replace the whole `useEffect` with:

```tsx
  useEffect(() => {
    const html = document.documentElement;
    const prevLang = html.lang;
    const prevTitle = document.title;
    html.lang = "en";
    document.title = "nightward — a regression gate for AI-made changes";

    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    if (meta) {
      meta.setAttribute(
        "content",
        "nightward shows every behavior an AI code change quietly moved (the blast radius) and blocks anything a human hasn't approved, even when the tests stay green. Open source, MIT. By LunenLabs."
      );
    }

    return () => {
      html.lang = prevLang;
      document.title = prevTitle;
      if (meta && prevDesc) meta.setAttribute("content", prevDesc);
    };
  }, []);
```

- [ ] **Step 5: Run the check — passes**

```bash
npm run build && grep -c 'og:title" content="nightward' dist/nightward/index.html && grep -c 'lang="en"' dist/nightward/index.html
```
Expected: `1` and `1`, build exits 0.

- [ ] **Step 6: Lang/title round trip (Review Focus 2)**

`npx vite preview --port 4173` in the background, then in headless Chrome open `http://localhost:4173/`, click the footer `nightward` link (client-side), read `document.documentElement.lang` + `document.title` (expect `en`, the nightward title), go back, read again (expect `ko`, the LunenLabs title). Use the `playwright-cli` skill or Chrome DevTools via `mcp__claude-in-chrome__*`.

- [ ] **Step 7: OG image template `og-template-nightward.html`**

```html
<!doctype html>
<!--
  nightward OG image (1280x720). Not a Vite input — never shipped.
  Regenerate:
    "C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
      --hide-scrollbars --window-size=1280,720 --virtual-time-budget=3000 \
      --screenshot="C:/jhryu/01_project/lunenlabs/public/og-image-nightward.png" \
      "file:///C:/jhryu/01_project/lunenlabs/og-template-nightward.html"
-->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OG Template — nightward</title>
    <link
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
      rel="stylesheet"
    />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        width: 1280px; height: 720px; overflow: hidden;
        font-family: "Pretendard Variable", Pretendard, system-ui, sans-serif;
        -webkit-font-smoothing: antialiased; letter-spacing: -0.012em;
      }
      .og {
        position: relative; width: 1280px; height: 720px; padding: 80px; color: #fff;
        display: flex; flex-direction: column; justify-content: space-between;
        background:
          radial-gradient(55% 50% at 80% 15%, rgba(0, 201, 176, 0.2) 0%, transparent 60%),
          radial-gradient(50% 55% at 12% 85%, rgba(10, 26, 63, 0.9) 0%, transparent 70%),
          linear-gradient(180deg, #0f1626 0%, #0a1a3f 100%);
      }
      .grid {
        position: absolute; inset: 0; opacity: 0.6;
        background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
        background-size: 48px 48px;
      }
      .top, .body, .bottom { position: relative; }
      .top { display: flex; align-items: center; gap: 14px; }
      .dot { width: 14px; height: 14px; border-radius: 50%; background: #00c9b0; }
      .brand { font: 700 34px ui-monospace, Consolas, monospace; }
      .by { color: rgba(255,255,255,0.5); font-size: 22px; }
      .badge {
        margin-left: auto; padding: 10px 20px; border-radius: 999px; font-size: 18px;
        border: 1px solid rgba(0,201,176,0.4); background: rgba(0,201,176,0.1); color: #00c9b0;
      }
      .headline { font-size: 80px; font-weight: 800; line-height: 1.06; }
      .accent {
        background: linear-gradient(90deg, #00c9b0 0%, #e0faf5 100%);
        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
      }
      .sub { margin-top: 26px; font-size: 28px; color: rgba(255,255,255,0.7); }
      .bottom { display: flex; justify-content: space-between; align-items: flex-end; }
      .cmd {
        font: 600 26px ui-monospace, Consolas, monospace; color: #00c9b0;
        padding: 14px 22px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.15);
        background: rgba(0,0,0,0.3);
      }
      .url { color: rgba(255,255,255,0.55); font-size: 22px; }
    </style>
  </head>
  <body>
    <div class="og">
      <div class="grid"></div>
      <div class="top">
        <span class="dot"></span><span class="brand">nightward</span>
        <span class="by">by LunenLabs</span>
        <span class="badge">Open source · MIT</span>
      </div>
      <div class="body">
        <div class="headline">AI fixes one bug.<br /><span class="accent">nightward shows what else moved.</span></div>
        <div class="sub">A regression gate for AI-made changes: capture → approve → gate.</div>
      </div>
      <div class="bottom">
        <span class="cmd">$ pip install nightward</span>
        <span class="url">lunenlabs.com/nightward</span>
      </div>
    </div>
  </body>
</html>
```

- [ ] **Step 8: Render the PNG and check it**

Run the Chrome command from the template comment. Then:

```bash
python -c "from PIL import Image; print(Image.open('public/og-image-nightward.png').size)"
```
Expected: `(1280, 720)`. Open the PNG with the Read tool: the headline must not overflow or wrap into the bottom row.

- [ ] **Step 9: Commit**

```bash
git add nightward/index.html og-template-nightward.html public/og-image-nightward.png vite.config.ts vercel.json src/pages/Nightward.tsx
git commit -m "feat(nightward): English entry page with its own link preview"
```

---

### Task 2: Translate the content sections

**Files (modify):** `src/components/tw/TwHeader.tsx`, `TwHero.tsx`, `TwProblem.tsx`, `TwRealCase.tsx`, `TwHowItWorks.tsx`, `TwHonest.tsx`; replace `public/nightward-demo.gif`.

**Interfaces:** section ids stay as-is (`tw-problem`, `tw-case`, `tw-how`, `tw-honest`, `tw-cta`); markup/classes unchanged except where noted. Only strings change.

- [ ] **Step 1: Failing check** — Hangul count in rendered strings of these files (comments excluded):

```bash
python - <<'EOF'
import re, pathlib
files = ["TwHeader","TwHero","TwProblem","TwRealCase","TwHowItWorks","TwHonest"]
total = 0
for f in files:
    src = pathlib.Path(f"src/components/tw/{f}.tsx").read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/|\{/\*.*?\*/\}|//[^\n]*", "", src, flags=re.S)
    n = len(re.findall(r"[\uac00-\ud7a3]", src)); total += n
    print(f, n)
print("TOTAL", total)
EOF
```
Expected now: TOTAL > 0. Target: TOTAL 0.

- [ ] **Step 2: `TwHeader.tsx`** — nav labels and CTA:

| old | new |
|---|---|
| `문제` | `Problem` |
| `실제 사례` | `Real case` |
| `동작 방식` | `How it works` |
| `하는 것 / 안 하는 것` | `Scope` |
| `관심 등록` (both buttons) | `Get started` |

- [ ] **Step 3: `TwHero.tsx`**

- Badge: `nightward · open source · MIT · on PyPI`
- h1: `AI fixes one bug` / accent span `and quietly breaks something else.`
- p1: `nightward shows you that quiet change and ` + `<strong>stops at the boundary you approved.</strong>`
- p2: `A regression gate for AI-made changes. When Claude Code or Cursor edits your code, nightward catches the real blast radius of a one-line fix: every behavior that moved, even when the tests stay green.`
- Buttons: `See a real catch →` (scrolls `tw-case`), `Get started` (scrolls `tw-cta`)
- Steps: `{ v: "capture", l: "Capture what the code does" }`, `{ v: "approve", l: "A human approves the baseline" }`, `{ v: "gate", l: "Block anything unapproved" }`
- Scroll hint: `↓ Scroll to learn more`

- [ ] **Step 4: `TwProblem.tsx`**

```tsx
const pains = [
  {
    no: "A",
    title: "Fix A, break B",
    desc: "Ask an AI to fix one bug, and some other behavior changes where you aren't looking. A feature that worked a minute ago now does something slightly different.",
  },
  {
    no: "B",
    title: "Fix B, break C and D",
    desc: "Ask it to fix that, and something else shifts. After a few rounds, nobody can track how far the change has spread.",
  },
  {
    no: "∞",
    title: "A loop that never ends",
    desc: "The tests are green and the diff looks small, but the product keeps drifting. Nothing tells you when it's safe to stop.",
  },
];
```
h2: `The real pain of AI coding` / danger span `comes after the fix.`
p: `You changed one line, and nothing tells you which behaviors moved with it. So the fixing never ends.`

- [ ] **Step 5: `TwRealCase.tsx`**

```tsx
const rows = [
  { behavior: "checkout_total", label: "Checkout total", before: "total 30.03", after: "total 29.89" },
  { behavior: "loyalty_points", label: "Loyalty tier · points", before: "silver · 3p", after: "bronze · 2p" },
  { behavior: "shipping_fee", label: "Shipping fee", before: "free shipping", after: "+$3.50" },
];
```
- h2: `One tax-rate line changed.` / aqua span `Three customer behaviors moved with it.`
- p: `In a pet shop checkout, the tax rate went from ` `<code>0.10 → 0.095</code>` `, a 0.5-point tweak. The only intended change was the total, but three customer-facing behaviors quietly changed in a chain.`
- Left card: `✓ 3 passed` / `unit tests` / `The whole suite was green. Nothing looked wrong to a reviewer or to CI.`
- Right card: `⚠ 3 behaviors changed` / `nightward` / `nightward caught the three behaviors that no longer match the approved baseline: changes the tests never saw.`
- Table header: `Behavior` · `Before · approved` · `After · changed`
- Callout: `A 0.5-point tax change → ` `<strong>the customer lost silver tier and free shipping at once.</strong>` ` Invisible to a reviewer, visible to nightward.`
- GIF: copy the current real-run GIF over the old one:
  `cp /c/jhryu/01_project/nightward/docs/assets/demo.gif public/nightward-demo.gif`
  Before writing the alt text, look at the GIF frames (PIL: save frames 0..n-1 to the scratchpad, Read them) and confirm they show: one-line AI fix → tests pass → three behaviors moved → gate stops CI. If they do, use the nightward README alt verbatim:
  `alt="15-second demo: an AI fixes one line, every test passes, nightward shows three customer-facing behaviors moved, the gate stops CI, and opening it takes a human-approved baseline diff"`
  If a frame differs, describe what the frames actually show instead.
- figcaption: `A real run of the petshop example`

- [ ] **Step 6: `TwHowItWorks.tsx`**

```tsx
const steps = [
  {
    no: "01",
    cmd: "capture",
    title: "Capture behavior",
    desc: "Before you change anything, your tests record what the code does today with a behavior(...) fixture: real outputs like checkout_total, loyalty_points and shipping_fee. You don't write expected values.",
  },
  {
    no: "02",
    cmd: "approve",
    title: "Approve the boundary",
    desc: "After a change, nightward lists only the behaviors that moved, grouped by feature. Only what a human approves as intended becomes the new baseline, as a JSON diff that goes through code review.",
  },
  {
    no: "03",
    cmd: "gate",
    title: "Stop at the boundary",
    desc: "If a later change moves a behavior outside the approved boundary, the gate stays closed. Your agent loop finally gets a clear signal for when it's done.",
  },
];
```
h2: `Three steps are enough.`
p: `Without writing a single new assertion, nightward takes today's behavior as the baseline and watches for anything that drifts from it. Your AI agent can run the gate (CLI or MCP); only a human can open it.`

- [ ] **Step 7: `TwHonest.tsx`**

```tsx
const does = [
  "Shows every change from what you approved, with nothing left out",
  "Gives the AI fix loop a stop signal (the gate)",
  "Groups the blast radius by feature",
];

const doesNot = [
  "Decide whether a change is a bug (there is no correctness oracle)",
  "Generate tests for you",
  "Decide what the \"right\" behavior is",
];
```
- h2: `What nightward does,` / muted span `and what it doesn't.`
- p: `nightward only ` `<strong>shows</strong>` ` every change; it never judges whether it's a bug. Deciding what the right behavior is always stays with a human.`
- Card labels: `✅ Does` / `❌ Doesn't`
- Footnote: `nightward is not a bug finder. It shows exactly what changed, so a human can decide faster and with more confidence.`

- [ ] **Step 8: Check passes** — rerun Step 1 (TOTAL 0) and `npm run build` (exit 0).

- [ ] **Step 9: Commit**

```bash
git add src/components/tw public/nightward-demo.gif
git commit -m "feat(nightward): English copy and the current demo GIF"
```

---

### Task 3: Install CTA and English footer

**Files:**
- Modify: `src/components/tw/TwCta.tsx` (rewrite)
- Delete: `src/components/tw/TwInterestForm.tsx` (only TwCta imports it — verify with grep first)
- Create: `src/components/tw/TwFooter.tsx`
- Modify: `src/pages/Nightward.tsx` (use `TwFooter` instead of `Footer`)

- [ ] **Step 1: Confirm the form has one user**

```bash
grep -rn "TwInterestForm" src
```
Expected: only `TwCta.tsx` (import + usage) and the file itself.

- [ ] **Step 2: Rewrite `TwCta.tsx`**

```tsx
/**
 * CTA 섹션 — 공개 레포 + PyPI 설치 안내.
 */
const GITHUB = "https://github.com/LunenLabs/nightward";
const PYPI = "https://pypi.org/project/nightward/";
const QUICKSTART = `${GITHUB}#quickstart-5-minutes`;

export default function TwCta() {
  return (
    <section id="tw-cta" className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(45% 40% at 50% 30%, rgba(0, 201, 176, 0.14) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-aqua/30 bg-aqua/10 text-aqua text-xs font-semibold mb-5 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            OPEN SOURCE · MIT
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Try it in five minutes.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            nightward is a pytest plugin and CLI for Python 3.10+. Installing it makes the{" "}
            <code className="px-1.5 py-0.5 rounded bg-white/10 text-aqua font-mono text-base">
              behavior
            </code>{" "}
            fixture available in every test.
          </p>
        </div>

        <pre className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 mb-8 overflow-x-auto text-sm font-mono leading-relaxed">
          <code>
            <span className="text-white/90">pip install nightward</span>
            {"\n"}
            <span className="text-white/90">pip install "nightward[mcp]"</span>
            <span className="text-white/40">{"  # + MCP server for AI agents"}</span>
          </code>
        </pre>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-aqua text-navy-deep font-semibold hover:bg-aqua-dark hover:text-white transition-all shadow-lg shadow-aqua/20"
          >
            View on GitHub →
          </a>
          <a
            href={QUICKSTART}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-all"
          >
            5-minute quickstart
          </a>
          <a
            href={PYPI}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/15 hover:bg-white/10 transition-all"
          >
            PyPI
          </a>
        </div>

        <p className="mt-8 text-center text-white/40 text-xs leading-relaxed">
          Free and MIT-licensed. Issues and feedback are welcome on GitHub.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `TwFooter.tsx`**

```tsx
import { Link } from "react-router-dom";

/**
 * nightward 페이지 전용 영어 footer (공용 Footer는 한국어).
 */
export default function TwFooter() {
  return (
    <footer className="bg-navy-deep text-white/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-wrap items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-navy to-aqua" aria-hidden />
          <span className="text-white font-semibold tracking-tight">LunenLabs</span>
          <span className="text-white/40">· software studio, Seoul</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="https://github.com/LunenLabs/nightward" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">
            GitHub
          </a>
          <a href="https://pypi.org/project/nightward/" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">
            PyPI
          </a>
          <a href="mailto:jhryu115@gmail.com" className="hover:text-aqua transition-colors">
            Contact
          </a>
          <Link to="/privacy" className="hover:text-aqua transition-colors">
            Privacy (Korean)
          </Link>
          <Link to="/" className="hover:text-aqua transition-colors">
            LunenLabs home (Korean)
          </Link>
        </nav>
        <div className="w-full text-xs text-white/35">© 2026 LunenLabs.</div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire it in `Nightward.tsx`**

Replace `import Footer from "../components/Footer";` with `import TwFooter from "../components/tw/TwFooter";` and `<Footer />` with `<TwFooter />`.

- [ ] **Step 5: Delete the form and verify**

```bash
git rm src/components/tw/TwInterestForm.tsx
grep -rn "TwInterestForm" src ; npm run build
```
Expected: grep prints nothing; build exits 0. Rerun the Task 2 Step 1 Hangul script with `"TwCta","TwFooter"` added to `files` → TOTAL 0.

- [ ] **Step 6: Commit**

```bash
git add src/components/tw src/pages/Nightward.tsx
git commit -m "feat(nightward): install CTA and English footer replace the pre-launch form"
```

---

### Task 4: Korean landing — correct nightward's status

**Files (modify):** `src/components/ProductLineup.tsx`, `src/components/Footer.tsx`

- [ ] **Step 1: `ProductLineup.tsx`**

- Type: `type ProductStatus = "출시 임박" | "개발 중" | "운영 중" | "샌드박스 심사" | "점진 축소" | "오픈소스 공개";`
- `statusStyle`: add `"오픈소스 공개": "bg-aqua/15 text-aqua",`
- nightward entry: `status: "개발 중",` → `status: "오픈소스 공개",`
- nightward `ctaLabel`: `"nightward 자세히 보기 →"` → `"nightward 자세히 보기 (영문) →"`

- [ ] **Step 2: `Footer.tsx`** — `nightward (Dev tooling · 개발 중)` → `nightward (개발 도구 · 오픈소스)`

- [ ] **Step 3: Verify + commit**

```bash
npm run build
git add src/components/ProductLineup.tsx src/components/Footer.tsx
git commit -m "fix(landing): nightward is open source, not in development"
```

---

### Task 5: Verify in a browser, then PR

- [ ] **Step 1: Serve the build** — `npm run build` then `npx vite preview --port 4173` (background).

- [ ] **Step 2: Rendered DOM has no Hangul (Review Focus 5)**

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --virtual-time-budget=5000 --dump-dom http://localhost:4173/nightward > "$SCRATCH/nw-dom.html"
python -c "import re,sys; t=open(sys.argv[1],encoding='utf-8').read(); h=re.findall(r'[\uac00-\ud7a3]+',t); print(len(h), h[:10])" "$SCRATCH/nw-dom.html"
```
Expected: `0 []` and the DOM contains `Try it in five minutes.` (proves JS rendered). `$SCRATCH` = the session scratchpad.

- [ ] **Step 3: Both paths render; no horizontal scroll at 390px (Review Focus 3, 4)**

Screenshot `http://localhost:4173/nightward` and `http://localhost:4173/nightward/` at `--window-size=1280,4000` and `--window-size=390,6000` with `--screenshot=` into the scratchpad; Read each PNG. Both paths must show the hero (not blank). Then in a real browser session at 390px width evaluate `document.documentElement.scrollWidth <= window.innerWidth` → `true`.

- [ ] **Step 4: Served head is nightward's (Review Focus 1)**

```bash
curl -s http://localhost:4173/nightward | grep -o 'og:title" content="[^"]*'
curl -s http://localhost:4173/ | grep -o 'og:title" content="[^"]*'
```
Expected: nightward title, then the PetTracker title (landing unchanged). Note: `vite preview` does not read `vercel.json`; the Vercel rewrite is re-checked on the PR's preview deployment (Step 6) and after merge.

- [ ] **Step 5: Push and open the PR**

```bash
git push -u origin feat/nightward-english
gh pr create -R LunenLabs/lunenlabs --base main --title "nightward page in English, with its own link preview" --body "..."
```
Body: what changed (English copy, install CTA replacing the pre-launch form, `nightward/index.html` entry + OG image, Korean status fix), how it was verified (Steps 2-4), and "after merge: `curl -s https://www.lunenlabs.com/nightward | grep og:title` must show the nightward title; re-scrape in the X/LinkedIn post inspectors". End with the Claude Code line.

- [ ] **Step 6: Check the Vercel preview** — read the PR's Vercel status/comment for the preview URL; `curl -s <preview>/nightward | grep og:title`. If the preview is behind Vercel Authentication (401), report that and leave the check to the owner after merge. Do not merge.
