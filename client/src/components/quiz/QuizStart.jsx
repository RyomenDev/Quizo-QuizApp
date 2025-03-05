import PropTypes from "prop-types";

const quizBg = "/images/quiz.png";

const QuizStart = ({ totalQuestions, startQuiz, Heading }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white text-center bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url(${quizBg})` }}
    >
      {/* Glassmorphic Container */}
      <div className="bg-slate-800 bg-opacity-15 backdrop-blur-md shadow-lg rounded-2xl p-10 md:p-14 max-w-2xl w-full border-opacity-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          {Heading}
        </h1>
        <p className="text-lg md:text-xl mb-3">
          📌 Total Questions: {totalQuestions}
        </p>
        <p className="text-lg md:text-xl mb-3">
          ⏳ Time Per Question: 30 seconds
        </p>
        <p className="text-lg md:text-xl mb-3">
          ⚠️ You cannot go back once you proceed.
        </p>
        <p className="text-lg md:text-xl mb-6">
          💡 Your final score will be shown at the end.
        </p>

        <button
          className="px-8 py-4 bg-[#6d4747] text-white text-xl font-semibold rounded-lg hover:bg-[#3B2F2F] transition-all duration-300 shadow-lg"
          onClick={startQuiz}
        >
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
};

QuizStart.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  startQuiz: PropTypes.func.isRequired,
  Heading: PropTypes.string.isRequired,
};

export default QuizStart;
