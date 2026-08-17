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

// ROTATING WORD: cycles industries in hero (index.html only)
(function rotatingWords() {
  const el = document.getElementById('rotatingWord');
  if (!el) return;
  const words = ['Law Firms', 'Med Spas', 'Dental Practices', 'Real Estate Firms'];
  let i = 0;
  setInterval(() => {
    el.classList.add('rotating-out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('rotating-out');
    }, 350);
  }, 2800);
})();

// SMOOTH SCROLL for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
});
