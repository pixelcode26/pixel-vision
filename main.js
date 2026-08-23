/* ================================================
   PIXEL VISION — MAIN JS
   ================================================ */

// NAV: glass blur on scroll
const nav = document.getElementById('nav');
function updateNav() {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// NAV: mobile hamburger toggle
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

// AOS: lightweight IntersectionObserver scroll-reveal
if ('IntersectionObserver' in window) {
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.aosDelay || '0', 10);
        setTimeout(() => el.classList.add('aos-animate'), delay);
        aosObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

  // Also handle legacy .animate-fade-up elements
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-fade-up').forEach(el => fadeObserver.observe(el));
}

// TYPEWRITER: rotating industry word in hero (index.html only)
(function rotatingTypewriter() {
  const el = document.getElementById('rotatingWord');
  if (!el) return;
  const words = ['Law Firms', 'Med Spas', 'Dental Practices', 'Real Estate Firms', 'CPA Firms'];
  let wordIndex = 0;

  function erase(cb) {
    const txt = el.textContent;
    if (!txt.length) { cb(); return; }
    el.textContent = txt.slice(0, -1);
    setTimeout(() => erase(cb), 55);
  }

  function type(word, cb) {
    let i = 0;
    (function step() {
      if (i < word.length) { el.textContent += word[i++]; setTimeout(step, 85); }
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

  // First word already visible in HTML; start cycling after a pause
  setTimeout(cycle, 2000);
})();

// SMOOTH SCROLL for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
