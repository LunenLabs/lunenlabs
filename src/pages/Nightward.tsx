import { useEffect } from "react";
import TwHeader from "../components/tw/TwHeader";
import TwHero from "../components/tw/TwHero";
import TwProblem from "../components/tw/TwProblem";
import TwRealCase from "../components/tw/TwRealCase";
import TwHowItWorks from "../components/tw/TwHowItWorks";
import TwHonest from "../components/tw/TwHonest";
import TwCta from "../components/tw/TwCta";
import TwFooter from "../components/tw/TwFooter";

export default function Nightward() {
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

  return (
    <>
      <TwHeader />
      <main>
        <TwHero />
        <TwProblem />
        <TwRealCase />
        <TwHowItWorks />
        <TwHonest />
        <TwCta />
      </main>
      <TwFooter />
    </>
  );
}
