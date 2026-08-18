import { LotusWatermark } from "./LotusIcon.jsx";

export function QuoteBand() {
  return (
    <section className="quote-band reveal">
      <LotusWatermark />
      <div className="wrap">
        <span className="eyebrow">Guiding Idea</span>
        <blockquote>
          Resilience is more than getting through something hard. It means seeing your situation
          clearly, taking back control of your choices, staying connected to who you are, and
          building a future you actually want.
        </blockquote>
      </div>
    </section>
  );
}
