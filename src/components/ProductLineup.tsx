import { Link } from "react-router-dom";
import {
  DANGMASIL_APP_STORE,
  DANGMASIL_SITE,
  NIGHTWARD_GITHUB,
  NIGHTWARD_GLAMA,
  NIGHTWARD_PAGE,
  NIGHTWARD_TDQS,
  POLJJAK_SITE,
  SDETCODE_SITE,
} from "../data/links";

type ProductStatus = "운영 중" | "App Store 심사 중" | "오픈소스 공개";

/** Each card wears its product's own colors, so the home page reads like the products do. */
type Theme = "dangmasil" | "poljjak" | "dev" | "plain";

type ProductLink = {
  label: string;
  href: string;
  /** Internal routes use the router; everything else opens in a new tab. */
  internal?: boolean;
  primary?: boolean;
};

type Product = {
  name: string;
  tag: string;
  desc: string;
  status: ProductStatus;
  theme: Theme;
  icon?: string;
  bullets: string[];
  links: ProductLink[];
  /** An outside evaluation worth showing, quoted as the source states it. */
  proof?: { source: string; grade: string; detail: string; href: string };
};

const apps: Product[] = [
  {
    name: "댕마실",
    tag: "강아지 산책 기록 · iPhone",
    desc: "'산책 시작'을 누르고 휴대폰은 주머니에 넣으세요. 화면이 꺼져도 걸은 길을 기록하고, 산책이 끝나면 아이 사진과 시간·거리를 담은 스토리 카드 한 장을 만들어 줘요.",
    status: "운영 중",
    theme: "dangmasil",
    icon: "/dangmasil/img/icon.png",
    bullets: [
      "여러 아이 함께 기록 · 아이별 주간 목표와 뱃지",
      "반려견 동반 산책 장소 · 근처 동물병원·애견카페 찾기",
      "회원가입 없음 · 산책 기록은 내 휴대폰에만",
    ],
    links: [
      { label: "App Store에서 받기", href: DANGMASIL_APP_STORE, primary: true },
      { label: "소개 페이지", href: DANGMASIL_SITE },
    ],
  },
  {
    name: "폴짝",
    tag: "아이랑 갈 곳 · 나들이 기록 · iPhone",
    desc: "가까운 놀이터·키즈카페·어린이 공연·축제를 찾아 주고, 친구 가족에게 '같이 놀자' 초대장을 보내고, 다녀온 나들이를 집 위치가 드러나지 않는 카드 한 장으로 남겨요.",
    status: "App Store 심사 중",
    theme: "poljjak",
    icon: "/poljjak/img/icon.png",
    bullets: [
      "놀이터 지도 · 어린이 공연 · 가족 축제 추천",
      "같이 놀자 초대장 · 다둥이 함께 기록",
      "회원가입·자체 서버 없음 · 기록은 내 휴대폰에만",
    ],
    links: [{ label: "소개 페이지", href: POLJJAK_SITE, primary: true }],
  },
];

