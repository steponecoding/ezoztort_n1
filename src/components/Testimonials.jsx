import { Star } from "lucide-react";
import "./Testimonials.css";

export default function Testimonials({ tr }) {
  const items = [
    {
      q: tr(
        "To'y torti barcha kutganlarimizdan oshib tushdi. Mehmonlar hayratda qoldi — chiroyli ham, mazali ham.",
        "Свадебный торт превзошёл все наши ожидания. Гости были в восторге — и красиво, и вкусно."
      ),
      a: tr("Malika · To'y", "Малика · Свадьба"),
    },
    {
      q: tr(
        "Qizimning tug'ilgan kuniga tort buyurtma qildik. Bezagi a'lo darajada, aynan vaqtida yetkazishdi.",
        "Заказали торт на день рождения дочери. Декор на высшем уровне, доставили точно вовремя."
      ),
      a: tr("Gulshod · Tug'ilgan kun", "Гульшод · День рождения"),
    },
    {
      q: tr(
        "120 kishilik korporativ buyurtma — hammasi mukammal. Endi faqat Ezoz Tort.",
        "Корпоративный заказ на 120 человек — всё было идеально. Теперь только Ezoz Tort."
      ),
      a: tr("Neva Group · Korporativ", "Neva Group · Корпоратив"),
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="catalog__heading">
          <p className="eyebrow">{tr("Mijozlar fikri", "Отзывы клиентов")}</p>
          <h2>{tr("Mehmonlarimiz so'zlari", "Слова наших гостей")}</h2>
        </div>
        <div className="testimonials__grid">
          {items.map((r, i) => (
            <div key={i} className="testimonials__card">
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonials__quote">«{r.q}»</p>
              <p className="testimonials__author">{r.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
