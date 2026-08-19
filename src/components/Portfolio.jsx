import { Sparkles, Target } from "lucide-react";

const pcards = [
  {
    title: "Identity, Family and Relationship Continuity",
    text: "Education, guidance for organizations, and communication practices that protect safe, stable connections before a crisis happens, during placement changes, and as young people age out of care.",
    status: "Active. Resources and partnerships expanding.",
  },
  {
    title: "Institutional Learning and Systems Change",
    text: "Training, advising, and policy work that helps schools, child welfare agencies, and communities improve their practices and hold themselves accountable for real outcomes.",
    status: "Active. Expanding implementation pathways.",
  },
  {
    title: "DQ REALITY Research and Discernment Development",
    text: "Develops and tests the Discernment Quotient, a measure of decision quality, using documented evidence and validation standards.",
    status: "Research underway. Measures still developing.",
  },
  {
    title: "Responsible AI and Human Futures",
    text: "We use AI to help organize patterns, support education, and inform decisions, always under human oversight and rules that protect personal identity.",
    status: "Direction set. Tools and safeguards expanding.",
  },
  {
    title: "Whole Person Energy and Wellbeing",
    text: "Education covering mind, body, brain, nervous system, and spirit, including nutrition, sleep, movement, and hormone health, taught as biological science.",
    status: "Concept defined. Curriculum expanding.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <span className="eyebrow">Portfolio</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "24ch" }}>
          Programs we have started, and are still building.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          The Foundation oversees all of these initiatives and holds public trust for them. Each
          one below is real, ongoing work. We describe it honestly, at the stage it is actually
          at, not as a finished promise.
        </p>

        <div className="feature-card feature-card-fusion reveal">
          <img
            src="/images/Team Fusion - Background Image.jpeg"
            alt=""
            aria-hidden="true"
            className="feature-card-bg"
          />
          <div>
            <img src="/images/IMG_1336.jpeg" alt="INDIGLOW Initiative logo" className="feature-logo" />
            <span className="tag"><Sparkles size={12} aria-hidden="true" />Our Main Youth Program</span>
            <h3>INDIGLOW Initiative</h3>
            <p>
              Helps young people understand who they are beyond their circumstances and labels,
              and builds the self understanding, connection, and hope they need to shape a
              meaningful future.
            </p>
            <span className="status-pill">Running now. Curriculum and delivery expanding.</span>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />Purpose</span>
            We look at identity, wellbeing, creativity, and future possibility together, covering
            mind, body, brain, nervous system, and spirit, without reducing a person to just one
            of those parts.
          </div>
        </div>

        <div className="feature-card reveal">
          <div>
            <span className="tag"><Sparkles size={12} aria-hidden="true" />Education Program</span>
            <h3>P2P: Pattern to Purpose</h3>
            <p>
              Presentations and activities that help people recognize the patterns shaping their
              choices, understand where they come from, and redirect them. Built for youth,
              caregivers, educators, and leaders.
            </p>
            <span className="status-pill">Structure set. New presentations and activities in progress.</span>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />Program Promise</span>
            See the pattern. Understand its purpose. Resolve what no longer serves. Choose what
            comes next.
          </div>
        </div>

        <div className="grid-cards reveal">
          {pcards.map((card) => (
            <div className="pcard" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
              <span className="status-pill">{card.status}</span>
            </div>
          ))}
          <div className="pcard" style={{ justifyContent: "center", background: "var(--surface-soft)", borderStyle: "dashed" }}>
            <h4 style={{ color: "var(--ink-soft)" }}>Foster care reform and education reform run through every program above.</h4>
            <p>These are not separate items on a list. They are the outcome every program is measured against.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
