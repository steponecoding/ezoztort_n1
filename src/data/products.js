export const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format&fit=crop";

export const CATEGORIES = [
  { id: "all", uz: "Barchasi", ru: "Все" },
  { id: "tortlar", uz: "Tortlar", ru: "Торты" },
  { id: "bayram", uz: "Bayram tortlari", ru: "Праздничные торты" },
  { id: "desertlar", uz: "Desertlar", ru: "Десерты" },
  { id: "shirinliklar", uz: "Shirinliklar", ru: "Сладости" },
];

export const BADGE_LABEL = {
  xit: { uz: "XIT", ru: "ХИТ" },
  premium: { uz: "PREMIUM", ru: "PREMIUM" },
  yangi: { uz: "YANGI", ru: "НОВОЕ" },
};

export const DEFAULT_PRODUCTS = [
  {
    id: 1, category: "tortlar", badge: "xit", price: null,
    name_uz: "«Snickers» torti", name_ru: "Торт «Сникерс»",
    desc_uz: "Karamel, yong'oq va shokolad qatlamli xit tort. Buyurtma asosida tayyorlanadi.",
    desc_ru: "Хит-торт со слоями карамели, орехов и шоколада. Готовится на заказ.",
    image: "/products/snickers-tort.jpg",
  },
  {
    id: 2, category: "bayram", badge: "premium", price: null,
    name_uz: "Bayram torti", name_ru: "Праздничный торт",
    desc_uz: "Tug'ilgan kun va to'ylar uchun mualliflik tort — oltin bezaklar.",
    desc_ru: "Авторский торт для дней рождения и свадеб — с золотым декором.",
    image: "/products/bayram-tort.jpg",
  },
  {
    id: 3, category: "desertlar", badge: null, price: 250000,
    name_uz: "Qulupnayli mini desertlar", name_ru: "Мини-десерты с клубникой",
    desc_uz: "Yangi qulupnay bilan bezatilgan porsiyali desertlar to'plami.",
    desc_ru: "Набор порционных десертов, украшенных свежей клубникой.",
    image: "/products/mini-desert.jpg",
  },
  {
    id: 4, category: "shirinliklar", badge: null, price: 180000,
    name_uz: "Rulet", name_ru: "Рулет",
    desc_uz: "An'anaviy shirinlik — asal va yong'oq bilan.",
    desc_ru: "Традиционная сладость — с мёдом и орехами.",
    image: "/products/rulet.jpg",
  },
  {
    id: 5, category: "shirinliklar", badge: null, price: 25000,
    name_uz: "Somsa", name_ru: "Самса",
    desc_uz: "Qatlama xamirdan tayyorlangan mazali somsa.",
    desc_ru: "Вкусная самса из слоёного теста.",
    image: "/products/somsa.jpg",
  },
  {
    id: 6, category: "shirinliklar", badge: "yangi", price: 35000,
    name_uz: "Chuchvara", name_ru: "Чучвара",
    desc_uz: "Qo'lda tayyorlangan an'anaviy chuchvara.",
    desc_ru: "Традиционная чучвара ручной лепки.",
    image: "/products/chuchvara.jpg",
  },
  {
    id: 7, category: "shirinliklar", badge: null, price: 220000, priceUnit: "kg",
    name_uz: "Shirin paxlava", name_ru: "Сладкая пахлава",
    desc_uz: "Yupqa qatlamli paxlava — yong'oq va sirop bilan.",
    desc_ru: "Тонкослойная пахлава — с орехами и сиропом.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 8, category: "shirinliklar", badge: null, price: 150000, priceUnit: "kg",
    name_uz: "Quyuqlashtirilgan sutli yong'oqchalar", name_ru: "Орешки со сгущённым молоком",
    desc_uz: "Yumshoq yong'oqchalar quyuqlashtirilgan sut bilan.",
    desc_ru: "Мягкое печенье-орешки со сгущённым молоком.",
    image: "/products/orehki.jpg",
  },
];
