import { LotusWatermark } from "./LotusIcon.jsx";

export function Vision() {
  return (
    <section className="vision reveal" id="vision">
      <LotusWatermark />
      <div className="wrap">
        <span className="eyebrow">A Different Vision of Resilience</span>
        <blockquote className="vision-lead">Resilience should not mean learning to endure more.</blockquote>
        <p className="lede" style={{ margin: "1.4rem auto 0" }}>
          It should mean developing the knowledge and capacity to understand yourself, recognize
          patterns, navigate uncertainty, make thoughtful choices, remain connected to who you are,
          and move forward with purpose.
        </p>
        <div className="vision-body">
          <p>
            We believe young people deserve these capacities <strong>before crisis defines the
            conversation</strong>.
          </p>
          <p>
            And we believe the families, schools, communities, and systems surrounding them need
            better ways to support the whole person, not simply respond to the next event.
          </p>
        </div>
        <p className="vision-closing">
          That is the future Resilience Reimagined Foundation is working to build.
        </p>
      </div>
    </section>
  );
}
