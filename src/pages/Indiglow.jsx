import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

const pillars = [
  {
    title: "Identity",
    text: "Understanding who you are beneath every label, placement, or chapter someone else wrote.",
  },
  {
    title: "Connection",
    text: "Building relationships that hold steady through change and stay honest in hard moments.",
  },
  {
    title: "Discernment",
    text: "Learning to read a situation clearly and choose a response that serves the life you want.",
  },
  {
    title: "Wellbeing",
    text: "Tending to the mind and body that carry you through every season.",
  },
  {
    title: "Creativity",
    text: "Finding new language and form for experiences that once felt impossible to name.",
  },
  {
    title: "Purpose",
    text: "Turning insight into direction, and direction into meaningful action.",
  },
];

export function Indiglow() {
  return (
    <>
      <header className="indiglow-hero">
        <div className="wrap indiglow-hero-inner">
          <img src="/images/IMG_1336.jpeg" alt="INDIGLOW logo" className="indiglow-hero-img" />
          <span className="eyebrow">An Initiative of Resilience Reimagined</span>
          <h1>INDIGLOW</h1>
          <p className="lede" style={{ color: "var(--ink-soft)", margin: "1rem auto 0", maxWidth: "48ch" }}>
            A whole-person learning experience helping young people understand themselves,
            their relationships, and their world.
          </p>
          <span className="status-pill">In early development.</span>
        </div>
      </header>

      <section id="indiglow-about">
        <div className="wrap">
          <span className="eyebrow">The Idea</span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "28ch" }}>
            Helping young people understand themselves and their world.
          </h2>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            INDIGLOW is being developed as a whole-person learning experience focused on
            identity, connection, discernment, wellbeing, creativity, and purpose. It meets young
            people where they are, offering language and tools for understanding what shaped them
            and choosing where they go next.
          </p>

          <div className="feature-card reveal" style={{ marginTop: "2.5rem" }}>
            <div>
              <h3>Every young person carries a story worth understanding.</h3>
              <p>
                INDIGLOW gives that story room to be explored, questioned, and reframed, alongside
                trusted adults and peers who are doing the same work.
              </p>
            </div>
            <div className="feature-side">
              <span>Built around a simple belief</span>
              No circumstance, label, placement, diagnosis, reaction, or decision made by someone
              else tells the whole story of who a young person is.
            </div>
          </div>
        </div>
      </section>

      <section id="indiglow-pillars" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="eyebrow">Six Threads, One Whole Person</span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
            The pillars shaping the experience.
          </h2>

          <div className="value-grid reveal" style={{ marginTop: "2rem" }}>
            {pillars.map((pillar) => (
              <div className="value-card" key={pillar.title}>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="indiglow-cta" style={{ textAlign: "center" }}>
        <div className="wrap">
          <p className="lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
            Have an idea, a question, or a way you&rsquo;d like to help shape this work?
          </p>
          <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <a className="btn btn-primary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Share Your Perspective<ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link className="btn btn-ghost" to="/work">
              See All Our Work<ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
