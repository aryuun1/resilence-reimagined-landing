import { BookOpen } from "lucide-react";

const books = [
  {
    title: "The Enduring Enterprise Advantage",
    subtitle: "Resilience and AI are the New Competitive Advantage",
    cover: "/images/2026Mar27_RoseTina-The_Enduring_Enterprise_Cover.jpeg",
    quote: "It starts quietly. A trading screen freezes. A payment system stalls. A critical vendor goes dark. In that moment, the resilient organization has an advantage: clarity.",
  },
  {
    title: "Becoming Unbreakable",
    subtitle: "Reframe Your Story, Reclaim Your Life",
    cover: "/images/BecomingUnbreakable_draft_cover.jpg",
    quote: "Roots hold what the storm cannot take. Reframe your story, reclaim your life.",
  },
];

export function Books() {
  return (
    <section id="books" style={{ background: "var(--surface-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow"><BookOpen size={14} aria-hidden="true" />From Our Founder</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "28ch" }}>
          Written by our founder, for anyone rebuilding after a hard experience.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          These books carry the same philosophy of discernment, identity, and reclaiming
          authorship that shapes the Foundation&rsquo;s work.
        </p>

        <div className="book-grid reveal">
          {books.map((book) => (
            <div className="book-card" key={book.title}>
              <img src={book.cover} alt={`${book.title} book cover`} className="book-cover" />
              <div>
                <h4>{book.title}</h4>
                <p className="book-subtitle">{book.subtitle}</p>
                <p className="book-quote">&ldquo;{book.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
