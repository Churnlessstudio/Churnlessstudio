Index · HTML
Copy

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Churnless Studio — Growth Operating Agency</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --cream: #F7F4EF; --ink: #131210; --accent: #C8A96E; --mid: #7A7468; --border: #E2DDD6; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); font-weight: 300; overflow-x: hidden; }

  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 28px 60px; background: rgba(247,244,239,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid transparent; transition: border-color 0.3s; }
  nav.scrolled { border-color: var(--border); }
  .logo { font-family: 'Playfair Display', serif; font-size: 1.25rem; color: var(--ink); text-decoration: none; }
  .logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 40px; list-style: none; }
  .nav-links a { text-decoration: none; color: var(--mid); font-size: 0.875rem; letter-spacing: 0.04em; font-weight: 400; transition: color 0.2s; }
  .nav-links a:hover { color: var(--ink); }
  .nav-cta { background: var(--ink) !important; color: var(--cream) !important; padding: 10px 22px; border-radius: 2px; font-size: 0.8rem !important; letter-spacing: 0.08em !important; text-transform: uppercase; font-weight: 500 !important; }
  .nav-cta:hover { background: var(--accent) !important; color: var(--ink) !important; }

  .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; padding-top: 90px; }
  .hero-left { display: flex; flex-direction: column; justify-content: center; padding: 80px 60px; }
  .hero-tag { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 28px; display: flex; align-items: center; gap: 12px; }
  .hero-tag::before { content: ''; display: block; width: 30px; height: 1px; background: var(--accent); }
  h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 5vw, 5rem); line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 28px; }
  h1 em { font-style: italic; color: var(--accent); }
  .hero-sub { font-size: 1rem; line-height: 1.75; color: var(--mid); max-width: 420px; margin-bottom: 44px; }
  .hero-actions { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
  .btn-primary { background: var(--ink); color: var(--cream); padding: 15px 30px; text-decoration: none; font-size: 0.82rem; letter-spacing: 0.07em; text-transform: uppercase; font-weight: 500; border-radius: 2px; transition: background 0.2s, transform 0.15s; display: inline-block; }
  .btn-primary:hover { background: var(--accent); color: var(--ink); transform: translateY(-2px); }
  .btn-ghost { color: var(--mid); text-decoration: none; font-size: 0.85rem; font-weight: 400; display: flex; align-items: center; gap: 8px; transition: color 0.2s, gap 0.2s; }
  .btn-ghost:hover { color: var(--ink); gap: 14px; }
  .btn-ghost::after { content: '→'; }

  .hero-right { position: relative; overflow: hidden; background: var(--ink); display: flex; align-items: center; }
  .hero-right::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 70%, rgba(200,169,110,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(200,169,110,0.07) 0%, transparent 50%); pointer-events: none; }
  .hero-big-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Playfair Display', serif; font-size: clamp(5rem, 10vw, 11rem); color: rgba(255,255,255,0.03); white-space: nowrap; pointer-events: none; }
  .hero-right-content { position: relative; z-index: 1; padding: 60px 52px; width: 100%; }
  .hr-tag { font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 16px; }
  .hr-title { font-family: 'Playfair Display', serif; font-size: 2rem; color: rgba(247,244,239,0.92); line-height: 1.2; margin-bottom: 12px; }
  .hr-sub { font-size: 0.88rem; color: rgba(247,244,239,0.38); line-height: 1.7; margin-bottom: 40px; max-width: 340px; }
  .pillars { display: flex; flex-direction: column; gap: 0; border-top: 1px solid rgba(255,255,255,0.07); }
  .pillar { display: flex; gap: 18px; align-items: flex-start; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.07); transition: background 0.2s; }
  .pillar:hover { background: rgba(200,169,110,0.05); margin: 0 -8px; padding-left: 8px; padding-right: 8px; }
  .pillar-icon { color: var(--accent); font-size: 0.9rem; margin-top: 2px; flex-shrink: 0; transition: transform 0.2s; }
  .pillar:hover .pillar-icon { transform: translateX(4px); }
  .pillar-title { font-size: 0.9rem; color: rgba(247,244,239,0.85); font-weight: 500; margin-bottom: 3px; letter-spacing: 0.01em; }
  .pillar-desc { font-size: 0.8rem; color: rgba(247,244,239,0.32); line-height: 1.6; }

  section { padding: 110px 60px; }
  .section-tag { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
  .section-tag::before { content: ''; display: block; width: 22px; height: 1px; background: var(--accent); }
  h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.9rem, 3.2vw, 3.2rem); line-height: 1.12; letter-spacing: -0.02em; }
  h2 em { font-style: italic; color: var(--accent); }

  .services { background: var(--cream); }
  .services-header { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 72px; }
  .services-header p { color: var(--mid); font-size: 0.98rem; line-height: 1.85; }
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--border); }
  .service-card { padding: 44px 36px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); transition: background 0.25s; position: relative; overflow: hidden; }
  .service-card:nth-child(3n) { border-right: none; }
  .service-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
  .service-card:hover { background: #fff; }
  .service-card:hover::after { transform: scaleX(1); }
  .service-num { font-size: 0.68rem; letter-spacing: 0.16em; color: var(--accent); font-weight: 500; margin-bottom: 22px; }
  .service-card h3 { font-family: 'Playfair Display', serif; font-size: 1.28rem; margin-bottom: 12px; }
  .service-card p { color: var(--mid); font-size: 0.88rem; line-height: 1.8; }

  .work { background: var(--ink); color: var(--cream); }
  .work .section-tag { color: var(--accent); }
  .work h2 { color: var(--cream); }
  .work-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; }
  .work-link { color: var(--accent); text-decoration: none; font-size: 0.82rem; letter-spacing: 0.07em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; transition: gap 0.2s; }
  .work-link:hover { gap: 14px; }
  .work-link::after { content: '→'; }
  .work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
  .work-card { position: relative; overflow: hidden; aspect-ratio: 16/10; cursor: pointer; }
  .work-card:first-child { grid-column: 1 / -1; aspect-ratio: 21/9; }
  .work-bg { position: absolute; inset: 0; transition: transform 0.6s ease; }
  .work-card:hover .work-bg { transform: scale(1.05); }
  .wc1 .work-bg { background: linear-gradient(135deg, #1a1814 0%, #2e2920 55%, rgba(200,169,110,0.12) 100%); }
  .wc2 .work-bg { background: linear-gradient(135deg, #131618 0%, #1c2530 100%); }
  .wc3 .work-bg { background: linear-gradient(135deg, #161413 0%, #241d16 100%); }
  .wc1-dots { position: absolute; inset: 0; background-image: repeating-linear-gradient(45deg, rgba(200,169,110,0.04) 0, rgba(200,169,110,0.04) 1px, transparent 1px, transparent 38px); }
  .work-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px 36px; background: linear-gradient(transparent, rgba(0,0,0,0.65)); }
  .work-tag { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 7px; }
  .work-info h3 { font-family: 'Playfair Display', serif; font-size: 1.45rem; color: var(--cream); }
  .work-card:first-child .work-info h3 { font-size: 1.9rem; }
  .work-info p { color: rgba(247,244,239,0.45); font-size: 0.83rem; margin-top: 5px; }

  .process { background: #fff; padding: 110px 60px; }
  .process-header { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 72px; }
  .process-header p { color: var(--mid); font-size: 0.98rem; line-height: 1.85; }
  .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); }
  .process-step { padding: 0 36px; border-right: 1px solid var(--border); }
  .process-step:first-child { padding-left: 0; }
  .process-step:last-child { border-right: none; padding-right: 0; }
  .step-num { font-family: 'Playfair Display', serif; font-size: 3.2rem; color: var(--border); line-height: 1; margin-bottom: 20px; }
  .process-step h3 { font-family: 'Playfair Display', serif; font-size: 1.15rem; margin-bottom: 10px; }
  .process-step p { color: var(--mid); font-size: 0.88rem; line-height: 1.8; }

  .cta-section { background: var(--ink); display: grid; grid-template-columns: 1fr 1fr; align-items: center; }
  .cta-left { padding: 100px 80px; border-right: 1px solid rgba(255,255,255,0.06); }
  .cta-left .section-tag { color: var(--accent); }
  .cta-left h2 { color: var(--cream); margin: 16px 0 20px; }
  .cta-left p { color: rgba(247,244,239,0.45); line-height: 1.85; max-width: 370px; margin-bottom: 38px; font-size: 0.95rem; }
  .cta-right { padding: 100px 80px; display: flex; flex-direction: column; gap: 26px; }
  .contact-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 26px; }
  .contact-item:last-child { border-bottom: none; padding-bottom: 0; }
  .contact-label { font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 7px; }
  .contact-value { color: var(--cream); font-size: 1.05rem; text-decoration: none; transition: color 0.2s; display: block; }
  .contact-value:hover { color: var(--accent); }
  .social-links { display: flex; gap: 20px; margin-top: 4px; }
  .social-links a { color: rgba(247,244,239,0.6); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
  .social-links a:hover { color: var(--accent); }

  footer { background: var(--ink); color: rgba(247,244,239,0.28); border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; padding: 26px 60px; font-size: 0.78rem; letter-spacing: 0.04em; }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 1rem; color: rgba(247,244,239,0.55); }
  .footer-logo span { color: var(--accent); }
  footer a { color: rgba(247,244,239,0.28); text-decoration: none; transition: color 0.2s; }
  footer a:hover { color: var(--accent); }
  .footer-links { display: flex; gap: 24px; }

  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    nav { padding: 18px 24px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; min-height: auto; padding-top: 80px; }
    .hero-left { padding: 48px 24px 60px; }
    .hero-right { display: none; }
    section, .process { padding: 72px 24px; }
    .services-header, .process-header { grid-template-columns: 1fr; gap: 24px; }
    .services-grid { grid-template-columns: 1fr; }
    .service-card { border-right: none; }
    .work-grid { grid-template-columns: 1fr; }
    .work-card:first-child { grid-column: 1; aspect-ratio: 16/9; }
    .process-steps { grid-template-columns: 1fr 1fr; gap: 40px; }
    .process-step { border-right: none; padding: 0 !important; }
    .cta-section { grid-template-columns: 1fr; }
    .cta-left, .cta-right { padding: 60px 24px; }
    .cta-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    footer { flex-direction: column; gap: 14px; text-align: center; padding: 24px; }
  }
</style>
</head>
<body>

<nav id="nav">
  <a href="#" class="logo">Churnless<span>.</span></a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#process">Process</a></li>
    <li><a href="#contact" class="nav-cta">Let's Talk</a></li>
  </ul>
</nav>

<section class="hero">
  <div class="hero-left">
    <div class="hero-tag">Growth Operating Agency</div>
    <h1>We build your <em>growth engine.</em></h1>
    <p class="hero-sub">We design and implement the systems that drive revenue — across marketing, sales, and retention — using data, automation, and strategic experimentation.</p>
    <div class="hero-actions">
      <a href="#contact" class="btn-primary">Start a Project</a>
      <a href="#work" class="btn-ghost">See Our Work</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-big-text">Growth</div>
    <div class="hero-right-content">
      <div class="hr-tag">Why Churnless Studio</div>
      <div class="hr-title">Built different.<br>By design.</div>
      <div class="hr-sub">Most agencies sell you campaigns. We build the full system — then operate it with you until it works.</div>
      <div class="pillars">
        <div class="pillar">
          <div class="pillar-icon">→</div>
          <div>
            <div class="pillar-title">Systems over tactics</div>
            <div class="pillar-desc">We don't chase short-term wins. We build infrastructure that compounds.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">→</div>
          <div>
            <div class="pillar-title">Data-driven decisions</div>
            <div class="pillar-desc">Every move is backed by real numbers — no gut-feel strategy or vanity metrics.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">→</div>
          <div>
            <div class="pillar-title">Full-funnel thinking</div>
            <div class="pillar-desc">From first click to loyal customer — we connect every stage of your revenue engine.</div>
          </div>
        </div>
        <div class="pillar">
          <div class="pillar-icon">→</div>
          <div>
            <div class="pillar-title">Operators, not consultants</div>
            <div class="pillar-desc">We don't hand you a deck and leave. We build and run it alongside you.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="services" id="services">
  <div class="services-header fade-up">
    <div>
      <div class="section-tag">What We Do</div>
      <h2>Systems that turn traffic into <em>revenue</em></h2>
    </div>
    <p>We don't just run campaigns — we build and optimize your full revenue operating system. Every service connects marketing, sales, and retention into one compounding engine.</p>
  </div>
  <div class="services-grid">
    <div class="service-card fade-up">
      <div class="service-num">01</div>
      <h3>Growth Strategy</h3>
      <p>We audit your full revenue system, identify the highest-leverage opportunities, and build a clear roadmap connecting marketing, sales, and retention.</p>
    </div>
    <div class="service-card fade-up">
      <div class="service-num">02</div>
      <h3>Marketing Systems</h3>
      <p>Paid media, SEO, and content — architected as an integrated acquisition engine designed to drive compounding, predictable traffic and leads.</p>
    </div>
    <div class="service-card fade-up">
      <div class="service-num">03</div>
      <h3>Sales Enablement</h3>
      <p>We build the pipelines, sequences, and automation that move leads through your funnel faster and convert them into paying customers consistently.</p>
    </div>
    <div class="service-card fade-up">
      <div class="service-num">04</div>
      <h3>Customer Retention</h3>
      <p>Lifecycle programs, CRM automation, and churn-reduction strategies that turn one-time buyers into long-term, high-LTV customers.</p>
    </div>
    <div class="service-card fade-up">
      <div class="service-num">05</div>
      <h3>Data & Automation</h3>
      <p>We build the data infrastructure and automation workflows that eliminate guesswork and let your growth systems run with minimal manual effort.</p>
    </div>
    <div class="service-card fade-up">
      <div class="service-num">06</div>
      <h3>Strategic Experimentation</h3>
      <p>A structured testing framework across your funnel — always running experiments, finding winners, and scaling what works.</p>
    </div>
  </div>
</section>

<section class="work" id="work">
  <div class="work-header fade-up">
    <div>
      <div class="section-tag">Selected Work</div>
      <h2>Results we're <em>proud of</em></h2>
    </div>
    <a href="#contact" class="work-link">View All Cases</a>
  </div>
  <div class="work-grid">
    <div class="work-card wc1 fade-up">
      <div class="work-bg"></div>
      <div class="wc1-dots"></div>
      <div class="work-info">
        <div class="work-tag">E-Commerce · Paid Media · Email</div>
        <h3>Meridian Supply Co.</h3>
        <p>218% increase in ROAS over 6 months, scaling from $40K to $180K monthly ad spend profitably.</p>
      </div>
    </div>
    <div class="work-card wc2 fade-up">
      <div class="work-bg"></div>
      <div class="work-info">
        <div class="work-tag">SaaS · Growth Strategy · CRM</div>
        <h3>Fieldnote App</h3>
        <p>Reduced churn by 34% through a full lifecycle email and onboarding redesign.</p>
      </div>
    </div>
    <div class="work-card wc3 fade-up">
      <div class="work-bg"></div>
      <div class="work-info">
        <div class="work-tag">DTC · SEO · Content</div>
        <h3>Haven Wellness</h3>
        <p>Organic traffic tripled in 9 months through a focused content and SEO strategy.</p>
      </div>
    </div>
  </div>
</section>

<section class="process" id="process">
  <div class="process-header fade-up">
    <div>
      <div class="section-tag">How We Work</div>
      <h2>A process built for <em>results</em></h2>
    </div>
    <p>We don't hand you a strategy deck and disappear. We operate inside your business as a true growth partner — building, running, and improving your revenue systems over time.</p>
  </div>
  <div class="process-steps">
    <div class="process-step fade-up">
      <div class="step-num">01</div>
      <h3>Diagnose</h3>
      <p>We map your entire revenue system from first touch to retention and pinpoint where the biggest leaks and opportunities are hiding.</p>
    </div>
    <div class="process-step fade-up">
      <div class="step-num">02</div>
      <h3>Architect</h3>
      <p>We design your growth engine — the right channels, systems, automation, and experiments in the right order of priority.</p>
    </div>
    <div class="process-step fade-up">
      <div class="step-num">03</div>
      <h3>Operate</h3>
      <p>We build and run everything — campaigns, sequences, funnels, and tests — iterating fast based on real data, not guesswork.</p>
    </div>
    <div class="process-step fade-up">
      <div class="step-num">04</div>
      <h3>Compound</h3>
      <p>Winners get systemised and scaled. The result is a self-reinforcing growth engine that gets stronger and more efficient over time.</p>
    </div>
  </div>
</section>

<div class="cta-section" id="contact">
  <div class="cta-left fade-up">
    <div class="section-tag">Let's Work Together</div>
    <h2>Ready to build a real <em>growth engine?</em></h2>
    <p>Tell us where your business is today and where you want to take it. We'll come back with an honest view of what's holding you back — and exactly what we'd do about it.</p>
    <a href="/cdn-cgi/l/email-protection#4b232e2727240b28233e3925272e3838383f3e2f222465282426" class="btn-primary">Send Us a Message</a>
  </div>
  <div class="cta-right fade-up">
    <div class="contact-item">
      <div class="contact-label">General</div>
      <a href="/cdn-cgi/l/email-protection#f69e939a9a99b6959e8384989a938585858283929f99d895999b" class="contact-value"><span class="__cf_email__" data-cfemail="1b737e7777745b78736e6975777e6868686f6e7f727435787476">[email&#160;protected]</span></a>
    </div>
    <div class="contact-item">
      <div class="contact-label">New Business</div>
      <a href="/cdn-cgi/l/email-protection#c4b3abb6af84a7acb1b6aaa8a1b7b7b7b0b1a0adabeaa7aba9" class="contact-value"><span class="__cf_email__" data-cfemail="7f08100d143f1c170a0d11131a0c0c0c0b0a1b1610511c1012">[email&#160;protected]</span></a>
    </div>
    <div class="contact-item">
      <div class="contact-label">Based in</div>
      <span class="contact-value">Available Worldwide</span>
    </div>
    <div class="contact-item">
      <div class="contact-label">Follow</div>
      <div class="social-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="footer-logo">Churnless<span>.</span></div>
  <div>© 2025 Churnless Studio. All rights reserved.</div>
  <div class="footer-links">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
  </div>
</footer>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
  const nav = document.getElementById('nav');
  window.
