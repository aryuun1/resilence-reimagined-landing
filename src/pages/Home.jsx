import { ArrowRight, Compass, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { Imagine } from "../components/Imagine.jsx";
import { QuoteBand } from "../components/QuoteBand.jsx";
import { FinalCta } from "../components/FinalCta.jsx";

const areas = [
  {
    title: "INDIGLOW",
    subtitle: "Helping young people better understand themselves and their world.",
    text: "INDIGLOW is being developed as a whole-person learning experience focused on identity, connection, discernment, wellbeing, creativity, and purpose.",
    icon: Sparkles,
    linkLabel: "Learn about INDIGLOW",
  },
  {
    title: "Pattern to Purpose",
    subtitle: "Understanding what shaped us, and choosing what comes next.",
    text: "P2P is an emerging learning approach designed to help people recognize patterns, understand where they came from, and consider which ones they want to carry forward.",
    icon: Compass,
    linkLabel: "Explore Pattern to Purpose",
  },
  {
    title: "Rethinking Support",
    subtitle: "Looking beyond the immediate moment to the whole life.",
    text: "We're exploring how education, foster care, families, and communities can better support identity, healthy relationships, agency, and preparation for adulthood.",
    icon: Layers,
    linkLabel: "Learn about Our Work",
  },
];

export function Home() {
  return (
    <>
      <Hero />

      <section id="premise">
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "32ch" }}>
            What if we prepared young people for life, not just what comes next on paper?
          </h2>
          <div className="vision-body" style={{ marginLeft: 0, marginRight: 0 }}>
            <p>
              Growing up means navigating relationships, identity, uncertainty, technology,
              family, school, loss, change, and countless decisions.
            </p>
            <p>Some young people have to navigate even more.</p>
            <p>
              We believe young people deserve practical ways to understand what shapes them,
              recognize patterns, make thoughtful choices, build healthy connections, and imagine
              what&rsquo;s possible for their future.
            </p>
          </div>
          <p className="problem-emphasis" style={{ marginTop: "1.6rem" }}>
            That&rsquo;s what we&rsquo;re working to build.
          </p>
        </div>
      </section>

      <section id="areas" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <img
            src="/images/foster1.jpg"
            alt="A diverse group of young people smiling together"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "560px",
              aspectRatio: "3 / 2",
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: "14px",
              border: "1px solid var(--line)",
              margin: "0 auto 2.4rem",
            }}
          />
          <span className="eyebrow">Where We&rsquo;re Starting</span>
          <div className="value-grid reveal" style={{ marginTop: "2rem" }}>
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <div className="value-card" key={area.title}>
                  <span className="value-icon"><Icon size={18} aria-hidden="true" /></span>
                  <h4>{area.title}</h4>
                  <p style={{ fontStyle: "italic", color: "var(--ink)" }}>{area.subtitle}</p>
                  <p>{area.text}</p>
                  <Link className="btn btn-ghost btn-sm" to="/work" style={{ marginTop: "1.1rem" }}>
                    {area.linkLabel}<ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Imagine />
      <QuoteBand />

      <FinalCta />
    </>
  );
}
