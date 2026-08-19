import { Building2, GraduationCap, Handshake, User } from "lucide-react";

const audiences = [
  {
    label: "Individuals",
    text: "Help fund the early build: launching programs, reaching more people, and evaluating what works. This is flexible support that builds lasting infrastructure, not a one time event.",
    icon: User,
  },
  {
    label: "Foundations and Grantmakers",
    text: "Support a clear theory of change with defined populations, credible activities, responsible measurement, and real safeguards for the people we serve.",
    icon: Building2,
  },
  {
    label: "Corporate Partners",
    text: "Offer sponsorship, employee expertise, technology, venues, or media to support youth development and responsible innovation.",
    icon: Handshake,
  },
  {
    label: "Schools and Child Welfare Leaders",
    text: "Start with a presentation, a facilitated activity, an advisory session, or a curriculum pilot, for students, educators, leadership, or policy teams.",
    icon: GraduationCap,
  },
];

export function Audiences() {
  return (
    <section>
      <div className="wrap">
        <span className="eyebrow">Ways to Help</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          Ways to work with us.
        </h2>
        <div className="aud-grid reveal">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div className="aud-card" key={aud.label}>
                <span className="aud-icon"><Icon size={18} aria-hidden="true" /></span>
                <span className="eyebrow">{aud.label}</span>
                <p>{aud.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
