export function generate_assessment_prompt (exercise_type,student_answers, correct_answers, exercise_content){
    return `
You are an assessment expert in Arabic-English-Arabic translation for students who are native
 Darija speakers with Arabic as their first language and English as their second language. 
 Analyze the student's performance in the exercise type below.

### Input Details:
- **Exercises Type**: ${exercise_type} 
- **Student Responses**: ${student_answers}
- **Correct Answers**: ${correct_answers}
- **Exercises Content**: ${exercise_content}

### Task:
1. Evaluate the student's performance:
   - Compare responses to correct answers.
   - Mark each response as "Correct" or "Incorrect."
   - Provide detailed feedback for each question:
     - Explain why the student's answer is right or wrong.
     - Highlight contextual or grammatical reasons for errors.
2. Summarize the overall performance:
   - Accuracy percentage.
   - Common error patterns.
   - Strengths and weaknesses specific to the exercise type.
3. Provide tailored recommendations for improvement:
   - Suggest strategies or resources for practice.
   - Recommend the next level of exercises based on performance.

### Output Format (JSON):
{
  "exercise_type": "<type>",
  "accuracy": "<accuracy percentage>",
  "summary": {
    "strengths": ["<list of strengths>"],
    "weaknesses": ["<list of weaknesses>"],
    "recommendations": ["<specific suggestions for improvement>"]
  }
}`}