import { Send, ChevronRight } from "lucide-react";
import "./Hero.css";

export default function Hero({ tr, onOrderClick }) {
  function scrollToCatalog() {
    const el = document.getElementById("catalog");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="home" className="hero">
      <img
        className="hero__image"
        src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1600&q=80&auto=format&fit=crop"
        alt="Ezoz Tort"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">{tr("Ezoz Tort Markazi · Yakkabog'", "Ezoz Tort Markazi · Яккабаг")}</p>
        <h1 className="hero__title">{tr("Har bir bayram uchun maxsus tortlar", "Особые торты для каждого праздника")}</h1>
        <p className="hero__subtitle">
          {tr(
            "Tug'ilgan kun · To'y · Tadbirlar · Turli shirinliklar va desertlar",
            "День рождения · Свадьба · Мероприятия · Разные сладости и десерты"
          )}
        </p>
        <div className="hero__actions">
          <button className="btn btn-primary hero__btn-light" onClick={() => onOrderClick(null)}>
            <Send size={16} /> {tr("Bog'lanish", "Связаться с нами")}
          </button>
          <button className="btn btn-outline hero__btn-outline" onClick={scrollToCatalog}>
            {tr("Katalogni ko'rish", "Смотреть каталог")} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
