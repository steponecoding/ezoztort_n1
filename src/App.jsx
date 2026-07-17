import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import Header from "./components/Header.jsx";
import FridayBanner from "./components/FridayBanner.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Catalog from "./components/Catalog.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Delivery from "./components/Delivery.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Toast from "./components/Toast.jsx";
import { useProducts } from "./hooks/useProducts.js";
import { isFridayToday } from "./utils/format.js";

export default function App() {
  const [lang, setLang] = useState("uz");
  const tr = (uz, ru) => (lang === "uz" ? uz : ru);

  const { products, loaded, addProduct, deleteProduct, editProduct } = useProducts();
  const isFriday = isFridayToday();

  const [contactOpen, setContactOpen] = useState(false);
  const [contactProduct, setContactProduct] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    document.body.style.overflow = contactOpen || adminOpen ? "hidden" : "";
  }, [contactOpen, adminOpen]);

  function openContact(product) {
    setContactProduct(product || null);
    setContactOpen(true);
  }

  return (
    <>
      {isFriday && <FridayBanner tr={tr} />}
      <Header lang={lang} setLang={setLang} tr={tr} onOrderClick={openContact} />
      <Hero tr={tr} onOrderClick={openContact} />
      <Features tr={tr} />
      <Catalog products={products} loaded={loaded} lang={lang} tr={tr} isFriday={isFriday} onOrder={openContact} />
      <Testimonials tr={tr} />
      <Delivery tr={tr} />
      <Footer tr={tr} onAdminClick={() => setAdminOpen(true)} />

      <button className="fab" onClick={() => openContact(null)} aria-label={tr("Bog'lanish", "Связаться с нами")}>
        <MessageCircle size={22} />
      </button>

      {contactOpen && (
        <ContactModal
          product={contactProduct}
          lang={lang}
          tr={tr}
          isFriday={isFriday}
          onClose={() => setContactOpen(false)}
          onToast={setToast}
        />
      )}

      {adminOpen && (
        <AdminPanel
          products={products}
          lang={lang}
          tr={tr}
          onClose={() => setAdminOpen(false)}
          onAdd={addProduct}
          onDelete={deleteProduct}
          onEdit={editProduct}
          onToast={setToast}
        />
      )}

      <Toast toast={toast} />
    </>
  );
}
