const books = [
  {
    title: "The Enduring Enterprise Advantage",
    subtitle: "Resilience and AI are the New Competitive Advantage",
    cover: "/images/2026Mar27_RoseTina-The_Enduring_Enterprise_Cover.jpeg",
  },
  {
    title: "Becoming Unbreakable",
    subtitle: "Reframe Your Story, Reclaim Your Life",
    cover: "/images/BecomingUnbreakable_draft_cover.jpg",
  },
];

export function Books() {
  return (
    <section id="books" className="books">
      <img src="/images/IMG_1348.jpeg" alt="" aria-hidden="true" className="books-texture" />
      <div className="wrap">
        <span className="eyebrow">The Resilience Reimagined™ Series</span>
        <h2 style={{ marginTop: "1rem", fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "28ch" }}>
          Written by our founder, for anyone rebuilding after a hard experience.
        </h2>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          These books put the same resilience framework behind the Foundation into practice, for
          individuals, executives, and organizations alike.
        </p>

        <div className="book-grid reveal">
          {books.map((book) => (
            <div className="book-card" key={book.title}>
              <img src={book.cover} alt={`${book.title} book cover`} />
              <div>
                <h4>{book.title}</h4>
                <p>{book.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
