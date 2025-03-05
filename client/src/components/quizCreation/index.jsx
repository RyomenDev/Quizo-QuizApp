import { useEffect, useState } from "react";
import { getQuestions } from "../../api";
import CreateQuiz from "./CreateQuiz";

const quizBg = "/images/quizResult.png";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCustomQuiz, setShowCustomQuiz] = useState(false);

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

  const handleSelect = (id) => {
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const createCustomQuiz = () => {
    if (selectedQuestions.length === 0) {
      alert("Please select at least one question.");
      return;
    }
    setShowCustomQuiz(true);
  };

  // Filter selected questions
  const selectedQuizQuestions = questions.filter((q) =>
    selectedQuestions.includes(q._id)
  );

  return (
    <div
      className="min-h-screen flex justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${quizBg})` }}
    >
      {showCustomQuiz ? (
        <CreateQuiz questions={selectedQuizQuestions} />
      ) : (
        <div className="">
          <h1 className="text-5xl font-bold my-12 mx-8">
            Create Custom Quiz
          </h1>
          <div className="backdrop-blur-md bg-black/40 shadow-lg rounded-2xl p-8 w-full max-w-2xl flex flex-col items-center border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6">
              Select Questions for Custom Quiz
            </h1>
            <h2 className="font-bold text-white mb-6 self-end">
              (Contribute to get more number of questions)
            </h2>

            {loading ? (
              <p className="text-lg font-semibold mt-4 text-white">
                Loading questions...
              </p>
            ) : questions.length === 0 ? (
              <p className="text-lg font-semibold mt-4 text-red-300">
                No questions available.
              </p>
            ) : (
              <div className="w-full">
                {questions?.map((q) => (
                  <div
                    key={q._id}
                    className="border border-white/30 p-4 m-2 bg-white/10 backdrop-blur-md rounded-lg flex items-center shadow-md"
                  >
                    <input
                      type="checkbox"
                      checked={selectedQuestions.includes(q._id)}
                      onChange={() => handleSelect(q._id)}
                      className="mr-3 w-5 h-5 accent-blue-500"
                    />
                    <h2 className="text-lg font-semibold text-white">
                      {q.question}
                    </h2>
                  </div>
                ))}
              </div>
            )}

            {selectedQuestions.length > 0 && (
              <button
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                onClick={createCustomQuiz}
              >
                Create Custom Quiz ({selectedQuestions.length} Questions)
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
