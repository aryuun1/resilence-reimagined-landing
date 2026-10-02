const questions = [
  "What does the public misunderstand about young people who experience foster care?",
  "What concerns you most about placement changes, school changes, separation, or aging out?",
  "What should every young person navigating foster care hear from an adult?",
  "What should adults and systems stop assuming about young people in care?",
  "What should continue after a young person exits formal care?",
];

export function FosterCare() {
  return (
    <section id="foster-care" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow">Foster Care &amp; Youth Systems</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          A young person is more than a placement.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Foster care is personal to our founder, but the mission is larger: strengthen families
          before crisis when safety permits, support children and families honestly when care is
          necessary, preserve safe relationships and identity, and continue preparation and
          connection into adulthood.
        </p>

        <p className="capacity-intro" style={{ marginTop: "2.8rem" }}>
          Our work is guided by questions that continue beyond placement:
        </p>
        <div className="question-grid reveal">
          {questions.map((q) => (
            <div className="question-item" key={q}>
              <span>{q}</span>
            </div>
          ))}
        </div>

        <p className="problem-closing">
          Aging out should mark a legal transition, not the expiration of human connection.
        </p>
      </div>
    </section>
  );
}
