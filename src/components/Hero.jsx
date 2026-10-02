import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EmberCanvas } from "./EmberCanvas.jsx";

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
        <span className="eyebrow">Resilience Reimagined</span>
        <h1> Resilience is about rising, rebuilding, and moving forward.</h1>
        <p className="sub">
          We&rsquo;re building tools, learning experiences, and partnerships to help young people
          understand themselves and move toward a future with purpose.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/get-involved">Get Involved<ArrowRight size={17} aria-hidden="true" /></Link>
          <Link className="btn btn-ghost" to="/work">Explore Our Work<ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </header> 
  );
}
