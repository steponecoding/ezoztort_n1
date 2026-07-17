import { useState } from "react";
import { X, Send, Loader2, Instagram } from "lucide-react";
import { FALLBACK_IMG } from "../data/products.js";
import { formatPrice, formatPriceUnit } from "../utils/format.js";
import { sendOrderToTelegram } from "../api/telegram.js";
import { PHONE_DISPLAY, TELEGRAM_URL, INSTAGRAM_URL } from "../constants.js";
import "./ContactModal.css";

export default function ContactModal({ product, lang, tr, isFriday, onClose, onToast }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      onToast({ type: "error", msg: tr("Ism va telefon raqamini kiriting", "Укажите имя и номер телефона") });
      return;
    }
    setSending(true);

    const productName = product ? (lang === "uz" ? product.name_uz : product.name_ru) : null;

    const text =
      `🍰 Yangi murojaat — Ezoz Tort\n` +
      `👤 Ism: ${form.name}\n` +
      `📞 Telefon: ${form.phone}` +
      (productName ? `\n🎂 Mahsulot: ${productName}` : "");

    try {
      await sendOrderToTelegram(text);
      onToast({ type: "success", msg: tr("Arizangiz yuborildi! Tez orada siz bilan bog'lanamiz.", "Заявка отправлена! Скоро с вами свяжутся.") });
      onClose();
    } catch (err) {
      onToast({
        type: "error",
        msg: tr(`Yuborishda xatolik. Iltimos qo'ng'iroq qiling: ${PHONE_DISPLAY}`, `Ошибка отправки. Пожалуйста, позвоните: ${PHONE_DISPLAY}`),
      });
    }
    setSending(false);
  }

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel">
        <div className="modal__header">
          <h3>{tr("Bog'lanish", "Связаться с нами")}</h3>
          <button onClick={onClose}><X size={22} /></button>
        </div>

        <form onSubmit={handleSubmit} className="modal__form">
          {product && (
            <div className="modal__product">
              <img
                src={product.image}
                alt=""
                onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
              />
              <div>
                <p className="modal__product-name">{lang === "uz" ? product.name_uz : product.name_ru}</p>
                {product.price && (
                  <p className="modal__product-price">
                    {formatPrice(
                      isFriday && (product.category === "tortlar" || product.category === "bayram")
                        ? product.price * 0.8
                        : product.price,
                      lang
                    )}
                    {formatPriceUnit(product.priceUnit, lang)}
                  </p>
                )}
              </div>
            </div>
          )}

          <p className="modal__intro">
            {tr(
              "Ismingiz va telefon raqamingizni qoldiring — biz tez orada siz bilan bog'lanamiz.",
              "Оставьте ваше имя и номер телефона — мы скоро с вами свяжемся."
            )}
          </p>

          <label className="field">
            <span>{tr("Ismingiz", "Ваше имя")} *</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={tr("Ismingizni kiriting", "Введите ваше имя")}
            />
          </label>

          <label className="field">
            <span>{tr("Telefon raqami", "Номер телефона")} *</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+998 90 123 45 67"
            />
          </label>

          <button type="submit" disabled={sending} className="btn btn-primary modal__submit">
            {sending ? <Loader2 size={18} className="spin" /> : <Send size={16} />}
            {sending ? tr("Yuborilmoqda...", "Отправка...") : tr("Yuborish", "Отправить")}
          </button>

          <div className="modal__divider">
            <span>{tr("yoki", "или")}</span>
          </div>

          <div className="modal__quick-links">
            <a className="btn btn-outline modal__quick-link" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send size={16} /> Telegram
            </a>
            <a className="btn btn-outline modal__quick-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
