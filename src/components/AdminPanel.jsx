import { useState } from "react";
import { X, Lock, Plus, Trash2, Pencil, Save, XCircle } from "lucide-react";
import { CATEGORIES, FALLBACK_IMG } from "../data/products.js";
import { formatPrice } from "../utils/format.js";
import { ADMIN_PASSWORD } from "../constants.js";
import "./Modal.css";
import "./AdminPanel.css";

const EMPTY_FORM = {
  name_uz: "",
  name_ru: "",
  price: "",
  priceUnit: "",
  category: "tortlar",
  image: "",
  badge: "",
  desc_uz: "",
  desc_ru: "",
};

export default function AdminPanel({ products, lang, tr, onClose, onAdd, onDelete, onEdit, onToast }) {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [newProduct, setNewProduct] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);

  const isEditing = editingId !== null;

  function checkPass() {
    if (pass === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      onToast({ type: "error", msg: tr("Parol xato", "Неверный пароль") });
    }
  }

  function startEdit(p) {
    setEditingId(p.id);
    setNewProduct({
      name_uz: p.name_uz || "",
      name_ru: p.name_ru || "",
      price: p.price ?? "",
      priceUnit: p.priceUnit || "",
      category: p.category || "tortlar",
      image: p.image || "",
      badge: p.badge || "",
      desc_uz: p.desc_uz || "",
      desc_ru: p.desc_ru || "",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setNewProduct(EMPTY_FORM);
  }

  function handleAdd() {
    if (!newProduct.name_uz.trim() || !newProduct.price) {
      onToast({ type: "error", msg: tr("Nom va narxni kiriting", "Укажите название и цену") });
      return;
    }

    if (isEditing) {
      onEdit(editingId, {
        category: newProduct.category,
        badge: newProduct.badge || null,
        price: Number(newProduct.price),
        priceUnit: newProduct.priceUnit || null,
        name_uz: newProduct.name_uz.trim(),
        name_ru: newProduct.name_ru.trim() || newProduct.name_uz.trim(),
        desc_uz: newProduct.desc_uz.trim(),
        desc_ru: newProduct.desc_ru.trim() || newProduct.desc_uz.trim(),
        image: newProduct.image.trim() || FALLBACK_IMG,
      });
      onToast({ type: "success", msg: tr("O'zgarishlar saqlandi", "Изменения сохранены") });
    } else {
      onAdd({
        id: Date.now(),
        category: newProduct.category,
        badge: newProduct.badge || null,
        price: Number(newProduct.price),
        priceUnit: newProduct.priceUnit || null,
        name_uz: newProduct.name_uz.trim(),
        name_ru: newProduct.name_ru.trim() || newProduct.name_uz.trim(),
        desc_uz: newProduct.desc_uz.trim(),
        desc_ru: newProduct.desc_ru.trim() || newProduct.desc_uz.trim(),
        image: newProduct.image.trim() || FALLBACK_IMG,
      });
      onToast({ type: "success", msg: tr("Mahsulot qo'shildi", "Товар добавлен") });
    }

    setEditingId(null);
    setNewProduct(EMPTY_FORM);
  }

  function handleDelete(id) {
    if (editingId === id) cancelEdit();
    onDelete(id);
    onToast({ type: "success", msg: tr("Mahsulot o'chirildi", "Товар удалён") });
  }

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel admin-panel">
        <div className="modal__header">
          <h3><Lock size={16} /> {tr("Admin panel", "Панель администратора")}</h3>
          <button onClick={onClose}><X size={22} /></button>
        </div>

        {!authed ? (
          <div className="admin-panel__login">
            <p>{tr("Davom etish uchun parolni kiriting", "Введите пароль для продолжения")}</p>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkPass()}
              placeholder={tr("Parol", "Пароль")}
            />
            <button className="btn btn-primary" onClick={checkPass}>{tr("Kirish", "Войти")}</button>
          </div>
        ) : (
          <div className="admin-panel__body">
            <div>
              <h4>
                {isEditing
                  ? tr("Mahsulotni tahrirlash", "Редактирование товара")
                  : tr("Yangi mahsulot qo'shish", "Добавить товар")}
              </h4>
              <div className="admin-panel__grid">
                <input value={newProduct.name_uz} onChange={(e) => setNewProduct({ ...newProduct, name_uz: e.target.value })} placeholder={tr("Nomi (o'zbekcha)", "Название (узб.)")} />
                <input value={newProduct.name_ru} onChange={(e) => setNewProduct({ ...newProduct, name_ru: e.target.value })} placeholder={tr("Nomi (ruscha)", "Название (рус.)")} />
                <input value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="number" placeholder={tr("Narxi (so'm)", "Цена (сум)")} />
                <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                  {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                    <option key={c.id} value={c.id}>{tr(c.uz, c.ru)}</option>
                  ))}
                </select>
                <label className="admin-panel__checkbox admin-panel__wide">
                  <input
                    type="checkbox"
                    checked={newProduct.priceUnit === "kg"}
                    onChange={(e) => setNewProduct({ ...newProduct, priceUnit: e.target.checked ? "kg" : "" })}
                  />
                  {tr("Narx 1 kg uchun ko'rsatilsin (masalan: 55 000 so'm / kg)", "Цена указана за 1 кг (например: 55 000 сум / кг)")}
                </label>
                <textarea
                  className="admin-panel__wide"
                  rows={2}
                  value={newProduct.desc_uz}
                  onChange={(e) => setNewProduct({ ...newProduct, desc_uz: e.target.value })}
                  placeholder={tr("Tavsif (o'zbekcha)", "Описание (узб.)")}
                />
                <textarea
                  className="admin-panel__wide"
                  rows={2}
                  value={newProduct.desc_ru}
                  onChange={(e) => setNewProduct({ ...newProduct, desc_ru: e.target.value })}
                  placeholder={tr("Tavsif (ruscha)", "Описание (рус.)")}
                />
                <input className="admin-panel__wide" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} placeholder={tr("Rasm URL (ixtiyoriy)", "URL изображения (по желанию)")} />
                <select className="admin-panel__wide" value={newProduct.badge} onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}>
                  <option value="">{tr("Belgi yo'q", "Без метки")}</option>
                  <option value="xit">XIT</option>
                  <option value="premium">PREMIUM</option>
                  <option value="yangi">{tr("YANGI", "НОВОЕ")}</option>
                </select>
              </div>
              <div className="admin-panel__form-actions">
                <button className="btn btn-primary admin-panel__add" onClick={handleAdd}>
                  {isEditing ? <Save size={16} /> : <Plus size={16} />}
                  {isEditing ? tr("Saqlash", "Сохранить") : tr("Qo'shish", "Добавить")}
                </button>
                {isEditing && (
                  <button className="btn btn-secondary admin-panel__cancel" onClick={cancelEdit}>
                    <XCircle size={16} /> {tr("Bekor qilish", "Отменить")}
                  </button>
                )}
              </div>
            </div>

            <div>
              <h4>{tr("Mavjud mahsulotlar", "Текущие товары")}</h4>
              <div className="admin-panel__list">
                {products.map((p) => (
                  <div key={p.id} className={`admin-panel__row${editingId === p.id ? " admin-panel__row--editing" : ""}`}>
                    <img src={p.image} alt="" onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }} />
                    <div className="admin-panel__row-info">
                      <p>{lang === "uz" ? p.name_uz : p.name_ru}</p>
                      <span>{p.price ? formatPrice(p.price, lang) : tr("So'rov bo'yicha", "По запросу")}</span>
                    </div>
                    <button onClick={() => startEdit(p)} aria-label={tr("Tahrirlash", "Редактировать")}><Pencil size={16} /></button>
                    <button onClick={() => handleDelete(p.id)} aria-label={tr("O'chirish", "Удалить")}><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
