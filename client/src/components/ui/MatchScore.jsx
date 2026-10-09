export default function MatchScore({
  score,
  size = "md",
  showLabel = true,
}) {
  let color = "text-red-600 bg-red-50";

  if (score >= 80) {
    color = "text-emerald-600 bg-emerald-50";
  } else if (score >= 60) {
    color = "text-amber-600 bg-amber-50";
  }

  const sizes = {
    sm: "h-8 min-w-8 text-xs",
    md: "h-10 min-w-10 text-sm",
    lg: "h-14 min-w-14 text-lg",
  };

  return (
    <div
      className={`
        inline-flex items-center justify-center
        rounded-full
        font-bold
        ${color}
        ${sizes[size]}
      `}
    >
      {score}%
      {showLabel && (
        <span className="sr-only">
          match score
        </span>
      )}
    </div>
  );
}