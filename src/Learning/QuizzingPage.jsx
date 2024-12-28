import React, { useEffect } from "react";
import QuizCard from "../Components/QuizCard";
import { prompts } from "../Utils/Prompts";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


// const quizData = {
//     instructions: "Choose the correct synonym for the word in the sentence.",
//     exercises: [
//       {
//         id: "exercise_1",
//         sentence: "The word in the sentence to be replaced: 'happy'.",
//         options: ["joyful", "sad", "angry", "tired"],
//         solution: {
//           correct_option: "joyful",
//           explanation: "The synonym of 'happy' is 'joyful'.",
//           wrong_answer_explanation: "The other options do not closely match the meaning of 'happy'. 'Sad', 'angry', and 'tired' are antonyms or unrelated.",
//         },
//       },
//       {
//         id: "exercise_2",
//         sentence: "The word in the sentence to be replaced: 'bright'.",
//         options: ["dark", "shiny", "dim", "dull"],
//         solution: {
//           correct_option: "shiny",
//           explanation: "The synonym of 'bright' is 'shiny'.",
//           wrong_answer_explanation: "The other options do not closely match the meaning of 'bright'. 'Dark', 'dim', and 'dull' are antonyms or unrelated.",
//         },
//       },
//       // Add more exercises as needed...
//     ],
//   };







function QuizzingPage() {
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    const data = location.state;
    const Category = data["category"];
    const type = data["type"];
  
    useEffect(() => {
      const fetchQuizData = async () => {
        try {
            // console.log(prompts[Category][type]);
          const response = await axios.post('http://localhost:5000/quiz-data/', {
            prompt:prompts[Category][type]
          }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
          setQuizData(JSON.parse(response.data));
          console.log(response.data)
        } catch (err) {
          setError("Failed to fetch quiz data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchQuizData();
    }, [Category, type]); // this to tell that we will fetch the data everytime Category or type changes 
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < quizData.exercises.length - 1 ? prevIndex + 1 : prevIndex
      );
    };
  
    if (Loading) {
      return <p>Loading quiz data...</p>;
    }
  
    if (Error) {
      return <p>{Error}</p>;
    }
  
    const currentExercise = quizData.exercises[currentIndex];
  
    return (
      <div className="relative w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Slider</h1>
  
        {/* Render Quiz Card only if quizData is available */}
        {quizData && currentExercise && (
          <>
            <QuizCard
              instructions={quizData.instructions}
              sentence={currentExercise.sentence}
              options={currentExercise.options}
              Explanation={currentExercise.solution.wrong_answer_explanation}
              solution={currentExercise.solution}
            />
  
            {/* Navigation Arrows */}
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === quizData.exercises.length - 1}
                className={`px-4 py-2 rounded-lg ${
                  currentIndex === quizData.exercises.length - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
  
            {/* Progress Indicator */}
            <div className="mt-4 text-gray-600">
              {currentIndex + 1} of {quizData.exercises.length}
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default QuizzingPage;