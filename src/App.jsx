import { LotusDefs } from "./components/LotusIcon.jsx";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Vision } from "./components/Vision.jsx";
import { Mission } from "./components/Mission.jsx";
import { Problem } from "./components/Problem.jsx";
import { Approach } from "./components/Approach.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Values } from "./components/Values.jsx";
import { FosterCare } from "./components/FosterCare.jsx";
import { Founder } from "./components/Founder.jsx";
import { Books } from "./components/Books.jsx";
import { Impact } from "./components/Impact.jsx";
import { WhyNow } from "./components/WhyNow.jsx";
import { GetInvolved } from "./components/GetInvolved.jsx";
import { FoundingSupporters } from "./components/FoundingSupporters.jsx";
import { CorporatePartners } from "./components/CorporatePartners.jsx";
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
      <Vision />
      <Mission />
      <Problem />
      <Approach />
      <Portfolio />
      <Values />
      <FosterCare />
      <Founder />
      <Books />
      <Impact />
      <WhyNow />
      <GetInvolved />
      <FoundingSupporters />
      <CorporatePartners />
      <StatusBand />
      <FinalCta />
      <Footer />
    </>
  );
}
