/* ==========================================================================
   Resilience Reimagined — behavior
   Two independent pieces: scroll-reveal on [.reveal] elements, and the
   ember-particle animation in the hero canvas.
   ========================================================================== */

(function initScrollReveal(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');

  if('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('is-visible'); });
  }
})();

(function initEmberField(){
  var canvas = document.getElementById('emberCanvas');
  if(!canvas) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w, h;
  var embers = [];
  var EMBER_COUNT = 46;

  function resize(){
    w = hero.clientWidth;
    h = hero.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeEmber(){
    return {
      x: Math.random() * w,
      y: h + Math.random() * h * 0.4,
      r: 0.6 + Math.random() * 2.1,
      speed: 0.15 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 0.4,
      alpha: 0.15 + Math.random() * 0.55,
      flicker: Math.random() * Math.PI * 2
    };
  }

  function init(){
    resize();
    embers = [];
    for(var i = 0; i < EMBER_COUNT; i++){
      var ember = makeEmber();
      ember.y = Math.random() * h;
      embers.push(ember);
    }
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    for(var i = 0; i < embers.length; i++){
      var e = embers[i];
      e.flicker += 0.03;
      var a = e.alpha * (0.6 + 0.4 * Math.sin(e.flicker));

      var glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 5);
      glow.addColorStop(0, 'rgba(240,177,71,' + a + ')');
      glow.addColorStop(1, 'rgba(240,177,71,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(250,235,210,' + Math.min(a + 0.25, 1) + ')';
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();

      if(!reduceMotion){
        e.y -= e.speed;
        e.x += e.drift;
        if(e.y < -10){
          Object.assign(e, makeEmber());
          e.y = h + 10;
        }
      }
    }
  }

  function loop(){
    draw();
    if(!reduceMotion){ requestAnimationFrame(loop); }
  }

  window.addEventListener('resize', resize);
  init();
  loop();
})();
