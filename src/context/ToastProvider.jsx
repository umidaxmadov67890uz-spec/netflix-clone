import {  useCallback,  useRef, useState } from "react";
import {
  VscError,
  VscCheck,
  VscInfo,
  VscWarning,
  VscChromeClose,
} from "react-icons/vsc";
import { ToastContext } from "./ToastContext";



const TOAST_STYLES = {
  error: {
    icon: <VscError className="text-red-500 text-xl shrink-0" />,
    border: "border-red-500/40",
    bar: "bg-red-500",
  },
  success: {
    icon: <VscCheck className="text-green-500 text-xl shrink-0" />,
    border: "border-green-500/40",
    bar: "bg-green-500",
  },
  info: {
    icon: <VscInfo className="text-blue-500 text-xl shrink-0" />,
    border: "border-blue-500/40",
    bar: "bg-blue-500",
  },
  warning: {
    icon: <VscWarning className="text-yellow-500 text-xl shrink-0" />,
    border: "border-yellow-500/40",
    bar: "bg-yellow-500",
  },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "info", duration = 3500) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev, { id, message, type, duration }]);
      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
      return id;
    },
    [removeToast],
  );

  const toast = {
    show: showToast,
    error: (msg, duration) => showToast(msg, "error", duration),
    success: (msg, duration) => showToast(msg, "success", duration),
    info: (msg, duration) => showToast(msg, "info", duration),
    warning: (msg, duration) => showToast(msg, "warning", duration),
    dismiss: removeToast,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }) {
  const style = TOAST_STYLES[toast.type] || TOAST_STYLES.info;

  return (
    <div
      className={`pointer-events-auto relative overflow-hidden flex items-start gap-3 bg-slate-900 border ${style.border} rounded-xl shadow-lg shadow-black/40 py-3 px-4 animate-toast-in`}
    >
      {style.icon}
      <p className="text-slate-200 text-sm leading-snug flex-1 wrap-break-word">
        {toast.message}
      </p>
      <button
        onClick={onClose}
        className="text-slate-500 hover:text-slate-200 shrink-0 cursor-pointer transition-colors duration-200"
      >
        <VscChromeClose />
      </button>
      {toast.duration > 0 && (
        <span
          className={`absolute bottom-0 left-0 h-0.5 ${style.bar} animate-toast-bar`}
          style={{ animationDuration: `${toast.duration}ms` }}
        />
      )}
    </div>
  );
}

// export function useToast() {
//   const ctx = useContext(ToastContext);
//   if (!ctx) {
//     throw new Error("useToast faqat ToastProvider ichida ishlatilishi kerak");
//   }
//   return ctx;
// }
