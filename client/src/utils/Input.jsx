import React, { useId } from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    placeholder = "",
    className = "",
    size = "medium",
    error = "",
    helperText = "",
    icon = null,
    iconPosition = "left", // 'left' or 'right'
    ...props
  },
  ref
) {
  const id = useId();

  // Dynamic size classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      {label && (
        <label
          className="inline-block mb-1 pl-1 text-gray-700 text-sm font-medium"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        className={`flex items-center border ${
          error ? "border-red-500" : "border-gray-200"
        } rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500 transition duration-200`}
      >
        {/* Icon (Left) */}
        {icon && iconPosition === "left" && (
          <span className="px-2 text-gray-500">{icon}</span>
        )}

        {/* Input Element */}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          className={`flex-1 outline-none bg-transparent text-black ${sizeClasses[size]}`}
          {...props}
        />

        {/* Icon (Right) */}
        {icon && iconPosition === "right" && (
          <span className="px-2 text-gray-500">{icon}</span>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Helper Text */}
      {helperText && !error && (
        <p className="text-gray-500 text-xs mt-1">{helperText}</p>
      )}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.string,
  helperText: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Input;
