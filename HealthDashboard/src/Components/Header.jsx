import React from 'react'
import { HeartPulse, Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    // <div className='w-full flex  '>
    //   <img src="./react.svg" alt="icon" />
    //   <input type="text" />
    //   <img src="" alt="" />
    //   <img src="" alt="" />
    //   <button>button</button>
    // </div>
    <>
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <HeartPulse className="text-red-600 w-6 h-6" />
        <span className="text-xl font-semibold text-gray-800">HealthDashboard</span>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 mx-6 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right: Notification, Profile & Plus Button */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        {/* User Profile Picture */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Plus Icon Button */}
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
    </>
  )
}

export default Header
