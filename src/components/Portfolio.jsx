import { ArrowRight, FlaskConical, GraduationCap, Heart, Sparkles, Target } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

const pcards = [
  {
    title: "Identity & Relationship Continuity",
    subtitle: "Connection matters.",
    text: "Major life transitions can disrupt more than a person's surroundings. They can disrupt identity, history, belonging, and meaningful relationships. This is especially important for young people experiencing foster care, school changes, family separation, placement transitions, aging out, and early adulthood. Our work advances approaches that protect authentic identity and help preserve, or intentionally create, safe, secure, meaningful relationships through change.",
    closing: "Because protecting a young person should not require losing sight of the whole person.",
    icon: Heart,
  },
  {
    title: "Education & Systems Change",
    subtitle: "Stronger young people need stronger systems around them.",
    text: "Individual resilience cannot be the answer to every institutional problem. We work toward better educational and organizational practices across schools, child welfare, community organizations, and other systems serving young people. Our developing work includes student education, educator development, leadership learning, institutional partnerships, research, policy education, and approaches that encourage organizations to evaluate the human consequences of their decisions.",
    closing: "The goal is not simply better compliance. It is better lives.",
    icon: GraduationCap,
  },
  {
    title: "Research & Responsible Innovation",
    subtitle: "Building what comes next, responsibly.",
    text: "Good intentions are not enough. Resilience Reimagined Foundation is committed to learning, research, evaluation, responsible technology, and the careful development of new approaches to understanding resilience and decision-making. Our research agenda includes the development and study of Discernment Intelligence, decision quality, whole-person development, relationship continuity, and meaningful human outcomes. Emerging measures remain developmental until they have been appropriately tested and validated. Technology, including artificial intelligence, may help people organize information, identify patterns, and support learning. But technology should support human judgment, not replace it.",
    closing: "Human beings remain accountable for decisions about human lives.",
    icon: FlaskConical,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <span className="eyebrow">Portfolio / Our Work</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "24ch" }}>
          One mission. Multiple pathways to change.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined Foundation is building an interconnected portfolio of education,
          programs, research, partnerships, and responsible innovation.
        </p>

        <div className="feature-card feature-card-fusion reveal" id="indiglow">
          <img
            src="/images/Team Fusion - Background Image.jpeg"
            alt=""
            aria-hidden="true"
            className="feature-card-bg"
          />
          <div>
            <img src="/images/IMG_1336.jpeg" alt="INDIGLOW Initiative logo" className="feature-logo" />
            <span className="tag"><Sparkles size={12} aria-hidden="true" />Our Flagship Youth Initiative</span>
            <h3>INDIGLOW Initiative</h3>
            <p>
              Helping young people discover who they are, and who they can become. INDIGLOW
              creates engaging opportunities for young people to explore identity, inner
              awareness, discernment, relationships, wellbeing, creativity, technology, purpose,
              and future possibility.
            </p>
            <p>
              Through educational experiences, activities, mentoring, media, and developing
              learning resources, INDIGLOW helps young people strengthen the inner capacities
              needed to navigate the outer world.
            </p>
            <span className="status-pill">Running now. Curriculum and delivery expanding.</span>
            <div style={{ marginTop: "1.3rem" }}>
              <a className="btn btn-ghost btn-sm" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                Discover INDIGLOW<ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />INDIGLOW is built around a simple belief</span>
            No circumstance, label, placement, diagnosis, reaction, or decision made by someone
            else tells the whole story of who a young person is.
          </div>
        </div>

        <div className="feature-card reveal" id="p2p">
          <div>
            <span className="tag"><Sparkles size={12} aria-hidden="true" />Education Program</span>
            <h3>P2P: Pattern to Purpose</h3>
            <p>
              Recognize the pattern. Change what comes next. Patterns shape lives. Some begin as
              ways of adapting to circumstances we could not control. Others emerge through
              relationships, beliefs, environments, habits, or repeated experiences.
            </p>
            <p>
              Through presentations, guided activities, reflection, and facilitated learning,
              participants explore what shaped recurring patterns, examine whether those patterns
              still serve them, and develop more intentional ways forward.
            </p>
            <span className="status-pill">Structure set. New presentations and activities in progress.</span>
            <div style={{ marginTop: "1.3rem" }}>
              <a className="btn btn-ghost btn-sm" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                Explore Pattern to Purpose<ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="feature-side">
            <span><Target size={12} aria-hidden="true" />The destination is not endless reflection</span>
            It is greater awareness, responsible action, and purpose.
          </div>
        </div>

        <div className="grid-cards reveal">
          {pcards.map((card) => {
            const Icon = card.icon;
            return (
              <div className="pcard" key={card.title}>
                <span className="pcard-icon"><Icon size={17} aria-hidden="true" /></span>
                <h4>{card.title}</h4>
                <p className="pcard-subtitle">{card.subtitle}</p>
                <p>{card.text}</p>
                <p className="pcard-closing">{card.closing}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
