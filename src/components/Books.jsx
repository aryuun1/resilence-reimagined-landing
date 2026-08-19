import { BookOpen, Quote, Sparkles, TreeDeciduous } from "lucide-react";

const books = [
  {
    title: "The Enduring Enterprise Advantage",
    subtitle: "Resilience and AI are the New Competitive Advantage",
    cover: "/images/2026Mar27_RoseTina-The_Enduring_Enterprise_Cover.jpeg",
    backdrop: "/images/Rose-Tina-The-Enduring-Enterprise-Cover.jpeg",
    quote: "It starts quietly. A trading screen freezes. A payment system stalls. A critical vendor goes dark. In that moment, the resilient organization has an advantage: clarity.",
    icon: Sparkles,
  },
  {
    title: "Becoming Unbreakable",
    subtitle: "Reframe Your Story, Reclaim Your Life",
    cover: "/images/BecomingUnbreakable_draft_cover.jpg",
    quote: "Roots hold what the storm cannot take. Reframe your story, reclaim your life.",
    icon: TreeDeciduous,
  },
];

export function Books() {
  return (
    <section id="books" className="books">
      <img src="/images/IMG_1348.jpeg" alt="" aria-hidden="true" className="books-texture" />
      <div className="wrap">
        <span className="eyebrow">
          <BookOpen size={14} aria-hidden="true" />
          The Resilience Reimagined™ Series
        </span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "28ch" }}>
          Written by our founder, for anyone rebuilding after a hard experience.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          These books put the same resilience framework behind the Foundation into practice, for
          individuals, executives, and organizations alike. Hover a cover to read more.
        </p>

        <div className="book-grid reveal">
          {books.map((book) => {
            const Icon = book.icon;
            return (
              <div className="book-card" key={book.title}>
                <div className="book-cover-wrap">
                  <img src={book.cover} alt={`${book.title} book cover`} className="book-cover" />
                  <span className="book-shine" aria-hidden="true" />
                </div>
                <div className="book-text-wrap">
                  <div className="book-text">
                    <span className="book-tag"><Icon size={13} aria-hidden="true" />Book</span>
                    <h4>{book.title}</h4>
                    <p>{book.subtitle}</p>
                  </div>
                  <div
                    className="book-reveal"
                    style={book.backdrop ? { "--book-backdrop": `url(${book.backdrop})` } : undefined}
                  >
                    <div className="book-reveal-scrim">
                      <Quote size={20} aria-hidden="true" className="book-reveal-quote-icon" />
                      <p>{book.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
