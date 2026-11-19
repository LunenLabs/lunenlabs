import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer, { CONTACT_EMAIL, OPERATOR } from "./Footer";

// Update this when the policy text changes.
const EFFECTIVE_DATE = "2026년 11월 20일";

export default function Privacy() {
  useEffect(() => {
    document.title = "폴짝 개인정보처리방침";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBEA]" style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      <header
        className="text-[#2A2410]"
        style={{ background: "linear-gradient(180deg, #FFE45C 0%, #FFF3A6 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A2410]/80 mb-6">
            <img src="/poljjak/img/icon.png" alt="" className="w-6 h-6 rounded-md" />← 폴짝
          </Link>
          <h1 className="text-[28px] font-black leading-tight">폴짝 개인정보처리방침</h1>
          <p className="text-[#6B6450] text-sm mt-2">
            시행일자: {EFFECTIVE_DATE} · 운영자: {OPERATOR} (개인 개발자)
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 sm:p-9 space-y-8 text-[15px] leading-relaxed text-[#2A2410] shadow-[0_10px_30px_rgba(120,100,20,0.08)]">
          <p>
            폴짝은 아동 및 보호자의 개인정보와 위치정보를 외부 서버로 수집·전송하지 않습니다. 이 방침은
            '폴짝 - 우리 아이 나들이 일기'(이하 '앱')이 어떤 정보를 어떻게 다루는지 설명합니다.
          </p>

          <Section title="1. 수집하지 않는 정보">
            앱은 로그인이나 회원가입이 없으며, 아동과 보호자의 개인정보와 위치정보를 수집하거나 서버로
            전송하지 않습니다. 만 14세 미만 아동의 개인정보도 수집하지 않습니다. 앱에는 이용자 정보를 받는
            분석·광고·크래시 리포트 도구가 들어 있지 않습니다.
          </Section>

          <Section title="2. 기기 안에만 저장되는 정보">
            아이 정보(이름, 사진, 태어난 날, 이동 스타일, 이전 버전에서 입력한 몸무게)와 나들이 기록(나들이
            경로, 이용자가 남긴 한 줄 메모, 나들이를 시작한 공개 장소의 이름 포함)은 이용자의 휴대폰 안에만
            저장되며 기기 밖으로 보내지 않습니다. 나들이 중 앱으로 찍은 사진은
            이용자의 사진 앱과 이 앱 안에만 저장되며 기기 밖으로 보내지 않습니다. 메달도 휴대폰 안에서만
            판정하고 저장합니다. '친구' 탭에 이용자가 직접 적거나 연락처에서 골라 가져온 다른 가족의 정보(가족 이름, 아이 이름과
            나이, 전화번호, 메모)와 '같이 놀자'로 잡은 약속(날짜, 장소, 함께할 가족, 한마디)도 휴대폰 안에만 저장하며, 앱이
            그 가족에게 연락하거나 어디로 보내지 않습니다. 약속 1시간 전 알림은 휴대폰 안에서 예약하는 로컬
            알림입니다. '연락처에서 가져오기'는 휴대폰의 연락처 선택 화면에서 이용자가 고른 한 명의 이름과
            전화번호만 받으며, 연락처 전체를 읽지 않습니다. '캘린더에 추가'는 휴대폰의 일정 추가 화면을 열어
            이용자가 직접 저장하게 하며, 앱은 캘린더의 일정을 읽지 않습니다. '문자로 보내기'는 휴대폰의 문자
            작성 화면을 열 뿐 앱이 문자를 보내지 않습니다. 다른 가족의 정보는 그 가족이 알고 동의하는 범위에서만
            적어 주세요. 지역 메달에 쓰는 시·도는 앱에 들어 있는 행정구역 경계로 계산하며, 위치를
            다른 곳에 보내 묻지 않습니다. 앱을 삭제하면 이 정보도 함께 지워집니다(사진 앱에 저장된 사진은
            남습니다). 휴대폰 백업을 켜 두었다면 앱 데이터가 그 백업에 함께 담길 수 있습니다.
          </Section>

          <Section title="3. 백업 파일과 오류 알리기">
            이용자가 설정에서 '백업 파일 만들기'를 누르면 아이 정보와 사진, 나들이 기록(경로 포함), 메달,
            설정을 담은 파일 하나를 만들어 iOS 공유 화면을 엽니다. 이 파일은 이용자가 고른 곳(파일 앱,
            iCloud Drive, 메시지 등)에만 저장되며, 앱이 다른 곳으로 보내지 않습니다. 파일에는 아이 정보와
            나들이 경로가 들어 있으니 믿을 수 있는 곳에 보관해 주세요. 앱에 문제가 생겨 '오류 알리기'를
            누르면 오류 내용, 앱 버전, iOS 버전이 적힌 메일 작성 화면이 열리며, 이용자가 직접 보낼 때만
            전달됩니다. 이 메일에는 아이 정보나 위치가 들어가지 않습니다.
          </Section>

          <Section title="4. 공유 카드">
            나들이 카드, 메달 카드, 연말 결산 카드에는 날짜, 나들이 시간, 거리, 아이 사진과 이름만 담기며
            지도, 경로, 위치 좌표, 동네 이름, 시각은 넣지 않습니다. 카드는 이용자가 공유 버튼을 눌러 직접
            보낼 때만 휴대폰 밖으로 나갑니다. '같이 놀자' 초대장에는 이용자가 직접 고른 공개 장소의 이름과
            지도 링크, 약속 시각이 담깁니다.
          </Section>

          <Section title="5. 장소 목록, 놀이터 목록, 상품 목록 받기">
            앱은 '아이랑 갈 곳'의 장소 목록, '지도' 탭의 전국 놀이터 목록(행정안전부 전국어린이놀이시설정보),
            나들이 용품 목록을 lunenlabs.com에서 내려받습니다. 목록은 아무 값도 붙이지 않고 파일 전체를
            받으며, 이 요청에는 아이 정보, 나들이 기록, 위치 정보가 포함되지 않습니다. 가까운 순 정렬과 내 주변
            놀이터, 동 이름은 휴대폰 안에서만 계산합니다. 이때 일반적인 웹 요청 정보(예: IP 주소)가
            호스팅 서버의 로그에 남을 수 있습니다. '이달의 추천 키즈 핫플'은 모든 이용자에게 같은 장소가
            보이며, 위치에 따라 고르지 않습니다.
          </Section>

          <Section title="6. 장소 사진과 공연 포스터">
            장소 정보와 사진은 한국관광공사 자료입니다. 일부 사진(공공누리 제1유형)은 앱에 들어 있고,
            나머지는 장소를 볼 때 한국관광공사 이미지 서버(tong.visitkorea.or.kr)에서 내려받습니다. 이
            요청에는 위치 좌표나 아이 정보가 들어가지 않지만, 일반적인 웹 요청 정보(예: IP 주소)와 어떤
            사진을 요청했는지가 그 서버에 남을 수 있습니다. 목록이 가까운 순이라 이 정보로 대략적인 지역을
            짐작할 수 있습니다. 그 서버의 정보 처리에는 한국관광공사의 정책이 적용됩니다. '아이랑 볼 공연'의
            포스터는 공연예술통합전산망(KOPIS, 예술경영지원센터) 이미지 서버(kopis.or.kr)에서 같은 방식으로
            내려받으며, 그 서버의 정보 처리에는 예술경영지원센터의 정책이 적용됩니다.
          </Section>

          <Section title="7. 지도">
            '지도' 탭의 지도는 네이버 지도(네이버클라우드 Maps)로 그립니다. 지도를 보여 주려고 화면에 보이는
            지역의 지도 그림을 네이버 서버에서 받으며, 이때 일반적인 웹 요청 정보(예: IP 주소), 어느 지역의
            지도를 요청했는지, 이 앱이 등록된 앱인지 확인하는 정보가 네이버에 전달됩니다. 지도가 내 주변을
            보여 줄 때는 이 요청으로 대략적인 지역을 짐작할 수 있습니다. 내 위치 표시는 앱이 휴대폰 안의 지도
            화면에 그리며, 앱은 네이버 지도의 위치 추적 기능을 쓰지 않습니다. 나들이 요약 화면의 경로 지도는
            Apple 지도로 그리며, 지도 그림을 받을 때 같은 방식으로 Apple 서버에 요청합니다. 각 지도 서버의 정보
            처리에는 네이버와 Apple의 정책이 적용됩니다.
          </Section>

          <Section title="8. 건강 앱(Apple 건강)">
            이용자가 기록 탭이나 설정에서 건강 앱 연결을 켜면, 앱은 Apple 건강 앱의 걸음 수와 걷기·달리기
            거리를 읽어 기록 탭에 보여 줍니다. 이 정보는 화면에 보여 줄 때 휴대폰 안에서만 읽으며, 저장하거나
            기기 밖으로 보내지 않고, 광고나 마케팅에 쓰지 않습니다. 앱은 건강 앱에 데이터를 쓰지 않습니다.
            읽기 권한은 iPhone 설정 › 건강 › 데이터 접근 및 기기에서 언제든 끌 수 있습니다.
          </Section>

          <Section title="9. 외부 링크">
            지도 앱 길찾기, 근처 찾기, 상품 링크처럼 이용자가 직접 누르는 링크는 해당 앱이나 웹사이트를 엽니다.
            앱은 이때 이용자의 위치를 함께 보내지 않으며, 열린 곳의 정보 처리에는 그곳의 정책이 적용됩니다.
          </Section>

          <Section title="10. 개인정보 보호책임자">
            개인정보 보호책임자: {OPERATOR} (개인 개발자) ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1F7A3A] underline">
              {CONTACT_EMAIL}
            </a>
          </Section>

          <Section title="11. 문의">
            이 방침에 대한 문의는{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1F7A3A] underline">
              {CONTACT_EMAIL}
            </a>
            으로 보내 주세요.
          </Section>

          <Section title="12. 방침의 변경">이 방침이 바뀌면 이 페이지에 새 시행일자와 함께 게시합니다.</Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[#1F7A3A] text-lg font-extrabold mb-2">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
