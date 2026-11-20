(function () {

  // ── KNOWLEDGE BASE ───────────────────────────────────────────────────────
  // Each entry has keys (keywords), answer, and optional follow-up quick replies
  const KB = [

    // ── GREETINGS ──
    {
      keys: ['hello', 'hi', 'hey', 'howdy', 'sup', 'good morning', 'good afternoon', 'good evening', 'whats up', "what's up"],
      answer: "Hey! 👋 Great to have you here. I can tell you everything about Pixel Vision's AI systems, pricing, services, and more. What are you trying to figure out?",
      qr: ['What do you build?', 'How much does it cost?', 'Who do you work with?', 'Book a Free Call']
    },

    // ── WHAT IS PIXEL VISION ──
    {
      keys: ['what is pixel vision', 'who are you', 'about you', 'about pixel vision', 'tell me about', 'what do you do', 'what does pixel vision do'],
      answer: "Pixel Vision is a full-service AI agency based in Washington, DC. We build complete AI-powered client acquisition systems, premium websites, automated outreach agents, email automation, and ongoing monthly optimization, custom-built for professional service firms.",
      qr: ['What do you build?', 'Who do you work with?', 'How much does it cost?']
    },

    // ── SERVICES OVERVIEW ──
    {
      keys: ['service', 'offer', 'what do you build', 'what you build', 'what can you do', 'build', 'make', 'create', 'provide', 'package', 'solution', 'product'],
      answer: "We build four interconnected AI systems:<br><br>🌐 <strong>Premium AI Website</strong>, custom-built, never a template<br>🤖 <strong>AI Client Acquisition Agent</strong>, finds and reaches out to prospects automatically<br>📧 <strong>Email Outreach Automation</strong>, personalized sequences at scale<br>📈 <strong>Monthly Management</strong>, reporting, optimization, and ongoing improvement<br><br>Together they form one end-to-end system that finds clients while you focus on closing. <a href='services.html' style='color:var(--emerald)'>→ See All Services</a>",
      qr: ['Tell me about the website', 'Tell me about the AI agent', 'How much does it cost?', 'Book a Free Call']
    },

    // ── WEBSITE SERVICE ──
    {
      keys: ['website', 'web design', 'web page', 'site design', 'landing page', 'design a site', 'build a site', 'web development', 'frontend'],
      answer: "Our websites are custom-built from scratch, never a template. Every site includes:<br><br>✦ Mobile-first, premium design<br>✦ AI-powered lead capture forms<br>✦ 24/7 chatbot (like this one)<br>✦ SEO architecture for local search<br>✦ CRM integration<br>✦ Fast load times and clean code<br><br>Your website becomes the hub of your entire client acquisition system. <a href='services.html' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How long to build?', 'How much does it cost?', 'What about SEO?', 'Book a Free Call']
    },

    // ── AI CLIENT ACQUISITION ──
    {
      keys: ['acquisition', 'ai agent', 'prospect', 'find clients', 'get clients', 'leads', 'lead generation', 'outreach agent', 'automated outreach', 'prospecting', 'pipeline'],
      answer: "Our AI Client Acquisition Agent runs 24/7 on your behalf. It:<br><br>✦ Identifies your ideal prospects from multiple data sources<br>✦ Writes personalized outreach messages for each one<br>✦ Sends messages and follows up automatically<br>✦ Handles replies and books calls on your calendar<br>✦ Updates your CRM in real time<br><br>You show up to qualified calls, the AI handles everything before that. <a href='services.html' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['What industries does this work for?', 'How long to set up?', 'How much does it cost?', 'Book a Free Call']
    },

    // ── EMAIL AUTOMATION ──
    {
      keys: ['email', 'email automation', 'cold email', 'email outreach', 'follow up', 'follow-up', 'drip', 'sequence', 'newsletter', 'campaign'],
      answer: "Our email automation system writes and sends personalized outreach to hundreds of prospects each week. It:<br><br>✦ Personalizes every message based on the recipient's business<br>✦ Sends at optimal delivery times to avoid spam filters<br>✦ Follows up automatically 2–4 times per prospect<br>✦ Routes warm replies directly to you<br>✦ Tracks open rates, clicks, and responses<br><br>Your inbox fills with warm leads, not busywork. <a href='services.html' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How many emails per week?', 'Does this work with my CRM?', 'How much does it cost?']
    },

    // ── MONTHLY MANAGEMENT ──
    {
      keys: ['monthly', 'management', 'ongoing', 'retainer', 'maintenance', 'support', 'optimize', 'optimization', 'reporting', 'report'],
      answer: "Every engagement includes monthly management. Each month we:<br><br>✦ Review system performance and lead quality<br>✦ Optimize outreach messaging based on what's working<br>✦ Refresh prospect lists<br>✦ Update your website with new content if needed<br>✦ Send you a clear performance report<br><br>Your system improves every single month instead of going stale.",
      qr: ['What does the report show?', 'Can I cancel anytime?', 'How much does it cost?']
    },

    // ── PRICING ──
    {
      keys: ['price', 'cost', 'pricing', 'how much', 'quote', 'charge', 'fee', 'afford', 'expensive', 'cheap', 'budget', 'investment', 'rate', 'payment', 'pay'],
      answer: "Every system is custom-quoted based on your industry, goals, and the scope of what we build. There's no one-size-fits-all number, a solo attorney's needs are different from a 10-broker CRE firm.<br><br>What we can say: our systems are built to pay for themselves. One new client from your AI system typically covers the entire investment.<br><br>Book a free 20-minute call and we'll give you an exact quote. <a href='contact.html' style='color:var(--emerald)'>→ Get Your Quote</a>",
      qr: ['What\'s included in the price?', 'Is there a contract?', 'What about ROI?', 'Book a Free Call']
    },

    // ── ROI / RESULTS ──
    {
      keys: ['roi', 'return', 'result', 'worth it', 'value', 'payoff', 'payback', 'revenue', 'money', 'profit', 'growth', 'work', 'does it work', 'proof', 'case study', 'example'],
      answer: "Every system is built around one goal: getting you clients. Here's how the ROI math works for most of our clients:<br><br>✦ System cost: Custom-quoted for your business<br>✦ Average new client value: Often $5,000–$50,000+ depending on industry<br>✦ Break-even: Typically 1–3 new clients<br><br>We include monthly reporting so you can see exactly how many leads your system generated, how many converted, and what your acquisition cost per client is. Book a call to talk through the numbers for your specific business. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>",
      qr: ['What industries work best?', 'How long until I see results?', 'Book a Free Call']
    },

    // ── TIMELINE ──
    {
      keys: ['how long', 'timeline', 'launch', 'when', 'time to build', 'delivery', 'turnaround', 'how fast', 'weeks', 'days'],
      answer: "Most systems go live in <strong>2–4 weeks</strong> from the kickoff call. Here's how the timeline breaks down:<br><br>📋 <strong>Week 1</strong>, Discovery, strategy, and design<br>🔨 <strong>Weeks 2–3</strong>, Build: website, AI agent, email sequences<br>🚀 <strong>Week 4</strong>, Testing, refinement, and launch<br><br>Larger enterprise engagements may take 6–8 weeks. We move fast because every week without the system is a week without new leads.",
      qr: ['What do I need to provide?', 'What happens after launch?', 'Book a Free Call']
    },

    // ── WHAT I NEED TO PROVIDE ──
    {
      keys: ['what do i need', 'what do you need from me', 'my input', 'information needed', 'provide', 'my part', 'what i need to do', 'effort'],
      answer: "Very little from you. To get started we need:<br><br>✦ A 20-minute discovery call to understand your business and goals<br>✦ Your logo and any brand colors (if you have them)<br>✦ A few sentences about your business and ideal client<br>✦ Access to your domain (we can help with this)<br><br>We handle everything else, design, copywriting, AI setup, testing, and launch. You review and approve before anything goes live.",
      qr: ['How long does it take?', 'What about technical setup?', 'Book a Free Call']
    },

    // ── TECHNICAL KNOWLEDGE ──
    {
      keys: ['technical', 'tech', 'knowledge', 'experience needed', 'coding', 'programmer', 'complicated', 'hard to use', 'complex', 'manage', 'run it myself', 'ai knowledge'],
      answer: "No technical knowledge required, none at all. We handle the entire build, launch, and ongoing management. You don't touch any code or AI settings.<br><br>Your only job is to show up to the calls your system books and close the deals. We handle everything else.",
      qr: ['What do I need to provide?', 'What about ongoing management?', 'Book a Free Call']
    },

    // ── CONTRACT / COMMITMENT ──
    {
      keys: ['contract', 'commitment', 'cancel', 'lock in', 'lock-in', 'month to month', 'annual', 'long term', 'quit', 'leave', 'exit'],
      answer: "We build relationships, not traps. After the initial build phase, monthly management runs month-to-month, no long-term lock-in. We keep clients because the systems deliver results, not because of a contract clause.<br><br>That said, we do ask for a minimum initial engagement to properly build and launch your system. Book a call and we'll walk you through exactly how it works. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>",
      qr: ['How much does it cost?', 'What\'s included monthly?', 'Book a Free Call']
    },

    // ── WHAT HAPPENS AFTER LAUNCH ──
    {
      keys: ['after launch', 'what happens after', 'next steps', 'post launch', 'ongoing', 'maintain', 'keep running', 'update'],
      answer: "After your system launches, here's what happens each month:<br><br>📊 We review your lead volume and quality<br>✍️ We refine outreach messaging based on response rates<br>🔄 We refresh your prospect lists with new targets<br>📈 We send you a clear performance report<br>💬 We're available for questions and strategy calls<br><br>Your system compounds over time, it gets better every month as we learn what works for your specific market.",
      qr: ['How much does monthly management cost?', 'Can I cancel anytime?', 'Book a Free Call']
    },

    // ── CRM / INTEGRATIONS ──
    {
      keys: ['crm', 'salesforce', 'hubspot', 'integration', 'connect', 'sync', 'software', 'tool', 'existing system', 'calendar', 'google calendar'],
      answer: "Yes, we integrate with your existing tools. We work with:<br><br>✦ <strong>CRMs:</strong> HubSpot, Salesforce, GoHighLevel, Pipedrive, and others<br>✦ <strong>Calendars:</strong> Google Calendar, Calendly, Microsoft Outlook<br>✦ <strong>Email:</strong> Gmail, Outlook, custom domains<br>✦ <strong>Communication:</strong> Slack notifications for new leads<br><br>If you use something not on this list, let us know, we've likely worked with it or can build the connection.",
      qr: ['What do I need to provide?', 'How long to set up?', 'Book a Free Call']
    },

    // ── SEO ──
    {
      keys: ['seo', 'search engine', 'google ranking', 'rank on google', 'organic', 'search ranking', 'keyword', 'google my business'],
      answer: "Every website we build is architected for search from day one. That includes:<br><br>✦ Keyword-optimized page structure and content<br>✦ Local SEO setup (Google Business Profile)<br>✦ Fast load times (Core Web Vitals)<br>✦ Schema markup for rich search results<br>✦ Practice-area and location pages where relevant<br><br>SEO results compound over time, the longer your site is live, the more visibility it earns.",
      qr: ['Tell me about the website', 'How long for SEO results?', 'Book a Free Call']
    },

    // ── HOW LONG FOR SEO RESULTS ──
    {
      keys: ['how long for seo', 'seo timeline', 'when will i rank', 'google results', 'seo results'],
      answer: "SEO is a long-term strategy, most sites start seeing meaningful movement within 3–6 months, with strong rankings typically established by 9–12 months. That's why we pair SEO with our AI outreach system: the outreach gets you leads immediately while SEO builds your long-term organic pipeline.",
      qr: ['Tell me about the AI agent', 'Book a Free Call']
    },

    // ── HOW MANY EMAILS / VOLUME ──
    {
      keys: ['how many emails', 'volume', 'how many leads', 'how many prospects', 'scale', 'capacity'],
      answer: "Our systems are built to scale to your market. Depending on your industry and goals, we typically set up outreach to anywhere from 200–1,000+ qualified prospects per month. We focus on quality over raw volume, a highly personalized message to 300 ideal prospects outperforms a generic blast to 3,000.",
      qr: ['What industries work best?', 'How much does it cost?', 'Book a Free Call']
    },

    // ── COMMERCIAL REAL ESTATE ──
    {
      keys: ['real estate', 'cre', 'commercial real estate', 'commercial property', 'broker', 'brokerage', 'property owner', 'investor', 'tenant', 'landlord', 'lease', 'multifamily', 'office space'],
      answer: "Commercial real estate is our primary focus. CRE is relationship-driven and high-value, exactly where our systems shine. We build:<br><br>✦ Authority websites that position you as the go-to broker in your market<br>✦ AI agents that identify property owners, investors, and tenants<br>✦ Personalized outreach that references specific properties and market conditions<br>✦ Automated follow-up so no deal falls through the cracks<br><br>CRE clients typically see their pipeline fill within the first 30–60 days. <a href='who-we-serve.html#commercial-real-estate' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How much does it cost?', 'How long to launch?', 'Book a Free Call']
    },

    // ── LAW FIRMS ──
    {
      keys: ['law', 'lawyer', 'attorney', 'legal', 'law firm', 'practice', 'litigation', 'personal injury', 'family law', 'criminal', 'immigration', 'estate planning', 'corporate law'],
      answer: "We build complete client acquisition systems for law firms. Legal clients research extensively before choosing, your digital presence needs to communicate authority and trust. Our systems include:<br><br>✦ Authority-positioning websites with practice-area pages<br>✦ AI intake systems that qualify leads before they reach you<br>✦ Automated follow-up for people who contact you but don't book<br>✦ Local SEO to rank for '[practice area] attorney near me'<br>✦ Review generation campaigns<br><br><em>Note: We build marketing systems, not legal advice tools. All messaging is reviewed for compliance considerations.</em> <a href='who-we-serve.html#law-firms' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How much does it cost?', 'How long to launch?', 'Book a Free Call']
    },

    // ── MED SPA / AESTHETICS ──
    {
      keys: ['med spa', 'medspa', 'aesthetic', 'cosmetic', 'clinic', 'wellness', 'botox', 'filler', 'laser', 'spa', 'beauty', 'plastic surgery', 'dermatology'],
      answer: "Med spas and aesthetic clinics are a perfect fit for our systems. Clients in this space make decisions based on trust, before-and-after results, and reviews. We build:<br><br>✦ Visually premium websites that match the quality of your services<br>✦ Automated booking and consultation scheduling<br>✦ Patient reactivation sequences (re-engage past clients)<br>✦ Review generation campaigns<br>✦ Local SEO for treatment-specific searches<br><br>Most med spa clients see a measurable uptick in new bookings within the first month. <a href='who-we-serve.html#med-spas' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['What about patient privacy?', 'How much does it cost?', 'Book a Free Call']
    },

    // ── DENTAL ──
    {
      keys: ['dental', 'dentist', 'orthodont', 'teeth', 'oral', 'implant', 'invisalign', 'braces', 'hygienist'],
      answer: "For dental practices, we focus on two things: new patient acquisition and reactivating lapsed patients. Our systems include:<br><br>✦ Local SEO websites optimized for 'dentist near me' searches<br>✦ AI outreach to new residents in your zip codes<br>✦ Online scheduling integration<br>✦ Lapsed patient reactivation sequences<br>✦ Review generation to build your Google rating<br><br>Most dental clients see new patient inquiries within the first 2–4 weeks of launch. <a href='who-we-serve.html#dental' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How much does it cost?', 'What about patient privacy?', 'Book a Free Call']
    },

    // ── CPA / FINANCIAL ──
    {
      keys: ['cpa', 'accountant', 'financial', 'tax', 'bookkeeping', 'finance', 'wealth management', 'financial advisor', 'cfp', 'enrolled agent'],
      answer: "CPA and financial firms need a consistent pipeline year-round, not just at tax season. We build:<br><br>✦ Authority-positioning websites that target business owner clients<br>✦ AI outreach to small business owners in your area<br>✦ Automated nurture sequences to stay top-of-mind between seasons<br>✦ Local SEO for high-intent searches like 'CPA for small business near me'<br>✦ Referral partner outreach systems<br><br>Many CPA clients use our system to diversify away from seasonal dependence. <a href='who-we-serve.html#cpa' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How much does it cost?', 'How long to launch?', 'Book a Free Call']
    },

    // ── REAL ESTATE (residential) ──
    {
      keys: ['residential real estate', 'realtor', 'real estate agent', 'home buyer', 'home seller', 'mls', 'listing'],
      answer: "We build AI acquisition systems for residential real estate agents and teams. Our systems help you:<br><br>✦ Identify buyers and sellers before your competition does<br>✦ Build a consistent pipeline of referrals and direct leads<br>✦ Automate follow-up with past clients and cold leads<br>✦ Establish a premium digital presence in your market<br><br><a href='who-we-serve.html' style='color:var(--emerald)'>→ Learn More</a>",
      qr: ['How much does it cost?', 'Book a Free Call']
    },

    // ── PATIENT PRIVACY / COMPLIANCE ──
    {
      keys: ['hipaa', 'privacy', 'compliance', 'patient data', 'gdpr', 'data protection', 'secure', 'confidential', 'regulation'],
      answer: "We take data privacy seriously. For healthcare and legal clients, we build systems that keep sensitive information protected. Our outreach systems use publicly available professional data, we do not access or store protected health information (PHI).<br><br><em>Important: We are not attorneys and cannot provide legal compliance advice. We always recommend consulting with your compliance officer or attorney regarding your specific requirements. Any compliance-related decisions are your responsibility.</em>",
      qr: ['Tell me about the AI agent', 'Book a Free Call']
    },

    // ── COMPARED TO OTHER AGENCIES ──
    {
      keys: ['different', 'better', 'versus', 'vs', 'compared to', 'other agency', 'competitor', 'why you', 'why pixel vision', 'why should i choose'],
      answer: "Most agencies build you a website and walk away. We build a complete, integrated system:<br><br>✦ <strong>Not just a website</strong>, a full AI acquisition machine<br>✦ <strong>Not a template</strong>, custom-built for your business<br>✦ <strong>Not set-and-forget</strong>, monthly optimization and management<br>✦ <strong>Not generalist</strong>, we focus exclusively on professional service firms<br><br>We're not the cheapest option. We're built for businesses where one new client is worth $5,000–$50,000+, and where your digital presence should match the quality of your work.",
      qr: ['What\'s your pricing?', 'Who do you work with?', 'Book a Free Call']
    },

    // ── LOCATION ──
    {
      keys: ['location', 'where', 'based', 'dc', 'washington', 'virginia', 'maryland', 'dmv', 'nationwide', 'remote', 'in person'],
      answer: "Pixel Vision is based in Washington, DC. We serve clients nationwide, the entire engagement is conducted remotely (strategy calls, reviews, and approvals are all done virtually). We have deep roots in the DC, Maryland, and Virginia market but have worked with clients in New York, Texas, California, and beyond.",
      qr: ['Book a Free Call', 'How does the process work?']
    },

    // ── CONTACT ──
    {
      keys: ['contact', 'reach', 'talk', 'speak', 'phone', 'number', 'email address', 'get in touch', 'message'],
      answer: "You can reach us directly:<br><br>📧 <a href='mailto:inquiries@pixelvision.agency' style='color:var(--emerald)'>inquiries@pixelvision.agency</a><br>📞 <a href='tel:7577821554' style='color:var(--emerald)'>757-782-1554</a><br><br>Or if you'd prefer, book a free strategy call and we'll set up a time to talk. <a href='contact.html' style='color:var(--emerald)'>→ Contact Page</a>",
      qr: ['Book a Free Call', 'How does the process work?']
    },

    // ── BOOK A CALL ──
    {
      keys: ['book', 'schedule', 'calendly', 'appointment', 'meeting', 'strategy call', 'free call', 'get started', 'start', 'begin', 'sign up'],
      answer: "Book your free 20-minute strategy call, no pitch, no pressure. On the call we'll:<br><br>✦ Learn about your business and your ideal client<br>✦ Map out what a custom AI system would look like for you<br>✦ Give you a clear sense of timeline and investment<br>✦ Answer every question you have<br><br>No obligation. <a href='https://calendly.com/pixelvision2026' target='_blank' style='color:var(--emerald)'>→ Book on Calendly</a>",
      qr: ['What do I need to prepare?', 'How long is the call?', 'What happens after?']
    },

    // ── CALL PREPARATION ──
    {
      keys: ['prepare', 'what to bring', 'what to expect', 'discovery call', 'strategy call prep', 'how long is the call'],
      answer: "Nothing to prepare, just show up. The call is 20 minutes and completely informal. We'll ask you about:<br><br>✦ Your business and what you do<br>✦ Who your ideal client is<br>✦ Your current lead generation situation<br>✦ What growth looks like for you<br><br>By the end you'll have a clear picture of exactly what we'd build and what it would cost. <a href='https://calendly.com/pixelvision2026' target='_blank' style='color:var(--emerald)'>→ Book a Free Call</a>",
      qr: ['Book a Free Call', 'How much does it cost?']
    },

    // ── PROCESS / HOW IT WORKS ──
    {
      keys: ['process', 'how does it work', 'how it works', 'steps', 'what happens', 'walk me through', 'explain', 'overview'],
      answer: "Here's how we work together from start to finish:<br><br><strong>Step 1, Free Strategy Call (20 min)</strong><br>We learn about your business, goals, and ideal client.<br><br><strong>Step 2, Custom System Design (3–5 days)</strong><br>We design your complete AI system architecture.<br><br><strong>Step 3, Build & Launch (2–4 weeks)</strong><br>We build everything and launch your system live.<br><br><strong>Step 4, Monthly Optimization (ongoing)</strong><br>We refine, optimize, and report every month.<br><br>You're involved at every review point and nothing goes live without your approval.",
      qr: ['How long does it take?', 'What do I need to provide?', 'Book a Free Call']
    },

    // ── WHAT RESULTS TO EXPECT ──
    {
      keys: ['expect', 'realistic', 'realistic expectations', 'how many leads', 'results timeline', 'when will i see results', 'first month', 'guarantee'],
      answer: "Here's what a realistic first 90 days looks like:<br><br>📆 <strong>Month 1</strong>, System launches, outreach begins, initial leads start coming in<br>📆 <strong>Month 2</strong>, We refine messaging based on early response data, lead quality improves<br>📆 <strong>Month 3</strong>, Consistent pipeline established, SEO begins building momentum<br><br>Results vary by industry, market, and offer strength. We don't guarantee a specific number of leads, but we do guarantee we'll optimize until your system is performing. Book a call to talk about realistic expectations for your specific situation.",
      qr: ['What\'s your pricing?', 'What industries work best?', 'Book a Free Call']
    },

    // ── THANKS / POSITIVE ──
    {
      keys: ['thank', 'thanks', 'thank you', 'appreciate', 'helpful', 'great', 'awesome', 'perfect', 'amazing', 'love it', 'sounds good'],
      answer: "Happy to help! Is there anything else you'd like to know? I can go deep on any of our services, talk pricing, or help you figure out if Pixel Vision is the right fit for your business.",
      qr: ['How much does it cost?', 'Book a Free Call', 'Tell me more about services']
    },

    // ── NOT SURE / HESITANT ──
    {
      keys: ['not sure', 'unsure', 'maybe', 'thinking about it', 'considering', 'not ready', 'later', 'hesitant', 'nervous', 'worried', 'skeptical', 'doubt'],
      answer: "That's completely fair, investing in a new system is a real decision. The best thing to do is book a free 20-minute call. You'll get a clear picture of exactly what we'd build, what it costs, and what results look like for businesses like yours. No pressure, no obligation, just information to help you decide. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>",
      qr: ['What\'s the ROI?', 'Is there a contract?', 'Book a Free Call']
    },

    // ── ALREADY HAVE A WEBSITE ──
    {
      keys: ['already have a website', 'existing website', 'current website', 'rebrand', 'redesign', 'improve my site', 'update my site'],
      answer: "If you already have a website, we can either rebuild it completely or build your AI acquisition system on top of your existing domain. Many clients come to us with an existing site that just isn't converting, we turn it into a full client acquisition machine.<br><br>On the strategy call we'll look at what you have and tell you exactly what we'd recommend.",
      qr: ['What\'s included in the website?', 'Book a Free Call']
    },

    // ── SOCIAL MEDIA ──
    {
      keys: ['social media', 'instagram', 'linkedin', 'facebook', 'twitter', 'tiktok', 'content', 'posting', 'social'],
      answer: "We focus on direct client acquisition through your website and AI outreach, not social media content creation. That said, your website and AI system are the foundation that makes everything else (including social) more effective. We also build LinkedIn outreach sequences for B2B clients, which is part of our AI acquisition agent.",
      qr: ['Tell me about the AI agent', 'What do you build?', 'Book a Free Call']
    },

    // ── HOW AI WORKS ──
    {
      keys: ['how does the ai work', 'what ai', 'which ai', 'chatgpt', 'openai', 'artificial intelligence', 'machine learning', 'automation', 'how is it automated'],
      answer: "We use a combination of AI tools and automation platforms to build your system. This includes:<br><br>✦ Large language models (similar to ChatGPT) for personalizing outreach messages<br>✦ Data enrichment tools to identify and research your ideal prospects<br>✦ Automation platforms to orchestrate the sequences<br>✦ CRM integrations to keep everything organized<br><br>You don't need to know how any of this works, that's what you're paying us for.",
      qr: ['Do I need technical knowledge?', 'What do I need to provide?', 'Book a Free Call']
    },

  ];

  // ── QUICK REPLY POOL, rotates so user never sees same set twice ─────────
  const QR_POOL = [
    'How does the process work?',
    'What industries do you serve?',
    'What do you build?',
    'How much does it cost?',
    'Book a Free Call',
    'Who do you work with?',
    'What\'s the ROI?',
    'How long does it take?',
    'Tell me about the AI agent',
    'Tell me about the website',
    'Is there a contract?',
    'What do I need to provide?',
    'Tell me about email automation',
    'What about monthly management?',
    'What about SEO?',
    'Do I need technical knowledge?',
    'How does it compare to other agencies?',
    'Where are you located?',
    'What happens after launch?',
    'What CRMs do you integrate with?',
  ];
  let _lastQR = [];
  function DEFAULT_QR() {
    // Pick 4 from pool that weren't shown last time
    const fresh = QR_POOL.filter(q => !_lastQR.includes(q));
    const pool = fresh.length >= 4 ? fresh : QR_POOL;
    const shuffled = pool.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }

  // ── FALLBACK ─────────────────────────────────────────────────────────────
  const FALLBACK = {
    answer: "That's a great question. For anything specific to your business, the best next step is a free 20-minute strategy call, we can give you a real, tailored answer. <a href='contact.html' style='color:var(--emerald)'>→ Book a Free Call</a>",
    qr: ['What do you build?', 'How much does it cost?', 'Book a Free Call']
  };

  // ── SMART MATCHING, scores and returns best match ───────────────────────
  function getResponse(text) {
    const lower = text.toLowerCase().trim();

    // exact quick-phrase shortcuts
    const shortcuts = {
      'what do you build?': KB.find(k => k.keys.includes('service')),
      'tell me about services': KB.find(k => k.keys.includes('service')),
      'tell me more about services': KB.find(k => k.keys.includes('service')),
      "what's your pricing?": KB.find(k => k.keys.includes('price')),
      "what's the roi?": KB.find(k => k.keys.includes('roi')),
      'how does the process work?': KB.find(k => k.keys.includes('process')),
      'what do i need to prepare?': KB.find(k => k.keys.includes('prepare')),
      'what\'s included in the price?': KB.find(k => k.keys.includes('price')),
      "is there a contract?": KB.find(k => k.keys.includes('contract')),
      "can i cancel anytime?": KB.find(k => k.keys.includes('contract')),
      'what happens after?': KB.find(k => k.keys.includes('after launch')),
      'how long is the call?': KB.find(k => k.keys.includes('prepare')),
      'what do i need to provide?': KB.find(k => k.keys.includes('what do i need')),
      'does this work with my crm?': KB.find(k => k.keys.includes('crm')),
      'what about seo?': KB.find(k => k.keys.includes('seo')),
      'how long for seo results?': KB.find(k => k.keys.includes('how long for seo')),
      'tell me about the website': KB.find(k => k.keys.includes('website')),
      'tell me about the ai agent': KB.find(k => k.keys.includes('acquisition')),
      'what about technical setup?': KB.find(k => k.keys.includes('technical')),
      'what about ongoing management?': KB.find(k => k.keys.includes('monthly')),
      'what does the report show?': KB.find(k => k.keys.includes('monthly')),
      'how long to build?': KB.find(k => k.keys.includes('how long')),
      'how long to launch?': KB.find(k => k.keys.includes('how long')),
      'how long to set up?': KB.find(k => k.keys.includes('how long')),
      'what industries work best?': KB.find(k => k.keys.includes('real estate')),
      'who do you work with?': KB.find(k => k.keys.includes('real estate')),
      'how many emails per week?': KB.find(k => k.keys.includes('how many emails')),
      'what about patient privacy?': KB.find(k => k.keys.includes('hipaa')),
      'what\'s included in the website?': KB.find(k => k.keys.includes('website')),
      "what's the roi?": KB.find(k => k.keys.includes('roi')),
      'how long until i see results?': KB.find(k => k.keys.includes('expect')),
      'book a free call': KB.find(k => k.keys.includes('book')),
    };

    if (shortcuts[lower]) return shortcuts[lower];

    // Score each KB entry, count how many keywords match
    let best = null;
    let bestScore = 0;
    for (const item of KB) {
      let score = 0;
      for (const k of item.keys) {
        if (lower.includes(k)) score += k.split(' ').length; // longer key = higher score
      }
      if (score > bestScore) { bestScore = score; best = item; }
    }
    return bestScore > 0 ? best : null;
  }

  // ── BUILD UI ─────────────────────────────────────────────────────────────
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
      <input type="text" id="pvInput" placeholder="Ask me anything…" autocomplete="off" />
      <button class="pv-send-btn" id="pvSend" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(win);

  const msgs = win.querySelector('#pvMessages');
  const qrRow = win.querySelector('#pvQR');
  const input = win.querySelector('#pvInput');

  function addMsg(html, role) {
    const wrap = document.createElement('div');
    wrap.className = 'pv-msg ' + role;
    if (role === 'bot') wrap.innerHTML = `<div class="pv-msg-dot">👁</div><div class="pv-msg-bubble">${html}</div>`;
    else wrap.innerHTML = `<div class="pv-msg-bubble">${html}</div>`;
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

  function buildQR(labels, exclude) {
    qrRow.innerHTML = '';
    // Remove the question just answered and any duplicates
    let list = (labels || DEFAULT_QR()).filter(l => l !== exclude);
    // If we ended up with fewer than 2 from the provided list, pad from pool
    if (list.length < 2) {
      const pad = QR_POOL.filter(q => !list.includes(q) && q !== exclude);
      list = list.concat(pad.sort(() => Math.random() - 0.5)).slice(0, 4);
    }
    _lastQR = list.slice();
    list.forEach(label => {
      const b = document.createElement('button');
      b.className = 'pv-qr';
      b.textContent = label;
      b.onclick = () => {
        const clicked = label;
        addMsg(clicked, 'user');
        qrRow.innerHTML = '';
        const result = getResponse(clicked.toLowerCase());
        if (result) {
          const delay = 600 + Math.random() * 400;
          showTyping();
          setTimeout(() => {
            hideTyping();
            addMsg(result.answer, 'bot');
            const nextQR = result.qr
              ? result.qr.filter(q => q !== clicked)
              : DEFAULT_QR().filter(q => q !== clicked);
            setTimeout(() => buildQR(nextQR, clicked), 300);
          }, delay);
        } else {
          showTyping();
          setTimeout(() => {
            hideTyping();
            addMsg(FALLBACK.answer, 'bot');
            setTimeout(() => buildQR(FALLBACK.qr, clicked), 300);
          }, 700);
        }
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
    const result = getResponse(text);
    const delay = 700 + Math.random() * 500;
    showTyping();
    setTimeout(() => {
      hideTyping();
      if (result) {
        addMsg(result.answer, 'bot');
        const nextQR = result.qr ? result.qr.filter(q => q !== text) : DEFAULT_QR().filter(q => q !== text);
        setTimeout(() => buildQR(nextQR, text), 300);
      } else {
        addMsg(FALLBACK.answer, 'bot');
        setTimeout(() => buildQR(FALLBACK.qr, text), 300);
      }
    }, delay);
  }

  // ── EVENTS ───────────────────────────────────────────────────────────────
  btn.onclick = () => {
    const isOpen = win.classList.toggle('open');
    btn.innerHTML = isOpen
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;
    if (isOpen && msgs.children.length === 0) {
      setTimeout(() => {
        addMsg("👋 Hi! I'm the Pixel Vision AI assistant. I can answer questions about our services, pricing, process, and who we work with.<br><br>What would you like to know?", 'bot');
        setTimeout(() => buildQR(DEFAULT_QR()), 600);
      }, 200);
    }
    if (isOpen) setTimeout(() => input.focus(), 300);
  };

  win.querySelector('.pv-chat-close').onclick = () => btn.click();
  win.querySelector('#pvSend').onclick = sendMessage;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

})();
