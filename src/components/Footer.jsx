import { LotusMark } from "./LotusIcon.jsx";

export function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div>
          <a className="mark" href="#top">
            <LotusMark size={22} />
            <span className="mark-word">Resilience Reimagined</span>
          </a>
          <p className="foot-fine">
            Resilience is more than survival. Transform experience into wisdom. Build futures
            with purpose.
          </p>
          <p className="foot-fine">
            Resilience Reimagined Foundation is a nonprofit corporation preparing to apply for
            recognition of exemption under Section 501(c)(3). Federal tax exempt status has not
            been recognized.
          </p>
        </div>
        <ul className="foot-links">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#founder">Founder</a></li>
          <li><a href="#partner">Get Involved</a></li>
        </ul>
      </div>
    </footer>
  );
}
