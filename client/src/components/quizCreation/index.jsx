import { useEffect, useState } from "react";
import { getQuestions } from "../../api";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false); // Ensure loading is false after fetching
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="text-lg font-semibold mt-4">Loading questions...</p>
      ) : questions.length === 0 ? (
        <p className="text-lg font-semibold mt-4 text-red-500">
          No questions available.
        </p>
      ) : (
        questions.map((q, index) => (
          <div
            key={q._id}
            className="border p-4 m-2 w-96 bg-gray-200 rounded-lg"
          >
            <h2 className="text-lg font-bold">
              {index + 1}. {q.question}
            </h2>
            <ul>
              {q.choices.map((choice, i) => (
                <li key={i} className="border p-2 my-1 rounded">
                  {choice}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Quiz;
