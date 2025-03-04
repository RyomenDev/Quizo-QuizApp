import PropTypes from "prop-types";

const QuizStart = ({ totalQuestions, startQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz</h1>
      <p className="text-lg mb-2">📌 Total Questions: {totalQuestions}</p>
      <p className="text-lg mb-2">⏳ Time Per Question: 30 seconds</p>
      <p className="text-lg mb-2">⚠️ You cannot go back once you proceed.</p>
      <p className="text-lg mb-6">
        💡 Your final score will be shown at the end.
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-700 transition"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

QuizStart.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  startQuiz: PropTypes.func.isRequired,
};

export default QuizStart;
