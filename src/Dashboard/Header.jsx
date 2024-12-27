import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center w-full max-w-[1586px] px-4 py-3">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center">
          <li className="text-xs text-slate-400">Pages</li>
          <li className="text-xs text-slate-800 ml-1" aria-current="page">
            / Dashboard
          </li>
        </ol>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-6 min-w-[240px]">
        {/* Search Form */}
        <form className="relative flex items-center w-[199px]">
          <div className="absolute left-3">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33573dbacc337682c14e36f7b631f48655dd27da45593efa9f614e823ff80434" 
              alt="Search"
              className="w-4 h-4"
            />
          </div>
          <input 
            type="text" 
            placeholder="Type here..." 
            className="w-full h-[29px] pl-10 pr-4 text-xs text-slate-400 
                     bg-stone-100 border border-slate-200/30 rounded-2xl
                     focus:outline-none focus:ring-2 focus:ring-lime-400/30
                     transition-all duration-200"
          />
        </form>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          {/* Notification Button */}
          <button 
            aria-label="Notifications" 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
          >
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83546aa3c8cfa4263537764c59cdc014dcb06bab0b246ff75968aca7693c4df1" 
              alt="Notifications icon"
              className="w-4 h-4"
            />
          </button>

          {/* Settings Button */}
          <button 
            aria-label="Settings" 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
          >
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01646f390bc22f256dcfe3ed749b4c88c4aaac7e2eaeb3ad438a15fadd7dfa55" 
              alt="Settings icon"
              className="w-4 h-4"
            />
          </button>

          {/* User Profile Button */}
          <button 
            aria-label="User profile" 
            className="relative w-[42px] h-[42px] rounded-full 
                     border-4 border-lime-400/30 
                     hover:border-lime-400/50 transition-colors duration-200"
          >
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b2dc10cef5731960f713e25789957d8811d6bd0e324520003987375d6f9773" 
              alt="User avatar" 
              className="w-full h-full rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
