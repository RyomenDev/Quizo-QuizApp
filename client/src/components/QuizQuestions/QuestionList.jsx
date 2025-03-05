import PropTypes from "prop-types";

const QuestionList = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <p className="text-lg font-semibold mt-4 text-red-500">
        No questions available.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {questions?.map((q, index) => (
        <div
          key={q._id}
          className="w-96 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-gradient-to-br from-white/40 to-black/30"
        >
          <h2 className="text-lg font-bold mb-3 text-black drop-shadow-md">
            {index + 1}. {q.question}
          </h2>

          <ul className="space-y-2">
            {q.choices?.map((choice, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg border border-white/30 
            bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-black"
              >
                <span className="font-semibold text-blue-600">{i + 1}:</span>
                <span>{choice}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default QuestionList;
