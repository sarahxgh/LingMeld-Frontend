import React, { useState } from "react";
import axios from "axios";

function WATranslationQuizCard({ type, instructions, source_sentence, target_sentence, solution, attempts, setAttempts, handleNext }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); // Track if the answer is correct
  const [isLoading, setIsLoading] = useState(false); // To handle loading state during backend call

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading

    try {
      // Prepare the prompt for validation
      const validationPrompt = `
        You are a language exercise validation assistant. 
        Your task is to validate the user's answer for a translation exercise and provide feedback.
        The exercise type is: ${type}.

        **User Answer:** ${userAnswer}
        **Correct Answer:** ${solution.correct_answer}
        **Explanation:** ${solution.explanation}

        **Requirements:**
        1. Validate the user's answer against the correct answer.
        2. Provide detailed feedback explaining why the answer is correct or incorrect.
        3. Ensure the feedback is clear and helpful for the student.

        **Output Format:** Provide the response following exactly this format, do not output anything extra:
        {
          "feedback": "The feedback for the user's answer.",
          "isCorrect": true/false
        }
      `;

      // Send the validation prompt to the Groq endpoint
      const response = await axios.post(
        "http://localhost:5000/quiz-data/",
        { prompt: validationPrompt },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Parse the feedback from the backend
      const feedbackData = JSON.parse(response.data);
      setFeedback(feedbackData.feedback); // Set the feedback to display
      setIsCorrect(feedbackData.isCorrect); // Set whether the answer is correct
      setIsAnswered(true);

      // Increment attempts if the answer is incorrect
      if (!feedbackData.isCorrect) {
        setAttempts((prevAttempts) => prevAttempts + 1);
      }
    } catch (error) {
      console.error("Error validating answer:", error);
      setFeedback("An error occurred while validating your answer. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-white pt-2 rounded-lg" style={{ width: 'calc(100vw - 260px)' }}>
      <div id="quiz" className="max-w-fit mx-auto flex flex-col justify-center bg-white rounded-lg shadow-lg mt-12 py-8 px-6">
        <section className="bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white text-center py-8 rounded-t-lg">
          <h2 className="text-3xl font-bold">{type}</h2>
          <p className="mt-4 text-black">{instructions}</p>
        </section>

        <div className="mt-6">
          <p className="text-xl text-gray-600">{source_sentence}</p>
          <p className="text-xl text-gray-600">{target_sentence}</p>
          <div className="mt-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="mt-2 px-6 py-3 w-full bg-white text-green-600 rounded hover:bg-gray-100"
              disabled={isAnswered || isLoading}
            />
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

          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              disabled={isAnswered || attempts >= 2 || isLoading}
            >
              {isLoading ? "Validating..." : "Submit Answer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WATranslationQuizCard;