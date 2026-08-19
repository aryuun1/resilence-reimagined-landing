import { HelpCircle } from "lucide-react";

const influences = [
  "Stress", "Relationships", "Family experiences", "Trauma", "Physical wellbeing",
  "Emotion", "Culture", "Technology", "Beliefs", "Environment", "Power", "Belonging",
];

const whatIfs = [
  "What if we taught them how to recognize patterns before those patterns became repeated outcomes?",
  "What if identity was protected rather than reduced to a label?",
  "What if connection was treated as essential to development?",
  "What if young people learned how to question information, including information from technology, without losing trust in themselves?",
  "What if the measure of a system was not simply whether a procedure was completed, but whether a human being became more capable of building a meaningful life?",
];

export function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="wrap">
        <span className="eyebrow">The Problem</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "32ch" }}>
          Young people are asked to navigate a complex world without always being given the tools
          to understand it.
        </h2>
        <p className="lede problem-lede">
          Life-changing decisions are often made while young people are still learning how to
          understand themselves.
        </p>

        <div className="influence-cloud reveal">
          {influences.map((word) => (
            <span className="influence-chip" key={word}>{word}</span>
          ))}
        </div>

        <div className="problem-copy reveal">
          <p>All can influence what we perceive, how we respond, and what we believe is possible.</p>
          <p>
            Yet young people may move through education, foster care, family transitions, and
            other systems without ever receiving practical education about how these influences
            interact.
          </p>
          <p className="problem-emphasis">We want to change that.</p>
        </div>

        <div className="whatif-block reveal">
          <h3>What if we prepared young people earlier?</h3>
          <ul className="whatif-list">
            {whatIfs.map((q) => (
              <li key={q}>
                <HelpCircle size={17} aria-hidden="true" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="problem-closing reveal">That is what we mean by Resilience Reimagined.</p>
      </div>
    </section>
  );
}
