import { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../api";

const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);

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

  return (
    <div>
      <h1>Quiz</h1>
      {quizData.map((q) => (
        <div key={q.id}>
          <h3>{q.question}</h3>
          <ul>
            {q.choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
