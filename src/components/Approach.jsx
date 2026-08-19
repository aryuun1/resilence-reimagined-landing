import { Brain, Eye, GitBranch, Heart, HelpCircle, RefreshCw, Sparkles, Zap } from "lucide-react";

const steps = [
  { title: "Recognize", text: "What is happening.", icon: Eye },
  { title: "Understand", text: "The influences and patterns behind it.", icon: Brain },
  { title: "Question", text: "Assumptions and examine reality.", icon: HelpCircle },
  { title: "Choose", text: "Rather than simply react.", icon: GitBranch },
  { title: "Recalibrate", text: "When circumstances or information change.", icon: RefreshCw },
  { title: "Connect", text: "Without abandoning authentic identity.", icon: Heart },
  { title: "Act", text: "With greater alignment and responsibility.", icon: Zap },
  { title: "Transform", text: "Experience into purposeful contribution.", icon: Sparkles },
];

export function Approach() {
  return (
    <section id="approach" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow">Our Approach</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          From experience to agency.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          We believe experience can become a source of wisdom without becoming a permanent
          identity. Patterns that develop during difficult circumstances may once have served an
          important purpose, and understanding where they came from matters. But understanding a
          pattern is not the same as being governed by it forever. Our work helps people develop
          the capacity to:
        </p>

        <div className="flow-scroll reveal">
          <div className="flow">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div className="flow-node" key={step.title}>
                  <span className="fn-icon"><Icon size={18} aria-hidden="true" /></span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="lede" style={{ marginTop: "3rem", maxWidth: "56ch" }}>
          This is resilience as a living capacity, not a label someone earns because they survived
          something difficult.
        </p>
      </div>
    </section>
  );
}
