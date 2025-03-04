import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">
        Your Score: {score} / {totalQuestions}
      </p>

      <div className="flex justify-evenly items-center">
        {/* Performance Comment */}
        <p className="text-xl font-semibold mt-2">{performanceComment}</p>

        {/* Donut Chart */}
        <div className="flex justify-center my-6">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={80} // Creates donut effect
                outerRadius={120}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Review Answers */}
      <h2 className="text-2xl font-semibold mt-4">Review Answers:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
        {quizData.map((q, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
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
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Prop Validation
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
