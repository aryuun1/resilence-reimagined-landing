import { ArrowRight } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { LotusMark } from "./LotusIcon.jsx";

const DONATE_URL = "https://funnel.resiliencereimaginedfoundation.com/donate-page";

const links = [
  { label: "About", to: "/about" },
  { label: "Our Framework", to: "/approach" },
  { label: "Our Work", to: "/work" },
  { label: "Founder", to: "/founder" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
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
        <a className="btn btn-primary btn-sm" href={DONATE_URL} target="_blank" rel="noopener noreferrer">
          Become a Founding Supporter<ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
