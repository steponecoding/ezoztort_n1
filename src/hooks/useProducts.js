import { useEffect, useState } from "react";
import { DEFAULT_PRODUCTS } from "../data/products.js";

const STORAGE_KEY = "ezoz_products";

export function useProducts() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setProducts(JSON.parse(raw));
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
      }
    } catch (err) {
      setProducts(DEFAULT_PRODUCTS);
    }
    setLoaded(true);
  }, []);

  function persist(list) {
    setProducts(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      // storage unavailable (private browsing, quota, etc.) — state still updates in memory
    }
  }

  function addProduct(item) {
    persist([...products, item]);
  }

  function deleteProduct(id) {
    persist(products.filter((p) => p.id !== id));
  }

  function editProduct(id, updates) {
    persist(products.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  }

  return { products, loaded, addProduct, deleteProduct, editProduct };
}
