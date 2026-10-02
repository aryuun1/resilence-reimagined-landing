import { ArrowRight } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

const areas = [
  "Stronger family support networks and earlier access to concrete help",
  "Youth voice, identity, and decision knowledge",
  "Safe continuity with siblings, kin, schools, mentors, and community",
  "Fewer avoidable placement and school changes",
  "Stable reunification and enduring adult connection beyond case closure",
];

export function Impact() {
  return (
    <section id="impact">
      <div className="wrap">
        <span className="eyebrow">Impact &amp; Research</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          Measuring more than activity.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          The Foundation is being built around a simple principle: <strong style={{ color: "var(--ink)" }}>human outcomes matter.</strong>{" "}
          As programs, partnerships, and research expand, we intend to learn not simply how many
          people participated, but what changed.
        </p>

        <p className="capacity-intro" style={{ marginTop: "2.6rem" }}>Our developing evaluation areas include:</p>
        <div className="capacity-grid reveal">
          {areas.map((area, i) => (
            <div className="capacity-item" key={area} data-accent={i % 3}>
              <span>{area}</span>
            </div>
          ))}
        </div>

        <p className="lede" style={{ marginTop: "2rem" }}>
          We believe responsible growth means testing what we build, listening to the people
          affected by it, reporting what we learn, and changing course when evidence requires it.
        </p>

        <a className="btn btn-primary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.8rem" }}>
          Explore Our Research &amp; Learning<ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
