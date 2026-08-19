import { Compass, Fingerprint, Flag, HeartHandshake, Scale, Search, Users } from "lucide-react";

const values = [
  {
    title: "Reality",
    text: "We seek to understand what is actually happening, not simply what is familiar, convenient, or assumed.",
    icon: Search,
  },
  {
    title: "Empathy",
    text: "Understanding someone's experience matters. Empathy expands context without eliminating responsibility or distorting reality.",
    icon: HeartHandshake,
  },
  {
    title: "Authentic Identity",
    text: "A person's history may influence them, but it does not contain the entirety of who they are.",
    icon: Fingerprint,
  },
  {
    title: "Discernment",
    text: "Feelings, experiences, information, expertise, intuition, data, and technology can all provide useful signals. Wise decisions require examining those signals in context.",
    icon: Scale,
  },
  {
    title: "Connection",
    text: "Healthy human connection can change the trajectory of a life. We value relationships that protect dignity, authenticity, appropriate boundaries, and belonging.",
    icon: Users,
  },
  {
    title: "Agency",
    text: "Knowledge should expand a person's ability to participate meaningfully in the decisions shaping their life.",
    icon: Compass,
  },
  {
    title: "Purpose",
    text: "Resilience is not complete when someone simply survives. Experience can become wisdom, wisdom can become action, and action can become contribution.",
    icon: Flag,
  },
];

export function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <span className="eyebrow">Values</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          How we work matters as much as what we build.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Our work is grounded in principles that protect dignity, truth, agency, connection,
          responsibility, and possibility.
        </p>

        <div className="value-grid reveal">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div className="value-card" key={value.title}>
                <span className="value-icon"><Icon size={18} aria-hidden="true" /></span>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
