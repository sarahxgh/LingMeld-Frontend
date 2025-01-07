import React from 'react';
// import { Camera } from 'lucide-react';

const AccountTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="text-lg font-medium mb-4">Your Profile Picture</div>
        <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-lime-500">
          {/* <Camera className="text-gray-400" size={24} /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            className="w-full p-3 rounded-lg text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full p-3 rounded-lg text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
        <input
          type="text"
          placeholder="Please enter your username"
          className="w-full p-3 rounded-lg text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">
          Update Profile
        </button>
        <button className="px-6 py-2 text-gray-600 hover:text-gray-800">
          Reset
        </button>
      </div>
    </div>
  );
};

export default AccountTab;