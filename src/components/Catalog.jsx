import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CATEGORIES } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import "./Catalog.css";

export default function Catalog({ products, loaded, lang, tr, isFriday, onOrder }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const visible = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="section container">
      <div className="catalog__heading">
        <p className="eyebrow">{tr("Bizning assortiment", "Наш ассортимент")}</p>
        <h2>{tr("Kataloq", "Каталог")}</h2>
      </div>

      <div className="catalog__filters">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={activeCategory === c.id ? "active" : ""}
            onClick={() => setActiveCategory(c.id)}
          >
            {tr(c.uz, c.ru)}
          </button>
        ))}
      </div>

      {!loaded ? (
        <div className="catalog__loading">
          <Loader2 className="spin" size={28} />
        </div>
      ) : (
        <div className="catalog__grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} lang={lang} tr={tr} isFriday={isFriday} onOrder={onOrder} />
          ))}
          {visible.length === 0 && (
            <p className="catalog__empty">{tr("Bu bo'limda mahsulot yo'q", "В этой категории пока нет товаров")}</p>
          )}
        </div>
      )}
    </section>
  );
}
