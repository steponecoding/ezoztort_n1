import { PHONE_DISPLAY, PHONE_TEL, TELEGRAM_URL } from "../constants.js";
import "./Delivery.css";

export default function Delivery({ tr }) {
  return (
    <section id="delivery" className="section container delivery">
      <div>
        <p className="eyebrow">{tr("Yetkazib berish va olib ketish", "Доставка и самовывоз")}</p>
        <h2 className="delivery__title">{tr("Yangi tort eshigingiz oldida", "Свежий торт у вашей двери")}</h2>
        <p className="delivery__text">
          {tr(
            "Yakkabog' va yaqin atrofdagi tumanlarga yetkazib berish mavjud. Qandolatxonamizdan olib ketish ham mumkin (Yakkabog', Pasyolka).",
            "Доставляем по Яккабагу и близлежащим районам. Также можно забрать заказ из нашей кондитерской (Яккабаг, Посёлка)."
          )}
        </p>
      </div>
      <div className="delivery__grid">
        <div>
          <p className="delivery__label">{tr("Manzil", "Адрес")}</p>
          <p className="delivery__value">{tr("Yakkabog', Pasyolka", "Яккабаг, Посёлка")}</p>
        </div>
        <div>
          <p className="delivery__label">{tr("Yetkazib berish", "Доставка")}</p>
          <p className="delivery__value">{tr("Kelishuv asosida", "По договорённости")}</p>
        </div>
        <div>
          <p className="delivery__label">{tr("Telefon", "Телефон")}</p>
          <a className="delivery__link" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        </div>
        <div>
          <p className="delivery__label">Telegram</p>
          <a className="delivery__link" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">@optom_tort_markazi</a>
        </div>
      </div>
    </section>
  );
}
