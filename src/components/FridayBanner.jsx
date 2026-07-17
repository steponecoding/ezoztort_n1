import "./FridayBanner.css";

export default function FridayBanner({ tr }) {
  return (
    <div className="friday-banner">
      {tr(
        "Bugun Juma! Barcha tortlarga −20% chegirma.",
        "Сегодня пятница! Скидка −20% на все торты."
      )}
    </div>
  );
}
