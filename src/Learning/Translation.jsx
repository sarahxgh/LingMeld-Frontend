import React from "react";
import { useNavigate } from "react-router-dom";

function Translation() {
  const navigate = useNavigate();

  // List of translation exercises
  const translationExercises = [
    "Sentence Translation",
    "Word-to-Word Translation",
    "Paraphrasing",
    "Cloze Test",
    "Synonym Substitution",
    "Error Detection and Correction",
  ];

  // Handle exercise click
  const handleExerciseClick = (exercise) => {
    navigate("/QuizzingPage", { state: { category: "Translation", type: exercise } });
  };

  return (
    <div
      className="bg-gray-100 py-2 rounded-lg flex flex-col bg-white justify-center"
      style={{ width: "calc(100vw - 260px)" }}
    >
      <div className="mt-6 grid grid-cols-2 bg-white p-10 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {translationExercises.map((exercise, index) => (
          <button
            key={index}
            className="px-6 py-4 bg-[#9BFD34] text-white rounded-lg shadow-md hover:bg-gray-200 hover:border-none border-none focus:outline-[#9BFD34] transition ease-in-out duration-300"
            onClick={() => handleExerciseClick(exercise)}
          >
            {exercise}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Translation;