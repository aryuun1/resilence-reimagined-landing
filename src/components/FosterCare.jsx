import { MessageCircleQuestion } from "lucide-react";

const questions = [
  "Does the young person know who they are?",
  "Do they have safe and meaningful relationships?",
  "Are they prepared to navigate adulthood?",
  "Do they have people they can call?",
  "Do they have a future they can imagine themselves creating?",
];

export function FosterCare() {
  return (
    <section id="foster-care" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow">Foster Care &amp; Youth Systems</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          A young person is more than a placement.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Safety matters. So do identity, education, relationships, agency, wellbeing, belonging,
          purpose, and what happens after formal support ends. Resilience Reimagined Foundation is
          committed to advancing a more whole-person approach to foster care and youth-serving
          systems.
        </p>

        <p className="capacity-intro" style={{ marginTop: "2.8rem" }}>
          We are particularly interested in questions that continue beyond placement:
        </p>
        <div className="question-grid reveal">
          {questions.map((q) => (
            <div className="question-item" key={q}>
              <MessageCircleQuestion size={18} aria-hidden="true" />
              <span>{q}</span>
            </div>
          ))}
        </div>

        <p className="problem-closing">
          Aging out of a system should not mean aging out of connection, guidance, or possibility.
        </p>
      </div>
    </section>
  );
}
