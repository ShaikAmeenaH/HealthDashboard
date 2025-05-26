import React from 'react';
import {
  LayoutDashboard,
  History,
  Calendar,
  Stethoscope,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: 'History', icon: <History className="w-5 h-5" /> },
  { label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
  { label: 'Appointments', icon: <Stethoscope className="w-5 h-5" /> },
  { label: 'Statistics', icon: <BarChart2 className="w-5 h-5" /> },
  { label: 'Tests', icon: <FlaskConical className="w-5 h-5" /> },
  { label: 'Chat', icon: <MessageCircle className="w-5 h-5" /> },
  { label: 'Support', icon: <LifeBuoy className="w-5 h-5" /> },
  { label: 'Setting', icon: <Settings className="w-5 h-5" /> },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen w-64 shadow-md sticky top-0">
      {/* Title */}
      <h1 className="text-green-700 text-2xl font-bold p-6 border-b">HealthDashboard</h1>

      {/* Menu Items */}
      <nav className="flex flex-col p-4 gap-3 text-gray-700">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer transition-all"
          >
            {item.icon}
            <span className="text-base">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
