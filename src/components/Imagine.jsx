import { Sparkles } from "lucide-react";

const imagineLines = [
  "A world that needs far less foster care because families receive support before crisis becomes separation.",
  "A world where parents can say, “We need help,” and their community answers, “We are here.”",
  "Where help looks like an honest conversation, or one steady hand reaching through a difficult season.",
  "Where neighbors help each other even when they disagree, because our shared humanity is greater than our differences.",
  "Where children remain connected to their siblings, their history, their schools, their culture, and the people who know their names and recognize their potential.",
  "Where foster care, when safety truly requires it, becomes a carefully supported bridge, surrounded by family, connection, and community.",
  "Young people entering adulthood with practical knowledge, authentic identity, trusted relationships, and the confidence to ask for guidance when life changes.",
  "Measuring success through families strengthened, relationships preserved, communities connected, and generations changed.",
];

export function Imagine() {
  return (
    <section id="imagine">
      <div className="wrap">
        <span className="eyebrow">Our Vision</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", fontStyle: "italic" }}>
          Imagine&hellip;
        </h2>

        <div className="whatif-block reveal" style={{ marginTop: "2rem" }}>
          <ul className="whatif-list">
            {imagineLines.map((line) => (
              <li key={line}>
                <Sparkles size={17} aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="problem-copy reveal" style={{ marginTop: "2rem" }}>
          <p>This is the future Resilience Reimagined is building.</p>
          <p>
            It will take families, neighbors, educators, caregivers, leaders, funders, and
            communities choosing to build it together.
          </p>
        </div>
      </div>
    </section>
  );
}
