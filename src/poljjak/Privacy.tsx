import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer, { CONTACT_EMAIL, OPERATOR } from "./Footer";

// Update this when the policy text changes.
const EFFECTIVE_DATE = "2026년 11월 13일";

export default function Privacy() {
  useEffect(() => {
    document.title = "폴짝 개인정보처리방침";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF6EC]" style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      <header
        className="text-white"
        style={{ background: "radial-gradient(120% 70% at 20% 0%, #FFD26F 0%, #FF8A5B 55%, #FF6B6B 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 mb-6">
            <img src="/poljjak/img/icon.png" alt="" className="w-6 h-6 rounded-md" />← 폴짝
          </Link>
          <h1 className="text-[28px] font-black leading-tight [text-shadow:0_2px_14px_rgba(170,60,30,0.35)]">폴짝 개인정보처리방침</h1>
          <p className="text-white/85 text-sm mt-2">
            시행일자: {EFFECTIVE_DATE} · 운영자: {OPERATOR} (개인 개발자)
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 sm:p-9 space-y-8 text-[15px] leading-relaxed text-[#4A3826] shadow-[0_10px_30px_rgba(170,60,30,0.08)]">
          <p>
            폴짝은 아동 및 보호자의 개인정보와 위치정보를 외부 서버로 수집·전송하지 않습니다. 이 방침은
            '폴짝 - 아이와 바깥놀이·나들이 기록'(이하 '앱')이 어떤 정보를 어떻게 다루는지 설명합니다.
          </p>

          <Section title="1. 수집하지 않는 정보">
            앱은 로그인이나 회원가입이 없으며, 아동과 보호자의 개인정보와 위치정보를 수집하거나 서버로
            전송하지 않습니다. 만 14세 미만 아동의 개인정보도 수집하지 않습니다. 앱에는 이용자 정보를 받는
            분석·광고·크래시 리포트 도구가 들어 있지 않습니다.
          </Section>

          <Section title="2. 기기 안에만 저장되는 정보">
            아이 정보(이름, 사진, 태어난 해·달, 몸무게, 이동 스타일)와 나들이 기록(나들이 경로 포함)은
            이용자의 휴대폰 안에만 저장되며 기기 밖으로 보내지 않습니다. 나들이 중 앱으로 찍은 사진은
            이용자의 사진 앱과 이 앱 안에만 저장되며 기기 밖으로 보내지 않습니다. 메달도 휴대폰 안에서만
            판정하고 저장합니다. 지역 메달에 쓰는 시·도는 앱에 들어 있는 행정구역 경계로 계산하며, 위치를
            다른 곳에 보내 묻지 않습니다. 앱을 삭제하면 이 정보도 함께 지워집니다(사진 앱에 저장된 사진은
            남습니다). 휴대폰 백업을 켜 두었다면 앱 데이터가 그 백업에 함께 담길 수 있습니다.
          </Section>

          <Section title="3. 공유 카드">
            나들이 카드, 메달 카드, 연말 결산 카드에는 날짜, 나들이 시간, 거리, 아이 사진과 이름만 담기며
            지도, 경로, 위치 좌표, 동네 이름, 시각은 넣지 않습니다. 카드는 이용자가 공유 버튼을 눌러 직접
            보낼 때만 휴대폰 밖으로 나갑니다. '같이 놀자' 초대장에는 이용자가 직접 고른 공개 장소의 이름과
            지도 링크, 약속 시각이 담깁니다.
          </Section>

          <Section title="4. 아이랑 갈 곳 목록과 상품 목록 받기">
            앱은 '아이랑 갈 곳'의 장소 목록과 나들이 용품 목록을 lunenlabs.com에서 내려받습니다. 목록은 아무
            값도 붙이지 않고 파일 전체를 받으며, 이 요청에는 아이 정보, 나들이 기록, 위치 정보가 포함되지
            않습니다. 가까운 순 정렬은 휴대폰 안에서만 계산합니다. 이때 일반적인 웹 요청 정보(예: IP 주소)가
            호스팅 서버의 로그에 남을 수 있습니다. '이달의 추천 키즈 핫플'은 모든 이용자에게 같은 장소가
            보이며, 위치에 따라 고르지 않습니다.
          </Section>

          <Section title="5. 장소 사진">
            장소 정보와 사진은 한국관광공사 자료입니다. 일부 사진(공공누리 제1유형)은 앱에 들어 있고,
            나머지는 장소를 볼 때 한국관광공사 이미지 서버(tong.visitkorea.or.kr)에서 내려받습니다. 이
            요청에는 위치 좌표나 아이 정보가 들어가지 않지만, 일반적인 웹 요청 정보(예: IP 주소)와 어떤
            사진을 요청했는지가 그 서버에 남을 수 있습니다. 목록이 가까운 순이라 이 정보로 대략적인 지역을
            짐작할 수 있습니다. 그 서버의 정보 처리에는 한국관광공사의 정책이 적용됩니다.
          </Section>

          <Section title="6. 건강 앱(Apple 건강)">
            이용자가 기록 탭이나 설정에서 건강 앱 연결을 켜면, 앱은 Apple 건강 앱의 걸음 수와 걷기·달리기
            거리를 읽어 기록 탭에 보여 줍니다. 이 정보는 화면에 보여 줄 때 휴대폰 안에서만 읽으며, 저장하거나
            기기 밖으로 보내지 않고, 광고나 마케팅에 쓰지 않습니다. 앱은 건강 앱에 데이터를 쓰지 않습니다.
            읽기 권한은 iPhone 설정 › 건강 › 데이터 접근 및 기기에서 언제든 끌 수 있습니다.
          </Section>

          <Section title="7. 외부 링크">
            지도 앱 길찾기, 근처 찾기, 상품 링크처럼 이용자가 직접 누르는 링크는 해당 앱이나 웹사이트를 엽니다.
            앱은 이때 이용자의 위치를 함께 보내지 않으며, 열린 곳의 정보 처리에는 그곳의 정책이 적용됩니다.
          </Section>

          <Section title="8. 개인정보 보호책임자">
            개인정보 보호책임자: {OPERATOR} (개인 개발자) ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#D2552E] underline">
              {CONTACT_EMAIL}
            </a>
          </Section>

          <Section title="9. 문의">
            이 방침에 대한 문의는{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#D2552E] underline">
              {CONTACT_EMAIL}
            </a>
            으로 보내 주세요.
          </Section>

          <Section title="10. 방침의 변경">이 방침이 바뀌면 이 페이지에 새 시행일자와 함께 게시합니다.</Section>
        </div>
      </main>

      <Footer tone="dark" />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[#D2552E] text-lg font-extrabold mb-2">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
