import PropTypes from "prop-types";
import GreenTickIcon from "../assets/GreenTick.svg";
import SlateTickIcon from "../assets/SlateTick.svg";

const PasswordChecklist = ({ validation }) => {
  return (
    <div className="mt-2 text-xs space-y-1">
      {[
        { condition: validation.minLength, text: "At least 6 characters" },
        { condition: validation.hasLowerCase, text: "One lowercase character" },
        { condition: validation.hasUpperCase, text: "One uppercase character" },
        {
          condition: validation.hasNumberOrSymbol,
          text: "One number or symbol",
        },
      ].map(({ condition, text }, index) => (
        <div key={index} className="flex items-center space-x-2">
          <img
            src={condition ? GreenTickIcon : SlateTickIcon}
            alt="Tick Icon"
            className="w-4 h-4"
          />
          <p className={condition ? "text-green-600" : "text-gray-400"}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

PasswordChecklist.propTypes = {
  validation: PropTypes.shape({
    minLength: PropTypes.bool.isRequired,
    hasLowerCase: PropTypes.bool.isRequired,
    hasUpperCase: PropTypes.bool.isRequired,
    hasNumberOrSymbol: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PasswordChecklist;
