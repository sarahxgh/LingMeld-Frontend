// UserAnswerContext.js
import React, { createContext, useState } from "react";

// Create the context
export const UserAnswerContext = createContext();

// Create a provider component
export const UserAnswerProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState([]);

  // Function to add a new answer
  const addUserAnswer = (exercise, correctAnswer, userAnswer) => {
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        exercise,
        correctAnswer,
        userAnswer,
      },
    ]);
  };

  return (
    <UserAnswerContext.Provider value={{ userAnswers, addUserAnswer }}>
      {children}
    </UserAnswerContext.Provider>
  );
};
