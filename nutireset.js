// ==============================
//   NUTIRESET — APP LOGIC
// ==============================

// --- MENU DATA ---
const dishes = [
  {
    id: 1,
    name: "Grilled Chicken Power Bowl",
    desc: "Lean grilled chicken with roasted veggies, quinoa & tahini drizzle.",
    emoji: "🍗",
    image: null,
    price: 45,
    calories: 520,
    protein: "42g",
    carbs: "38g",
    fat: "14g",
    tags: ["protein", "popular"],
    bg: "#E0F7F5",
  },
  {
    id: 2,
    name: "Macro Salmon Plate",
    desc: "Atlantic salmon fillet with potato wedges & lemon herb sauce.",
    emoji: "🐟",
    image: "images/salmon-potato-wedges.jpg",
    price: 65,
    calories: 610,
    protein: "48g",
    carbs: "45g",
    fat: "22g",
    tags: ["protein", "popular"],
    bg: "#FFF7ED",
  },
  {
    id: 3,
    name: "Butter Chicken & Rice",
    desc: "Tender chicken pieces in rich butter sauce served with fluffy basmati rice.",
    emoji: "🍛",
    image: "images/butter-chicken-rice.jpg",
    price: 55,
    calories: 680,
    protein: "38g",
    carbs: "62g",
    fat: "24g",
    tags: ["protein"],
    bg: "#FEF3C7",
  },
  {
    id: 4,
    name: "Zucchini Noodle Bowl",
    desc: "Spiralized zucchini with pesto, cherry tomatoes, pine nuts & parmesan.",
    emoji: "🥗",
    image: null,
    price: 40,
    calories: 310,
    protein: "12g",
    carbs: "18g",
    fat: "20g",
    tags: ["lowcarb", "vegetarian"],
    bg: "#D1FAE5",
  },
  {
    id: 5,
    name: "Shrimp Stir-Fry",
    desc: "Juicy shrimp with mixed peppers, snap peas & teriyaki glaze on cauliflower rice.",
    emoji: "🍤",
    image: null,
    price: 58,
    calories: 430,
    protein: "36g",
    carbs: "22g",
    fat: "16g",
    tags: ["lowcarb", "protein"],
    bg: "#EDE9FE",
  },
  {
    id: 6,
    name: "Falafel Veggie Wrap",
    desc: "Crispy falafel with hummus, pickled veg & greens in a whole wheat wrap.",
    emoji: "🌯",
    image: "images/wrap.jpg",
    price: 38,
    calories: 490,
    protein: "18g",
    carbs: "58g",
    fat: "18g",
    tags: ["vegetarian"],
    bg: "#FEE2E2",
  },
  {
    id: 7,
    name: "Macro Buffet Plate",
    desc: "Build-your-own plate from our rotating macro-balanced buffet. Ask for today's selection.",
    emoji: "🍽️",
    image: null,
    price: 55,
    calories: 580,
    protein: "35g",
    carbs: "50g",
    fat: "20g",
    tags: ["buffet", "popular"],
    bg: "#FFFBEB",
  },
  {
    id: 8,
    name: "Berry Toast",
    desc: "Toasted bread with cream & a colourful mix of fresh strawberries, raspberries & blackberries.",
    emoji: "🍓",
    image: "images/berry-toast.jpg",
    price: 35,
    calories: 380,
    protein: "10g",
    carbs: "52g",
    fat: "14g",
    tags: ["vegetarian", "snack"],
    bg: "#EFF6FF",
  },
  {
    id: 9,
    name: "Turkey Stuffed Peppers",
    desc: "Bell peppers filled with lean turkey mince, brown rice, herbs & tomato sauce.",
    emoji: "🫑",
    image: null,
    price: 50,
    calories: 490,
    protein: "40g",
    carbs: "40g",
    fat: "12g",
    tags: ["protein", "lowcarb"],
    bg: "#F0FDF4",
  },
  {
    id: 10,
    name: "Hummus & Carrots",
    desc: "Creamy housemade hummus served with fresh-cut carrot sticks — a clean snack or side.",
    emoji: "🥕",
    image: "images/hummus-carrots.jpg",
    price: 25,
    calories: 220,
    protein: "7g",
    carbs: "24g",
    fat: "11g",
    tags: ["vegetarian", "lowcarb", "snack"],
    bg: "#FFF1F2",
  },
  {
    id: 11,
    name: "Chicken Shawarma Bowl",
    desc: "Marinated rotisserie chicken, garlic sauce, pickles & fattoush on spiced rice.",
    emoji: "🌮",
    image: null,
    price: 48,
    calories: 560,
    protein: "44g",
    carbs: "48g",
    fat: "14g",
    tags: ["protein", "popular"],
    bg: "#FFF7ED",
  },
  {
    id: 12,
    name: "Cauliflower Steak Plate",
    desc: "Roasted cauliflower steak with romesco sauce, lentils & wilted spinach.",
    emoji: "🥦",
    image: null,
    price: 40,
    calories: 350,
    protein: "14g",
    carbs: "38g",
    fat: "14g",
    tags: ["lowcarb", "vegetarian"],
    bg: "#ECFDF5",
  },
  {
    id: 13,
    name: "Almond Cookies",
    desc: "Soft-baked almond cookies — a guilt-lighter treat to satisfy your sweet cravings.",
    emoji: "🍪",
    image: "images/cookies.jpg",
    price: 18,
    calories: 210,
    protein: "5g",
    carbs: "22g",
    fat: "11g",
    tags: ["vegetarian", "snack"],
    bg: "#FEF9C3",
  },
  {
    id: 14,
    name: "Peanut Butter Bars",
    desc: "High-protein peanut butter bars — rich, satisfying & macro-friendly.",
    emoji: "🥜",
    image: "images/peanut-butter-bars.jpg",
    price: 22,
    calories: 280,
    protein: "14g",
    carbs: "20g",
    fat: "16g",
    tags: ["protein", "snack"],
    bg: "#FEF3C7",
  },
  {
    id: 15,
    name: "Chocolate Chip Muffins",
    desc: "Mini chocolate chip muffins baked fresh daily — a sweet treat in every bite.",
    emoji: "🧁",
    image: "images/chocolate-muffins.jpg",
    price: 20,
    calories: 240,
    protein: "5g",
    carbs: "30g",
    fat: "12g",
    tags: ["vegetarian", "snack"],
    bg: "#F5F0E8",
  },
  {
    id: 16,
    name: "Egg & Lettuce Sandwich",
    desc: "Soft-boiled egg with fresh lettuce & creamy dressing on whole grain dark bread.",
    emoji: "🥚",
    image: "images/sandwich.jpg",
    price: 28,
    calories: 320,
    protein: "16g",
    carbs: "34g",
    fat: "12g",
    tags: ["vegetarian", "protein"],
    bg: "#F0FDF4",
  },
  {
    id: 17,
    name: "Halloumi & Avocado Salad",
    desc: "Grilled halloumi with creamy avocado, cherry tomatoes & mixed greens.",
    emoji: "🥑",
    image: "images/halloumi-avocado-salad.jpg",
    price: 52,
    calories: 440,
    protein: "22g",
    carbs: "14g",
    fat: "34g",
    tags: ["vegetarian", "lowcarb"],
    bg: "#ECFDF5",
  },
  {
    id: 18,
    name: "Tomato Toast",
    desc: "Toasted whole grain bread topped with fresh tomato slices & a light herb spread.",
    emoji: "🍅",
    image: "images/tomato-toast.jpg",
    price: 22,
    calories: 260,
    protein: "8g",
    carbs: "36g",
    fat: "8g",
    tags: ["vegetarian", "snack"],
    bg: "#FFF1F2",
  },
  {
    id: 19,
    name: "Banana Oats Bowl",
    desc: "Creamy oats with fresh banana slices & chia seeds — the perfect nourishing breakfast.",
    emoji: "🍌",
    image: "images/banana-oats.jpg",
    price: 30,
    calories: 370,
    protein: "12g",
    carbs: "58g",
    fat: "8g",
    tags: ["vegetarian", "snack"],
    bg: "#FFFBEB",
  },
  {
    id: 20,
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice slow-cooked with tender chicken, spices & fresh herbs.",
    emoji: "🍚",
    image: "images/chicken-biryani.jpg",
    price: 58,
    calories: 650,
    protein: "40g",
    carbs: "70g",
    fat: "18g",
    tags: ["protein", "popular"],
    bg: "#FEF9C3",
  },
  {
    id: 21,
    name: "Beef Burger",
    desc: "Juicy beef patty with fresh lettuce, tomato & cucumber on a whole grain bun.",
    emoji: "🍔",
    image: "images/burger.jpg",
    price: 52,
    calories: 580,
    protein: "36g",
    carbs: "44g",
    fat: "24g",
    tags: ["protein"],
    bg: "#FFF7ED",
  },
  {
    id: 22,
    name: "Meatloaf",
    desc: "Hearty sliced meatloaf seasoned with herbs — a classic comfort protein dish.",
    emoji: "🍖",
    image: "images/meatloaf.jpg",
    price: 48,
    calories: 520,
    protein: "38g",
    carbs: "16g",
    fat: "28g",
    tags: ["protein", "lowcarb"],
    bg: "#FEF3C7",
  },
  {
    id: 23,
    name: "Omelette & Toast",
    desc: "Fluffy egg omelette served alongside toasted dark whole grain bread slices.",
    emoji: "🍳",
    image: "images/omelette-toast.jpg",
    price: 32,
    calories: 340,
    protein: "22g",
    carbs: "28g",
    fat: "16g",
    tags: ["protein", "vegetarian"],
    bg: "#FFFBEB",
  },
  {
    id: 24,
    name: "Grilled Chicken Caesar",
    desc: "Sliced grilled chicken breast over Caesar salad with croutons & potato wedges.",
    emoji: "🥗",
    image: "images/grilled-chicken-caesar.jpg",
    price: 60,
    calories: 590,
    protein: "46g",
    carbs: "38g",
    fat: "22g",
    tags: ["protein", "popular"],
    bg: "#E0F7F5",
  },
  {
    id: 25,
    name: "Chicken & Avocado Wrap",
    desc: "Grilled chicken with creamy avocado, lettuce & tomato in a whole wheat wrap.",
    emoji: "🌯",
    image: "images/chicken-avocado-wrap.jpg",
    price: 45,
    calories: 510,
    protein: "38g",
    carbs: "42g",
    fat: "18g",
    tags: ["protein", "popular"],
    bg: "#D1FAE5",
  },
  {
    id: 26,
    name: "Egg & Feta Toast",
    desc: "Toasted bread with white beans, cherry tomatoes, crumbled feta & sliced boiled egg.",
    emoji: "🥚",
    image: "images/egg-toast.jpg",
    price: 34,
    calories: 380,
    protein: "20g",
    carbs: "36g",
    fat: "16g",
    tags: ["vegetarian", "protein"],
    bg: "#FFF7ED",
  },
  {
    id: 27,
    name: "Chicken Stir-Fry & Rice",
    desc: "Tender chicken strips with broccoli, red peppers & mushrooms in a savory sauce over steamed rice.",
    emoji: "🥦",
    image: "images/chicken-stir-fry-rice.jpg",
    price: 52,
    calories: 560,
    protein: "42g",
    carbs: "58g",
    fat: "14g",
    tags: ["protein", "popular"],
    bg: "#E0F7F5",
  },
  {
    id: 28,
    name: "Fresh Pineapple",
    desc: "Cold-cut fresh pineapple chunks — a naturally sweet, refreshing snack.",
    emoji: "🍍",
    image: "images/pineapple.jpg",
    price: 18,
    calories: 110,
    protein: "1g",
    carbs: "28g",
    fat: "0g",
    tags: ["vegetarian", "snack"],
    bg: "#FFFBEB",
  },
  {
    id: 29,
    name: "Dark Chocolate Bars",
    desc: "Rich dark chocolate bars — a mindful indulgence packed with antioxidants.",
    emoji: "🍫",
    image: "images/dark-chocolate-bars.jpg",
    price: 20,
    calories: 200,
    protein: "3g",
    carbs: "18g",
    fat: "14g",
    tags: ["vegetarian", "snack"],
    bg: "#F5F0E8",
  },
  {
    id: 30,
    name: "Ham Rolls",
    desc: "Delicate rolled deli ham slices — a light, high-protein snack ready to enjoy.",
    emoji: "🥩",
    image: "images/ham-rolls.jpg",
    price: 24,
    calories: 180,
    protein: "18g",
    carbs: "2g",
    fat: "11g",
    tags: ["protein", "lowcarb", "snack"],
    bg: "#FFF1F2",
  },
  {
    id: 31,
    name: "Hummus & Celery",
    desc: "Creamy housemade hummus with fresh crunchy celery sticks — clean & satisfying.",
    emoji: "🥬",
    image: "images/hummus-celery.jpg",
    price: 22,
    calories: 190,
    protein: "6g",
    carbs: "18g",
    fat: "10g",
    tags: ["vegetarian", "lowcarb", "snack"],
    bg: "#D1FAE5",
  },
  {
    id: 32,
    name: "Berry Smoothie Bowl",
    desc: "Blended purple berry smoothie topped with chia seeds & granola — thick, rich & nutritious.",
    emoji: "🫐",
    image: "images/berry-smoothie-bowl.jpg",
    price: 32,
    calories: 290,
    protein: "8g",
    carbs: "44g",
    fat: "8g",
    tags: ["vegetarian", "snack"],
    bg: "#EDE9FE",
  },
  {
    id: 33,
    name: "Veggie Omelette & Toast",
    desc: "Fluffy omelette loaded with spinach, red peppers & ham, served with dark bread.",
    emoji: "🍳",
    image: "images/veggie-omelette-toast.jpg",
    price: 38,
    calories: 410,
    protein: "28g",
    carbs: "30g",
    fat: "18g",
    tags: ["protein"],
    bg: "#FFF7ED",
  },
  {
    id: 34,
    name: "Grilled Steak & Avocado",
    desc: "Sliced grilled steak with creamy avocado, cherry tomatoes, quinoa & a lemon wedge.",
    emoji: "🥩",
    image: "images/grilled-steak-avocado.jpg",
    price: 68,
    calories: 580,
    protein: "46g",
    carbs: "20g",
    fat: "34g",
    tags: ["protein", "lowcarb", "popular"],
    bg: "#D1FAE5",
  },
  {
    id: 35,
    name: "Almonds",
    desc: "A handful of raw whole almonds — a simple, nutrient-dense snack.",
    emoji: "🌰",
    image: "images/almonds.jpg",
    price: 15,
    calories: 160,
    protein: "6g",
    carbs: "6g",
    fat: "14g",
    tags: ["vegetarian", "lowcarb", "snack"],
    bg: "#FEF3C7",
  },
  {
    id: 36,
    name: "Cashews",
    desc: "Creamy whole cashews — a satisfying healthy-fat snack to keep you going.",
    emoji: "🌰",
    image: "images/cashews.jpg",
    price: 16,
    calories: 170,
    protein: "5g",
    carbs: "9g",
    fat: "14g",
    tags: ["vegetarian", "snack"],
    bg: "#FFFBEB",
  },
  {
    id: 37,
    name: "Tuna Salad",
    desc: "Flaked tuna with green beans, cherry tomatoes, sesame seeds & a fresh lemon wedge.",
    emoji: "🐟",
    image: "images/tuna-salad.jpg",
    price: 48,
    calories: 360,
    protein: "38g",
    carbs: "12g",
    fat: "16g",
    tags: ["protein", "lowcarb"],
    bg: "#EFF6FF",
  },
  {
    id: 38,
    name: "Tuna Bowl & Potato Wedges",
    desc: "Tuna & veggie salad with corn, peppers & tomatoes, served with crispy potato wedges.",
    emoji: "🐟",
    image: "images/tuna-potato-wedges.jpg",
    price: 55,
    calories: 490,
    protein: "36g",
    carbs: "46g",
    fat: "16g",
    tags: ["protein"],
    bg: "#FFF7ED",
  },
  {
    id: 39,
    name: "Deli Sandwich",
    desc: "Sliced ham with fresh lettuce, tomato & cucumber layered in dark whole grain bread.",
    emoji: "🥪",
    image: "images/deli-sandwich.jpg",
    price: 32,
    calories: 390,
    protein: "24g",
    carbs: "38g",
    fat: "14g",
    tags: ["protein"],
    bg: "#FEF9C3",
  },
];

