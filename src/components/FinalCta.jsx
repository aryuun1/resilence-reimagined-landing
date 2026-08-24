import { HeartHandshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

const imagineLines = [
  "With a stronger understanding of who they are.",
  "With the ability to recognize patterns and question assumptions.",
  "With relationships that support rather than erase identity.",
  "With greater confidence in how they make decisions.",
  "With the capacity to adapt when reality changes.",
  "And with the belief that their experiences can become wisdom rather than limits.",
];

export function FinalCta() {
  return (
    <section className="final-cta" id="cta">
      <div className="wrap reveal">
        <h2>Help reimagine what resilience can become.</h2>
        <p className="final-cta-lead">Imagine young people entering adulthood with more than the ability to endure.</p>
        <div className="imagine-list">
          {imagineLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="final-cta-building">We are building toward that future.</p>

        <h3 className="final-cta-subhead">Be part of what comes next.</h3>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={DONATE_URL} target="_blank" rel="noopener noreferrer"><HeartHandshake size={17} aria-hidden="true" />Become a Founding Supporter</a>
          <Link className="btn btn-ghost" to="/get-involved"><Users size={17} aria-hidden="true" />Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}
