import React from 'react';

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
            value="+20%"
            chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/0506a7a5b3634a317e68c1780715931beb791e0d23f5983ada2ff0336e46b7d0"
            chartAlt="Efficiency trend chart"
          />
          
          <StatCard 
            label="This Week"
            value="80 Hours"
            chartImage="https://cdn.builder.io/api/v1/image/assets/TEMP/3f46636bafaa08da3ccaf1282d3b869fdbc4e2d0ef951a82134aa72a5ea4c441"
            chartAlt="Weekly hours chart"
          />
        </div>

        {/* Streak Counter */}
        <div className="flex flex-col justify-center items-center px-3 py-2 bg-amber-100/30 backdrop-blur-sm rounded-[50px] w-[337px] h-[194px] mt-24">
          <div className="flex flex-col items-center text-white text-center">
            <div className="text-5xl font-bold leading-tight whitespace-nowrap">
              6  Days !
            </div>
            <span className="text-xl block mt-2">
              Keep Going
            </span>
          </div>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab77c623447f2fc98263dd3649a048c6cef70ba2090cb6c51c19cbd5bec4321" 
            alt="Streak celebration icon" 
            className="w-[50px] aspect-[0.61] object-contain  mx-auto" 
          />
        </div>
      </div>
    </article>
  );
};

export default CommitmentCard;
