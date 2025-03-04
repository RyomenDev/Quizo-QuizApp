import { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../api";

const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuizQuestions();
        setQuizData(data);
      } catch (error) {
        console.error("Failed to load quiz data");
      }
    };

    fetchData();
  }, []);

  // Timer logic
  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerSelect = (choice) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: choice,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30); // Reset timer for next question
    } else {
      calculateScore();
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  if (quizCompleted) {
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
              <p className="text-green-500">
                Correct Answer: {q.correctAnswer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4">
      {quizData.length > 0 && (
        <>
          <h1 className="text-2xl font-bold">Quiz</h1>
          <h3 className="text-lg font-semibold">
            {quizData[currentQuestion].question}
          </h3>
          <ul>
            {quizData[currentQuestion].choices.map((choice, index) => (
              <li key={index} className="mt-2">
                <button
                  className={`px-4 py-2 border rounded ${
                    selectedAnswers[currentQuestion] === choice
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

          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleNextQuestion}
          >
            {currentQuestion === quizData.length - 1
              ? "Submit Quiz"
              : "Next Question"}
          </button>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
