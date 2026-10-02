import { LotusMark } from "./LotusIcon.jsx";

const questions = [
  "What if the life a person is living is being shaped by a story they never consciously chose?",
  "What knowledge would help them see the pattern, test the story, and reclaim authorship of what comes next?",
  "What if the institutions meant to help are also repeating a pattern they have mistaken for success?",
];

const noteParagraphs = [
  "I founded Resilience Reimagined because young people deserve the knowledge, relationships, and whole-person capacity to understand what shaped them before adversity becomes identity, and systems deserve a better way to judge whether their decisions improve a whole life.",
  "The thing I want young people to know most is that what happened to you is part of your reality, not the limit of your identity or the author of your future.",
  "The thing I want adults and systems to understand is that behavior carries context, a placement is not an identity, compliance is not a complete outcome, and every decision should be tested against the life the young person must live afterward.",
  "Do not fund what I survived. Help build what the next family and the next child should be able to reach before survival becomes the only plan.",
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
            <h2>My story begins in a family, not in foster care.</h2>
            <p className="founder-bio">
              Resilience Reimagined Foundation was founded by Tina Rose, a behavioral scientist,
              author, and resilience leader whose work brings together lived experience, formal
              education, and decades of cross-sector systems work.
            </p>
            <p className="founder-bio">
              Long before her name appeared in a foster-care file, family separation had already
              begun shaping how she understood belonging. She grew up inside a family that held
              love, intelligence, harm, instability, and possibility all at once. By nineteen, she
              had lived in approximately twenty-nine places she called home, including foster care
              and a children&rsquo;s home, separated for a time from siblings she had helped raise.
            </p>
            <p className="founder-bio">
              Her trajectory changed whenever someone created a bridge: a teacher who recognized her
              ability, a caregiver who taught a practical skill, a research opportunity that let her
              see a larger future, a mentor who told her the truth. Those questions raised by her own
              life eventually became much larger than one person&rsquo;s story:
            </p>

            <ul className="whatif-list founder-questions">
              {questions.map((q) => (
                <li key={q}>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <p className="founder-bio" style={{ marginTop: "1.6rem" }}>
              A nonprofit is necessary because equitable family and youth support, foster-care
              continuity, public-interest education, and research should be governed for public
              benefit rather than private return. Those questions became the foundation for
              Resilience Reimagined Foundation.
            </p>
          </div>
        </div>

        <div className="founder-note reveal">
          <span className="founder-note-label">A Note From Our Founder</span>
          {noteParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="founder-signature">Tina Rose, Founder</p>
        </div>
      </div>
    </section>
  );
}
