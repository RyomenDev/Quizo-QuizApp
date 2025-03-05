import PropTypes from "prop-types";

const LabelWithBorder = ({ text, index }) => {
  return (
    <div className="relative ml-3 w-auto h-24 flex items-center justify-center text-2xl font-semibold text-white">
      {/* SVG Border with Blue Background */}
      <svg
        className="absolute inset-0 w-full h-full backdrop-blur-lg"
        viewBox="0 0 400 120"
      >
        <polygon
          points="0,20 340,20 390,60 340,100 0,100"
          stroke="white"
          fill="rgba(98, 26, 26, 0.4)"
          strokeWidth="1"
        />
      </svg>

      {/* Text inside */}
      <span className="relative z-10 px-6">
        {index + 1}
        {" : "}
        {text}
      </span>
    </div>
  );
};

LabelWithBorder.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default LabelWithBorder;
