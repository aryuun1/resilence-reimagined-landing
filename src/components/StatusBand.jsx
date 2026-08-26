import { ShieldCheck } from "lucide-react";

export function StatusBand() {
  return (
    <section className="status-band" id="transparency">
      <div className="wrap">
        <span className="eyebrow"><ShieldCheck size={14} aria-hidden="true" />Transparency</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "20ch" }}>
          Building responsibly.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined Foundation believes trust should be earned through transparency,
          responsible governance, and honest communication about what has, and has not, yet been
          demonstrated.
        </p>
        <p className="transparency-pledge">Growth matters. How we grow matters too.</p>

        <div className="status-box reveal">
          <p>
            <b>Resilience Reimagined Foundation is a nonprofit corporation.</b>
          </p>
          <p>
            We&rsquo;re developing programs, curricula, research, and educational tools. Prospective
            partners and pilot conversations are described only in general terms until names,
            scopes, and agreements are confirmed. We won&rsquo;t imply scaled delivery, validated
            outcomes, or completed partnerships before we can document them.
          </p>
        </div>
      </div>
    </section>
  );
}
