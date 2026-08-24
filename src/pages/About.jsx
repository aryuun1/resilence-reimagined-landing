import { Vision } from "../components/Vision.jsx";
import { Mission } from "../components/Mission.jsx";
import { Problem } from "../components/Problem.jsx";
import { WhyNow } from "../components/WhyNow.jsx";
import { Values } from "../components/Values.jsx";

export function About() {
  return (
    <>
      <Vision />
      <Mission />
      <Problem />
      <WhyNow />
      <Values />
    </>
  );
}
