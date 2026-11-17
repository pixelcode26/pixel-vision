(function () {
  // ── KNOWLEDGE BASE ───────────────────────────────
  const KB = [
    {
      keys: ['price', 'cost', 'pricing', 'how much', 'quote', 'charge', 'fee', 'afford', 'expensive'],
      answer: "Every system is priced to your business — there's no one-size-fits-all number. Book a free 20-minute call and we'll give you an exact quote based on your industry and goals. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>"
    },
    {
      keys: ['service', 'what do you do', 'offer', 'build', 'make', 'create', 'system'],
      answer: "We build four AI systems: a premium website, an AI client acquisition agent that finds and reaches out to prospects automatically, email outreach automation, and ongoing monthly management. <a href='services.html' style='color:var(--emerald)'>→ See All Services</a>"
    },
    {
      keys: ['website', 'site', 'web design', 'web page'],
      answer: "We build premium, mobile-first websites with AI-powered lead capture, a 24/7 chatbot, SEO architecture, and CRM integration — custom designed, never a template. <a href='services.html#website' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['acquisition', 'leads', 'prospect', 'outreach', 'client', 'find clients', 'get clients'],
      answer: "Our AI Client Acquisition Agent identifies your ideal clients, reaches out to them with personalized messages, and books calls directly onto your calendar — fully automated. <a href='services.html#acquisition' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['email', 'automation', 'outreach', 'follow up', 'follow-up', 'sequence'],
      answer: "Our email automation writes personalized outreach to hundreds of prospects weekly, follows up automatically, and routes replies to you — so your inbox fills with warm leads. <a href='services.html#email' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['real estate', 'cre', 'commercial', 'property', 'broker', 'agent', 'investor'],
      answer: "Commercial real estate is our primary focus. We build AI prospecting and outreach systems specifically designed for the high-value, relationship-driven nature of CRE deals. <a href='who-we-serve.html#commercial-real-estate' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['law', 'lawyer', 'attorney', 'legal', 'firm', 'practice'],
      answer: "We build AI intake and lead qualification systems for law firms — high-authority websites, automated follow-up, and practice-area landing pages that convert. <a href='who-we-serve.html#law-firms' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['med spa', 'medspa', 'aesthetic', 'cosmetic', 'clinic', 'wellness', 'botox', 'spa'],
      answer: "For med spas and aesthetic clinics, we build visually premium websites with automated booking, patient reactivation sequences, and review generation. <a href='who-we-serve.html#med-spas' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['dental', 'dentist', 'orthodont', 'teeth'],
      answer: "We build new patient acquisition systems for dental practices — local SEO websites, automated outreach, online scheduling, and patient reactivation campaigns. <a href='who-we-serve.html#dental' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['cpa', 'accountant', 'financial', 'tax', 'bookkeep'],
      answer: "For CPA and financial firms, we build authority-positioning websites and AI outreach systems targeting business owners — timed for tax season and beyond. <a href='who-we-serve.html#cpa' style='color:var(--emerald)'>→ Learn More</a>"
    },
    {
      keys: ['how long', 'timeline', 'launch', 'when', 'time'],
      answer: "Most systems go live in 2–4 weeks from the start of the engagement. Enterprise projects may take 6–8 weeks depending on complexity."
    },
    {
      keys: ['location', 'where', 'based', 'dc', 'washington', 'virginia'],
      answer: "Pixel Vision is based in Washington, DC. We serve clients nationwide but have deep roots in the DC, Maryland, and Virginia market."
    },
    {
      keys: ['contact', 'reach', 'talk', 'speak', 'phone', 'email', 'call'],
      answer: "You can reach us at <a href='mailto:inquiries@pixelvision.agency' style='color:var(--emerald)'>inquiries@pixelvision.agency</a> or call <a href='tel:7577821554' style='color:var(--emerald)'>757-782-1554</a>. Or book a free strategy call: <a href='contact.html' style='color:var(--emerald)'>→ Book Now</a>"
    },
    {
      keys: ['book', 'schedule', 'calendly', 'appointment', 'meeting', 'strategy'],
      answer: "Book a free 20-minute strategy call — no pitch, no pressure. We'll map out exactly what AI can do for your business. <a href='https://calendly.com/pixelvision2026' target='_blank' style='color:var(--emerald)'>→ Book a Free Call</a>"
    },
    {
      keys: ['result', 'roi', 'return', 'work', 'guarantee', 'proof'],
      answer: "Every system is built for measurable outcomes. We include monthly reporting so you can see exactly how many leads your system generated and track ROI clearly."
    },
    {
      keys: ['technical', 'tech', 'knowledge', 'experience', 'know how'],
      answer: "No technical knowledge needed at all. We handle the entire build, launch, training, and optimization. You just receive the leads and close the deals."
    },
  ];

  const FALLBACK = "Great question. The best way to get a specific answer is on a free 20-minute call — we can walk through exactly what makes sense for your business. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>";

  const QUICK_REPLIES = ['Services & Pricing', 'Book a Free Call', 'Who Do You Serve?', 'How Does It Work?'];

  const QR_RESPONSES = {
    'Services & Pricing': "We build AI websites, client acquisition agents, email automation, and ongoing management systems — all custom-quoted for your business. <a href='services.html' style='color:var(--emerald)'>→ See Services</a> | <a href='pricing.html' style='color:var(--emerald)'>→ Pricing</a>",
    'Book a Free Call': "Book a free 20-minute call and we'll map out exactly what Pixel Vision can build for your business. <a href='https://calendly.com/pixelvision2026' target='_blank' style='color:var(--emerald)'>→ Book on Calendly</a>",
    'Who Do You Serve?': "We specialize in commercial real estate, law firms, med spas, dental practices, real estate brokerages, and CPA firms. <a href='who-we-serve.html' style='color:var(--emerald)'>→ See All Industries</a>",
    'How Does It Work?': "1. Book a free strategy call. 2. We build your custom AI system in 2–4 weeks. 3. Your system finds prospects, reaches out, and books calls on your calendar automatically."
  };

  // ── MATCH FUNCTION ───────────────────────────────
  function getResponse(text) {
    const lower = text.toLowerCase();
    for (const item of KB) {
      if (item.keys.some(k => lower.includes(k))) return item.answer;
    }
    return FALLBACK;
  }

  // ── BUILD UI ─────────────────────────────────────
  const btn = document.createElement('button');
  btn.id = 'pv-chat-btn';
  btn.setAttribute('aria-label', 'Open chat');
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;

  const win = document.createElement('div');
  win.id = 'pv-chat-window';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', 'Pixel Vision chat');
  win.innerHTML = `
    <div class="pv-chat-header">
      <div class="pv-chat-avatar">👁</div>
      <div class="pv-chat-header-info">
        <strong>Pixel Vision AI</strong>
        <span>Typically replies instantly</span>
      </div>
      <button class="pv-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div class="pv-chat-messages" id="pvMessages"></div>
    <div class="pv-quick-replies" id="pvQR"></div>
    <div class="pv-chat-input-row">
      <input type="text" id="pvInput" placeholder="Ask anything about our services…" autocomplete="off" />
      <button class="pv-send-btn" id="pvSend" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(win);

  const msgs = win.querySelector('#pvMessages');
  const qrRow = win.querySelector('#pvQR');
  const input = win.querySelector('#pvInput');

  function addMsg(text, role) {
    const wrap = document.createElement('div');
    wrap.className = 'pv-msg ' + role;
    if (role === 'bot') wrap.innerHTML = `<div class="pv-msg-dot">👁</div><div class="pv-msg-bubble">${text}</div>`;
    else wrap.innerHTML = `<div class="pv-msg-bubble">${text}</div>`;
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
    return wrap;
  }

  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'pv-msg bot';
    wrap.id = 'pvTyping';
    wrap.innerHTML = `<div class="pv-msg-dot">👁</div><div class="pv-msg-bubble pv-typing"><span></span><span></span><span></span></div>`;
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    const t = document.getElementById('pvTyping');
    if (t) t.remove();
  }

  function botReply(text) {
    showTyping();
    setTimeout(() => { hideTyping(); addMsg(text, 'bot'); }, 800 + Math.random() * 400);
  }

  function buildQR() {
    qrRow.innerHTML = '';
    QUICK_REPLIES.forEach(label => {
      const b = document.createElement('button');
      b.className = 'pv-qr';
      b.textContent = label;
      b.onclick = () => {
        addMsg(label, 'user');
        qrRow.innerHTML = '';
        botReply(QR_RESPONSES[label] || FALLBACK);
      };
      qrRow.appendChild(b);
    });
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    qrRow.innerHTML = '';
    addMsg(text, 'user');
    botReply(getResponse(text));
  }

  // ── EVENTS ───────────────────────────────────────
  btn.onclick = () => {
    const isOpen = win.classList.toggle('open');
    btn.innerHTML = isOpen
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;
    if (isOpen && msgs.children.length === 0) {
      addMsg("👋 Hi! I'm the Pixel Vision AI assistant. What can I help you with today?", 'bot');
      setTimeout(buildQR, 900);
    }
    if (isOpen) setTimeout(() => input.focus(), 300);
  };

  win.querySelector('.pv-chat-close').onclick = () => btn.click();

  win.querySelector('#pvSend').onclick = sendMessage;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
})();
