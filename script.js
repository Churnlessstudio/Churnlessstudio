/* BFT The Pearl — JS */

// ── Navbar scroll effect ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(9,11,14,0.97)'
    : 'rgba(9,11,14,0.85)';
});

// ── Mobile menu ───────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll animations ─────────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.program-card, .pricing-card, .testimonial-card, .about-card, ' +
  '.contact-item, .hyrox-badge, .section-header, .about-text, ' +
  '.hyrox-text, .hyrox-visual, .contact-info, .contact-form-wrap'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ── Contact form ──────────────────────────────────────────────────
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate submission (replace with real endpoint)
  setTimeout(() => {
    btn.textContent = 'Enquiry Sent!';
    btn.style.background = '#00b8b8';
    form.reset();
    setTimeout(() => {
      btn.textContent = 'Send Enquiry';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  }, 1200);
});

// ── Active nav link on scroll ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--cyan)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
