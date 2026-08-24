import { HelpCircle, PenLine } from "lucide-react";
import { LotusMark } from "./LotusIcon.jsx";

const questions = [
  "Why do some experiences become identities?",
  "What happens to identity and connection when families and systems are disrupted?",
  "And what should we teach young people before they are expected to navigate life's hardest moments?",
];

const noteParagraphs = [
  "My hope is not simply that young people survive difficult circumstances. I want them to understand that what happened to them, and what they learned to do in order to survive, do not have to determine the rest of their lives.",
  "We can give young people more than encouragement. We can give them knowledge, help them understand their patterns, relationships, and the choices available to them.",
  "We can protect connection without asking them to surrender identity, and help them turn what they have lived through into wisdom, agency, and purpose.",
  "That is the future I want Resilience Reimagined to help create.",
];

const onStage = [
  { src: "/images/Tina-Pic_speaking_sideways-smile.jpg", alt: "Tina Rose speaking on stage" },
  { src: "/images/Tina-Pic_teaching.jpg", alt: "Tina Rose presenting at a podium" },
];

export function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="wrap">
        <div className="founder-grid">
          <div className="reveal">
            <div className="founder-portrait">
              <img src="/images/IMG_3438.jpg" alt="Tina Rose, founder of Resilience Reimagined Foundation" />
              <div className="founder-portrait-caption">
                <LotusMark size={30} />
                <span>Founder: Tina Rose</span>
              </div>
            </div>
            <div className="founder-onstage">
              {onStage.map((img) => (
                <div className="founder-onstage-item" key={img.src}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Founder</span>
            <h2>Built from experience. Directed toward what comes next.</h2>
            <p className="founder-bio">
              Resilience Reimagined Foundation was founded by Tina Rose, whose work brings
              together lived experience, behavioral science, resilience leadership, writing,
              executive insight, and a longstanding interest in how people and systems respond to
              adversity and change.
            </p>
            <p className="founder-bio">Her connection to this mission is personal.</p>
            <p className="founder-bio">
              Experiences with foster care, family separation, adversity, and profound loss raised
              questions that would eventually become much larger than one person&rsquo;s story:
            </p>

            <ul className="whatif-list founder-questions">
              {questions.map((q) => (
                <li key={q}>
                  <HelpCircle size={17} aria-hidden="true" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <p className="founder-bio" style={{ marginTop: "1.6rem" }}>
              Those questions became the foundation for a larger body of work, and ultimately for
              Resilience Reimagined Foundation. The Foundation exists not to tell one story of
              adversity, but to help build something useful from what adversity can teach us.
            </p>
          </div>
        </div>

        <div className="founder-note reveal">
          <span className="founder-note-label"><PenLine size={16} aria-hidden="true" />A Note From Our Founder</span>
          {noteParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="founder-signature">&mdash; Tina Rose, Founder</p>
        </div>
      </div>
    </section>
  );
}
