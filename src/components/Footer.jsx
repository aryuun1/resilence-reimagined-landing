import { Link } from "react-router-dom";
import { LotusMark } from "./LotusIcon.jsx";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "About", to: "/about" },
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
            Building tools and learning experiences to help young people understand themselves
            and move toward a future with purpose.
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
      </div>
    </footer>
  );
}
