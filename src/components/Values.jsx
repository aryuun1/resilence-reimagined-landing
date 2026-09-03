import { Compass, Fingerprint, Flag, Search, Users } from "lucide-react";

const values = [
  {
    title: "Identity matters.",
    text: "A circumstance, label, diagnosis, placement, mistake, or difficult chapter should never become the definition of a person.",
    icon: Fingerprint,
  },
  {
    title: "Connection matters.",
    text: "Healthy relationships can be an important part of resilience.",
    icon: Users,
  },
  {
    title: "Understanding matters.",
    text: "Recognizing what influences our thoughts, reactions, and choices can create room for different choices.",
    icon: Search,
  },
  {
    title: "Agency matters.",
    text: "Young people deserve opportunities to participate meaningfully in decisions about their lives.",
    icon: Compass,
  },
  {
    title: "Purpose matters.",
    text: "Resilience isn't only about getting through something. It's also about what we choose to build afterward.",
    icon: Flag,
  },
];

export function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <h2 style={{ fontSize: "clamp(1.75rem,3.4vw,2.4rem)" }}>What we believe.</h2>

        <div className="value-grid reveal" style={{ marginTop: "2rem" }}>
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
