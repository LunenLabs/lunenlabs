import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DangmasilPrivacy() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "댕마실 개인정보처리방침";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-aqua text-sm mb-6 hover:underline"
          >
            ← 홈으로
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            댕마실 개인정보처리방침
          </h1>
          <p className="text-white/65 text-sm">
            시행일자: 2026년 11월 1일 · 판매자: 앱스토어에 표시된 개인 개발자
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <div className="bg-white rounded-3xl border border-line p-7 sm:p-10 space-y-10 text-sm sm:text-base leading-relaxed">
          <p className="text-mist">
            '댕마실 - 강아지 산책 기록'(이하 '앱')은 이용자의 개인정보와 위치정보를
            수집하거나 전송하지 않습니다. 이 방침은 앱이 어떤 정보를 어떻게 다루는지
            설명합니다.
          </p>

          <Section title="1. 수집하지 않는 정보">
            <p>
              앱은 로그인이나 회원가입이 없으며, 개인정보와 위치정보를 수집하거나
              서버로 전송하지 않습니다. 앱에는 이용자 정보를 받는 분석·광고·크래시
              리포트 도구가 들어 있지 않습니다.
            </p>
          </Section>

          <Section title="2. 기기 안에만 저장되는 정보">
            <p>
              반려견 정보와 산책 기록(산책 경로 포함)은 이용자의 휴대폰 안에만
              저장되며 기기 밖으로 보내지 않습니다. 앱을 삭제하면 이 정보도 함께
              지워집니다.
            </p>
          </Section>

          <Section title="3. 상품 목록 받기">
            <p>
              앱은 용품 탭에 보여줄 상품 목록을 lunenlabs.com에서 내려받습니다. 이때
              일반적인 웹 요청 정보(예: IP 주소)가 호스팅 서버의 로그에 남을 수
              있습니다. 이 요청에는 반려견 정보, 산책 기록, 위치 정보가 포함되지
              않습니다.
            </p>
          </Section>

          <Section title="4. 제휴 링크">
            <p>
              앱은 제휴 링크를 보여주며, 링크를 통해 구매가 이루어지면 판매자가
              수수료를 받을 수 있습니다. 링크를 누르면 브라우저나 제휴사 앱(예: 쿠팡)이
              열리고, 그 이후의 정보 처리에는 해당 제휴사의 개인정보 정책이 적용됩니다.
            </p>
          </Section>

          <Section title="5. 문의">
            <p>
              이 방침에 대한 문의는{" "}
              <a
                href="mailto:support@sdetcode.com"
                className="text-aqua-dark underline"
              >
                support@sdetcode.com
              </a>
              으로 보내 주세요.
            </p>
          </Section>

          <Section title="6. 방침의 변경">
            <p>
              이 방침이 바뀌면 이 페이지에 새 시행일자와 함께 게시합니다.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-navy text-xl sm:text-2xl font-bold mb-4">{title}</h2>
      <div className="text-mist space-y-2">{children}</div>
    </section>
  );
}
