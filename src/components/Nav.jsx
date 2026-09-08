import { ArrowRight, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LotusMark } from "./LotusIcon.jsx";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

const links = [
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/work" },
  { label: "Founder", to: "/founder" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Schedule", to: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="mark" to="/">
          <LotusMark />
          <span className="mark-word">Resilience Reimagined</span>
        </Link>
        <ul className="navlinks">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary btn-sm nav-donate-desktop" href={DONATE_URL} target="_blank" rel="noopener noreferrer">
          Support the Work<ArrowRight size={15} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div className={"mobile-menu" + (isOpen ? " is-open" : "")} id="mobile-menu">
        <div className="wrap">
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href={DONATE_URL} target="_blank" rel="noopener noreferrer">
            Support the Work<ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
