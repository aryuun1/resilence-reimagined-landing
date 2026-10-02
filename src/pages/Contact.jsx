import { useEffect } from "react";

const BOOKING_SCRIPT_SRC = "https://link.automator.ai/js/form_embed.js";

export function Contact() {
  useEffect(() => {
    if (document.querySelector(`script[src="${BOOKING_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = BOOKING_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" style={{ textAlign: "center", padding: "6rem 0" }}>
      <div className="wrap">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Book an Appointment.
        </span>
        <h1 style={{ marginTop: "1rem", fontSize: "clamp(1.9rem,4vw,2.8rem)" }}>
          Let&rsquo;s start a conversation.
        </h1>
        <p className="lede" style={{ margin: "1.2rem auto 0", maxWidth: "48ch" }}>
          Schedule a meeting with the Founder to learn more about our mission.
        </p>
        <iframe
          src="https://link.automator.ai/widget/booking/9YsGsTPHAsW3f17PnAMq"
          title="Book an appointment"
          allow="payment"
          scrolling="no"
          id="9YsGsTPHAsW3f17PnAMq_1788892476360"
          style={{ width: "100%", border: "none", overflow: "hidden", marginTop: "3rem", minHeight: "800px" }}
        />
      </div>
    </section>
  );
}
