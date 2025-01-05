import React, { useEffect, useState, useRef } from "react";
import { prompts } from "../Utils/EnglishPrompts";
import { translationPrompts } from "../Utils/TranslationPrompts";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MCQuizCard from "../Components/MCQuizCard";
import WAQuizCard from "../Components/WAQuizCard";

function QuizzingPage() {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const data = location.state;
  const Category = data["category"];
  const type = data["type"];

  // Use a ref to track if the data has already been fetched
  const hasFetchedData = useRef(false);

  useEffect(() => {
    // Only fetch data if Category and type are valid and data hasn't been fetched yet
    if (Category && type && !hasFetchedData.current) {
      hasFetchedData.current = true; // Mark data as fetched

      const fetchQuizData = async () => {
        try {
          let prompt = "";
          if (Category === "Translation") {
            prompt = translationPrompts[type];
          } else {
            prompt = prompts[Category][type];
          }

          const response = await axios.post(
            "http://localhost:5000/quiz-data/",
            { prompt },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          setQuizData(JSON.parse(response.data));
          console.log(response.data);
        } catch (err) {
          setError("Failed to fetch quiz data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchQuizData();
    }
  }, [Category, type]); // Run only when Category or type changes

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
          {currentExercise["exercise type"] === "multiple choices" && (
            <MCQuizCard
              instructions={quizData.instructions}
              sentence={currentExercise.sentence}
              options={currentExercise.options}
              solution={currentExercise.solution}
            />
          )}
          {currentExercise["exercise type"] === "writing an answer" && (
            <WAQuizCard
              instructions={quizData.instructions}
              sentence={currentExercise.sentence}
              solution={currentExercise.solution}
            />
          )}

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