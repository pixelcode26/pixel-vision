(function() {
  if (localStorage.getItem('pv_cookie_ok')) return;
  var bar = document.createElement('div');
  bar.id = 'pv-cookie-bar';
  bar.innerHTML = '<span>We use cookies to keep this site running. By continuing, you agree to our <a href="/privacy.html">Privacy Policy</a>.</span><button id="pv-cookie-ok">Got it</button>';
  bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#111;border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;gap:20px;padding:14px 24px;font-family:inherit;font-size:0.82rem;color:#9ca3af;flex-wrap:wrap;text-align:center;';
  document.body.appendChild(bar);
  bar.querySelector('a').style.cssText = 'color:#3CB371;text-decoration:underline;';
  var btn = bar.querySelector('#pv-cookie-ok');
  btn.style.cssText = 'background:#3CB371;color:#000;border:none;padding:8px 20px;border-radius:6px;font-weight:700;font-size:0.8rem;cursor:pointer;white-space:nowrap;letter-spacing:0.04em;';
  btn.onclick = function() {
    localStorage.setItem('pv_cookie_ok', '1');
    bar.remove();
  };
})();
