# Ezoz Tort — sayt

Vite + React loyihasi (public/src tuzilmasi bilan), Ezoz Tort qandolatxonasi uchun.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` ochiladi.

Production uchun yig'ish:

```bash
npm run build
npm run preview
```

## Tuzilma

```
src/
  main.jsx            — kirish nuqtasi
  App.jsx             — barcha bo'limlarni yig'adi
  constants.js         — telefon, telegram/instagram havolalari, admin parol
  api/telegram.js      — buyurtmani Telegram botga yuborish
  data/products.js     — standart mahsulotlar va kategoriyalar
  hooks/useProducts.js — mahsulotlarni localStorage'da saqlash
  utils/format.js      — narxni formatlash, juma tekshiruvi
  components/          — Header, Hero, Features, Catalog, ProductCard,
                          Testimonials, Delivery, Footer, OrderModal,
                          AdminPanel, Toast, FridayBanner
public/
  favicon.svg
```

## Muhim eslatmalar

1. **Telegram bot tokeni** `.env` faylida (`VITE_TELEGRAM_BOT_TOKEN`,
   `VITE_TELEGRAM_CHAT_ID`). Vite bu qiymatlarni build vaqtida frontend
   kodiga qo'shib qo'yadi — ya'ni sayt manbasini ko'rgan har kim tokenni
   ko'rishi mumkin. Bu kichik biznes sayti uchun odatiy holat, lekin
   to'liq xavfsizlik kerak bo'lsa, buyurtmani yuborishni backend
   (masalan, kichik serverless funksiya) orqali qiling va tokenni
   faqat serverda saqlang.

2. **Mahsulotlar (admin panel)** hozircha `localStorage`da saqlanadi —
   ya'ni admin panelidan qo'shilgan/o'chirilgan mahsulotlar faqat SHU
   brauzerda ko'rinadi, boshqa mijozlarga avtomatik ko'rinmaydi. Buni
   hamma mijozlarga umumiy qilish uchun haqiqiy backend (masalan,
   Firebase, Supabase yoki o'z API'ingiz) kerak bo'ladi.

3. **Admin parol** `.env` faylida (`VITE_ADMIN_PASSWORD`, standart:
   `ezoz2026`) — bu ham frontendda ko'rinadi, jiddiy himoya emas.

4. Rasm yuklash faqat URL orqali (fayl yuklash yo'q) — admin panelda
   rasm manzilini kiriting.

5. Har juma kuni saytda avtomatik banner va barcha narxli
   mahsulotlarga −15% chegirma ko'rinadi (`utils/format.js` dagi
   `isFridayToday()` funksiyasi orqali).
