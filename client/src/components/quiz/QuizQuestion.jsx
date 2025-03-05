import PropTypes from "prop-types";
// import { LabelWithBorder } from "../../utils";

const QuizQuestion = ({
  question,
  choices,
  handleAnswerSelect,
  selectedAnswer,
  timer,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl p-4 sm:p-6 text-white gap-4">
      {/* Highlighted Question Box with Glassmorphic Effect */}
      <div className="w-full sm:w-4/5 p-4 sm:p-6 backdrop-blur-lg bg-amber-950/40 rounded-xl sm:rounded-full text-white text-base sm:text-lg md:text-2xl font-semibold text-center">
        {question}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`w-full sm:w-auto rounded-xl sm:rounded-3xl text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-md px-4 sm:px-6 py-2 sm:py-3 border-2 ${
              selectedAnswer === choice
                ? "bg-amber-950/40 text-black border-amber-900"
                : "border-white hover:bg-amber-950/20 hover:text-black"
            }`}
            onClick={() => handleAnswerSelect(choice)}
          >
            {index + 1} : {choice}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <p className="w-full sm:w-auto text-center backdrop-blur-lg bg-white/10 px-3 py-1 rounded-md text-red-500 text-lg sm:text-2xl">
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
