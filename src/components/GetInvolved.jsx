import { ArrowRight, HeartHandshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

const pathways = [
  {
    title: "Support the Work",
    text: "Help fund early development, learning experiences, resources, research, and future programming.",
    icon: HeartHandshake,
    linkLabel: "Support the Work",
    href: DONATE_URL,
    external: true,
  },
  {
    title: "Become a Partner",
    text: "We're interested in conversations with educators, youth-serving organizations, researchers, and community leaders. If you have an idea, a question, or a perspective that could help shape this work, we want to hear it.",
    icon: Users,
    linkLabel: "Start a Conversation",
    to: "/contact",
  },
];

export function GetInvolved() {
  return (
    <section id="partner">
      <div className="wrap">
        <span className="eyebrow">Get Involved</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "22ch" }}>
          Help us build what comes next.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Resilience Reimagined is at the beginning of its journey. We&rsquo;re developing the
          ideas, tools, learning experiences, and partnerships that can help bring this vision to
          life.
        </p>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Early supporters have an opportunity to help us build thoughtfully from the beginning.
          It will take families, neighbors, educators, caregivers, leaders, funders, and
          communities choosing to build it together.
        </p>

        <div className="value-grid value-grid-2up reveal" style={{ marginTop: "2.6rem" }}>
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div className="value-card" key={item.title}>
                <span className="value-icon"><Icon size={18} aria-hidden="true" /></span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                {item.external ? (
                  <a className="btn btn-ghost btn-sm" href={item.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.1rem" }}>
                    {item.linkLabel}<ArrowRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <Link className="btn btn-ghost btn-sm" to={item.to} style={{ marginTop: "1.1rem" }}>
                    {item.linkLabel}<ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
