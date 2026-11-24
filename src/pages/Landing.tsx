import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutLunenLabs from "../components/AboutLunenLabs";
import ProductLineup from "../components/ProductLineup";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductLineup />
        <AboutLunenLabs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
