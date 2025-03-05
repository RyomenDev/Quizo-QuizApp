import { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../../api";
import QuizStart from "./QuizStart";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
const quizBg = "/images/quizQuestions.png";

const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
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

  useEffect(() => {
    if (quizStarted && timer === 0) {
      handleNextQuestion();
      return;
    }
    if (quizStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quizStarted, timer]);

  const handleAnswerSelect = (choice) => {
    // console.log({ choice });

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: choice,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
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

  if (!quizStarted) {
    return (
      <QuizStart
        totalQuestions={quizData.length}
        startQuiz={() => setQuizStarted(true)}
        Heading="Welcome to the Quiz"
      />
    );
  }

  if (quizCompleted) {
    return (
      <QuizResult
        score={score}
        quizData={quizData}
        selectedAnswers={selectedAnswers}
      />
    );
  }

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-6"
        style={{ backgroundImage: `url(${quizBg})` }}
      >
        <h1 className="text-6xl  font-bold mb-6">Quiz</h1>

        {quizData.length > 0 && (
          <QuizQuestion
            question={quizData[currentQuestion].question}
            choices={quizData[currentQuestion].choices}
            timer={timer}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestion]}
          />
        )}

        <button
          className="mt-2 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white rounded-md shadow-lg"
          onClick={handleNextQuestion}
        >
          {currentQuestion === quizData.length - 1
            ? "Submit Quiz"
            : "Next Question"}
        </button>
      </div>
    </>
  );
};

export default QuizComponent;
