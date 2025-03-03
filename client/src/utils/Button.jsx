import PropTypes from "prop-types";

export default function Button({
  children,
  type = "button",
  size = "medium",
  shape = "rounded",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  isLoading = false,
  block = false,
  disabled = false,
  ...props
}) {
  // Size classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Shape classes
  const shapeClasses = {
    rounded: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-none",
  };

  return (
    <button
      type={type}
      className={`flex items-center justify-center ${bgColor} ${textColor} ${
        sizeClasses[size]
      } ${shapeClasses[shape]} ${
        block ? "w-full" : ""
      } ${className} transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        children
      )}
    </button>
  );
}

// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["rounded", "pill", "square"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

// Default props
Button.defaultProps = {
  type: "button",
  size: "medium",
  shape: "rounded",
  bgColor: "bg-blue-600",
  textColor: "text-white",
  className: "",
  isLoading: false,
  block: false,
  disabled: false,
};
