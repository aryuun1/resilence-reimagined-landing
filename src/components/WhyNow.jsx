import { Clock } from "lucide-react";

export function WhyNow() {
  return (
    <section id="why-now" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", textAlign: "center" }}>
      <div className="wrap">
        <span className="eyebrow"><Clock size={14} aria-hidden="true" />Why Now?</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "34ch", margin: "1rem auto 0" }}>
          The world young people are entering is changing fast.
        </h2>
        <div className="vision-body">
          <p>
            Young people are growing up amid unprecedented access to information, artificial
            intelligence, social pressure, and rapidly changing expectations about work and
            adulthood. <strong>Knowing more information is not enough.</strong>
          </p>
          <p>
            The ability to recognize patterns, evaluate competing information, maintain authentic
            identity, and make responsible choices is a capacity worth developing intentionally.
          </p>
        </div>
        <p className="vision-closing">And we believe the time to begin is before the next crisis.</p>
      </div>
    </section>
  );
}
