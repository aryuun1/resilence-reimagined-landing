import { Brain, Eye, GitBranch, Heart, HelpCircle, RefreshCw, Zap } from "lucide-react";

const steps = [
  { title: "Recognize", text: "Patterns as they take shape.", icon: Eye },
  { title: "Examine", text: "Objectively, before assuming.", icon: Brain },
  { title: "Acknowledge", text: "Influence, and where it comes from.", icon: HelpCircle },
  { title: "Liberate", text: "Intentionally from what no longer serves.", icon: GitBranch },
  { title: "Integrate", text: "Wisdom into the way forward.", icon: RefreshCw },
  { title: "Trust", text: "Discernment over certainty.", icon: Heart },
  { title: "Yield", text: "To truth, even when it is inconvenient.", icon: Zap },
];

export function Approach() {
  return (
    <section id="approach" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow">Our Approach: REALITY</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          From experience to agency.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          We believe experience can become a source of wisdom without becoming a permanent
          identity. Patterns that develop during difficult circumstances may once have served an
          important purpose, and understanding where they came from matters. But understanding a
          pattern is not the same as being governed by it forever. The Foundation develops
          Discernment Intelligence as a human capacity for young people, and for the adults and
          systems around them, using REALITY as a working method:
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
          Discernment is the disciplined pause between signal and verdict. This is resilience as a
          living capacity, not a label someone earns because they survived something difficult.
        </p>
      </div>
    </section>
  );
}
