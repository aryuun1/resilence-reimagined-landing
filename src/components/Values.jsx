import { Anchor, Brain, Compass, ListChecks, Sparkles, Sprout } from "lucide-react";

const flow = [
  {
    role: "Philosophy",
    title: "The Verity Theory",
    icon: Sparkles,
  },
  {
    role: "Capacity",
    title: "Discernment Intelligence",
    icon: Brain,
  },
  {
    role: "Method",
    title: "The REALITY Method",
    text: "Seven steps for examining a pattern, from first noticing it to accepting what is actually true.",
    icon: ListChecks,
  },
  {
    role: "Instrument",
    title: "The Calibrated Compass",
    text: "A tool for getting back on track when old habits, new information, or changing circumstances throw you off.",
    icon: Compass,
  },
  {
    role: "Embodied Action",
    title: "The RECLAIM Model",
    text: "Seven commitments for acting on what you have learned, from staying grounded to building momentum.",
    icon: Anchor,
  },
  {
    role: "Outcome",
    title: "Resilience",
    text: "The ability to stay grounded, connected, and focused on what matters, even through hardship and change.",
    icon: Sprout,
  },
];

export function Values() {
  return (
    <section
      id="values"
      style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <span className="eyebrow">THE FRAMEWORK</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          A framework you can follow step by step, not just a slogan.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Philosophy becomes capacity, then method, then a practical tool, then action, and
          finally an outcome.
        </p>

        <div className="flow-scroll reveal">
          <div className="flow">
            {flow.map((node) => {
              const Icon = node.icon;
              return (
                <div className="flow-node" key={node.title}>
                  <span className="fn-icon"><Icon size={18} aria-hidden="true" /></span>
                  <span className="fn-role">{node.role}</span>
                  <h4>{node.title}</h4>
                  {node.text && <p>{node.text}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
