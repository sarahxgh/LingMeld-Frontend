import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserAnswerContext } from "../Assessment context/userAnswersContext";
// multiple choices quizz card
function MCQuizCard({ type, instructions, sentence, options, solution, attempts, setAttempts, handleNext }) {
    const { addUserAnswer,userAnswers } = useContext(UserAnswerContext);

    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [explanation, setExplanation] = useState('');

    const closePopup = () => {
        setIsAnswered(false);
    };

    const closeexplanation = () => {
        setExplanation('')
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);
        const correctOption = solution.correct_option;

        if (option === correctOption) {
            setFeedback('Correct! ' + solution.explanation);
            setExplanation('');  // No need for additional explanation when correct
        } else {
            setFeedback('Incorrect. ' + solution.explanation);
            setExplanation(solution.wrong_answer_explanation);
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
                    <p className="text-xl">{sentence}</p>
                    <div className="mt-4">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                disabled={isAnswered || attempts >= 2}
                                className={`mt-2 px-6 py-3 w-full bg-white text-green-600 rounded hover:bg-gray-100 ${selectedOption === option ? 'bg-gray-200' : ''}`}
                                onClick={() => {
                                    handleOptionClick(option);
                                    if(attempts>1){
                                        addUserAnswer(instructions + "\n" + sentence, solution.correct_option, option);

                                    }
                                    console.log(userAnswers)
                                }
                                }
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {explanation && (
                        <>
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex flex-col justify-center items-center z-50">
                                {/* Explanation Popup Card */}
                                <div className="p-6 bg-yellow-100 text-yellow-700 rounded-lg w-96 shadow-lg mt-4">
                                    <p><strong>Explain why:</strong> {explanation}</p>

                                    <button
                                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                                        onClick={closeexplanation}
                                    >
                                        Close
                                    </button>
                                </div>

                            </div>
                        </>
                    )}

                    {isAnswered && (
                        <>
                            {/* Popup Overlay */}
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                                {/* Feedback Popup Card */}
                                <div className="p-6 bg-gray-100 text-green-600 rounded-lg w-96 shadow-lg">
                                    <p>{feedback}</p>

                                    <button
                                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                                        onClick={closePopup}
                                    >
                                        Close
                                    </button>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>


    );
}
export default MCQuizCard;