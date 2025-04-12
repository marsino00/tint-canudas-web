import { useEffect } from "react";

export function AlertMessage({
  type,
  message,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}) {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const borderColor =
    type === "success" ? "border-green-500" : "border-red-500";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${bgColor} ${borderColor} ${textColor} border-l-4 p-4 mb-4 rounded`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p>{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Cerrar mensaje"
        >
          ×
        </button>
      </div>
    </div>
  );
}
