import React, { useEffect, useState, useRef } from "react";
import { prompts } from "../Utils/EnglishPrompts";
import { translationPrompts } from "../Utils/TranslationPrompts";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MCQuizCard from "../Components/MCQuizCard";
import WAQuizCard from "../Components/WAQuizCard";
import MCTranslationQuizCard from "../Components/MCTranslationQuizCard";
import WATranslationQuizCard from "../Components/WATranslationQuizCard";

function QuizzingPage() {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const location = useLocation();
  const data = location.state;
  const Category = data["category"];
  const type = data["type"];

  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (Category && type && !hasFetchedData.current) {
      hasFetchedData.current = true;

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
        } catch (err) {
          setError("Failed to fetch quiz data.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchQuizData();
    }
  }, [Category, type]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < quizData.exercises.length - 1 ? prevIndex + 1 : prevIndex
    );
    setAttempts(0);
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

      {quizData && currentExercise && (
        <>
          {Category === "Translation" ? (
            currentExercise["exercise_type"] === "multiple choices" ? (
              <MCTranslationQuizCard
                type={type}
                instructions={quizData.instructions}
                source_sentence={currentExercise.source_sentence}
                target_sentence={currentExercise.target_sentence}
                options={currentExercise.options}
                solution={currentExercise.solution}
                attempts={attempts}
                setAttempts={setAttempts}
                handleNext={handleNext}
              />
            ) : (
              <WATranslationQuizCard
                type={type}
                instructions={quizData.instructions}
                source_sentence={currentExercise.source_sentence}
                target_sentence={currentExercise.target_sentence}
                solution={currentExercise.solution}
                attempts={attempts}
                setAttempts={setAttempts}
                handleNext={handleNext}
              />
            )
          ) : (
            currentExercise["exercise_type"] === "multiple choices" ? (
              <MCQuizCard
                type={type}
                instructions={quizData.instructions}
                sentence={currentExercise.sentence}
                options={currentExercise.options}
                solution={currentExercise.solution}
                attempts={attempts}
                setAttempts={setAttempts}
                handleNext={handleNext}
              />
            ) : (
              <WAQuizCard
                type={type}
                instructions={quizData.instructions}
                sentence={currentExercise.sentence}
                solution={currentExercise.solution}
                attempts={attempts}
                setAttempts={setAttempts}
                handleNext={handleNext}
              />
            )
          )}

          <div className="flex flex-row justify-right w-full mt-4">
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

          <div className="mt-4 text-gray-600">
            {currentIndex + 1} of {quizData.exercises.length}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizzingPage;