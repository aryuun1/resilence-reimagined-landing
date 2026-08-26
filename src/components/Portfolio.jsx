import { ArrowRight, Layers, Sparkles, Target } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <span className="eyebrow">Our Work</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          We&rsquo;re building. Learning. And listening.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined is in its early stages. We&rsquo;re developing ideas, educational
          experiences, and partnerships around a central question:
        </p>

        <div className="whatif-block reveal" style={{ marginTop: "2rem" }}>
          <h3 style={{ fontStyle: "italic" }}>
            How can we better prepare young people to understand themselves, navigate complexity,
            stay connected, and make choices that support the lives they want to build?
          </h3>
        </div>

        <p className="lede" style={{ marginTop: "2rem" }}>
          Our initial work is taking shape through INDIGLOW, Pattern to Purpose, and a broader
          exploration of how youth-serving systems can support the whole person.
        </p>

        <div className="feature-card feature-card-fusion reveal" id="indiglow" style={{ marginTop: "3rem" }}>
          <img
            src="/images/Team Fusion - Background Image.jpeg"
            alt=""
            aria-hidden="true"
            className="feature-card-bg"
          />
          <div>
            <img src="/images/IMG_1336.jpeg" alt="INDIGLOW logo" className="feature-logo" />
            <span className="tag"><Sparkles size={12} aria-hidden="true" />INDIGLOW</span>
            <h3>Helping young people better understand themselves and their world.</h3>
            <p>
              INDIGLOW is being developed as a whole-person learning experience focused on
              identity, connection, discernment, wellbeing, creativity, and purpose.
            </p>
            <span className="status-pill">In early development.</span>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />Built around a simple belief</span>
            No circumstance, label, placement, diagnosis, reaction, or decision made by someone
            else tells the whole story of who a young person is.
          </div>
        </div>

        <div className="feature-card reveal" id="p2p">
          <div>
            <span className="tag"><Sparkles size={12} aria-hidden="true" />Pattern to Purpose</span>
            <h3>Understanding what shaped us, and choosing what comes next.</h3>
            <p>
              P2P is an emerging learning approach designed to help people recognize patterns,
              understand where they came from, and consider which ones they want to carry forward.
            </p>
            <span className="status-pill">Early-stage: framework in development.</span>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />The destination is not endless reflection</span>
            It is greater awareness, responsible action, and purpose.
          </div>
        </div>

        <div className="feature-card reveal" id="rethinking-support">
          <div>
            <span className="tag"><Layers size={12} aria-hidden="true" />Rethinking Support</span>
            <h3>Looking beyond the immediate moment to the whole life.</h3>
            <p>
              We&rsquo;re exploring how education, foster care, families, and communities can
              better support identity, healthy relationships, agency, and preparation for
              adulthood.
            </p>
            <span className="status-pill">Early-stage exploration.</span>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />Our guiding question</span>
            What would it take for a young person to have what they need before they need it?
          </div>
        </div>

        <p className="lede" style={{ marginTop: "2.6rem" }}>
          Have an idea, a question, or a way you&rsquo;d like to help shape this work?
        </p>
        <a className="btn btn-ghost btn-sm" href={CONTACT_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1rem" }}>
          Share Your Perspective<ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
