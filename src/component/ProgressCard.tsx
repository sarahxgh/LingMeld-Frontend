import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Utility function to get color based on progress
const getColor = (value: number) => {
  if (value < 50) return `rgba(255, ${Math.floor(5.1 * value)}, 0)`; // Red to Orange
  return `rgba(${Math.floor(510 - 5.1 * value)}, 255, 0)`; // Orange to Green
};

// Utility function to get emoji based on progress
const getEmoji = (value: number) => {
  if (value < 33) return '😢'; // Sad
  if (value < 66) return '😐'; // Neutral
  return '😊'; // Happy
};

interface ProgressCardProps {
  value: number; // progress percentage
}

const ProgressCard: React.FC<ProgressCardProps> = ({ value }) => {
  return (
    <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#F1F1F1] p-6 w-[300px] min-w-[240px] flex flex-col items-center">
      {/* Header Section */}
      <h2 className="text-lg font-bold text-zinc-800">Today's Progress</h2>
      <p className="mt-1 text-sm text-zinc-600">Keep up!</p>

      {/* Circular Progress with Emoji */}
      <div className="relative mt-4 w-[150px] h-[150px] flex items-center justify-center">
        <CircularProgressbar
          value={value}
          text=""
          styles={buildStyles({
            pathColor: getColor(value),
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
          })}
        />
        {/* Emoji in the Center */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-4xl">{getEmoji(value)}</span>
        </div>
      </div>

      {/* Gradient Percentage Bar positioned to overlap the lower part of the circle */}
      <div className="relative w-full h-[60px] bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mt-[-40px] z-10">
        <div className="absolute left-0 top-0 flex justify-between w-full px-4 text-xs font-medium text-white mt-6">
          <span>0%</span>
          <span>100%</span>
        </div>
        {/* Dynamic Percentage Display in the Middle */}
        <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg">
          {value}%
        </div>
      </div>
    </article>
  );
};

export default ProgressCard;
