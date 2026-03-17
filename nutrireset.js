// ===========================
// NUTRIRESET - APP LOGIC
// ===========================

// --- Cart State ---
let cart = [];
let isMonthly = false;
let selectedPlan = '';

// --- Navigation ---
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// --- Navbar scroll effect ---
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(15, 17, 23, 0.98)';
  } else {
    nav.style.background = 'rgba(15, 17, 23, 0.85)';
  }
});

// --- Smooth anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    scrollToSection(id);
  });
});

// ===========================
// CART
// ===========================

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
  updateCartCount();
  showToast(`${name} added to cart`);
}

function removeFromCart(name) {
  const idx = cart.findIndex(item => item.name === name);
  if (idx === -1) return;
  if (cart[idx].qty > 1) {
    cart[idx].qty -= 1;
  } else {
    cart.splice(idx, 1);
  }
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Your cart is empty</p>
        <small>Add meals from the menu to get started</small>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="removeFromCart('${item.name}')">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="addToCart('${item.name}', ${item.price})">+</button>
      </div>
      <div class="cart-item-price">QAR ${item.price * item.qty}</div>
    </div>
  `).join('');

  document.getElementById('cart-total-amount').textContent = `QAR ${total}`;
  footer.style.display = 'block';
}

function checkout() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsList = cart.map(i => `${i.name} x${i.qty}`).join(', ');

  toggleCart();
  showToast(`Order placed! Total: QAR ${total}`);

  setTimeout(() => {
    cart = [];
    renderCart();
    updateCartCount();
  }, 400);
}

// ===========================
// MENU FILTER
// ===========================

function filterMenu(category, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter cards
  document.querySelectorAll('.menu-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ===========================
// SUBSCRIPTION PRICING TOGGLE
// ===========================

function toggleBilling() {
  isMonthly = document.getElementById('billing-toggle').checked;

  const label1 = document.getElementById('toggle-label');
  const label2 = document.getElementById('toggle-label-2');

  label1.classList.toggle('active-label', !isMonthly);
  label2.classList.toggle('active-label', isMonthly);

  // Update prices with animation
  const priceEls = [
    { el: document.getElementById('price-starter'), period: document.getElementById('period-starter') },
    { el: document.getElementById('price-pro'), period: document.getElementById('period-pro') },
    { el: document.getElementById('price-elite'), period: document.getElementById('period-elite') },
  ];

  priceEls.forEach(({ el, period }) => {
    el.style.transform = 'scale(0.85)';
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = isMonthly
        ? el.dataset.monthly
        : el.dataset.weekly;
      period.textContent = isMonthly ? '/month' : '/week';
      el.style.transform = 'scale(1)';
      el.style.opacity = '1';
    }, 150);
  });
}

// ===========================
// SUBSCRIPTION MODAL
// ===========================

function subscribePlan(plan) {
  selectedPlan = plan;
  document.getElementById('modal-title').textContent = `You're Subscribing to ${plan}!`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function submitSubscription(e) {
  e.preventDefault();
  closeModal();
  showToast(`Welcome to NutriReset ${selectedPlan} plan! We'll contact you shortly.`);
}

// Close modal on overlay click
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) {
    closeModal();
  }
});

// ===========================
// CONTACT FORM
// ===========================

function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll reach out within 24 hours.');
  e.target.reset();
}

// ===========================
// TOAST
// ===========================

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ===========================
// INTERSECTION OBSERVER (Fade-in animations)
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply initial animation state and observe
document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll('.step-card, .menu-card, .plan-card, .testimonial-card');
  animatedEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
});