const quality: Product[] = [
  {
    name: "nightward",
    tag: "AI 변경의 회귀 게이트",
    desc: "AI가 코드를 고칠 때 조용히 함께 움직인 동작들(blast radius)을 보여 주고, 사람이 승인하지 않은 변경은 통과시키지 않아 끝없는 수정 루프에 '멈춰도 되는 지점'을 줍니다.",
    status: "오픈소스 공개",
    theme: "dev",
    bullets: [
      "테스트는 초록불이어도 바뀐 동작을 잡아냄",
      "승인한 기준선을 넘으면 CI·에이전트 루프를 멈춤",
      "pytest · CLI · MCP 도구 지원, MIT 라이선스",
    ],
    links: [
      { label: "자세히 보기 (영문)", href: NIGHTWARD_PAGE, internal: true, primary: true },
      { label: "GitHub", href: NIGHTWARD_GITHUB },
    ],
    proof: {
      source: "AI 에이전트가 바로 이해하는 도구",
      grade: NIGHTWARD_TDQS.grade,
      detail: `Glama 도구 정의 품질 점수(TDQS) ${NIGHTWARD_TDQS.score} / 5 · ${NIGHTWARD_TDQS.scoredOn.slice(0, 7).replace("-", ".")} 채점`,
      href: NIGHTWARD_GLAMA,
    },
  },
  {
    name: "SDET Code",
    tag: "B2B 테스트 자동화",
    desc: "SaaS 제품을 위한 테스트 자동화 컨설팅입니다. 테스트 전략부터 자동화 구축, 유지보수까지 맡아 배포할 때마다 핵심 동작이 그대로인지 확인합니다.",
    status: "운영 중",
    theme: "plain",
    bullets: [
      "테스트 전략 수립 · 자동화 구축 · 유지보수",
      "글로벌 SaaS 클라이언트 대상",
      "여기서 쌓은 회귀 검증 노하우가 nightward로",
    ],
    links: [{ label: "sdetcode.com 방문", href: SDETCODE_SITE, primary: true }],
  },
];

const groups: {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  products: Product[];
}[] = [
  {
    id: "track-apps",
    eyebrow: "Track 01 · 일상 기록 앱",
    title: "바깥에서 보낸 시간을 기록합니다",
    desc: "댕마실에서 다듬은 기록 엔진과 공유 카드를 폴짝이 이어받았습니다. 두 앱 모두 회원가입 없이 바로 시작하고, 기록은 휴대폰 안에만 저장합니다.",
    products: apps,
  },
  {
    id: "track-quality",
    eyebrow: "Track 02 · 품질 엔지니어링",
    title: "소프트웨어 품질을 지킵니다",
    desc: "SDET Code에서 쌓은 회귀 검증 노하우가 오픈소스 nightward로 이어졌습니다. AI가 코드를 고치는 시대에도 '사람이 승인한 동작만 내보낸다'는 원칙을 지킵니다.",
    products: quality,
  },
];

const themeStyle: Record<
  Theme,
  {
    card: string;
    title: string;
    tag: string;
    body: string;
    dot: string;
    badge: string;
    primary: string;
    secondary: string;
  }
> = {
  dangmasil: {
    card: "bg-[radial-gradient(120%_80%_at_15%_0%,#FFC27A_0%,#FF9A3D_40%,#F07A1A_75%,#E8650F_100%)] border-[#F07A1A]/40",
    title: "text-white",
    tag: "text-white/90",
    body: "text-white/90",
    dot: "bg-white",
    badge: "bg-white text-[#C2540A]",
    primary: "bg-white text-[#C2540A] hover:bg-[#FFF1E2]",
    secondary: "text-white border-white/60 hover:bg-white/15",
  },
  poljjak: {
    card: "bg-[linear-gradient(180deg,#FFE45C_0%,#FFF3A6_55%,#FFF8DC_100%)] border-[#E8C93A]/50",
    title: "text-[#2A2410]",
    tag: "text-[#6B6450]",
    body: "text-[#4A4330]",
    dot: "bg-[#2A2410]",
    badge: "bg-[#2A2410] text-[#FFE45C]",
    primary: "bg-[#2A2410] text-[#FFE45C] hover:bg-[#3D351A]",
    secondary: "text-[#2A2410] border-[#2A2410]/40 hover:bg-white/50",
  },
  dev: {
    card: "bg-ink border-aqua/25 hover:border-aqua/50",
    title: "text-white",
    tag: "text-aqua",
    body: "text-white/75",
    dot: "bg-aqua",
    badge: "bg-aqua/15 text-aqua",
    primary: "bg-aqua text-navy-deep hover:bg-aqua-light",
    secondary: "text-white border-white/25 hover:bg-white/10",
  },
  plain: {
    card: "bg-cream border-line hover:border-aqua/40",
    title: "text-navy",
    tag: "text-mist",
    body: "text-mist",
    dot: "bg-aqua-dark",
    badge: "bg-success/15 text-success",
    primary: "bg-navy text-white hover:bg-navy-soft",
    secondary: "text-navy border-line hover:bg-white",
  },
};

