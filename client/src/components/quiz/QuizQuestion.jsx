import PropTypes from "prop-types";

const QuizQuestion = ({
  question,
  choices,
  timer,
  handleAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">{question}</h3>
      <ul>
        {choices.map((choice, index) => (
          <li key={index} className="mt-2">
            <button
              className={`px-4 py-2 border rounded ${
                selectedAnswer === choice
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleAnswerSelect(choice)}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
      <p className="text-red-500 mt-2">Time Left: {timer} seconds</p>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  timer: PropTypes.number.isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};

export default QuizQuestion;
