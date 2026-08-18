import { LotusMark } from "./LotusIcon.jsx";

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
              <blockquote>I am building what I needed earlier: a way to understand what happened without letting it become my identity.</blockquote>
              <blockquote>The goal is not to erase the past. It is to learn from it, without letting it control the future.</blockquote>
              <blockquote>Young people deserve more than a label, a placement, or a crisis response. They deserve the knowledge to understand themselves and the power to shape their future.</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
