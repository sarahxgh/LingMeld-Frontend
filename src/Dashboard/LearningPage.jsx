// LearningPage.jsx
import React from "react";
import { FaLanguage, FaBook, FaExchangeAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LearningPage = () => {
  const navigate = useNavigate();
  const handleArabicClick = () => {
    navigate('/ArEnforcement#quiz')
  };

  const handleEnglishClick = () => {
    navigate('/EnEnforcement')
  };

  const handleTranslationClick = () => {
    navigate('/translation')
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100 "style={{ width: 'calc(100vw - 260px)' }}>
      {/* Content Wrapper */}
      <div className="flex-1 p-8 ">
        <div className="w-auto h-full flex flex-col items-center justify-center bg-white text-white rounded-lg shadow-lg">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Top Left Icon - Arabic Language Enforcement */}
            <button
              onClick={handleArabicClick}
              className="absolute flex flex-row top-0 left-0 p-3 rounded-lg transform -translate-y-1/2 -translate-x-1/2 text-center border-none   focus:border-none hover:border-none hover:bg-gray-100"
            >
              <div className=" bg-white text-[#9BFD34] p-4 rounded-full shadow-lg focus:border-none focus:outline-none hover:border-none">
                <FaLanguage size={40} />
              </div>
              <p className=" mt-5 text-sm text-black font-semibold">Arabic Language Enforcement</p>
            </button>

            {/* Top Right Icon - English Language Enforcement */}
            <button
              onClick={handleEnglishClick}
              className="absolute top-0 flex flex-row right-0 rounded-lg p-3 transform -translate-y-1/2 translate-x-1/2 text-center border-none  focus:border-none  hover:border-none hover:bg-gray-100"
            >
              <div className="bg-white text-[#9BFD34] p-4 rounded-full shadow-lg  focus:border-none focus:outline-non">
                <FaBook size={40} />
              </div>
              <p className="mt-5 text-sm text-black font-semibold">English Language Enforcement</p>
            </button>

            

            {/* Bottom Icon - Translation */}
            <button
              onClick={handleTranslationClick}
              className="absolute flex flex-row bottom-0 transform translate-y-1/2 text-center p-3 rounded-lg border-none  focus:border-none  hover:border-none hover:bg-gray-100"
            >
              <div className="bg-white text-[#9BFD34] p-4 rounded-full shadow-lg focus:border-none focus:outline-non">
                <FaExchangeAlt size={40} />
              </div>
              <p className="mt-5 text-sm text-black font-semibold">Translation</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
