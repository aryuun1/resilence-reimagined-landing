import { Link } from "react-router-dom";
import { LotusMark } from "./LotusIcon.jsx";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "About", to: "/about" },
      { label: "Our Framework", to: "/approach" },
      { label: "Our Work", to: "/work" },
      { label: "Founder", to: "/founder" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Ways to Help", to: "/get-involved" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <Link className="mark" to="/">
            <LotusMark size={22} />
            <span className="mark-word">Resilience Reimagined Foundation</span>
          </Link>
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
                    <Link to={link.to}>{link.label}</Link>
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
