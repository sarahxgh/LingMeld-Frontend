import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getNumberCorrExos, getUserAverageScore } from '../services/apiservices'; 

const getColor = (percentage) => {
  if (percentage < 50) return `rgba(255, ${Math.floor(5.1 * percentage)}, 0)`; // Red to Orange
  return `rgba(${Math.floor(510 - 5.1 * percentage)}, 255, 0)`; // Orange to Green
};

const TotalProgressCard = () => {
  const [stats, setStats] = useState({
    quizzes: 0, // Initialize to 0
    completionPercentage: 0, // Initialize to 0
  });
  const [email, setEmail] = useState(localStorage.getItem('email')); // Use email from local storage

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        // Fetch the number of quizzes
        const exosResponse = await getNumberCorrExos(email);
        if (exosResponse.success) {
          setStats((prevStats) => ({
            ...prevStats,
            quizzes: exosResponse.score, 
          }));
        }

        // Fetch the user's average score
        const averageScoreResponse = await getUserAverageScore(email);
        if (averageScoreResponse.success) {
          setStats((prevStats) => ({
            ...prevStats,
            completionPercentage: averageScoreResponse.average_score, // Replace with user's average score
          }));
        }
      }
    };

    fetchData();
  }, [email]);

  return (
    <article className="flex bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 p-7 bg-[#F1F1F1] overflow-hidden">
      <div className="flex flex-col w-full max-md:max-w-full">
        {/* Header */}
        <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold leading-snug max-md:max-w-full">
          <h2 className="text-[18px] font-bold text-black">Total progress</h2>
        </div>

        {/* Stats Container */}
        <div className="flex gap-10 items-center self-end mt-7 max-md:max-w-full">
          {/* Left Stats */}
          <div className="flex flex-col self-stretch my-auto w-[217px] space-y-6">
            {/* Quizzes Finished */}
            <div className="flex overflow-hidden flex-col justify-center p-8 w-full rounded-3xl h-[93px] bg-[#A7EA1C] backdrop-blur-sm">
              <div className="text-sm text-white/80">Finished</div>
              <div className="mt-1.5 text-lg font-bold text-white">
                {stats.quizzes.toLocaleString()} Quizzes
              </div>
            </div>
          </div>

          {/* Progress Circle with Text Overlay */}
          <div className="w-[206px] flex justify-center items-center">
            <div className="relative w-[200px] h-[200px]">
              {/* Circular Progress */}
              <CircularProgressbar
                value={stats.completionPercentage}
                styles={buildStyles({
                  pathColor: getColor(stats.completionPercentage),
                  trailColor: '#d6d6d6',
                  strokeLinecap: 'round',
                })}
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <div className="text-black/80">Your Average Score</div>
                <div className="mt-1.5 text-5xl font-bold text-black max-md:text-4xl">
                  {stats.completionPercentage.toFixed(1)}%
                </div>
                <div className="mt-1.5 leading-4 text-black/90">
                  From the <br />Materials!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TotalProgressCard;