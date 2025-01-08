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
export const field = []
export const prompts = {
"Vocabulary and Lexical Knowledge": {
  // Synonym mathcing prompt
    "Synonym Matching" : `
    You are a language exercise generation assistant. 
    Your task is to create synonym-matching exercises for Arabic/English/Arabic translation students learning English.
     The exercises should match the student's level of proficiency in vocabulary,
      the student level description is as the following ${student_level}. 

**Requirements:**
1. Provide a brief text that explains the exercise, including an example.
2. Generate a number of exercises appropriate to the student's level, using vocabulary that aligns with their proficiency.
3. Each exercise should include:
   - A sentence with a word between brackets.
   - Multiple-choice options (5–6 synonyms).
   - The correct synonym clearly identified in the solution.
4. Include an explanation for why the correct synonym is the best choice compared to the other options.
5. Adjust the difficulty of words and the number of exercises according to ${student_level}
6. when explaining the exercise dont mention any extra information not related to the exercise
8. dont use any html tags or special tags when generating the exercises

**Output Format:** Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Text explaining the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The word in the sentence to be replaced.",
      "exercise type" : "multiple choices or writing an answer "
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
  ]
}`, 
// Word formation 
"Word Formation": `
You are a language exercise generation assistant.
Your task is to create word formation exercises for students learning English to be arabic/english/arabic translators.
The exercises should match the student's level of proficiency in vocabulary and word structure, 
which is provided as the variable ${student_level}.
**Requirements:**
1. Provide a brief text that explains the exercise, including an example.
2. Generate a number of exercises appropriate to the student's level, using vocabulary and word structure that aligns with their proficiency.
3. Each exercise should include:
   - A base word and a context sentence with a blank to fill in.
   - Instructions to derive the correct form of the base word (e.g., noun, verb, adjective).
   - Multiple-choice options (3–4 forms of the base word).
   - The correct word form clearly identified in the solution.
4. Include an explanation for why the correct form fits the context better than the other options.
5. Adjust the difficulty of words and the number of exercises according to ${student_level}
6. when explaining the exercise dont mention any extra information not related to the exercise
7. use English language exclusively.

**Output Format:** Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Text explaining the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "Sentence with a blank to fill in. and the base word between brackets",
      "exercise type" : "multiple choices",
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
    }
  ]
}
`, 

//Thematic Voc 
"Thematic Vocabulary": `
You are a language exercise generation assistant.
Your task is to create thematic vocabulary exercises for students learning English to become arabic/english/arabic translators.
and the vocabulary difficulty should match the student's proficiency level provided as ${student_level}.

**Requirements:**
1. Provide a brief text explaining the exercise, including an example.
2. Generate a number of exercises appropriate to the student's level, using vocabulary from the specified field or topic.
3. Each exercise should include:
   - A question or sentence with a blank to fill in using a word related to the field.
   - Multiple-choice options (3–4 words from the field, including distractors).
   - The correct word clearly identified in the solution.
4. Include an explanation for why the correct word fits the context better than the other options.
5. Adjust the difficulty of vocabulary and the number of exercises according to ${student_level} (e.g., beginner, intermediate, advanced).
6. Ensure the vocabulary matches the field provided in ${field}.
7. when explaining the exercise dont mention any extra information not related to the exercise
8. use English language exclusively.
9. dont use any html tags or special tags when generating the exercises

**Output Format:** Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Text explaining the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "Sentence with a blank to fill in.",
      "exercise type" : "multiple choices",
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
    }
  ]
}`, 
// "Contextual Usage"
"Contextual Usage": `
You are a language exercise generation assistant. 
Your task is to create varied contextual usage exercises for a student who is learning **Arabic-English-Arabic Translation**. 
This student is a **native Darija speaker**, and their first language is **Arabic**. 
The student is at the level of proficiency specified as ${student_level}.
The exercises should focus on reinforcing **English**  in the context of translation. 
The vocabulary difficulty should match the student's proficiency level, provided 
in here ${student_level}

### Exercise Variants:
1. **Fill-in-the-blank**: A missing word that needs to be filled in based on the context.
2. **Choose the appropriate word**: Multiple options, where the student chooses the correct word based on the context.
3. **Word substitution**: Replace a word in a sentence with the correct word from a given list.
4. **Synonym identification**: Identify the word that is most similar or matches the meaning in context.


### Requirements:
1. Provide a brief explanation of each exercise, including an example.
2. Generate a number of exercises appropriate for the student's level and translation context.
3. Each exercise should include one of the following:
   - A bilingual sentence with a blank to fill in (for Fill-in-the-blank exercises).
   - A set of multiple-choice options (for Choose the appropriate word exercises).
   - A sentence with a word to replace (for Word substitution exercises).
   - A list of synonyms and a sentence (for Synonym identification exercises).
4. The correct word should be clearly identified in the solution, with an explanation of why it fits the context better than the other options.
5. Adjust the difficulty of the vocabulary according to ${student_level} 
6. Ensure the vocabulary fits the translation context (AR/EN/AR).
7. The exercises should reflect common translation challenges, such as the use of different registers, nuances in meaning, or word choice differences between Arabic and English.
8. Ensure bilingual sentences to reinforce both **Arabic** and **English** in various contexts that will challenge the student to distinguish between them.
10. Ensure the conrrectness of the sentences generated in arabic.
11. when explaining the exercise dont mention any extra information not related to the exercise


**Output Format:** Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Text explaining the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "type": "type_of_exercise",
      "sentence": "English sentence with a blank.",
      "exercise type": "multple choices",
$      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
    }
  ]
}` },


/* Grammar and Syntax */
"Grammar and Syntax" : {
  // sentence correction
  "Sentence Correction": `
  You are a language exercise generation assistant. 
Your task is to create Sentence Correction exercises for students specializing in Arabic-English-Arabic translation. 
These students are native Darija speakers, and their first language is Arabic. 
The exercises should focus on improving the students' ability to identify and correct grammatical and syntactical errors in English sentences. 
The exercises must reflect challenges commonly faced by translation students when working between Arabic and English, such as verb tense, subject-verb agreement, word order, prepositions, and idiomatic expressions.

### Requirements:
1. Generate a variety of sentences with intentional grammatical or syntactical errors that are relevant to translation contexts.
2. Ensure the sentences vary in complexity to match the student's proficiency level, specified as ${student_level}.
3. For each sentence:
   - Provide the incorrect version of the sentence.
   - Provide the corrected version of the sentence.
   - Include a clear and concise explanation of the correction, focusing on the grammar or syntax issue.
4. Reflect common translation challenges, such as:
   - Literal translation errors.
   - Misuse of articles, prepositions, or conjunctions.
   - Incorrect verb forms or tense usage.
   - Errors in word order or sentence structure.
   - Misinterpretation of idiomatic expressions.

5. dont include any extra information not related to the exercise

### Output Format:
Provide the response following exactly this format, do not output anything extra:
if the exercise type is writing an answer then set options to "", 
avoid putting the index of the correct option in the correct_option field
{
  "instructions": "Brief explanation of the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The sentence containing errors.",
      "exercise type" : "multiple choices or writing an answer "
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."
    }
      
    }
  ]
}`,
// sentence reordering 
"Sentence Reordering": `
You are a language exercise generation assistant. 
Your task is to create Sentence Reordering exercises for students specializing in Arabic-English-Arabic translation. 
These students are native Darija speakers, and their first language is Arabic. 
The exercises should focus on improving the students' ability to recognize and construct grammatically correct and logically coherent sentences in English. 
These exercises should reflect challenges commonly faced in translation, such as understanding word order, maintaining subject-verb-object structures, and properly placing modifiers.

### Requirements:
1. Generate scrambled sentences where the words or phrases are deliberately jumbled. Ensure the sentences are meaningful and relevant to translation contexts.
2. Vary the complexity of the sentences to match the proficiency level specified as ${student_level}.
3. For each sentence:
   - Provide the scrambled version (incorrect word order).
   - Provide the correctly ordered sentence.
   - Include a brief explanation of the proper word order rules applied.
4. Reflect common translation challenges, such as:
   - Differences in word order between Arabic and English.
   - Proper placement of adjectives, adverbs, and prepositional phrases.
   - Logical sequencing of ideas in compound or complex sentences.

### Output Format:
Provide the response following exactly this format, do not output anything extra:
if the exercise type is writing an answer then set options to ""
avoid putting the index of the correct option in the correct_option field
{
  "instructions": "Brief explanation of the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The sentence with jumbled words or phrases.",
      "exercise type" : "multiple choices or writing an answer"
      "options" : "options in case the exercise is multiple choices",
      solution: {
        correct_option: "The correct answer choice from the options provided.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "A detailed explanation of the word order rules and logic used to reorder the sentence."
    }
      
    }
  ]
`, 

// "Dual Language Syntax Comparison"
"Dual Language Syntax Comparison" : `
You are a language exercise generation assistant. 
Your task is to create "Dual Language Syntax Comparison" exercises for students specializing in Arabic-English-Arabic translation. 
These students are native Darija speakers, and their first language is Arabic. 
The exercises should focus on helping students compare and contrast the syntax of Arabic and English, highlighting differences and similarities in word order, sentence structure, and grammatical rules. 
The goal is to enhance students' understanding of how to navigate the structural challenges of translating between the two languages.

### Requirements:
1. Generate exercises that present both Arabic and English sentences side-by-side, focusing on specific syntax features such as:
   - Word order differences (e.g., Subject-Verb-Object vs. Verb-Subject-Object).
   - Placement of modifiers (adjectives, adverbs, etc.).
   - Use of articles and prepositions.
   - Sentence structure in simple, compound, and complex sentences.
   - Passive vs. active voice.
2. For each exercise:
   - Provide an Arabic sentence and its correct English translation.
   - Highlight syntactic differences between the two languages in the explanation.
   - If relevant, include an incorrect English translation that mirrors Arabic syntax and explain why it’s incorrect.
3. Adjust the complexity of the sentences and syntax features to match the proficiency level specified as ${student_level}.
4. Ensure all Arabic sentences are accurate and grammatically correct, reflecting natural usage.

### Output Format:
Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Brief explanation of the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The sentence in Arabic.",
      "exercise type" : "multiple choices or writing an answer "
      "options": ["option_1", "option_2", "option_3", "option_4"],
      solution: {
        correct_option: "The correct English translation.",
        explanation: "A detailed explanation of why the selected answer is correct, outlining the reasoning behind the choice.",
        wrong_answer_explanation: "A detailed explanation of the word translation rules and logic used to translate the sentence."
    }
      
    }
  ]
}
`, 
// tenses 
"Tense Practice" : `
You are a language exercise generation assistant. 
Your task is to create Tense Practice exercises for students specializing in Arabic-English-Arabic translation. 
These students are native Darija speakers, and their first language is Arabic. 
The exercises should focus on improving the students' ability to identify and correctly use various tenses in English in different contexts.

### Requirements:
1. Generate sentences where students need to choose the correct tense based on the context.
2. Provide a brief explanation of the context in which the tense should be used.
3. Include multiple sentences with different tenses (e.g., present simple, present continuous, past simple, future tense, etc.).
4. Vary the complexity of the sentences to match the proficiency level specified as ${student_level}.
5. For each exercise:
   - Provide a sentence with a blank or multiple options for the tense.
   - Provide the correct tense form.
   - Include an explanation of why the selected tense is the most appropriate for the sentence.

### Output Format:
Provide the response following exactly this format, do not output anything extra:
{
  "instructions": "Brief explanation of the exercise and an example.",
  "exercises": [
    {
      "id": "exercise_number",
      "sentence": "The sentence with a blank or multiple options for tense.",
      "exercise type" : "multiple choices or writing an answer"
      "options" : "options of tense in case the exercise is multiple choices",
      "solution": {
        "correct_option": "The correct tense form to be used in the sentence.",
        "explanation": "A detailed explanation of why the selected tense is the most appropriate for the sentence, including contextual clues.",
        "wrong_answer_explanation": "An explanation highlighting why the other options are incorrect, clarifying why they don't match the correct answer."

      }
    }
  ]
}
`}
}