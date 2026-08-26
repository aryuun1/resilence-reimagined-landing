import { useEffect, useRef } from "react";

const EMBER_COUNT = 32;

export function EmberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    const hero = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h;
    let embers = [];
    let frame;

    function resize() {
      w = hero.clientWidth;
      h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeEmber() {
      return {
        x: Math.random() * w,
        y: h + Math.random() * h * 0.4,
        r: 0.6 + Math.random() * 2.1,
        speed: 0.15 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.4,
        alpha: 0.12 + Math.random() * 0.4,
        flicker: Math.random() * Math.PI * 2,
      };
    }

    function init() {
      resize();
      embers = [];
      for (let i = 0; i < EMBER_COUNT; i++) {
        const ember = makeEmber();
        ember.y = Math.random() * h;
        embers.push(ember);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.flicker += 0.03;
        const a = e.alpha * (0.6 + 0.4 * Math.sin(e.flicker));

        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 5);
        glow.addColorStop(0, "rgba(232,184,75," + a + ")");
        glow.addColorStop(1, "rgba(232,184,75,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(250,0,63," + Math.min(a + 0.3, 1) + ")";
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reduceMotion) {
          e.y -= e.speed;
          e.x += e.drift;
          if (e.y < -10) {
            Object.assign(e, makeEmber());
            e.y = h + 10;
          }
        }
      }
    }

    function loop() {
      draw();
      if (!reduceMotion) frame = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    init();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas id="emberCanvas" ref={canvasRef} aria-hidden="true"></canvas>;
}
