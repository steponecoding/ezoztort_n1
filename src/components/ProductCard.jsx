import { useState } from "react";
import { Heart } from "lucide-react";
import { BADGE_LABEL, FALLBACK_IMG } from "../data/products.js";
import { formatPrice, formatPriceUnit } from "../utils/format.js";

export default function ProductCard({ product, lang, tr, isFriday, onOrder }) {
  const [saved, setSaved] = useState(false);
  // Friday −20% only applies to actual cakes (tortlar / bayram tortlari),
  // not to desserts/sweets categories, and only on Fridays.
  const isCakeCategory = product.category === "tortlar" || product.category === "bayram";
  const discounted = isFriday && isCakeCategory && product.price;
  const finalPrice = discounted ? product.price * 0.8 : product.price;

  // Only one chip fits the top-left corner: the Friday discount wins when
  // active, otherwise fall back to the product's own badge (xit/premium/yangi).
  const cornerBadge = discounted
    ? { text: `−20%`, tone: "discount" }
    : product.badge && BADGE_LABEL[product.badge]
    ? { text: BADGE_LABEL[product.badge][lang], tone: "default" }
    : null;

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={lang === "uz" ? product.name_uz : product.name_ru}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMG;
          }}
        />
        {cornerBadge && (
          <span className={`product-card__badge product-card__badge--${cornerBadge.tone}`}>{cornerBadge.text}</span>
        )}
        <button
          type="button"
          className={`product-card__save${saved ? " is-saved" : ""}`}
          onClick={() => setSaved((v) => !v)}
          aria-label={tr("Sevimlilarga", "В избранное")}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{lang === "uz" ? product.name_uz : product.name_ru}</h3>

        <div className="product-card__price">
          {product.price ? (
            <>
              <span className="product-card__price-new">
                {formatPrice(finalPrice, lang)}
                <span className="product-card__price-unit">{formatPriceUnit(product.priceUnit, lang)}</span>
              </span>
              {discounted && <span className="product-card__price-old">{formatPrice(product.price, lang)}</span>}
            </>
          ) : (
            <span className="product-card__on-request">{tr("So'rov bo'yicha", "По запросу")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
