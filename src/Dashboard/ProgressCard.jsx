import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getScore } from '../services/apiservices';

const getColor = (value) => {
  if (value < 50) return `rgba(255, ${Math.floor(5.1 * value)}, 0)`;
  return `rgba(${Math.floor(510 - 5.1 * value)}, 255, 0)`;
};

const getEmoji = (value) => {
  if (value < 33) return '😢';
  if (value < 66) return '😐';
  return '😊';
};

const ProgressCard = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem('email');

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const scoreResponse = await getScore(email);
        // Check if score is available and valid, else set to 0
        if (scoreResponse.success && scoreResponse.score !== undefined) {
          setProgressValue(scoreResponse.score);
        } else {
          setProgressValue(0); // If no valid score is found, set to 0
        }
      } catch (error) {
        setProgressValue(0); // In case of error, set score to 0
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, [email]);

  if (loading) return <div>Loading...</div>;

  return (
    <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#F1F1F1] p-6 w-[300px] min-w-[240px] flex flex-col items-center">
      <h2 className="text-lg font-bold text-zinc-800">Today's Progress</h2>
      <p className="mt-1 text-sm text-zinc-600">Keep up!</p>
      <div className="relative mt-4 w-[150px] h-[150px] flex items-center justify-center">
        <CircularProgressbar
          value={progressValue}
          text=""
          styles={buildStyles({
            pathColor: getColor(progressValue),
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
          })}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-4xl">{getEmoji(progressValue)}</span>
        </div>
      </div>
      <div className="relative w-full h-[60px] bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mt-[-40px] z-10">
        <div className="absolute left-0 top-0 flex justify-between w-full px-4 text-xs font-medium text-white mt-6">
          <span>0%</span>
          <span>100%</span>
        </div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg">
          {progressValue}%
        </div>
      </div>
    </article>
  );
};

export default ProgressCard;
