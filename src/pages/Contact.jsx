import { ArrowRight, Mail } from "lucide-react";

const CONTACT_URL = "https://funnel.resiliencereimaginedfoundation.com/contact-us-page";

export function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center", padding: "6rem 0" }}>
      <div className="wrap">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          <Mail size={14} aria-hidden="true" />Contact Us
        </span>
        <h1 style={{ marginTop: "1rem", fontSize: "clamp(1.9rem,4vw,2.8rem)" }}>
          Let&rsquo;s start a conversation.
        </h1>
        <p className="lede" style={{ margin: "1.2rem auto 0", maxWidth: "48ch" }}>
          Whether you&rsquo;re a donor, a foundation, a school, a child-welfare organization, or
          simply curious about our work, we&rsquo;d love to hear from you. Reach out through our
          contact form and our team will get back to you.
        </p>
        <a
          className="btn btn-primary"
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "2.2rem" }}
        >
          Get in Touch<ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
