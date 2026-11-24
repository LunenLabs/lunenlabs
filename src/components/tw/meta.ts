// nightward facts the page quotes, in one place. On a release, bump NW_VERSION (it is also the
// GitHub Action tag) and re-read the README and CHANGELOG for anything the page now gets wrong.
export const NW_VERSION = "0.3.5";

export const GITHUB = "https://github.com/LunenLabs/nightward";
export const PYPI = "https://pypi.org/project/nightward/";
export const QUICKSTART = `${GITHUB}#quickstart-5-minutes`;
export const CHANGELOG = `${GITHUB}/blob/main/CHANGELOG.md`;
export const DOCS = `${GITHUB}/blob/main/docs`;
// Glama MCP directory listing.
export const GLAMA = "https://glama.ai/mcp/servers/LunenLabs/nightward";
export const TDQS_SITE = "https://tdqs.dev";

// Glama's Tool Definition Quality Score for nightward, as its listing shows it. TDQS rates how
// well tool definitions tell an AI agent what each tool does and when to use it (LLM-graded,
// open methodology at tdqs.dev); it says nothing about code quality, security or whether the
// gate catches regressions, so the page never words it as either. Don't call the listing
// "Official": Glama doesn't define that label. Re-read the listing when re-scored and update.
export const TDQS = {
  grade: "A",
  score: "4.5",
  scoredOn: "2026-11-02",
  tools: [
    { name: "nightward_run", grade: "A" },
    { name: "nightward_status", grade: "A" },
  ],
  dimensions: [
    { name: "Disambiguation", score: 5, note: "the two tools have clearly distinct purposes" },
    { name: "Naming consistency", score: 4, note: "run is a verb, status a noun" },
    { name: "Tool count", score: 4, note: "two tools is on the thin side" },
    { name: "Completeness", score: 5, note: "approve and review are intentionally human-only" },
  ],
} as const;
