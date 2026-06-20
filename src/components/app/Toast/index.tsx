import { useEffect } from "react";

type ToastProps = {
  message: string;
  show: boolean;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-1/17 left-1/2 -translate-x-1/2 w-sm bg-amber-300 text-white px-4 py-2 rounded-lg shadow-lg transition-all z-60 text-center">
      {message}
    </div>
  );
};

export default Toast;
