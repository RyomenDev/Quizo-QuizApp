import PropTypes from "prop-types";
import { LabelWithBorder } from "../../utils";

const QuizQuestion = ({
  question,
  choices,
  handleAnswerSelect,
  selectedAnswer,
  timer,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl p-4 sm:p-6 text-white gap-4">
      {/* Highlighted Question Box with Glassmorphic Effect*/}
      <div className="w-4/5 p-4 sm:p-6 backdrop-blur-lg bg-amber-950/40 rounded-full text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
        {question}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`rounded-3xl text-lg sm:text-xl font-semibold transition-all duration-300 shadow-md px-6 py-3 ${
              selectedAnswer === choice
                ? "bg-amber-950/40 text-black"
                : "hover:bg-amber-950/10 hover:text-black"
            }`}
            onClick={() => handleAnswerSelect(choice)}
          >
            {/* {choice} */}
            <LabelWithBorder text={choice} index={index} />
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <p className="backdrop-blur-lg bg-white/5 px-3 text-red-600 text-2xl">
        Time Left: {timer} seconds
      </p>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  timer: PropTypes.number.isRequired,
};

export default QuizQuestion;
