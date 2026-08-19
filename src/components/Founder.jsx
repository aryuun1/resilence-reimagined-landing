import { Quote } from "lucide-react";
import { LotusMark } from "./LotusIcon.jsx";

const quotes = [
  "I am building what I needed earlier: a way to understand what happened without letting it become my identity.",
  "The goal is not to erase the past. It is to learn from it, without letting it control the future.",
  "Young people deserve more than a label, a placement, or a crisis response. They deserve the knowledge to understand themselves and the power to shape their future.",
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
            <span className="eyebrow">Founder Story</span>
            <h2>Lived experience, shared with care, not for spectacle.</h2>
            <p className="founder-bio">
              Tina Rose is a behavioral scientist, author, speaker, and executive adviser. Her
              work is shaped by her own experience of foster care, family separation, hardship,
              and loss. She founded Resilience Reimagined Foundation to give young people the
              knowledge, judgment, and connection she believes should be taught before a crisis
              becomes their identity.
            </p>
            <div className="founder-quotes">
              {quotes.map((quote) => (
                <blockquote key={quote}>
                  <Quote size={16} aria-hidden="true" />
                  <span>{quote}</span>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
