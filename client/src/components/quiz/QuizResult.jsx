import PropTypes from "prop-types";

const QuizResult = ({ score, quizData, selectedAnswers }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">
        Your Score: {score} / {quizData.length}
      </p>

      <h2 className="text-xl font-semibold mt-4">Review Answers:</h2>
      <ul>
        {quizData.map((q, index) => (
          <li key={index} className="mt-2">
            <p className="font-medium">{q.question}</p>
            <p>
              Your Answer:{" "}
              <span
                className={
                  selectedAnswers[index] === q.correctAnswer
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {selectedAnswers[index] || "Not Answered"}
              </span>
            </p>
            <p className="text-green-500">Correct Answer: {q.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
  quizData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedAnswers: PropTypes.object.isRequired,
};

export default QuizResult;
