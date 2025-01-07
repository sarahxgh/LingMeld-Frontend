import React, { useState } from "react";

function MCTranslationQuizCard({ type, instructions, source_sentence, target_sentence, options, solution, attempts, setAttempts, handleNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); // Track if the answer is correct

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === solution.correct_answer) {
      setFeedback('Correct! ' + solution.explanation);
      setIsCorrect(true);
    } else {
      setFeedback('Incorrect. ' + solution.wrong_answer_explanation);
      setIsCorrect(false);
      setAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  return (
    <div className="bg-white pt-2 rounded-lg" style={{ width: 'calc(100vw - 260px)' }}>
      <div id="quiz" className="max-w-fit mx-auto flex flex-col justify-center bg-white rounded-lg shadow-lg mt-12 py-8 px-6">
        <section className="bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white text-center py-8 rounded-t-lg">
          <h2 className="text-3xl font-bold">{type}</h2>
          <p className="mt-4 text-black p-10">{instructions}</p>
        </section>

        <div className="mt-6">
          <p className="text-xl text-gray-600">{source_sentence}</p>
          <p className="text-xl text-gray-600">{target_sentence}</p>
          <div className="mt-4">
            {options.map((option, index) => (
              <button
                key={index}
                disabled={isAnswered || attempts >= 2}
                className={`mt-2 px-6 py-3 w-full bg-white text-green-600 rounded hover:bg-gray-100 ${selectedOption === option ? 'bg-gray-200' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {isAnswered && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className={`p-6 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-lg w-96 shadow-lg`}>
                <div className="flex items-center">
                  {isCorrect ? (
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <p className="font-bold">{isCorrect ? "Correct!" : "Incorrect!"}</p>
                </div>
                <p className="mt-2">{feedback}</p>
                <button
                  className={`mt-4 px-4 py-2 ${isCorrect ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white rounded`}
                  onClick={() => setIsAnswered(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MCTranslationQuizCard;