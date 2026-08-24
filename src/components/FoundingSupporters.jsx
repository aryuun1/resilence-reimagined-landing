import { HeartHandshake, MessageCircle } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";
const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

const welcomeList = [
  "Individual philanthropists",
  "Foundations and grantmakers",
  "Corporate partners",
  "Schools and youth-serving organizations",
  "Researchers and academic partners",
  "Mission-aligned professionals and advisers",
];

export function FoundingSupporters() {
  return (
    <section className="founding-supporters" id="founding-supporters">
      <div className="wrap">
        <span className="eyebrow">For Founding Supporters</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "24ch" }}>
          Help build the foundation for what&rsquo;s possible.
        </h2>
        <p className="lede founding-lede">
          Founding supporters have an opportunity to help establish more than a single program or
          event. You can help build the education, research, partnerships, safeguards, learning
          infrastructure, and access required for an organization designed to grow responsibly
          over time.
        </p>

        <p className="capacity-intro founding-intro">We welcome conversations with:</p>
        <div className="welcome-pills reveal">
          {welcomeList.map((item) => (
            <span className="welcome-pill" key={item}>{item}</span>
          ))}
        </div>

        <div className="hero-ctas" style={{ marginTop: "2.6rem" }}>
          <a className="btn btn-primary" href={DONATE_URL} target="_blank" rel="noopener noreferrer">
            <HeartHandshake size={17} aria-hidden="true" />Become a Founding Supporter
          </a>
          <a className="btn btn-ghost" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} aria-hidden="true" />Talk With Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
