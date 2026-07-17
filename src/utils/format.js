export function formatPrice(n, lang) {
  const s = Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return lang === "uz" ? `${s} so'm` : `${s} сум`;
}

// Appends a "/ kg" style suffix when the product is priced per kilogram.
export function formatPriceUnit(unit, lang) {
  if (unit !== "kg") return "";
  return lang === "uz" ? " / kg" : " / кг";
}

export function isFridayToday() {
  return new Date().getDay() === 5;
}
