import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
  secondary:
    "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300",
  outline:
    "border border-indigo-200 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  ghost:
    "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-1
        disabled:cursor-not-allowed disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading && <Loader2 size={17} className="animate-spin" />}

      {children}
    </button>
  );
}