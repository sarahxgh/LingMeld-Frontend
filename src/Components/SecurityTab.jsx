import React, { useState } from 'react';

const SecurityTab = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="space-y-8">
      {/* Two-factor Authentication Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Two-factor Authentication</h2>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative w-14 h-7 transition-colors duration-200 ease-in-out rounded-full ${
              twoFactorEnabled ? 'bg-lime-500' : 'bg-gray-200'
            }`}
          >
            <span
              className={`absolute w-5 h-5 transition-transform duration-200 ease-in-out transform bg-white rounded-full top-1 left-1 ${
                twoFactorEnabled ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className="text-gray-600">Enable or disable two factor authentication</span>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Change Password</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-lg text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="••••••••"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-lg text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-8 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;