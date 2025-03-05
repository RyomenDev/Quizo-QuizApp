import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// const quizBg = "/images/quiz.png";
const quizBg = "/images/quizResult.png";

const QuizResult = ({ score, quizData, selectedAnswers }) => {
  const totalQuestions = quizData.length;
  const percentage = (score / totalQuestions) * 100;

  // Determine performance comment
  let performanceComment = "";
  if (percentage >= 90) {
    performanceComment = "Excellent! 🎉 Keep up the great work!";
  } else if (percentage >= 75) {
    performanceComment = "Great job! 💪 Almost perfect!";
  } else if (percentage >= 50) {
    performanceComment = "Good effort! 😊 Keep practicing!";
  } else {
    performanceComment = "Keep trying! 🔥 You’ll do better next time!";
  }

  // Data for Donut Chart
  const chartData = [
    { name: "Correct", value: score, color: "#4CAF50" },
    { name: "Incorrect", value: totalQuestions - score, color: "#FF4C4C" },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full text-white text-center bg-cover bg-center bg-no-repeat px-6 "
      style={{ backgroundImage: `url(${quizBg})` }}
    >
      {/* Glassmorphic Container */}
      <div className="backdrop-blur-lg bg-white/10 border-white/30 rounded-lg shadow-lg p-6 sm:p-8 w-full">
        {/* Quiz Completion Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-lg sm:text-xl font-semibold">
          Your Score: {score} / {totalQuestions}
        </p>

        {/* Performance & Chart */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
          {/* Performance Comment */}
          <p className="text-lg sm:text-xl font-semibold">
            {performanceComment}
          </p>

          {/* Donut Chart */}
          <div className="flex justify-center">
            <ResponsiveContainer width={250} height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                  label
                >
                  {chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Review Answers */}
        <h2 className="text-3xl font-semibold mt-6">Review Answers:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {quizData?.map((q, index) => (
            <div
              key={index}
              className="p-4 border border-white/40 rounded-3xl shadow-md bg-white/30 backdrop-blur-lg"
            >
              <p className="font-medium">{q?.question}</p>
              <p>
                Your Answer:{" "}
                <span
                  className={
                    selectedAnswers[index] === q.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {selectedAnswers[index] || "Not Answered"}
                </span>
              </p>
              <p className="text-green-600">
                Correct Answer: {q.correctAnswer}
              </p>
            </div>
          ))}
        </div>
      </div>
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
