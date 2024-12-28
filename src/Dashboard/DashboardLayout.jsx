import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[250px]"> {/* Width of sidebar */}
        <div className="w-full h-screen overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <Header />
            {/* Content Sections */}
            
          </div>
          <div className="w-[100%]">
                    <Outlet />
                </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
