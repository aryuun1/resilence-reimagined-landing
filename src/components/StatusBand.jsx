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
            <b>
              Resilience Reimagined Foundation is a nonprofit corporation preparing to apply for
              recognition of exemption under Section 501(c)(3) of the Internal Revenue Code.
              Federal tax exempt status has not been recognized.
            </b>
          </p>
          <p>
            The Foundation and its programs are real, and still being built, tested, and
            expanded. Every claim on this page reflects where things actually stand today, not a
            finished scale or proven impact we have not demonstrated yet.
          </p>
        </div>
      </div>
    </section>
  );
}
