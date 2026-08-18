export function LotusDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="lotusPetals" viewBox="0 0 32 32">
        <path d="M16,27 C13.5,21 13.5,13 16,9 C18.5,13 18.5,21 16,27 Z"></path>
        <path d="M16,27 C12,22 10,15 11,10.5 C14.5,13.5 16.5,20.5 16,27 Z"></path>
        <path d="M16,27 C20,22 22,15 21,10.5 C17.5,13.5 15.5,20.5 16,27 Z"></path>
        <path d="M16,27 C11,24 7,19 6,14.5 C10,15.5 14,21.5 16,27 Z"></path>
        <path d="M16,27 C21,24 25,19 26,14.5 C22,15.5 18,21.5 16,27 Z"></path>
      </symbol>
    </svg>
  );
}

export function LotusMark({ size = 26 }) {
  return (
    <svg
      className="lotus-icon"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ color: "var(--glow)" }}
    >
      <use href="#lotusPetals"></use>
      <circle cx="16" cy="9" r="1.5" fill="var(--glow)" stroke="none"></circle>
    </svg>
  );
}

export function LotusWatermark() {
  return (
    <svg className="lotus-watermark" viewBox="0 0 32 32" aria-hidden="true">
      <use href="#lotusPetals"></use>
    </svg>
  );
}
