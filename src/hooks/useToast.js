import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast faqat ToastProvider ichida ishlatilishi kerak");
  }
  return ctx;
}
