const LOTUS_SRC = "/images/lotus-mark.png";

export function LotusDefs() {
  return null;
}

export function LotusMark({ size = 26 }) {
  return (
    <img
      src={LOTUS_SRC}
      alt=""
      className="lotus-icon"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export function LotusWatermark() {
  return (
    <img
      src={LOTUS_SRC}
      alt=""
      className="lotus-watermark"
      aria-hidden="true"
    />
  );
}
