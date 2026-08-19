import { CheckCircle2, HeartHandshake, Users } from "lucide-react";
import { EmberCanvas } from "./EmberCanvas.jsx";

export function Hero() {
  return (
    <header className="hero" id="top">
      <EmberCanvas />
      <svg className="hero-compass" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="150" fill="none" stroke="#EFE9FF" strokeWidth="1"></circle>
        <circle cx="200" cy="200" r="110" fill="none" stroke="#EFE9FF" strokeWidth="1"></circle>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#EFE9FF" strokeWidth="1"></line>
        <line x1="20" y1="200" x2="380" y2="200" stroke="#EFE9FF" strokeWidth="1"></line>
        <line x1="65" y1="65" x2="335" y2="335" stroke="#EFE9FF" strokeWidth=".6"></line>
        <line x1="335" y1="65" x2="65" y2="335" stroke="#EFE9FF" strokeWidth=".6"></line>
        <polygon points="200,80 214,200 200,320 186,200" fill="#EFE9FF"></polygon>
      </svg>
      <div className="wrap hero-inner">
        <span className="eyebrow">Youth development, foster care reform, education reform</span>
        <h1>We turn hard experience into wisdom, and help young people build a future on purpose.</h1>
        <p className="sub">
          We build education programs, support services, and policy work that help young people
          in foster care and beyond understand who they are, stay connected to the people who
          matter, and make grounded decisions about their future.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#partner"><HeartHandshake size={17} aria-hidden="true" />Become a Founding Supporter</a>
          <a className="btn btn-ghost" href="#partner"><Users size={17} aria-hidden="true" />Partner With Us</a>
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
