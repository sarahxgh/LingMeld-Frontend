import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from '../Components/Card';
import AccountTab from '../Components/AccountTab';
import SecurityTab from '../Components/SecurityTab';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="min-h-screen bg-white flex">
      {/* Main Content Area */}
      <div className="flex-1">
        <div className='flex flex-row justify-between'>
          {/* Page Content */}
          <div className="p-8 shadow-lg flex-1 m-2 rounded-sm">
            <div className="max-w-4xl mx-auto">
              {/* Tabs */}
              <div className="border-b mb-8">
                <div className="flex space-x-8">
                  <button 
                    className={`p-2 ${
                      activeTab === 'account' 
                        ? 'bg-lime-500' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    onClick={() => setActiveTab('account')}
                  >
                    Account Setting
                  </button>
                  <button 
                    className={`p-2 ${
                      activeTab === 'security' 
                        ? 'bg-lime-500' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    onClick={() => setActiveTab('security')}
                  >
                    Login & Security
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'account' ? <AccountTab /> : <SecurityTab />}
            </div>
          </div>
          {/* Right Sidebar */}
          {/* <div className="w-80 bg-white p-6 border-l h-full">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 relative">
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
              </div>
              <h2 className="text-xl font-bold">Maietry Doe</h2>
              <p className="text-gray-500 text-sm">Intermediate level</p>
              <p className="text-green-500 text-sm mt-2">Only 5 lessons to become Pro!</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-gray-500">Courses completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold">8/10</div>
                <div className="text-sm text-gray-500">Average score</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-gray-500">Certificates obtained</div>
              </div>
            </div>

            <Card className="mt-8 bg-green-50">
              <CardContent className="text-center">
                <CardTitle className="mb-2">Looking for new skills?</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the offering of advanced courses, designed to elevate your skills!
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  View courses
                </button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;