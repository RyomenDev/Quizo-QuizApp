import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuizStart from "../quiz/QuizStart";
import QuizQuestion from "../quiz/QuizQuestion";
import QuizResult from "../quiz/QuizResult";

const quizBg = "/images/quizQuestions.png";

const Quiz = ({ questions }) => {
//   console.log({ questions });

  const [quizData, setQuizData] = useState(questions);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
        Heading="Let's Start Custom Quiz"
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

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Quiz;
