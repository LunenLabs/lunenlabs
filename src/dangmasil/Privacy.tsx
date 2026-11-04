import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer, { CONTACT_EMAIL, OPERATOR } from "./Footer";

// Update this when the policy text changes.
const EFFECTIVE_DATE = "2026년 11월 4일";

export default function Privacy() {
  useEffect(() => {
    document.title = "댕마실 개인정보처리방침";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF4EA]" style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      <header
        className="text-white"
        style={{ background: "radial-gradient(120% 70% at 20% 0%, #FFC27A 0%, #FF9A3D 38%, #F07A1A 70%, #E8650F 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 mb-6">
            <img src="/dangmasil/img/icon.png" alt="" className="w-6 h-6 rounded-md" />← 댕마실
          </Link>
          <h1 className="text-[28px] font-black leading-tight [text-shadow:0_2px_14px_rgba(150,60,0,0.35)]">댕마실 개인정보처리방침</h1>
          <p className="text-white/80 text-sm mt-2">
            시행일자: {EFFECTIVE_DATE} · 운영자: {OPERATOR} (개인 개발자)
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 sm:p-9 space-y-8 text-[15px] leading-relaxed text-[#4A3826] shadow-[0_10px_30px_rgba(150,60,0,0.08)]">
          <p>
            '댕마실 - 강아지 산책 기록'(이하 '앱')은 이용자의 개인정보와 위치정보를 수집하거나
            전송하지 않습니다. 이 방침은 앱이 어떤 정보를 어떻게 다루는지 설명합니다.
          </p>

          <Section title="1. 수집하지 않는 정보">
            앱은 로그인이나 회원가입이 없으며, 개인정보와 위치정보를 수집하거나 서버로 전송하지
            않습니다. 앱에는 이용자 정보를 받는 분석·광고·크래시 리포트 도구가 들어 있지 않습니다.
          </Section>

          <Section title="2. 기기 안에만 저장되는 정보">
            반려견 정보와 산책 기록(산책 경로 포함)은 이용자의 휴대폰 안에만 저장되며 기기 밖으로
            보내지 않습니다. 산책 중 앱으로 찍은 사진은 이용자의 사진 앱과 이 앱 안에만 저장되며 기기
            밖으로 보내지 않습니다. 앱을 삭제하면 이 정보도 함께 지워집니다(사진 앱에 저장된 사진은
            남습니다).
          </Section>

          <Section title="3. 상품 목록 받기">
            앱은 용품 탭에 보여줄 상품 목록을 lunenlabs.com에서 내려받습니다. 이때 일반적인 웹 요청
            정보(예: IP 주소)가 호스팅 서버의 로그에 남을 수 있습니다. 이 요청에는 반려견 정보, 산책
            기록, 위치 정보가 포함되지 않습니다.
          </Section>

          <Section title="4. 제휴 링크">
            앱은 제휴 링크를 보여주며, 링크를 통해 구매가 이루어지면 판매자가 수수료를 받을 수
            있습니다. 링크를 누르면 브라우저나 제휴사 앱(예: 쿠팡)이 열리고, 그 이후의 정보 처리에는
            해당 제휴사의 개인정보 정책이 적용됩니다.
          </Section>

          <Section title="5. 개인정보 보호책임자">
            개인정보 보호책임자: {OPERATOR} ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#B4560C] underline">
              {CONTACT_EMAIL}
            </a>
          </Section>

          <Section title="6. 문의">
            이 방침에 대한 문의는{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#B4560C] underline">
              {CONTACT_EMAIL}
            </a>
            으로 보내 주세요.
          </Section>

          <Section title="7. 방침의 변경">이 방침이 바뀌면 이 페이지에 새 시행일자와 함께 게시합니다.</Section>
        </div>
      </main>

      <Footer tone="dark" />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[#B4560C] text-lg font-extrabold mb-2">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
