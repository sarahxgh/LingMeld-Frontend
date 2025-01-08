import React, { useEffect, useState } from 'react';
import { getStudentEvaluation, getActiveDays, updateActiveHours } from '../services/apiservices';

const StatCard = ({ label, value, chartImage, chartAlt, className = '' }) => (
  <div className={`flex overflow-hidden flex-col justify-center p-4 mb-4 rounded-3xl w-[220px] h-[86px] bg-white/10 backdrop-blur-sm ${className}`}>
    <div className="flex gap-5 items-center w-full">
      <div className="flex flex-col">
        <div className="text-xs text-white/80">{label}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
      </div>
      <img 
        loading="lazy" 
        src={chartImage} 
        alt={chartAlt} 
        className="w-[81px] aspect-[1.56] object-contain rounded-[30px]" 
      />
    </div>
  </div>
);

const CommitmentCard = () => {
  const [efficiency, setEfficiency] = useState('0');
  const [activeHours, setActiveHours] = useState('0'); // Track active hours
  const [activeDays, setActiveDays] = useState('0'); // Track active days
  const [streak, setStreak] = useState('0'); // Default streak value
  const [email, setEmail] = useState(localStorage.getItem('email'));

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        try {
          // Fetch the user's efficiency
          const evalResponse = await getStudentEvaluation(email);
          console.log("Efficiency Response:", evalResponse); // Log efficiency response
          if (evalResponse.success) {
            setEfficiency(evalResponse.evaluation);
          } else {
            setEfficiency('0');
          }

          // Fetch the user's active days
          const activeDaysResponse = await getActiveDays(email);
          console.log("Active Days Response:", activeDaysResponse); // Log active days response
          if (activeDaysResponse.success) {
            setActiveDays(activeDaysResponse.active_days.toFixed(1)); // Display active days with one decimal place
          } else {
            setActiveDays('0');
          }
        } catch (error) {
          console.error("Failed to fetch data:", error);
          setEfficiency('0');
          setActiveDays('0');
        }
      }
    };

    fetchData();
  }, [email]);

  // Periodically update active hours every hour
  useEffect(() => {
    const interval = setInterval(async () => {
      if (email) {
        try {
          // Update active hours
          const updateResponse = await updateActiveHours(email);
          console.log("Update Active Hours Response:", updateResponse); // Log update response
          if (updateResponse.success) {
            // Fetch updated active hours and days
            const activeDaysResponse = await getActiveDays(email);
            console.log("Updated Active Days Response:", activeDaysResponse); // Log updated active days response
            if (activeDaysResponse.success) {
              setActiveHours((prevHours) => (parseFloat(prevHours) + 1).toFixed(2)); // Increment by 1 hour
              setActiveDays(activeDaysResponse.active_days.toFixed(1)); // Update active days
            }
          }
        } catch (error) {
          console.error("Error updating active hours:", error);
        }
      }
    }, 3600000); // Update every hour (3600000 milliseconds = 1 hour)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [email]);

  return (
    <article className="relative flex flex-col h-[334px] w-[630px] p-6 rounded-3xl overflow-hidden bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#F1F1F1] ">
      {/* Background Image */}
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14be9149e7120a22b6730eb663d03317be6bf27dc3f1a7070875eff29ce85864" 
        alt="Background pattern" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      {/* Content Container */}
      <div className="relative z-10 flex justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white">
              Commitment
            </h2>
            <p className="mt-1.5 text-sm text-white/90">
              Practice Everyday so you don't lose your Streak!
            </p>
          </div>

          {/* Stats Cards */}
          <StatCard 
            label="Efficiency"
            value={efficiency}
            chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/0506a7a5b3634a317e68c1780715931beb791e0d23f5983ada2ff0336e46b7d0"
            chartAlt="Efficiency trend chart"
          />
          
          <StatCard 
            label="Active Hours"
            value={activeHours}
            chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/3f46636bafaa08da3ccaf1282d3b869fdbc4e2d0ef951a82134aa72a5ea4c441"
            chartAlt="Active hours chart"
          />
        </div>

        {/* Streak Counter */}
        <div className="flex flex-col justify-center items-center px-3 py-2 bg-amber-100/30 backdrop-blur-sm rounded-[50px] w-[337px] h-[194px] mt-24">
          <div className="flex flex-col items-center text-white text-center">
            <div className="text-5xl font-bold leading-tight whitespace-nowrap">
              {activeDays} Days! {/* Display activeDays instead of streak */}
            </div>
            <span className="text-xl block mt-2">
              Keep Going
            </span>
          </div>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab77c623447f2fc98263dd3649a048c6cef70ba2090cb6c51c19cbd5bec4321" 
            alt="Streak celebration icon" 
            className="w-[50px] aspect-[0.61] object-contain mx-auto" 
          />
        </div>
      </div>
    </article>
  );
};

export default CommitmentCard;