function ProductLinkButton({ l, s }: { l: ProductLink; s: (typeof themeStyle)[Theme] }) {
  const cls = `inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
    l.primary ? s.primary : `border ${s.secondary}`
  }`;
  const label = l.primary ? `${l.label} →` : l.label;
  return l.internal ? (
    <Link to={l.href} className={cls}>
      {label}
    </Link>
  ) : (
    <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  );
}

function ProductCard({ p }: { p: Product }) {
  const s = themeStyle[p.theme];
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-7 sm:p-8 border transition-all ${s.card}`}
    >
      {p.theme === "dev" && (
        <div className="self-start inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-aqua text-[11px] font-semibold tracking-wide uppercase font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-aqua" aria-hidden />
          Dev tooling · OSS
        </div>
      )}
      <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between sm:gap-4 mb-5">
        <div className="flex items-center gap-3.5 min-w-0">
          {p.icon && (
            <img
              src={p.icon}
              alt=""
              width={52}
              height={52}
              className="shrink-0 w-13 h-13 rounded-[14px] border-2 border-white/80 shadow-md"
            />
          )}
          <div>
            <h3 className={`text-2xl font-bold mb-1 ${s.title}`}>{p.name}</h3>
            <div className={`text-sm font-medium ${s.tag}`}>{p.tag}</div>
          </div>
        </div>
        <span
          className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${s.badge}`}
        >
          {p.status}
        </span>
      </div>

      <p className={`text-sm sm:text-[15px] leading-relaxed mb-5 ${s.body}`}>{p.desc}</p>

      {p.proof && (
        <a
          href={p.proof.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3.5 mb-5 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-aqua/40 hover:bg-white/[0.07] transition-colors"
        >
          <span className="shrink-0 w-11 h-11 rounded-xl bg-aqua text-navy-deep text-xl font-extrabold flex items-center justify-center">
            {p.proof.grade}
          </span>
          <span className="min-w-0">
            <span className="block text-white text-sm font-semibold">
              {p.proof.source}
            </span>
            <span className="block text-white/60 text-xs mt-0.5">{p.proof.detail}</span>
          </span>
          <span className="ml-auto text-aqua text-sm group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </a>
      )}

      <ul className="space-y-2 mb-7">
        {p.bullets.map((b, i) => (
          <li key={i} className={`text-xs sm:text-sm flex items-start gap-2 ${s.body}`}>
            <span className={`shrink-0 w-1 h-1 rounded-full mt-2 ${s.dot}`} />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2.5">
        {p.links.map((l) => (
          <ProductLinkButton key={l.href} l={l} s={s} />
        ))}
      </div>
    </article>
  );
}

export default function ProductLineup() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-aqua-dark text-sm font-semibold tracking-wider uppercase mb-3">
            Products
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
            두 개의 트랙으로 <br className="hidden sm:block" />
            만들고 운영합니다.
          </h2>
          <p className="text-mist text-lg leading-relaxed">
            반려견·아이와 보내는 바깥 시간을 기록하는{" "}
            <strong className="text-navy">일상 기록 앱</strong>(댕마실 · 폴짝), 그리고
            소프트웨어가 조용히 망가지지 않도록 지키는{" "}
            <strong className="text-navy">품질 엔지니어링</strong>(nightward · SDET
            Code). 한쪽은 사람들의 일상을, 다른 한쪽은 그 일상을 떠받치는 코드를
            지킵니다.
          </p>
        </div>

        <div className="space-y-16">
          {groups.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-20">
              <div className="max-w-3xl mb-8">
                <div className="text-aqua-dark text-xs font-semibold tracking-wider uppercase mb-2">
                  {g.eyebrow}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                  {g.title}
                </h3>
                <p className="text-mist text-base leading-relaxed">{g.desc}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {g.products.map((p) => (
                  <ProductCard key={p.name} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
