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

// TYPEWRITER: hero headline (index.html only)
(function typewriter() {
  const textEl   = document.getElementById('tw-text');
  const suffixEl = document.getElementById('tw-suffix');
  const cursorEl = document.getElementById('tw-cursor');
  if (!textEl) return;

  const part1 = 'We Build AI Systems That Find Your Clients, Write Your Emails, and Grow Your Business — ';
  const part2 = 'On Autopilot.';
  let i = 0;

  function type1() {
    if (i < part1.length) {
      textEl.textContent += part1[i++];
      setTimeout(type1, 20);
    } else {
      let j = 0;
      function type2() {
        if (j < part2.length) {
          suffixEl.textContent += part2[j++];
          setTimeout(type2, 20);
        } else {
          setTimeout(() => { if (cursorEl) cursorEl.style.display = 'none'; }, 1500);
        }
      }
      type2();
    }
  }
  setTimeout(type1, 400);
})();

// SMOOTH SCROLL for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
