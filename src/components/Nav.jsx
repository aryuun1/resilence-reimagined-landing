import { LotusMark } from "./LotusIcon.jsx";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="mark" href="#top">
          <LotusMark />
          <span className="mark-word">Resilience Reimagined</span>
        </a>
        <ul className="navlinks">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#founder">Founder</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#partner">Get Involved</a></li>
        </ul>
        <a className="btn btn-primary btn-sm" href="#partner">Become a Founding Supporter</a>
      </div>
    </nav>
  );
}
