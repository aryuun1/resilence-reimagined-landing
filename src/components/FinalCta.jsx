import { HeartHandshake, Users } from "lucide-react";

export function FinalCta() {
  return (
    <section className="final-cta" id="partner">
      <div className="wrap reveal">
        <h2>Help us build something lasting, not just fund a single moment.</h2>
        <p>
          Your support turns this from one founder&rsquo;s vision into curriculum,
          presentations, partnerships, and research that can support real people at scale.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#top"><HeartHandshake size={17} aria-hidden="true" />Become a Founding Supporter</a>
          <a className="btn btn-ghost" href="#top"><Users size={17} aria-hidden="true" />Partner With Us</a>
        </div>
      </div>
    </section>
  );
}
