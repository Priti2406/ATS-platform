import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    error,
    hint,
    icon: Icon,
    className = "",
    required = false,
    ...props
  },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          ref={ref}
          className={`
            h-11 w-full rounded-lg border
            bg-white px-3
            text-sm text-gray-900
            placeholder:text-gray-400
            transition
            focus:outline-none
            focus:ring-2
            ${
              Icon
                ? "pl-10"
                : ""
            }
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-100"
            }
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}

      {!error && hint && (
        <p className="mt-1.5 text-xs text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
});

export default Input;