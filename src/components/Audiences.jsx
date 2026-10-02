const audiences = [
  {
    label: "Individuals",
    text: "Help fund the early build: launching programs, reaching more people, and evaluating what works. This is flexible support that builds lasting infrastructure, not a one time event.",
  },
  {
    label: "Foundations and Grantmakers",
    text: "Support a clear theory of change with defined populations, credible activities, responsible measurement, and real safeguards for the people we serve.",
  },
  {
    label: "Corporate Partners",
    text: "Offer sponsorship, employee expertise, technology, venues, or media to support youth development and responsible innovation.",
  },
  {
    label: "Schools and Child Welfare Leaders",
    text: "Start with a presentation, a facilitated activity, an advisory session, or a curriculum pilot, for students, educators, leadership, or policy teams.",
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
          {audiences.map((aud) => (
            <div className="aud-card" key={aud.label}>
              <span className="eyebrow">{aud.label}</span>
              <p>{aud.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
