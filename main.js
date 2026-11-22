/* ================================================
   PIXEL VISION — MAIN JS
   ================================================ */

// ── NAV: glass blur on scroll ────────────────────
const nav = document.getElementById('nav');
function updateNav() {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── NAV: mobile hamburger ────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── AOS: IntersectionObserver scroll-reveal ──────
if ('IntersectionObserver' in window) {
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = parseInt(el.dataset.aosDelay || '0', 10);
        setTimeout(() => el.classList.add('aos-animate'), delay);
        aosObserver.unobserve(el);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.animate-fade-up').forEach(el => fadeObserver.observe(el));
}

// ── ROTATING INDUSTRY WORD ───────────────────────
(function rotatingIndustry() {
  const el = document.getElementById('rotatingIndustry');
  if (!el) return;
  const words = ['Commercial Real Estate', 'Law Firms', 'Med Spas & Clinics', 'Dental Practices', 'CPA Firms', 'Real Estate Brokers'];
  let idx = 0;

  function erase(cb) {
    const current = el.textContent;
    if (!current.length) { cb(); return; }
    el.textContent = current.slice(0, -1);
    setTimeout(() => erase(cb), 40);
  }
  function type(word, cb) {
    let i = 0;
    function tick() {
      el.textContent = word.slice(0, ++i);
      if (i < word.length) setTimeout(tick, 70);
      else cb();
    }
    tick();
  }
  function cycle() {
    setTimeout(() => {
      erase(() => {
        idx = (idx + 1) % words.length;
        setTimeout(() => type(words[idx], cycle), 300);
      });
    }, 2600);
  }
  type(words[0], cycle);
})();

// ── SMOOTH SCROLL ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── ANIMATED STAT COUNTERS ───────────────────────
(function animateStats() {
  const statItems = document.querySelectorAll('.stat-item');
  if (!statItems.length) return;

  function parseStatNumber(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);
    if (!match) return null;
    const num = parseFloat(match[2].replace(/,/g, ''));
    if (isNaN(num)) return null;
    return { prefix: match[1], num, suffix: match[3] };
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateNumber(el, from, to, suffix, prefix, duration) {
    const start = performance.now();
    const isInt = Number.isInteger(to);
    function tick(now) {
      const t   = Math.min((now - start) / duration, 1);
      const val = from + (to - from) * easeOut(t);
      el.textContent = prefix + (isInt ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const numberEl = entry.target.querySelector('.stat-number');
      if (!numberEl) return;
      const parsed = parseStatNumber(numberEl);
      if (parsed) animateNumber(numberEl, 0, parsed.num, parsed.suffix, parsed.prefix, 1600);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  statItems.forEach(item => observer.observe(item));
})();

// ── SERVICE CARD TILT (subtle 3-D lift) ─────────
(function cardTilt() {
  document.querySelectorAll('.service-card, .price-card, .niche-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = e.clientX - r.left;
      const y  = e.clientY - r.top;
      const cx = r.width  / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -4;
      const ry = ((x - cx) / cx) *  4;
      card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.45s cubic-bezier(0.22,1,0.36,1)';
    });
  });
})();

// ── 1. SCROLL PROGRESS BAR ───────────────────────
(function scrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'pv-scroll-progress';
  document.body.prepend(bar);
  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── 2. HERO MOUSE PARALLAX ───────────────────────
(function heroParallax() {
  const hero = document.querySelector('.hero');
  const content = document.querySelector('.hero-content');
  if (!hero || !content) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  let raf;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function tick() {
    cx = lerp(cx, tx, 0.07);
    cy = lerp(cy, ty, 0.07);
    content.style.transform = `translate(${cx}px, ${cy}px)`;
    raf = requestAnimationFrame(tick);
  }
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width  - 0.5;  // -0.5 to 0.5
    const ny = (e.clientY - r.top)  / r.height - 0.5;
    tx = -nx * 24;   // max ±12px
    ty = -ny * 16;   // max ±8px
    if (!raf) raf = requestAnimationFrame(tick);
  });
  hero.addEventListener('mouseleave', () => {
    tx = 0; ty = 0;
  });
})();

// ── 3. FLOW CHIP SEQUENTIAL LOOP ─────────────────
(function flowChipLoop() {
  const container = document.querySelector('.acquisition-flow');
  if (!container) return;
  const chips = Array.from(container.querySelectorAll('.flow-chip'));
  if (!chips.length) return;
  let idx = 0;
  let timer = null;

  function activate() {
    chips.forEach(c => c.classList.remove('active'));
    chips[idx].classList.add('active');
    idx = (idx + 1) % chips.length;
    timer = setTimeout(activate, 700);
  }

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!timer) activate();
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(container);
})();

// ── 5. MAGNETIC CTA BUTTONS ──────────────────────
(function magneticButtons() {
  document.querySelectorAll('.btn-emerald').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) / (r.width  / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      btn.style.transform = `translate(${dx * 8}px, ${dy * 5}px)`;
      btn.style.transition = 'transform 0.15s ease';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1)';
    });
  });
})();

// ── 10. CURSOR GLOW TRAIL ────────────────────────
(function cursorTrail() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot = document.createElement('div');
  dot.id = 'pv-cursor';
  document.body.appendChild(dot);
  let mx = -100, my = -100, cx = -100, cy = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  const hoverTargets = 'a, button, .service-card, .niche-card, .price-card, .step-card, .btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) dot.classList.add('hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) dot.classList.remove('hovered');
  });
  function lerp(a, b, t) { return a + (b - a) * t; }
  (function loop() {
    cx = lerp(cx, mx, 0.14);
    cy = lerp(cy, my, 0.14);
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();
})();

// ── REMOVE GIMMICK EFFECTS ───────────────────────
// Hide cursor trail
const pvCursor = document.getElementById('pv-cursor');
if (pvCursor) pvCursor.style.display = 'none';

// Remove transform effects from cards (clone replaces event listeners)
document.querySelectorAll('.service-card, .niche-card, .price-card').forEach(card => {
  const clone = card.cloneNode(true);
  card.parentNode.replaceChild(clone, card);
});
