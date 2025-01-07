import React, { useEffect } from "react";
import { prompts } from "../Utils/EnglishPrompts";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MCQuizCard from "../Components/MCQuizCard";
import WAQuizCard from "../Components/WAQuizCard";
import { UserAnswerContext } from "../Assessment context/userAnswersContext";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

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
  const { addUserAnswer, userAnswers } = useContext(UserAnswerContext);
  const { email } = useContext(AuthContext)

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const level = await axios.post(
          'http://127.0.0.1:8000/user/GetEvaluation/',
          {
            email: email ? email : localStorage.getItem("email"),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        const response = await axios.post(
          'http://localhost:5000/quiz-data/',
          {
            prompt: prompts[Category][type].replace("{{ student_level }}", level.data.evaluation),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        setQuizData(JSON.parse(response.data)); // Parse and set quiz data
      } catch (err) {
        setError("Failed to fetch quiz data.");
        console.error(err);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };



    // Fetch quiz data initially
    fetchQuizData();

  }, [Category, type]); // this to tell that we will fetch the data everytime Category or type changes 

  useEffect(() => {
    const saveAnswers = async () => {
      try {

        if (userAnswers &&userAnswers.userAnswer && userAnswers.length > 0 ) {
          console.log('inside request')
          const response = await axios.post(
            'http://127.0.0.1:8000/user/save-user-answers/',
            {
              email: email ? email : localStorage.getItem("email"),
              answers: userAnswers,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              }
            }
          );
          if (response.data.success) {
            localStorage.setItem("useranswers", userAnswers)
            console.log(response.data.message)
          } else {
            console.log(response.data.message)
          }
          console.log(response.data.message)
        }
      } catch (err) {
        console.error("Failed to save user answers:", err);
      }
    };
    const interval = setInterval(() => {
      saveAnswers();
    }, 1000);

    return () => clearInterval(interval);

  },[userAnswers.userAnswer]);

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

      {/* Render Quiz Card only if quizData is available */}
      {quizData && currentExercise && currentIndex <= quizData.exercises.length && (
        <>
          {(currentExercise["exercise type"] == "multiple choices") && (<MCQuizCard
            type={type}
            instructions={quizData.instructions}
            sentence={currentExercise.sentence}
            options={currentExercise.options}
            solution={currentExercise.solution}
            attempts={attempts}
            setAttempts={setAttempts}
            handleNext={handleNext}
          />)}
          {(currentExercise["exercise type"] == "writing an answer") && (<WAQuizCard
            type={type}
            instructions={quizData.instructions}
            sentence={currentExercise.sentence}
            solution={currentExercise.solution}
            attempts={attempts}
            setAttempts={setAttempts}
            handleNext={handleNext}
          />)}

          {/* Navigation Arrows */}
          <div className="flex flex-row justify-right w-full mt-4">
            <button
              onClick={handleNext}
              disabled={currentIndex === quizData.exercises.length - 1}
              className={`px-4 py-2 rounded-lg ${currentIndex === quizData.exercises.length - 1
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