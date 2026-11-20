(function () {
  // ── Don't show on very small screens ────────────────────────────────────
  if (window.innerWidth < 640) return;

  // ── Idle messages the bot cycles through ────────────────────────────────
  const MESSAGES = [
    "👋 Need more clients?",
    "⚡ AI runs 24/7.",
    "🎯 Your next deal is out there.",
    "💬 Ask me anything!",
    "🚀 Launch in 2–4 weeks.",
    "🤖 I never sleep.",
    "📈 Your pipeline. Automated.",
    "✦ Custom-built for your firm.",
  ];
  let msgIdx = 0;
  let bubbleTimer = null;

  // ── Build the character DOM ──────────────────────────────────────────────
  const wrap = document.createElement('div');
  wrap.id = 'pv-bot';
  wrap.setAttribute('aria-label', 'Pixel Vision AI mascot');
  wrap.innerHTML = `
    <div class="pvb-bubble" id="pvbBubble"></div>
    <div class="pvb-body">
      <div class="pvb-antenna">
        <div class="pvb-antenna-stem"></div>
        <div class="pvb-antenna-tip"></div>
      </div>
      <div class="pvb-head">
        <div class="pvb-eye-wrap">
          <div class="pvb-eye" id="pvbEye">
            <div class="pvb-iris" id="pvbIris">
              <div class="pvb-pupil"></div>
              <div class="pvb-shine"></div>
            </div>
            <div class="pvb-eyelid" id="pvbEyelid"></div>
          </div>
        </div>
        <div class="pvb-mouth" id="pvbMouth"></div>
      </div>
      <div class="pvb-torso">
        <div class="pvb-chest-light"></div>
        <div class="pvb-chest-line"></div>
        <div class="pvb-chest-line"></div>
      </div>
      <div class="pvb-feet">
        <div class="pvb-foot pvb-foot-l"></div>
        <div class="pvb-foot pvb-foot-r"></div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  const eye    = document.getElementById('pvbEye');
  const iris   = document.getElementById('pvbIris');
  const eyelid = document.getElementById('pvbEyelid');
  const bubble = document.getElementById('pvbBubble');
  const mouth  = document.getElementById('pvbMouth');

  // ── Eye tracking ─────────────────────────────────────────────────────────
  document.addEventListener('mousemove', (e) => {
    const r  = eye.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxMove = 5;
    const scale = Math.min(1, maxMove / (dist || 1));
    iris.style.transform = `translate(${dx * scale}px, ${dy * scale}px)`;
  });

  // ── Blink ────────────────────────────────────────────────────────────────
  function blink() {
    eyelid.classList.add('blink');
    setTimeout(() => eyelid.classList.remove('blink'), 180);
  }
  function scheduleBlink() {
    setTimeout(() => { blink(); scheduleBlink(); }, 2500 + Math.random() * 4000);
  }
  scheduleBlink();

  // ── Speech bubble ────────────────────────────────────────────────────────
  function showBubble(text) {
    bubble.textContent = text;
    bubble.classList.add('visible');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove('visible'), 3200);
  }

  function cycleMessage() {
    showBubble(MESSAGES[msgIdx]);
    msgIdx = (msgIdx + 1) % MESSAGES.length;
    setTimeout(cycleMessage, 9000 + Math.random() * 6000);
  }
  setTimeout(cycleMessage, 3500);

  // ── Click to chat ────────────────────────────────────────────────────────
  wrap.addEventListener('click', () => {
    // Open the chatbot if present
    const chatBtn = document.getElementById('pv-chat-btn');
    if (chatBtn) {
      chatBtn.click();
    } else {
      showBubble('💬 Ask me anything!');
    }
    // Happy reaction
    mouth.classList.add('happy');
    setTimeout(() => mouth.classList.remove('happy'), 1200);
    blink(); blink();
  });

  // ── Hover reaction ───────────────────────────────────────────────────────
  wrap.addEventListener('mouseenter', () => {
    wrap.classList.add('excited');
    showBubble('👋 Hey there!');
  });
  wrap.addEventListener('mouseleave', () => {
    wrap.classList.remove('excited');
  });

  // ── Inject styles ────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #pv-bot {
      position: fixed;
      bottom: 100px;
      left: 24px;
      z-index: 9000;
      cursor: pointer;
      user-select: none;
      animation: pvb-float 3.6s ease-in-out infinite;
      filter: drop-shadow(0 8px 24px rgba(60,179,113,0.18));
      transition: filter 0.3s;
    }
    #pv-bot:hover { filter: drop-shadow(0 12px 32px rgba(60,179,113,0.38)); }
    #pv-bot.excited { animation: pvb-float-fast 0.9s ease-in-out infinite; }

    @keyframes pvb-float {
      0%,100% { transform: translateY(0px) rotate(-1deg); }
      50%      { transform: translateY(-10px) rotate(1deg); }
    }
    @keyframes pvb-float-fast {
      0%,100% { transform: translateY(0px) rotate(-2deg) scale(1.05); }
      50%      { transform: translateY(-8px) rotate(2deg) scale(1.05); }
    }

    /* ── Speech bubble ── */
    .pvb-bubble {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(6px);
      background: rgba(10,10,10,0.92);
      border: 1px solid rgba(60,179,113,0.4);
      color: #e8e8e8;
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s, transform 0.3s;
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    }
    .pvb-bubble::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 10px; height: 10px;
      background: rgba(10,10,10,0.92);
      border-right: 1px solid rgba(60,179,113,0.4);
      border-bottom: 1px solid rgba(60,179,113,0.4);
      clip-path: polygon(0 0, 100% 100%, 0 100%);
    }
    .pvb-bubble.visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    /* ── Body wrapper ── */
    .pvb-body { display: flex; flex-direction: column; align-items: center; gap: 0; }

    /* ── Antenna ── */
    .pvb-antenna { display: flex; flex-direction: column; align-items: center; margin-bottom: -1px; }
    .pvb-antenna-stem {
      width: 3px; height: 14px;
      background: linear-gradient(to top, #3CB371, #555);
      border-radius: 2px;
    }
    .pvb-antenna-tip {
      width: 8px; height: 8px; border-radius: 50%;
      background: #3CB371;
      box-shadow: 0 0 8px 3px rgba(60,179,113,0.6);
      animation: pvb-tip-pulse 1.8s ease-in-out infinite;
    }
    @keyframes pvb-tip-pulse {
      0%,100% { box-shadow: 0 0 8px 3px rgba(60,179,113,0.5); transform: scale(1); }
      50%      { box-shadow: 0 0 14px 6px rgba(60,179,113,0.9); transform: scale(1.2); }
    }

    /* ── Head ── */
    .pvb-head {
      width: 54px; height: 50px;
      background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
      border: 1.5px solid rgba(60,179,113,0.35);
      border-radius: 14px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 7px;
      position: relative;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.4);
    }

    /* ── Eye ── */
    .pvb-eye-wrap { position: relative; }
    .pvb-eye {
      width: 28px; height: 28px; border-radius: 50%;
      background: radial-gradient(circle at 40% 35%, #1e3a2a, #0a1a10);
      border: 1.5px solid rgba(60,179,113,0.5);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(60,179,113,0.2), inset 0 0 6px rgba(0,0,0,0.5);
      position: relative;
    }
    .pvb-iris {
      width: 14px; height: 14px; border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #5fdfaa, #2a9b60 50%, #1a5c38);
      transition: transform 0.08s linear;
      position: relative;
      flex-shrink: 0;
    }
    .pvb-pupil {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      width: 6px; height: 6px; border-radius: 50%;
      background: #000;
    }
    .pvb-shine {
      position: absolute; top: 2px; left: 3px;
      width: 4px; height: 4px; border-radius: 50%;
      background: rgba(255,255,255,0.75);
    }
    .pvb-eyelid {
      position: absolute; top: 0; left: 0; right: 0;
      height: 0;
      background: #111;
      transition: height 0.08s ease;
      border-radius: 50% 50% 0 0;
    }
    .pvb-eyelid.blink { height: 100%; border-radius: 50%; }

    /* ── Mouth ── */
    .pvb-mouth {
      width: 18px; height: 5px;
      border: 1.5px solid rgba(60,179,113,0.5);
      border-top: none;
      border-radius: 0 0 9px 9px;
      transition: all 0.3s;
    }
    .pvb-mouth.happy {
      height: 8px;
      border-color: #3CB371;
      box-shadow: 0 0 6px rgba(60,179,113,0.4);
    }

    /* ── Torso ── */
    .pvb-torso {
      width: 46px; height: 36px;
      background: linear-gradient(145deg, #161616, #0d0d0d);
      border: 1.5px solid rgba(60,179,113,0.25);
      border-radius: 10px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 5px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .pvb-chest-light {
      width: 10px; height: 10px; border-radius: 50%;
      background: radial-gradient(circle, #3CB371, #1a6640);
      box-shadow: 0 0 8px 2px rgba(60,179,113,0.5);
      animation: pvb-chest-pulse 2.2s ease-in-out infinite;
    }
    @keyframes pvb-chest-pulse {
      0%,100% { opacity: 0.7; transform: scale(0.9); }
      50%      { opacity: 1; transform: scale(1.1); box-shadow: 0 0 12px 4px rgba(60,179,113,0.7); }
    }
    .pvb-chest-line {
      width: 28px; height: 2px; border-radius: 1px;
      background: linear-gradient(to right, transparent, rgba(60,179,113,0.3), transparent);
    }

    /* ── Feet ── */
    .pvb-feet {
      display: flex; gap: 10px;
      margin-top: -2px;
    }
    .pvb-foot {
      width: 14px; height: 7px;
      background: linear-gradient(145deg, #1a1a1a, #111);
      border: 1px solid rgba(60,179,113,0.2);
      border-radius: 4px 4px 6px 6px;
      animation: pvb-foot-l 3.6s ease-in-out infinite;
    }
    .pvb-foot-r { animation: pvb-foot-r 3.6s ease-in-out infinite; }
    @keyframes pvb-foot-l {
      0%,100% { transform: rotate(-3deg) translateY(0); }
      50%      { transform: rotate(3deg) translateY(-3px); }
    }
    @keyframes pvb-foot-r {
      0%,100% { transform: rotate(3deg) translateY(-3px); }
      50%      { transform: rotate(-3deg) translateY(0); }
    }

    @media (max-width: 640px) { #pv-bot { display: none; } }
  `;
  document.head.appendChild(style);
})();
