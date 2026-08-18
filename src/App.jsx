import { LotusDefs } from "./components/LotusIcon.jsx";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { QuoteBand } from "./components/QuoteBand.jsx";
import { Mission } from "./components/Mission.jsx";
import { Values } from "./components/Values.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Founder } from "./components/Founder.jsx";
import { Books } from "./components/Books.jsx";
import { Audiences } from "./components/Audiences.jsx";
import { StatusBand } from "./components/StatusBand.jsx";
import { FinalCta } from "./components/FinalCta.jsx";
import { Footer } from "./components/Footer.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  return (
    <>
      <LotusDefs />
      <Nav />
      <Hero />
      <QuoteBand />
      <Mission />
      <Values />
      <Portfolio />
      <Founder />
      <Books />
      <Audiences />
      <StatusBand />
      <FinalCta />
      <Footer />
    </>
  );
}
