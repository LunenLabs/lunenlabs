import { Link } from "react-router-dom";

export const CONTACT_EMAIL = "dangmasil@lunenlabs.com";
export const OPERATOR = "류정현";

export default function Footer({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white/80" : "text-[#8A6F5A]";
  return (
    <footer className={`px-6 pt-10 pb-12 text-center text-xs leading-6 ${text}`}>
      <div className="flex justify-center gap-4 mb-2 font-semibold">
        <Link to="/privacy" className="underline underline-offset-2">
          개인정보처리방침
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
          문의하기
        </a>
      </div>
      <p>
        댕마실 · 운영 {OPERATOR}(개인 개발자) · {CONTACT_EMAIL}
      </p>
    </footer>
  );
}
