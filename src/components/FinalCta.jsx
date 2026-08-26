import { HeartHandshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

export function FinalCta() {
  return (
    <section className="final-cta" id="cta">
      <div className="wrap reveal">
        <h2>Help us build what comes next.</h2>
        <p className="final-cta-lead">Resilience Reimagined is at the beginning of its journey.</p>
        <div className="imagine-list">
          <p>
            We&rsquo;re developing the ideas, tools, learning experiences, and partnerships that
            can help bring this vision to life.
          </p>
          <p>Early supporters have an opportunity to help us build thoughtfully from the beginning.</p>
        </div>

        <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "2.2rem" }}>
          <a className="btn btn-primary" href={DONATE_URL} target="_blank" rel="noopener noreferrer"><HeartHandshake size={17} aria-hidden="true" />Support the Work</a>
          <Link className="btn btn-ghost" to="/get-involved"><Users size={17} aria-hidden="true" />Get Involved</Link>
        </div>
      </div>
    </section>
  );
}
