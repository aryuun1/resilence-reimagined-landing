import { LotusWatermark } from "./LotusIcon.jsx";

export function Vision() {
  return (
    <section className="vision reveal" id="vision">
      <LotusWatermark />
      <div className="wrap">
        <span className="eyebrow">Why Resilience Reimagined?</span>
        <blockquote className="vision-lead">Life shapes us.</blockquote>
        <p className="lede" style={{ margin: "1.4rem auto 0" }}>
          Our families shape us. Our relationships, environments, experiences, losses,
          opportunities, technology, and the stories we tell ourselves all play a part.
        </p>
        <img
          src="/images/foster2.jpg"
          alt="Children sharing a quiet moment together"
          style={{
            display: "block",
            width: "min(100%, 420px)",
            aspectRatio: "4 / 3",
            objectFit: "cover",
            borderRadius: "14px",
            border: "1px solid var(--line)",
            boxShadow: "0 14px 28px var(--shadow)",
            margin: "2.4rem auto 0",
          }}
        />
        <div className="vision-body">
          <p>But what shapes us doesn&rsquo;t have to decide everything that comes next.</p>
          <p>
            Resilience Reimagined was created around a simple idea: when people better understand
            themselves and what has shaped them, they may be better equipped to make intentional
            choices about who they want to become.
          </p>
        </div>
        <p className="vision-closing">
          We&rsquo;re starting by developing educational experiences and tools for young people,
          while exploring ways those ideas can also support families, educators, communities, and
          systems serving youth.
        </p>
      </div>
    </section>
  );
}
