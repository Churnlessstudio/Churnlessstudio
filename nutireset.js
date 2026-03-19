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
    image: "images/Grilled chicken with mashed potatos.png",
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
    image: "images/Grilled salmon with rice & vegetables.png",
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
    image: "images/Low Fat Butter Chicken.png",
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
    image: "images/Green Salad.png",
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
    image: "images/Chinese style chicken with rice.png",
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
    image: "images/grilled tikka wraps.png",
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
    image: "images/day1 overall.png",
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
    image: "images/Crazy berries peanut toast.png",
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
    image: "images/turkey rills with labneh.png",
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
    image: "images/Hummos with Fresh Carrot.png",
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
    image: "images/Grilled Chicken Pasta.png",
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
    image: "images/quinoa salad & avocado.png",
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
    image: "images/coconut biscuits.png",
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
    image: "images/pistachio & pumpkin seed bar.png",
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
    image: "images/date muffins.png",
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
    image: "images/Turkey Avocado Toast Sandwitch.png",
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
    image: "images/Avocado Hallumi Salad.png",
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
    image: "images/chimichurri beans on toast.png",
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
    image: "images/Overnight Oat with Protein Powder.png",
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
    image: "images/beef biryani.png",
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
    image: "images/beef burger.png",
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
    image: "images/grillled fish with potato.png",
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
    image: "images/cheese omelette with toast.png",
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
    image: "images/Chicken Ceaser with Potatos.png",
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
    image: "images/chicken mozarella wrap.png",
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
    image: "images/Avocado Egg Toast Sandwitch.png",
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
    image: "images/Chinese style chicken with rice.png",
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
    image: "images/Pinapple.png",
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
    image: "images/date & almond breakfast bars.png",
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
    image: "images/turkey rills with labneh_2.png",
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
    image: "images/Hummos with Fresh Carrot.png",
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
    image: "images/greek yogurt & strawberries.png",
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
    image: "images/Vegetable omelette with toast.png",
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
    image: "images/mango feta cheese salad.png",
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
    image: "images/Raw Almonds.png",
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
    image: "images/Raw Cashews.png",
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
    image: "images/Tuna Salad.png",
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
    image: "images/tuna couscous salad.png",
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
    image: "images/baked cottage cheese toast.png",
    price: 32,
    calories: 390,
    protein: "24g",
    carbs: "38g",
    fat: "14g",
    tags: ["protein"],
    bg: "#FEF9C3",
  },
  {
    id: 40,
    name: "Green Apple & Peanut Butter",
    desc: "Crisp green apple slices paired with creamy natural peanut butter — a perfectly balanced snack.",
    emoji: "🍏",
    image: "images/Green Apple with Peanut Butter.png",
    price: 18,
    calories: 190,
    protein: "5g",
    carbs: "22g",
    fat: "10g",
    tags: ["vegetarian", "lowcarb", "snack"],
    bg: "#D1FAE5",
  },
  {
    id: 41,
    name: "Protein Pancakes",
    desc: "Fluffy high-protein pancakes stacked and served with a light drizzle — a guilt-free breakfast treat.",
    emoji: "🥞",
    image: "images/Protein Pancake.png",
    price: 28,
    calories: 320,
    protein: "24g",
    carbs: "30g",
    fat: "8g",
    tags: ["vegetarian", "protein", "snack"],
    bg: "#FFF7ED",
  },
  {
    id: 42,
    name: "Banana Oat Clusters",
    desc: "Baked banana & oat clusters — naturally sweetened, fibre-rich bites perfect as a snack or topping.",
    emoji: "🍌",
    image: "images/banana oat clusters.png",
    price: 20,
    calories: 210,
    protein: "5g",
    carbs: "36g",
    fat: "6g",
    tags: ["vegetarian", "snack"],
    bg: "#FFFBEB",
  },
  {
    id: 43,
    name: "Carrot Cake",
    desc: "Moist spiced carrot cake with a light cream cheese topping — a wholesome sweet treat.",
    emoji: "🎂",
    image: "images/carrot cake.png",
    price: 22,
    calories: 260,
    protein: "4g",
    carbs: "34g",
    fat: "12g",
    tags: ["vegetarian", "snack"],
    bg: "#FEF3C7",
  },
  {
    id: 44,
    name: "Egg Shakshuka & Bread",
    desc: "Eggs poached in a rich spiced tomato sauce, served with toasted bread — a hearty protein breakfast.",
    emoji: "🍳",
    image: "images/egg shakshoka with bread.png",
    price: 38,
    calories: 420,
    protein: "22g",
    carbs: "36g",
    fat: "18g",
    tags: ["vegetarian", "protein"],
    bg: "#FEE2E2",
  },
  // --- BUFFET DAILY PLATES ---
  {
    id: 45,
    name: "Day 2 Buffet Spread",
    desc: "Tuesday's rotating buffet selection — a full spread of balanced mains, sides & salads.",
    emoji: "🍽️",
    image: "images/day%202%20overall.png",
    price: 55,
    calories: 590,
    protein: "36g",
    carbs: "52g",
    fat: "20g",
    tags: ["buffet"],
    bg: "#FFFBEB",
  },
  {
    id: 46,
    name: "Day 3 Buffet Spread",
    desc: "Wednesday's rotating buffet selection — variety of freshly prepared macro-balanced dishes.",
    emoji: "🍽️",
    image: "images/day%203%20overall.png",
    price: 55,
    calories: 600,
    protein: "38g",
    carbs: "50g",
    fat: "20g",
    tags: ["buffet"],
    bg: "#F0FDF4",
  },
  {
    id: 47,
    name: "Day 4 Buffet Spread",
    desc: "Thursday's buffet — a generous selection of proteins, grains & fresh vegetables.",
    emoji: "🍽️",
    image: "images/day%204%20overall.png",
    price: 55,
    calories: 610,
    protein: "40g",
    carbs: "54g",
    fat: "18g",
    tags: ["buffet"],
    bg: "#EDE9FE",
  },
  {
    id: 48,
    name: "Day 5 Buffet Spread",
    desc: "Friday's buffet — end the week strong with our most popular rotation of dishes.",
    emoji: "🍽️",
    image: "images/day%205%20overall.png",
    price: 55,
    calories: 580,
    protein: "36g",
    carbs: "50g",
    fat: "20g",
    tags: ["buffet", "popular"],
    bg: "#FFF7ED",
  },
  // --- SNACKS (real photos) ---
  {
    id: 53,
    name: "Chocolate Dates",
    desc: "Premium Medjool dates dipped in rich dark chocolate — a naturally sweet, energy-packed treat.",
    emoji: "🍫",
    image: "images/Chocolate dates.jpg",
    price: 22,
    calories: 180,
    protein: "2g",
    carbs: "28g",
    fat: "8g",
    tags: ["vegetarian", "snack"],
    bg: "#F5F0E8",
  },
  {
    id: 54,
    name: "Chocolate Almonds",
    desc: "Whole almonds coated in smooth dark chocolate — a satisfying, protein-rich indulgence.",
    emoji: "🍫",
    image: "images/Chocolate almond.jpg",
    price: 20,
    calories: 200,
    protein: "5g",
    carbs: "16g",
    fat: "14g",
    tags: ["vegetarian", "snack"],
    bg: "#FEF3C7",
  },
  {
    id: 55,
    name: "Creamy Date",
    desc: "Soft Medjool date filled with a creamy nut butter center — a wholesome indulgent bite.",
    emoji: "🌴",
    image: "images/creamy date.jpg",
    price: 18,
    calories: 140,
    protein: "2g",
    carbs: "22g",
    fat: "6g",
    tags: ["vegetarian", "snack"],
    bg: "#FEF9C3",
  },
  {
    id: 56,
    name: "Brownie",
    desc: "Rich, fudgy chocolate brownie baked fresh — dense, chewy & deeply satisfying.",
    emoji: "🍫",
    image: "images/brownie.jpg",
    price: 18,
    calories: 250,
    protein: "4g",
    carbs: "32g",
    fat: "13g",
    tags: ["vegetarian", "snack"],
    bg: "#F5F0E8",
  },
  {
    id: 57,
    name: "Blueberry Muffin",
    desc: "Fluffy blueberry muffin bursting with fresh berries — baked daily from scratch.",
    emoji: "🫐",
    image: "images/blueberry muffin.jpg",
    price: 16,
    calories: 220,
    protein: "4g",
    carbs: "34g",
    fat: "8g",
    tags: ["vegetarian", "snack"],
    bg: "#EDE9FE",
  },
  {
    id: 58,
    name: "Chocolate Muffin",
    desc: "Double chocolate muffin with a soft, gooey center — a bakery-style treat.",
    emoji: "🧁",
    image: "images/Chocolate muffin.jpg",
    price: 16,
    calories: 240,
    protein: "4g",
    carbs: "36g",
    fat: "10g",
    tags: ["vegetarian", "snack"],
    bg: "#F5F0E8",
  },
  {
    id: 59,
    name: "Tiramisu",
    desc: "Classic Italian tiramisu — espresso-soaked layers of mascarpone cream & cocoa.",
    emoji: "☕",
    image: "images/tiramisu.jpg",
    price: 28,
    calories: 310,
    protein: "6g",
    carbs: "34g",
    fat: "16g",
    tags: ["vegetarian", "snack"],
    bg: "#FEF9C3",
  },
  {
    id: 60,
    name: "Almond Bread",
    desc: "Dense, moist almond flour bread — gluten-light, low-carb & naturally nutty.",
    emoji: "🍞",
    image: "images/almond bread .jpg",
    price: 20,
    calories: 190,
    protein: "8g",
    carbs: "10g",
    fat: "14g",
    tags: ["vegetarian", "lowcarb", "snack"],
    bg: "#FEF3C7",
  },
  {
    id: 61,
    name: "Acai Bowl",
    desc: "Blended acai topped with granola, fresh fruit & honey — a colourful powerhouse bowl.",
    emoji: "🫐",
    image: "images/Acai Bowl.jpg",
    price: 38,
    calories: 320,
    protein: "6g",
    carbs: "52g",
    fat: "10g",
    tags: ["vegetarian", "snack"],
    bg: "#EDE9FE",
  },
  // --- BUFFET SELECTIONS (real photos) ---
  {
    id: 62,
    name: "Buffet Selection A",
    desc: "A curated spread of today's freshest buffet dishes — proteins, grains & salads all on one plate.",
    emoji: "🍽️",
    image: "images/Buffet option 1.jpg",
    price: 55,
    calories: 580,
    protein: "35g",
    carbs: "50g",
    fat: "20g",
    tags: ["buffet", "popular"],
    bg: "#FFFBEB",
  },
  {
    id: 63,
    name: "Buffet Selection B",
    desc: "A rotating mix of chef-crafted macro-balanced dishes — build your perfect plate.",
    emoji: "🍽️",
    image: "images/buffet option 2.jpg",
    price: 55,
    calories: 590,
    protein: "36g",
    carbs: "52g",
    fat: "20g",
    tags: ["buffet"],
    bg: "#F0FDF4",
  },
  {
    id: 64,
    name: "Buffet Selection C",
    desc: "The full buffet experience — colourful, balanced dishes built for every macro goal.",
    emoji: "🍽️",
    image: "images/buffet option 3 .jpg",
    price: 55,
    calories: 600,
    protein: "38g",
    carbs: "52g",
    fat: "18g",
    tags: ["buffet"],
    bg: "#EDE9FE",
  },
  {
    id: 65,
    name: "Buffet Selection D",
    desc: "A hearty buffet plate loaded with today's premium options — customize your portions.",
    emoji: "🍽️",
    image: "images/buffet option 4.jpg",
    price: 55,
    calories: 610,
    protein: "40g",
    carbs: "54g",
    fat: "18g",
    tags: ["buffet"],
    bg: "#FFF7ED",
  },
  {
    id: 66,
    name: "Dinner for Two",
    desc: "A generous shared platter perfect for two — a romantic or social dining experience with NutriReset flavours.",
    emoji: "🕯️",
    image: "images/Dinner for 2 .jpg",
    price: 110,
    calories: 1100,
    protein: "70g",
    carbs: "90g",
    fat: "36g",
    tags: ["buffet", "popular"],
    bg: "#FFF1F2",
  },
  // --- DRINKS ---
  {
    id: 49,
    name: "Barebells Strawberry Milkshake",
    desc: "Barebells protein milkshake — lactose free, no added sugar, 24g protein. Strawberry flavour, 330ml.",
    emoji: "🍓",
    image: "images/barbells strwberry milkshake.jpg",
    price: 22,
    calories: 190,
    protein: "24g",
    carbs: "10g",
    fat: "5g",
    tags: ["protein", "drinks"],
    bg: "#FFF1F2",
  },
  {
    id: 51,
    name: "C5 Supercharge – Mixed Berry",
    desc: "C5 Supercharge Pre-Workout energy drink — sugar free, mixed berry flavour. Power through your workout.",
    emoji: "⚡",
    image: "images/C5 mixed berry.jpg",
    price: 18,
    calories: 10,
    protein: "0g",
    carbs: "2g",
    fat: "0g",
    tags: ["lowcarb", "drinks"],
    bg: "#EDE9FE",
  },
  {
    id: 52,
    name: "C5 Supercharge – Pina Colada",
    desc: "C5 Supercharge Pre-Workout energy drink — sugar free, pina colada flavour. Tropical energy boost.",
    emoji: "⚡",
    image: "images/C5 pina colada.jpg",
    price: 18,
    calories: 10,
    protein: "0g",
    carbs: "2g",
    fat: "0g",
    tags: ["lowcarb", "drinks"],
    bg: "#FFFBEB",
  },
  {
    id: 67,
    name: "Barebells Chocolate Milkshake",
    desc: "Barebells protein milkshake — lactose free, no added sugar, 24g protein. Rich chocolate flavour, 330ml.",
    emoji: "🍫",
    image: "images/Barbells chocolate.jpg",
    price: 22,
    calories: 190,
    protein: "24g",
    carbs: "10g",
    fat: "5g",
    tags: ["protein", "drinks"],
    bg: "#F5F0E8",
  },
  {
    id: 68,
    name: "Barebells Cookies & Cream",
    desc: "Barebells protein milkshake — cookies & cream flavour. 24g protein, no added sugar, 330ml.",
    emoji: "🍪",
    image: "images/Barbells cookies&cream.jpg",
    price: 22,
    calories: 190,
    protein: "24g",
    carbs: "10g",
    fat: "5g",
    tags: ["protein", "drinks"],
    bg: "#F5F0E8",
  },
  {
    id: 69,
    name: "C5 Tutti Frutti",
    desc: "C5 Supercharge Pre-Workout energy drink — tutti frutti flavour, sugar free, 473ml.",
    emoji: "⚡",
    image: "images/ C5 tutti Frutii.jpg",
    price: 18,
    calories: 10,
    protein: "0g",
    carbs: "2g",
    fat: "0g",
    tags: ["lowcarb", "drinks"],
    bg: "#FFF1F2",
  },
  {
    id: 70,
    name: "Ginger Shot",
    desc: "Cold-pressed ginger shot — potent, anti-inflammatory & immune-boosting in one small sip.",
    emoji: "🫚",
    image: "images/Ginger shot.jpg",
    price: 12,
    calories: 25,
    protein: "0g",
    carbs: "5g",
    fat: "0g",
    tags: ["vegetarian", "lowcarb", "drinks"],
    bg: "#FEF9C3",
  },
  {
    id: 71,
    name: "Strawberry Smoothie",
    desc: "Fresh blended strawberry smoothie — naturally sweet, rich in vitamin C & perfectly refreshing.",
    emoji: "🍓",
    image: "images/Strawberry smothie .jpg",
    price: 28,
    calories: 180,
    protein: "3g",
    carbs: "38g",
    fat: "1g",
    tags: ["vegetarian", "drinks"],
    bg: "#FFF1F2",
  },
  {
    id: 72,
    name: "Acai Cup",
    desc: "Thick blended acai in a cup — a rich, antioxidant-packed refreshing drink.",
    emoji: "🫐",
    image: "images/acai cup .jpg",
    price: 25,
    calories: 160,
    protein: "2g",
    carbs: "30g",
    fat: "4g",
    tags: ["vegetarian", "drinks"],
    bg: "#EDE9FE",
  },
  {
    id: 73,
    name: "Carrot & Orange Drink",
    desc: "Fresh-pressed carrot and orange juice — vibrant, vitamin-packed & naturally energizing.",
    emoji: "🥕",
    image: "images/carrot orange drink .jpg",
    price: 22,
    calories: 120,
    protein: "2g",
    carbs: "26g",
    fat: "0g",
    tags: ["vegetarian", "drinks"],
    bg: "#FFF7ED",
  },
  {
    id: 74,
    name: "Pineapple Drink",
    desc: "Fresh pineapple juice — tropical, sweet & bursting with natural enzymes.",
    emoji: "🍍",
    image: "images/pineapple drink.jpg",
    price: 20,
    calories: 130,
    protein: "1g",
    carbs: "30g",
    fat: "0g",
    tags: ["vegetarian", "drinks"],
    bg: "#FFFBEB",
  },
  {
    id: 75,
    name: "Red Bull Original",
    desc: "The classic Red Bull energy drink — 250ml can for sharp focus & energy.",
    emoji: "🐃",
    image: "images/redbull.jpg",
    price: 15,
    calories: 113,
    protein: "0g",
    carbs: "28g",
    fat: "0g",
    tags: ["drinks"],
    bg: "#EFF6FF",
  },
  {
    id: 76,
    name: "Red Bull Orange Edition",
    desc: "Red Bull Orange Edition — smooth citrus taste with the same energizing kick, 250ml.",
    emoji: "🍊",
    image: "images/redbull orange.jpg",
    price: 15,
    calories: 113,
    protein: "0g",
    carbs: "28g",
    fat: "0g",
    tags: ["drinks"],
    bg: "#FFF7ED",
  },
  {
    id: 77,
    name: "Red Bull Red Edition",
    desc: "Red Bull Red Edition — watermelon flavour with a refreshing twist of energy, 250ml.",
    emoji: "🍉",
    image: "images/redbull red.jpg",
    price: 15,
    calories: 113,
    protein: "0g",
    carbs: "28g",
    fat: "0g",
    tags: ["drinks"],
    bg: "#FEE2E2",
  },
  {
    id: 78,
    name: "Red Bull Sugar Free",
    desc: "Red Bull Sugar Free — the same energy boost, zero sugar, zero guilt. 250ml.",
    emoji: "⚡",
    image: "images/redbull sugar free .jpg",
    price: 15,
    calories: 7,
    protein: "0g",
    carbs: "3g",
    fat: "0g",
    tags: ["lowcarb", "drinks"],
    bg: "#EFF6FF",
  },
  {
    id: 79,
    name: "Red Bull White Edition",
    desc: "Red Bull White Edition — coconut berry flavour, light & crisp energy in 250ml.",
    emoji: "🥥",
    image: "images/redbull white.jpg",
    price: 15,
    calories: 113,
    protein: "0g",
    carbs: "28g",
    fat: "0g",
    tags: ["drinks"],
    bg: "#EFF6FF",
  },
  {
    id: 80,
    name: "Turmeric Shot",
    desc: "Cold-pressed turmeric shot — powerful anti-inflammatory with a warm spicy kick.",
    emoji: "🫚",
    image: "images/tumeric shot.jpg",
    price: 12,
    calories: 20,
    protein: "0g",
    carbs: "4g",
    fat: "0g",
    tags: ["vegetarian", "lowcarb", "drinks"],
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
      const map = { protein: ["tag-protein","High Protein"], lowcarb: ["tag-lowcarb","Low Carb"], vegetarian: ["tag-veg","Veg"], buffet: ["tag-buffet","Buffet"], popular: ["tag-popular","Popular"], snack: ["tag-snack","Snack"], drinks: ["tag-drinks","Drink"] };
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
