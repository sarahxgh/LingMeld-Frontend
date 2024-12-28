export const exerciseTypes = {"Vocabulary and Lexical Knowledge":
["Synonym Matching","Word Formation","Thematic Vocabulary","Contextual Usage"]
, 
"Grammar and Syntax":[
    "Sentence Correction", "Sentence Reordering", "Dual Language Syntax Comparison", "Tense Practice"
], 
"Reading Comprehension":{

},
 "Writing and Translation":{

 },
  "Cultural Understanding":{

  }}; // Example exercise types
export const student_level = "Average";
export const prompts = {
"Vocabulary and Lexical Knowledge": {
    "Synonym Matching" : `
    You are a language exercise generation assistant. Your task is to create synonym-matching exercises for Arabic/English/Arabic translation students learning Arabic. The exercises should match the student's level of proficiency in vocabulary, the student level description is as the following ${student_level}. 

**Requirements:**
1. Provide a brief text that explains the exercise, including an example.
2. Generate a number of exercises appropriate to the student's level, using vocabulary that aligns with their proficiency.
3. Each exercise should include:
   - A sentence with a word underlined.
   - Multiple-choice options (5–6 synonyms).
   - The correct synonym clearly identified in the solution.
4. Include an explanation for why the correct synonym is the best choice compared to the other options.
5. Adjust the difficulty of words and the number of exercises according to ${student_level}
6. when explaining the exercise dont mention any extra information not related to the exercise

**Output Format:** Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Text explaining the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The word in the sentence to be replaced.",
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
  ]
}`, 
}
}