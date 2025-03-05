import { useEffect, useState } from "react";
import { getQuestions } from "../../api";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
const quizBg = "/images/quizQuestions.png"; // Ensure this path is correct

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${quizBg})` }}
    >
      {/* Overlay for readability */}
      <div className="w-full h-full flex flex-col items-center bg-gray-900/50 py-10 px-4 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Quiz Manager
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition duration-300"
        >
          {showForm ? "Close Form" : "Add New Question"}
        </button>

        {showForm && (
          <div className="flex justify-center ite w-full max-w-lg p-6 rounded-lg shadow-lg mt-6">
            <QuestionForm
              setQuestions={setQuestions}
              setShowForm={setShowForm}
            />
          </div>
        )}

        {loading ? (
          <p className="text-xl font-semibold mt-6 text-white animate-pulse">
            Loading questions...
          </p>
        ) : (
          <div className="mt-6 w-full flex justify-center">
            <QuestionList questions={questions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
