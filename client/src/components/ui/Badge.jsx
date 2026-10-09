const styles = {
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  info: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
  gray: "bg-gray-100 text-gray-700",
};

export default function Badge({
  children,
  variant = "gray",
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full px-2.5 py-1
        text-xs font-medium
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}