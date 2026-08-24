import { ArrowRight, Compass, Eye, GitBranch, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { FinalCta } from "../components/FinalCta.jsx";

const frameworkPreview = [
  { text: "Recognize what is happening", icon: Eye },
  { text: "Question assumptions", icon: Compass },
  { text: "Choose rather than react", icon: GitBranch },
  { text: "Connect without losing identity", icon: Heart },
];

export function Home() {
  return (
    <>
      <Hero />

      <section id="mission-teaser">
        <div className="wrap">
          <span className="eyebrow">Mission</span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
            Preparing young people for life, not only for crisis.
          </h2>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Our mission is to transform how young people are educated, supported, and prepared for
            the realities of life, bringing together whole-person education, behavioral science,
            lived experience, and relationship-centered practice to strengthen the capacities that
            help people navigate adversity and change.
          </p>
          <Link className="btn btn-ghost btn-sm" to="/about" style={{ marginTop: "1.4rem" }}>
            Read our mission &amp; vision<ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="framework-teaser" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="eyebrow">Our Framework</span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "24ch" }}>
            From experience to agency.
          </h2>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Our work helps people develop the capacity to recognize, question, choose, and
            transform, turning experience into wisdom instead of a permanent identity.
          </p>
          <div className="capacity-grid reveal" style={{ marginTop: "2rem" }}>
            {frameworkPreview.map((step, i) => {
              const Icon = step.icon;
              return (
                <div className="capacity-item" key={step.text} data-accent={i % 3}>
                  <Icon size={17} aria-hidden="true" />
                  <span>{step.text}</span>
                </div>
              );
            })}
          </div>
          <Link className="btn btn-ghost btn-sm" to="/approach" style={{ marginTop: "1.6rem" }}>
            See the full framework<ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="work-teaser">
        <div className="wrap">
          <span className="eyebrow">Our Work</span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "24ch" }}>
            One mission. Multiple pathways to change.
          </h2>
          <div className="value-grid reveal">
            <div className="value-card">
              <span className="value-icon"><Sparkles size={18} aria-hidden="true" /></span>
              <h4>INDIGLOW Initiative</h4>
              <p>
                Our flagship youth initiative, helping young people discover who they are and who
                they can become through educational experiences, activities, and mentoring.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon"><GitBranch size={18} aria-hidden="true" /></span>
              <h4>P2P: Pattern to Purpose</h4>
              <p>
                Recognize the pattern, change what comes next. Presentations, guided activities,
                and facilitated learning that turn recurring patterns into intentional choices.
              </p>
            </div>
          </div>
          <Link className="btn btn-ghost btn-sm" to="/work" style={{ marginTop: "1.8rem" }}>
            Explore our full portfolio<ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
