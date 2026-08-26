import { HelpCircle } from "lucide-react";

const influences = [
  "Mind", "Body", "Brain", "Nervous system", "Soul", "Spirit", "Energy", "Nutrition",
  "Identity", "Relationships", "Environment", "Technology", "Power", "Meaning",
];

const whatIfs = [
  "What if the life a young person is living is being shaped by a story they did not consciously choose?",
  "What knowledge would help them see the pattern, test the story, and reclaim authorship of what comes next?",
  "What if the institutions meant to help are also repeating a pattern they have mistaken for success?",
  "What if the measure of a system was not simply whether a procedure was completed, but whether a young person became more capable of building a meaningful life?",
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
          <p>Approaches to resilience have often separated what functions together.</p>
          <p>
            They tend to measure events, placements, compliance, or recovery time more readily than
            discernment, relationship continuity, pattern resolution, decision quality, and
            purposeful contribution. A placement count cannot show whether siblings stayed
            connected.
          </p>
          <p className="problem-emphasis">We want to change that.</p>
        </div>

        <div className="whatif-block reveal">
          <h3>The question that keeps returning</h3>
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
