import { Sparkles, Hand, Truck } from "lucide-react";
import "./Features.css";

export default function Features({ tr }) {
  const items = [
    {
      icon: <Sparkles size={22} />,
      title: tr("Masalliqlar", "Ингредиенты"),
      text: tr(
        "Faqat Belgiya shokoladi, tabiiy qaymoq va yangi mevalar. Hech qanday o'rinbosar va kuchaytiruvchilar yo'q.",
        "Только бельгийский шоколад, натуральные сливки и свежие фрукты. Никаких заменителей и усилителей."
      ),
    },
    {
      icon: <Hand size={22} />,
      title: tr("Qo'l mehnati", "Ручная работа"),
      text: tr(
        "Har bir bezak ustalarimiz tomonidan qo'lda yaratiladi — tortingiz noyob san'at asariga aylanadi.",
        "Каждый декор создаётся нашими мастерами вручную — ваш торт становится настоящим произведением искусства."
      ),
    },
    {
      icon: <Truck size={22} />,
      title: tr("Yetkazib berish", "Доставка"),
      text: tr(
        "Yakkabog' va atrofdagi hududlarga yetkazib berish mavjud. Biz bilan bog'laning — qulay vaqt va manzilni kelishamiz.",
        "Доставка по Яккабагу и окрестностям. Свяжитесь с нами — согласуем удобное время и адрес."
      ),
    },
  ];

  return (
    <section id="about" className="section container features">
      {items.map((f, i) => (
        <div key={i} className="features__item">
          <div className="features__icon">{f.icon}</div>
          <h3 className="features__title">{f.title}</h3>
          <p className="features__text">{f.text}</p>
        </div>
      ))}
    </section>
  );
}
