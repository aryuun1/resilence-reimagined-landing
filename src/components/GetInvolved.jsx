import { BookOpen, FlaskConical, Handshake, ShieldCheck, Unlock, Users } from "lucide-react";

const supports = [
  {
    title: "Programs",
    text: "Curriculum, presentations, activities, facilitator resources, youth learning experiences, and accessible educational materials.",
    icon: BookOpen,
  },
  {
    title: "Access",
    text: "Opportunities to make Foundation education and programming available to communities and participants who might otherwise be unable to access it.",
    icon: Unlock,
  },
  {
    title: "Research & Evaluation",
    text: "Responsible program evaluation, research development, measurement, learning, and publication.",
    icon: FlaskConical,
  },
  {
    title: "People",
    text: "Educators, facilitators, researchers, youth advisers, lived-experience contributors, safeguarding expertise, and operational support.",
    icon: Users,
  },
  {
    title: "Partnerships",
    text: "Collaboration with schools, child-welfare organizations, communities, researchers, public institutions, and mission-aligned organizations.",
    icon: Handshake,
  },
  {
    title: "Responsible Infrastructure",
    text: "Governance, safeguarding, privacy, technology controls, evaluation systems, and the operational foundation required for sustainable growth.",
    icon: ShieldCheck,
  },
];

export function GetInvolved() {
  return (
    <section id="partner">
      <div className="wrap">
        <span className="eyebrow">Get Involved</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          Help build what young people should have before they need it.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined Foundation is in an active stage of building and expanding its
          programs, curriculum, partnerships, research, evaluation, and infrastructure. Founding
          support helps move this work from architecture into responsibly developed experiences
          that can reach young people, families, educators, communities, and institutions.
        </p>

        <p className="capacity-intro" style={{ marginTop: "2.8rem" }}>Your support helps build:</p>
        <div className="value-grid reveal">
          {supports.map((item) => {
            const Icon = item.icon;
            return (
              <div className="value-card" key={item.title}>
                <span className="value-icon"><Icon size={18} aria-hidden="true" /></span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
