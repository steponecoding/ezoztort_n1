import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import "./Header.css";

const NAV_LINKS = [
  { id: "catalog", uz: "Katalog", ru: "Каталог" },
  { id: "about", uz: "Biz haqimizda", ru: "О нас" },
  { id: "delivery", uz: "Yetkazib berish", ru: "Доставка" },
  { id: "contact", uz: "Aloqa", ru: "Контакты" },
];

export default function Header({ lang, setLang, tr, onOrderClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToId(id) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="header">
      <div className="container header__bar">
        <button className="header__logo" onClick={() => scrollToId("home")}>
          EZOZ TORT
        </button>

        <nav className="header__nav">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollToId(l.id)}>
              {tr(l.uz, l.ru)}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <div className="lang-switch">
            <button className={lang === "uz" ? "active" : ""} onClick={() => setLang("uz")}>UZ</button>
            <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          </div>
          <button className="btn btn-primary" onClick={() => onOrderClick(null)}>
            <Send size={16} /> {tr("Bog'lanish", "Связаться")}
          </button>
        </div>

        <button className="header__burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollToId(l.id)}>
              {tr(l.uz, l.ru)}
            </button>
          ))}
          <div className="header__mobile-row">
            <div className="lang-switch">
              <button className={lang === "uz" ? "active" : ""} onClick={() => setLang("uz")}>UZ</button>
              <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
            </div>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => { setMenuOpen(false); onOrderClick(null); }}>
              {tr("Bog'lanish", "Связаться с нами")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
