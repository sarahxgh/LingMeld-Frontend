import React, { useState } from 'react';
import dashboardIcon from '/Dashboard.svg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate()
  const mainNavItems = [
    {
      href: '#dashboard',
      icon: dashboardIcon,
      label: 'Dashboard',
    },
    {
      href: '#chatbot',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41949e5261e7ba69c37dce39e70d4b1f8358360ff1fc95ca6664fa195bcd9be7',
      label: 'Chatbot',
    },
    {
      href: '#learning',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/546ebbe87af518178341929a9deb9d52522c271bd3630f87f98e2d6d24fbf185',
      label: 'Learning',
    },
    {
      href: '#quizzes',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0dc4aad32278700057c0bc5602aff5da5b2d4937a3aa25e4118361c6b5f21e1a',
      label: 'PDF Translation',
    },
  ];

  const accountNavItems = [
    {
      href: '#logout',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfb45b77c5d030bdf34d66abbcc0c7674c613d1d544d557bf6085b97aa7725f4',
      label: 'Log out',
    },
    {
      href: '#settings',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d88ad9048861ce7870a01e3f30d530f39212cc4051b1f9025611311c66e8f7d6',
      label: 'Settings',
    },
  ];

  const handleNavClick = (label) => {
    setActiveItem(label);
    if( label == "Learning"){
      navigate('/Learning');
    }else if ( label == "Dashboard"){
      navigate('/dashboard');
    }
    else if ( label == "Chatbot"){
      navigate('/Chatbot');
    }else if(label == "Log out"){
      localStorage.setItem("email","")
      navigate('/')
    }
    
  };

  return (
    <aside className="flex flex-col h-full items-center px-4 py-8 rounded-3xl min-w-[240px] w-[240px] bg-gray-50">
      {/* Logo Section */}
      <div className="flex flex-col items-center w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6087a086f81b4caf5b13ea72ca7f7010f8c093862f1e009d7a1ab9436c2428"
          alt="Logo"
          className="w-[150px] object-contain"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ec59934e81af3f8601bc1389d825454d981bca5b15be7b6e9b5c7ad35bd5b66"
          alt="Decorative element"
          className="mt-6 w-full object-contain"
        />
      </div>

      {/* Main Navigation */}
      <nav className="w-full mt-8">
        <ul className="list-none">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`flex gap-4 items-center mt-4 p-3 ${
                  activeItem === item.label ? 'bg-white rounded-2xl' : ''
                }`}
              >
                <div
                  className={`flex justify-center items-center bg-white rounded-xl h-[35px] w-[35px] shadow-sm ${
                    activeItem === item.label ? '' : ''
                  }`}
                >
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="object-contain w-[20px] h-[20px]"
                  />
                </div>
                <span className="text-sm text-black">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Account Navigation */}
      <div className="mt-8 w-full">
        <h3 className="text-xs text-gray-500 mb-3">ACCOUNT PAGES</h3>
        <ul className="list-none">
          {accountNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`flex gap-4 items-center mt-4 p-3 ${
                  activeItem === item.label ? 'bg-white rounded-2xl' : ''
                }`}
              >
                <div
                  className={`flex justify-center items-center bg-white rounded-xl h-[35px] w-[35px] shadow-sm ${
                    activeItem === item.label ? '' : ''
                  }`}
                >
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="object-contain w-[20px] h-[20px]"
                  />
                </div>
                <span className="text-sm text-black">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Help Section */}
      <a
        href="#help"
        className="mt-auto flex flex-col items-center px-5 py-6 w-full rounded-2xl bg-gradient-to-b from-lime-400 to-lime-500 text-white"
      >
        <div className="flex items-center justify-center bg-white rounded-xl h-[40px] w-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd33e59ab451a717c25971a7f09051a96c1e1d135ceaf46a5f2c19cfec585a1e"
            alt="Help Icon"
            className="w-5 h-5"
          />
        </div>
        <h2 className="mt-3 text-lg font-bold">Need help?</h2>
        <p className="text-sm mt-1">Please check our docs</p>
      </a>
    </aside>
  );
};

export default Sidebar;
