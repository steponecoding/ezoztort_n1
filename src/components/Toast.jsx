import { Check } from "lucide-react";
import "./Toast.css";

export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className={`toast toast--${toast.type}`}>
      {toast.type === "success" && <Check size={16} />}
      {toast.msg}
    </div>
  );
}
