import { Hero } from "../components/Hero.jsx";
import { Imagine } from "../components/Imagine.jsx";
import { FinalCta } from "../components/FinalCta.jsx";

export function Home() {
  return (
    <>
      <Hero />

      <section id="premise">
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(1.75rem,3.4vw,2.4rem)", maxWidth: "32ch" }}>
            What if we prepared young people for life, not just what comes next on paper?
          </h2>
          <div className="vision-body" style={{ marginLeft: 0, marginRight: 0 }}>
            <p>
              Growing up means navigating relationships, identity, uncertainty, technology,
              family, school, loss, change, and countless decisions.
            </p>
            <p>Some young people have to navigate even more.</p>
            <p>
              We believe young people deserve practical ways to understand what shapes them,
              recognize patterns, make thoughtful choices, build healthy connections, and imagine
              what&rsquo;s possible for their future.
            </p>
          </div>
          <p className="problem-emphasis" style={{ marginTop: "1.6rem" }}>
            That&rsquo;s what we&rsquo;re working to build.
          </p>
        </div>
      </section>

      <Imagine />

      <FinalCta />
    </>
  );
}
