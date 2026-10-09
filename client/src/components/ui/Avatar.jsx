export default function Avatar({
  name = "User",
  src,
  size = "md",
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
    xl: "h-20 w-20 text-2xl",
  };

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`
          rounded-full object-cover
          ${sizes[size]}
        `}
      />
    );
  }

  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        bg-indigo-100
        font-semibold
        text-indigo-700
        ${sizes[size]}
      `}
    >
      {initials}
    </div>
  );
}