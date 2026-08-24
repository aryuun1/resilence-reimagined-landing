import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { EmberCanvas } from "./EmberCanvas.jsx";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

export function Hero() {
  return (
    <header className="hero" id="top">
      <EmberCanvas />
      <svg className="hero-compass" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="150" fill="none" stroke="#C9AEEF" strokeWidth="1"></circle>
        <circle cx="200" cy="200" r="110" fill="none" stroke="#C9AEEF" strokeWidth="1"></circle>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#C9AEEF" strokeWidth="1"></line>
        <line x1="20" y1="200" x2="380" y2="200" stroke="#C9AEEF" strokeWidth="1"></line>
        <line x1="65" y1="65" x2="335" y2="335" stroke="#C9AEEF" strokeWidth=".6"></line>
        <line x1="335" y1="65" x2="65" y2="335" stroke="#C9AEEF" strokeWidth=".6"></line>
        <polygon points="200,80 214,200 200,320 186,200" fill="#C9AEEF"></polygon>
      </svg>
      <div className="wrap hero-inner">
        <span className="eyebrow">Resilience Is More Than Surviving What Happened</span>
        <h1>We are reimagining how young people are prepared for life, and how the systems around them help them thrive.</h1>
        <p className="sub">
          Resilience Reimagined Foundation advances whole-person education, youth development,
          authentic identity, meaningful connection, and better decision-making. We create programs,
          tools, research, and partnerships designed to help young people understand what has shaped
          them without being defined by it, and build lives of agency, connection, purpose, and
          possibility.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href={DONATE_URL} target="_blank" rel="noopener noreferrer"><HeartHandshake size={17} aria-hidden="true" />Become a Founding Supporter</a>
          <Link className="btn btn-ghost" to="/work">Explore Our Work<ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="status-row">
          <span><CheckCircle2 size={14} aria-hidden="true" />Nonprofit corporation formed</span>
          <span><CheckCircle2 size={14} aria-hidden="true" />Preparing to apply for Section 501(c)(3) recognition</span>
          <span><CheckCircle2 size={14} aria-hidden="true" />Portfolio established and actively expanding</span>
        </div>
      </div>
    </header>
  );
}
