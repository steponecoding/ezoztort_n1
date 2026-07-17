import { Send, Instagram, Phone, Settings } from "lucide-react";
import { TELEGRAM_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "../constants.js";
import "./Footer.css";

export default function Footer({ tr, onAdminClick }) {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div>
          <h2 className="footer__title">
            {tr("Keling, sizning mukammal desertingizni yarataylik", "Давайте создадим ваш идеальный десерт")}
          </h2>
          <p className="footer__text">
            {tr(
              "G'oyalaringizga ochiqmiz. Qulay usulda biz bilan bog'laning — dizayn, ichi va o'lchamini kelishamiz.",
              "Мы открыты вашим идеям. Свяжитесь с нами удобным способом — согласуем дизайн, начинку и размер."
            )}
          </p>
          <div className="footer__buttons">
            <a className="btn footer__btn-gold" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send size={16} /> Telegram
            </a>
            <a className="btn footer__btn-outline" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} /> Instagram
            </a>
            <a className="btn footer__btn-outline" href={`tel:${PHONE_TEL}`}>
              <Phone size={16} /> {tr("Qo'ng'iroq", "Звонок")}
            </a>
          </div>
        </div>
        <div className="footer__contact">
          <p className="footer__label">{tr("Aloqa", "Контакты")}</p>
          <a className="footer__phone" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <p className="footer__address">{tr("Yakkabog', Pasyolka", "Яккабаг, Посёлка")}</p>
          <p className="footer__note">{tr("Dastavka xizmati bor", "Есть услуга доставки")}</p>
          <div className="footer__bottom">
            <span className="footer__brand">Ezoz Tort Markazi</span>
            <span>© 2026</span>
            <button className="footer__admin" onClick={onAdminClick} title="Admin" aria-label="Admin">
              <Settings size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
