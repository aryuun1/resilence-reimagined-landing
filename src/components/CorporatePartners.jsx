import { ArrowRight } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

export function CorporatePartners() {
  return (
    <section id="corporate-partners">
      <div className="wrap">
        <span className="eyebrow">For Corporate &amp; Institutional Partners</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "20ch" }}>
          Partner with us.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          Organizations can contribute more than funding. We welcome mission-aligned partnerships
          involving expertise, technology, research, venues, educational resources, workforce
          pathways, employee engagement, program sponsorship, and other forms of responsible
          collaboration.
        </p>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          For schools, youth-serving organizations, researchers, and public institutions,
          partnership may begin with a conversation about education, presentations, facilitated
          learning, pilot programs, research, or institution-specific needs.
        </p>
        <a className="btn btn-primary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.8rem" }}>
          Explore Partnership Opportunities<ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
