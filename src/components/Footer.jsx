import { LotusMark } from "./LotusIcon.jsx";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "#mission" },
      { label: "Our Work", href: "#portfolio" },
      { label: "INDIGLOW", href: "#indiglow" },
      { label: "Pattern to Purpose", href: "#p2p" },
      { label: "Research & Learning", href: "#impact" },
      { label: "Founder", href: "#founder" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Become a Founding Supporter", href: "#partner" },
      { label: "Partner With Us", href: "#corporate-partners" },
      { label: "Contact Us", href: CONTACT_URL, external: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "News & Updates", soon: true },
      { label: "Media Inquiries", soon: true },
      { label: "General Contact", href: CONTACT_URL, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <a className="mark" href="#top">
            <LotusMark size={22} />
            <span className="mark-word">Resilience Reimagined Foundation</span>
          </a>
          <p className="foot-tagline">
            Whole-person youth development · Identity &amp; relationship continuity · Education ·
            Research · Systems change
          </p>
        </div>

        <div className="foot-columns">
          {columns.map((col) => (
            <div className="foot-col" key={col.heading}>
              <span className="foot-col-heading">{col.heading}</span>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.soon ? (
                      <span className="foot-link-soon">{link.label}</span>
                    ) : (
                      <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="foot-fine-wrap">
        <p className="foot-fine">
          Resilience Reimagined Foundation is committed to responsible, evidence-aware education
          and innovation. Foundation educational content is not a substitute for individualized
          medical, mental-health, legal, or other professional care.
        </p>
        <p className="foot-fine">
          Resilience Reimagined Foundation is a nonprofit corporation preparing to apply for
          recognition of exemption under Section 501(c)(3). Federal tax exempt status has not been
          recognized.
        </p>
      </div>
    </footer>
  );
}