// --- CART STATE ---
let cart = {};

// --- RENDER MENU ---
function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? dishes
    : dishes.filter(d => d.tags.includes(filter));

  filtered.forEach(dish => {
    const tagHTML = dish.tags.map(t => {
      const map = { protein: ["tag-protein","High Protein"], lowcarb: ["tag-lowcarb","Low Carb"], vegetarian: ["tag-veg","Veg"], buffet: ["tag-buffet","Buffet"], popular: ["tag-popular","Popular"], snack: ["tag-snack","Snack"] };
      return `<span class="dish-tag ${map[t][0]}">${map[t][1]}</span>`;
    }).join("");

    const card = document.createElement("div");
    card.className = "dish-card";
    const imgContent = dish.image
      ? `<img src="${dish.image}" alt="${dish.name}" class="dish-photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="dish-emoji-fallback" style="display:none">${dish.emoji}</span>`
      : `<span class="dish-emoji-fallback">${dish.emoji}</span>`;
    card.innerHTML = `
      <div class="dish-img" style="background:${dish.bg}">
        ${imgContent}
        <div class="dish-tags">${tagHTML}</div>
      </div>
      <div class="dish-body">
        <h4>${dish.name}</h4>
        <p>${dish.desc}</p>
        <div class="dish-macros">
          <div class="macro"><strong>${dish.calories}</strong><span>kcal</span></div>
          <div class="macro"><strong>${dish.protein}</strong><span>protein</span></div>
          <div class="macro"><strong>${dish.carbs}</strong><span>carbs</span></div>
          <div class="macro"><strong>${dish.fat}</strong><span>fat</span></div>
        </div>
        <div class="dish-footer">
          <div class="dish-price">QAR ${dish.price} <span>/ meal</span></div>
          <button class="add-btn" onclick="addToCart(${dish.id})" title="Add to cart">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- FILTER ---
function filterMenu(tag, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(tag);
}

// --- CART LOGIC ---
function addToCart(id) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...dish, qty: 1 };
  }
  updateCartUI();
  // Bump animation on cart icon
  const count = document.getElementById("cartCount");
  count.classList.add("bump");
  setTimeout(() => count.classList.remove("bump"), 300);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

function updateCartUI() {
  const items = Object.values(cart);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalAmt = items.reduce((s, i) => s + i.qty * i.price, 0);

  // Nav count
  document.getElementById("cartCount").textContent = totalQty;

  // Section cart summary
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  if (items.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.<br/>Add items from the menu above.</p>';
    cartTotalEl.style.display = "none";
  } else {
    cartItemsEl.innerHTML = items.map(i => `
      <div class="cart-item">
        <div class="cart-item-emoji">${i.emoji}</div>
        <div class="cart-item-info">
          <strong>${i.name}</strong>
          <span>QAR ${i.price} each</span>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
    `).join("");
    document.getElementById("subtotalAmt").textContent = `QAR ${totalAmt}`;
    document.getElementById("totalAmt").textContent = `QAR ${totalAmt}`;
    cartTotalEl.style.display = "flex";
  }

  // Sidebar cart
  renderSidebarCart(items, totalAmt);
}

function renderSidebarCart(items, totalAmt) {
  const el = document.getElementById("sidebarCartItems");
  const footer = document.getElementById("cartSidebarFooter");
  if (items.length === 0) {
    el.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footer.style.display = "none";
  } else {
    el.innerHTML = items.map(i => `
      <div class="cart-item">
        <div class="cart-item-emoji">${i.emoji}</div>
        <div class="cart-item-info">
          <strong>${i.name}</strong>
          <span>QAR ${i.price} × ${i.qty} = QAR ${i.price * i.qty}</span>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
    `).join("");
    document.getElementById("sidebarTotal").textContent = `QAR ${totalAmt}`;
    footer.style.display = "flex";
  }
}

// --- CART SIDEBAR ---
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("cartBtn").addEventListener("click", openCart);

// --- SUBSCRIPTION PLAN SELECTION ---
function selectPlan(plan, price) {
  const titles = {
    weekly: "Weekly Plan Selected 🌿",
    monthly: "Monthly Plan Selected 🏆",
  };
  const descs = {
    weekly: `You've selected the Weekly Plan at QAR ${price}/week. Fill out the order form below and we'll get you started right away!`,
    monthly: `Excellent choice! You've selected the Monthly Plan at QAR ${price}/month. Fill out the order form below and enjoy priority service.`,
  };
  document.getElementById("subModalTitle").textContent = titles[plan];
  document.getElementById("subModalDesc").textContent = descs[plan];

  // Pre-select in form
  document.getElementById("orderType").value = plan;
  togglePlanField();

  document.getElementById("subModal").classList.add("open");
}

function closeSubModal() {
  document.getElementById("subModal").classList.remove("open");
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

// --- PLAN FIELD TOGGLE ---
function togglePlanField() {
  const type = document.getElementById("orderType").value;
  const field = document.getElementById("startDateField");
  field.style.display = "flex";
}

// --- ORDER FORM SUBMIT ---
function submitOrder(e) {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  const text = document.getElementById("submitText");
  btn.disabled = true;
  text.textContent = "Processing...";

  // Simulate API call
  setTimeout(() => {
    btn.disabled = false;
    text.textContent = "Confirm Order";
    document.getElementById("orderForm").reset();
    cart = {};
    updateCartUI();
    document.getElementById("successModal").classList.add("open");
  }, 1600);
}

function closeModal() {
  document.getElementById("successModal").classList.remove("open");
}

// Close modals on overlay click
document.getElementById("successModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});
document.getElementById("subModal").addEventListener("click", function(e) {
  if (e.target === this) closeSubModal();
});

// --- MOBILE MENU ---
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});
function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// --- NAV SCROLL ---
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// --- SET MIN DATE ---
const today = new Date().toISOString().split("T")[0];
document.getElementById("startDate").setAttribute("min", today);

// --- INIT ---
renderMenu();
updateCartUI();
