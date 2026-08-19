import {
  Compass,
  Ear,
  Heart,
  MessageCircleHeart,
  Puzzle,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const capacities = [
  { text: "A strong and authentic sense of identity", icon: ShieldCheck },
  { text: "Greater agency and self-trust", icon: Compass },
  { text: "Pattern awareness and discernment", icon: Puzzle },
  { text: "Healthy communication and boundaries", icon: MessageCircleHeart },
  { text: "Safe and meaningful connection", icon: Heart },
  { text: "Whole-person wellbeing and self-awareness", icon: Ear },
  { text: "Responsible decision-making", icon: Scale },
  { text: "Adaptability and future readiness", icon: TrendingUp },
  { text: "Purpose, contribution, and hope", icon: Sparkles },
];

export function Mission() {
  return (
    <section id="mission" style={{ position: "relative", overflow: "hidden" }}>
      <img src="/images/IMG_1347.jpeg" alt="" aria-hidden="true" className="mission-texture" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow">Mission</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "26ch" }}>
          Preparing young people for life, not only for crisis.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Our mission is to transform how young people are educated, supported, and prepared for
          the realities of life. We bring together whole-person education, behavioral science,
          lived experience, relationship-centered practices, responsible technology, research, and
          practical tools to strengthen the capacities that help people navigate adversity and
          change.
        </p>

        <div className="reveal" style={{ marginTop: "3rem" }}>
          <p className="capacity-intro">Our work focuses on helping young people develop:</p>
          <div className="capacity-grid">
            {capacities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div className="capacity-item" key={cap.text} data-accent={i % 3}>
                  <Icon size={17} aria-hidden="true" />
                  <span>{cap.text}</span>
                </div>
              );
            })}
          </div>
          <p className="lede" style={{ marginTop: "2rem" }}>
            We also work with the adults and institutions responsible for young people&rsquo;s
            development, because lasting change cannot rest on the young person alone.
          </p>
        </div>

        <div className="vision-panel reveal">
          <span className="eyebrow">Our Vision</span>
          <p>
            We envision a future in which young people are not permanently defined by adversity,
            placement, diagnosis, circumstance, or decisions made about them.
          </p>
          <p>
            A future where they have the knowledge and support to understand themselves, build
            meaningful relationships, make informed choices, adapt when life changes, and
            participate in shaping their own futures.
          </p>
          <p>
            And a future where the systems entrusted with young people&rsquo;s lives measure
            success not simply by processes completed, but by the lives young people are able to
            build.
          </p>
        </div>
      </div>
    </section>
  );
}
