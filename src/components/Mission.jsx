const promises = [
  { from: "reaction", to: "good judgment" },
  { from: "old survival habits", to: "intentional choices" },
  { from: "isolation", to: "real relationships" },
  { from: "painful experience", to: "meaningful contribution" },
];

export function Mission() {
  return (
    <section id="mission">
      <div className="wrap">
        <span className="eyebrow">Who We Are</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          A growing organization working on youth development, family support, and systems reform.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined Foundation turns lived experience and behavioral science into
          real programs: education, tools, and partnerships that produce measurable outcomes for
          young people, families, and the institutions that serve them.
        </p>

        <div className="thesis-grid reveal" style={{ marginTop: "3.5rem" }}>
          <div className="thesis-card problem">
            <h3>The problem</h3>
            <p>
              Young people make major life decisions based on how their experiences, past
              relationships, trauma, biology, and culture, shape their choices. Meanwhile,
              institutions tend to track removals, placements, and paperwork compliance, and
              lose sight of identity and connection to a community.
            </p>
          </div>
          <div className="thesis-card answer">
            <h3>Our answer</h3>
            <p>
              We help them protect their identity. We prepare people earlier, teach good
              decision making before asking for compliance, and measure whether lives actually
              get more stable, connected, and self directed over time.
            </p>
          </div>
        </div>

        <div className="reveal">
          <p
            className="lede"
            style={{
              marginTop: "3.5rem",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              lineHeight: 1.55,
              maxWidth: "52ch",
            }}
          >
            Here is what we work toward, together:
          </p>
          <div className="promise-list">
            {promises.map((row) => (
              <div className="promise-row" key={row.from}>
                <span className="from">{row.from}</span>
                <span className="arrow">&rarr;</span>
                <span className="to">{row.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
