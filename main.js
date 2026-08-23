/* ================================================
   PIXEL VISION — MAIN JS  (Premium Upgrade)
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

// ── TYPEWRITER: rotating industry word ───────────
(function rotatingTypewriter() {
  const el = document.getElementById('rotatingWord');
  if (!el) return;
  const words = ['Law Firms', 'Med Spas', 'Dental Practices', 'Real Estate Firms', 'CPA Firms'];
  let wordIndex = 0;

  function erase(cb) {
    const txt = el.textContent;
    if (!txt.length) { cb(); return; }
    el.textContent = txt.slice(0, -1);
    setTimeout(() => erase(cb), 50);
  }

  function type(word, cb) {
    let i = 0;
    (function step() {
      if (i < word.length) { el.textContent += word[i++]; setTimeout(step, 80); }
      else cb();
    })();
  }

  function cycle() {
    setTimeout(() => {
      erase(() => {
        wordIndex = (wordIndex + 1) % words.length;
        type(words[wordIndex], cycle);
      });
    }, 2400);
  }

  setTimeout(cycle, 2000);
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
      if (parsed) {
        animateNumber(numberEl, 0, parsed.num, parsed.suffix, parsed.prefix, 1600);
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  statItems.forEach(item => observer.observe(item));
})();

// ── SERVICE CARD TILT (subtle 3-D lift) ─────────
(function cardTilt() {
  document.querySelectorAll('.service-card, .price-card').forEach(card => {
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
