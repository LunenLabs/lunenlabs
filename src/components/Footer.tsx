import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  DANGMASIL_SITE,
  NIGHTWARD_PAGE,
  POLJJAK_SITE,
  SDETCODE_SITE,
} from "../data/links";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const linkCls = "hover:text-aqua transition-colors";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-navy to-aqua" />
              <span className="text-white font-semibold tracking-tight">
                LunenLabs
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/55">
              작은 일상과 단단한 코드를 만드는 스튜디오
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">제품</h4>
            <div className="text-white/40 text-[11px] uppercase tracking-wider mb-2">
              일상 기록 앱
            </div>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a href={DANGMASIL_SITE} {...ext} className={linkCls}>
                  댕마실 (운영 중)
                </a>
              </li>
              <li>
                <a href={POLJJAK_SITE} {...ext} className={linkCls}>
                  폴짝 (App Store 심사 중)
                </a>
              </li>
            </ul>
            <div className="text-white/40 text-[11px] uppercase tracking-wider mb-2">
              품질 엔지니어링
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={NIGHTWARD_PAGE} className={linkCls}>
                  nightward (오픈소스)
                </Link>
              </li>
              <li>
                <a href={SDETCODE_SITE} {...ext} className={linkCls}>
                  SDET Code (운영 중)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">회사</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className={linkCls}>
                  회사 소개
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkCls}>
                  연락처: {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-white/45 text-xs">
                사업자등록 진행 중 (2026)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">정책</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${DANGMASIL_SITE}privacy`} {...ext} className={linkCls}>
                  댕마실 개인정보처리방침
                </a>
              </li>
              <li>
                <a href={`${POLJJAK_SITE}privacy`} {...ext} className={linkCls}>
                  폴짝 개인정보처리방침
                </a>
              </li>
              <li>
                <Link to="/privacy" className={linkCls}>
                  사전가입 개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className={linkCls}>
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/45">
          <div>© 2026 LunenLabs. All rights reserved.</div>
          <div>Made with care in Seoul, Korea.</div>
        </div>
      </div>
    </footer>
  );
}
