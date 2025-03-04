import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const QuizResult = ({ score, quizData, selectedAnswers }) => {
  const correctAnswers = quizData.filter(
    (q, index) => selectedAnswers[index] === q.correctAnswer
  ).length;
  const incorrectAnswers = quizData.length - correctAnswers;

  const data = [
    { name: "Correct", value: correctAnswers, color: "#4CAF50" },
    { name: "Incorrect", value: incorrectAnswers, color: "#F44336" },
  ];

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">
        Your Score: {score} / {quizData.length}
      </p>

      {/* Pie Chart */}
      <div className="flex justify-center my-5">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Review Answers */}
      <h2 className="text-xl font-semibold mt-4">Review Answers:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
