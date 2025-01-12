import React, { useState, useEffect } from 'react';
import './quiz.css';
import { useContext } from 'react';
import { UserAnswerContext } from '../Assessment context/userAnswersContext';
import { quiz } from './questions';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';

const chatgpt_o4 = 'https://api.segmind.com/v1/gpt-4o';
const prompt  =` 
You are an assessment expert in Arabic-English-Arabic translation for students who are native
 Darija speakers with Arabic as their first language and English as their second language. 
 Analyze the student's performance in the exercise type below.

### Input Details:
- **Exercises Type**:
- **Student Responses**: 
- **Correct Answers**: 
- **Exercises Content**:

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
}`


const getEvaluations = async (exerciseType, studentResponses, correctAnswers, exerciseContent, modelUrl) => {
  const api_key = "SG_d3b7b8ec5bbdd1f7";

  const data = {
    messages: [
      { role: 'system', content: prompt },
      {
        role: 'user',
        content: `${JSON.stringify({
          "Exercises Type": exerciseType,
          "Student Responses": studentResponses,
          "Correct Answers": correctAnswers,
          "Exercises Content": exerciseContent,
        })}`,
      },
    ],
  };

  try {
    const response = await axios.post(modelUrl, data, {
      headers: { 'x-api-key': api_key },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    console.error('Error:', error.response?.data || error.message);
    return { error: 'Failed to get a response from the model' };
  }
};

const TestPage = () => {
  const {addUserAnswer } = useContext(UserAnswerContext)
  const {email} = useContext(AuthContext)
  const [activeSection, setActiveSection] = useState('starter');
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [writingAnswers, setWritingAnswers] = useState({});
  const [translationAnswers, setTranslationAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    openEndedQuestions: 0,
  });
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [showTimer, setShowTimer] = useState(false); // Show timer message
  const [timeLimit] = useState({ reading: 30, writing: 30, translation: 30 }); // Recommended time in minutes for each section
  const [loadingText, setLoadingText] = useState(
    "Please wait until the evaluation is complete, you will be automatically redirected to the dashboard afterwards."
  );

  const [isLoading, setisLoading] = useState(true);

  const { questions } = quiz;

  
  useEffect(() => {
    let interval;
    if (showTimer && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && showTimer) {
      clearInterval(interval); // Stop timer when it reaches 0
      handleNextSection(); // Auto move to next section when time runs out
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [showTimer, timer]);

  const handleNextSection = () => {
    scrollToTop(); // Scroll to top
    if (activeSection === 'starter') {
      setActiveSection('reading');
      startTimer();
    } else if (activeSection === 'reading') {
      setActiveSection('writing');
    } else if (activeSection === 'writing') {
      setActiveSection('translation');
    } else {
      calculateResult();
      setShowResult(true);
    }
  };
  
  
  const handleGoBack = () => {
    scrollToTop(); // Scroll to top
    if (activeSection === 'writing') {
      setActiveSection('reading');
    } else if (activeSection === 'translation') {
      setActiveSection('writing');
    } else {
      setShowResult(false);
    }
  };
  

  // Handle Answer Selection for reading and translation type questions
  const handleAnswerSelection = (answer, index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerChange = (answer, index) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

const calculateResult = async () => {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.reading.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score += q.score;
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    let openEndedQuestions = questions.translation.length + questions.writing.length;

    const readingResponses = questions.reading.map((q, index) => ({
      number: index + 1,
      response: selectedAnswers[index],
    }));
    
    const readingCorrectAnswers = questions.reading.map((q, index) => ({
      number: index + 1,
      correctAnswer: q.correctAnswer,
    }));
    
    const readingQuestions = questions.reading.map((q, index) => ({
      number: index + 1,
      question: q.question,
    }));
    try {
      const readingResult = await getEvaluations(
        "Reading",
        readingResponses,
        readingCorrectAnswers,
        readingQuestions,
        chatgpt_o4
      );

      const writingResponses = questions.writing.map((q, index) => ({
        number: index + 1,
        response: selectedAnswers[index],
      }));
            
      const writingQuestions = questions.writing.map((q, index) => ({
        number: index + 1,
        question: q.question,
      }));
      
      const writingResult = await getEvaluations(
        "Writing",
        writingResponses,
        [],
        writingQuestions,
        chatgpt_o4
      );

      const translationResponses = questions.translation.map((q, index) => ({
        number: index + 1,
        response: selectedAnswers[index],
      }));

      const translationQuestions = questions.translation.map((q, index) => ({
        number: index + 1,
        question: q.question,
      }));
      
      const translationResult = await getEvaluations(
        "Translation",
        translationResponses,
        [],
        translationQuestions,
        chatgpt_o4
      );

      console.log({
        reading: readingResult.choices[0].message.content,
        writing: writingResult.choices[0].message.content,
        translation: translationResult.choices[0].message.content,
      });
      
      const data_to_store = `${readingResult.choices[0].message.content}\n${writingResult.choices[0].message.content}\n${translationResult.choices[0].message.content}`;
  
    } catch (error) {
      console.error('Error during evaluations:', error);
    }

    try {
      const payload = {
        email: email,
        evaluation: data_to_store,
      };
  

      const response = await axios.post("http://127.0.0.1:8000/user/StoreEvaluation/", payload);

      if (response.data.success) {
        console.log("Evaluation saved");
        setLoadingText("Evaluation complete! Redirecting to the dashboard...");
        setisLoading(false);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // Redirect after 2 seconds
      } else {
        console.log("Something went wrong!");
        setLoadingText("Something went wrong. You need to repeat the test. Redirecting to the test...");
        setisLoading(false);
        setTimeout(() => {
          navigate("/StaticTest");
        }, 5000); // Redirect after 5 seconds
      }
    } catch (e) {
      console.error("An error occurred:", e);
      setLoadingText("An error occurred. You need to repeat the test. Redirecting to the test...");
      setisLoading(false);
      setTimeout(() => {
        navigate("/StaticTest");
      }, 5000); 
    }

  

    /*setResult({
      score,
      correctAnswers,
      wrongAnswers,
      openEndedQuestions
    });*/
  };

  // Function to handle maxWords constraint for textarea
  const handleTextInput = (event, maxWords) => {
    const value = event.target.value;
    const wordCount = value.split(/\s+/).filter((word) => word.length > 0).length;

    // Limit the input to maxWords
    if (wordCount <= maxWords) {
      handleAnswerChange(value, event.target.name); // Store the updated value
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const container = document.getElementById('dashboard-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
  };
  
  const handleTextChange = (e, index, maxWords, section) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).length;
  
    if (wordCount <= maxWords) {
      if (section === 'writing') {
        setWritingAnswers({
          ...writingAnswers,
          [index]: text,
        });
      } else if (section === 'translation') {
        setTranslationAnswers({
          ...translationAnswers,
          [index]: text,
        });
      }
    }
  };
  

  const startTimer = (section) => {
    setTimer( 90*60  ); // Convert minutes to seconds
    setShowTimer(true); // Show the timer message
  };

  return (
    <div className="quiz-container bg-white w-items-center justify-center p-8 m-5 text-black rounded-lg shadow-lg h-full">
      {!showResult ? (
        <div>
          {!showTimer && activeSection != 'starter' && (
            <div className="timer-message">
              <h3>Please take up to {timeLimit[activeSection]} minutes max in the {activeSection} section</h3>
            </div>
          )}

        {showTimer && (
            <div className="timer" style={{ color: "#50c90b" }}>
            <h2>
            Time remaining: {addLeadingZero(Math.floor(timer / 3600))}:
            {addLeadingZero(Math.floor((timer % 3600) / 60))}:
            {addLeadingZero(timer % 60)}
            </h2>
            <br></br>
            <br></br>
        </div>
        )}


        {activeSection === 'starter' && (
        <div>
            <div className="timer-message">
            <p className=' font-bold text-2xl mb-4'>Welcome to the Assessment Test!</p>
            <br></br>
            <p>
                This test is designed to evaluate your abilities in three key areas: 
                <br></br>
                <strong>Reading Comprehension</strong>, <strong>Writing Skills</strong>, and <strong>Translation Proficiency</strong>. 
                <br></br>
                Each section has a recommended time limit of 30 minutes, but you can complete it at your own pace within this limit.
            </p>
            <br></br>
            <p>
                Here's what to expect:
            </p>
            <br></br>
            <ul className='quiz-ul'>
              <li className='quiz-li'><strong>Reading Section:</strong> Answer multiple-choice questions based on provided passages.</li>
              <li className='quiz-li'><strong>Writing Section:</strong> Write short responses with a focus on clarity and word usage.</li>
              <li className='quiz-li'><strong>Translation Section:</strong> Translate sentences between English and Arabic to demonstrate your proficiency.</li>
            </ul>
            <br></br>
            <p>
                Remember, this is not just about getting everything right—it's an opportunity 
                to understand your strengths and areas for improvement. Take your time, and do your best!
            </p>
            <br></br>
            </div>
        </div>
        )}

          {activeSection === 'reading' && (
            <div>
              <h2 className='quiz-h2'>Reading Section</h2>
              <br></br>
              <br></br>
              <hr></hr>
              <br></br>
              <br></br>
             {questions.reading.map((question, index) => (
                <div key={index} className="question">
                  <h3><b>Q{index+1}: </b>{question.question}</h3>
                  <br></br>
                  <ul className='quiz-ul'>
                    {question.choices.map((answer, i) => (
                      <li 
                        onClick={() => handleAnswerSelection(answer, index)}
                        key={i}
                        className={selectedAnswers[index] === answer ? 'selected-answer quiz-li' : 'quiz-li'}>
                        {answer}
                      </li>
                    ))}
                  </ul>
                  <br></br>
                  <br></br>
                </div>
              ))}
            </div>
        )}

        {activeSection === 'writing' && (
        <div>
            <h2 className='quiz-h2'>Writing Section</h2>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            {questions.writing.map((question, index) => (
            <div key={index} className="question">
                <h3><b>Q{index+1}: </b>{question.question}</h3>
                <textarea
                placeholder="Write your answer here..."
                className="w-full p-2 border rounded textarea"
                rows={6}
                onChange={(e) => handleTextChange(e, index, question.maxWords, 'writing')}
                value={writingAnswers[index] || ''}
                />
                <p>
                {(writingAnswers[index] || '').trim().split(/\s+/).length} / {question.maxWords} words
                </p>
                <br></br>
                <br></br>
            </div>
            ))}
        </div>
        )}

        {activeSection === 'translation' && (
        <div>
            <h2 className='quiz-h2'>Translation Section</h2>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            {questions.translation.map((question, index) => (
            <div key={index} className="question">
                <h3><b>Q{index+1}: </b>{question.question}</h3>
                <textarea
                placeholder="Write your translation here..."
                className="w-full p-2 border rounded textarea"
                rows={6}
                onChange={(e) => handleTextChange(e, index, question.maxWords, 'translation')}
                value={translationAnswers[index] || ''}
                />
                <p>
                {(translationAnswers[index] || '').trim().split(/\s+/).length} / {question.maxWords} words
                </p>
                <br></br>
                <br></br>
            </div>
            ))}
        </div>
        )}


        <div className="button-container">
            <button className="back-btn" onClick={handleGoBack}>
              Back
            </button>
            <button className="next-btn" onClick={handleNextSection}>
              {activeSection === 'translation' ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>

    ) : (
        <div className="result">
          <br></br>
          <p>{loadingText}</p>
          <br></br>
          <br></br>
          {isLoading && (
            <div
              className="flex flex-col items-center justify-center space-y-2"
              aria-live="polite"
            >
              {/* Spinner */}
              <div
                className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                role="status"
              />
              <p className="text-gray-700">Evaluating...</p>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default TestPage;
