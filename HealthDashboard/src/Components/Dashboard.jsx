import React from "react";
import { Users, CalendarDays, Activity, HeartPulse } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Patients" value="245" icon={<Users className="text-blue-600" />} />
        <Card title="Appointments" value="58" icon={<CalendarDays className="text-green-600" />} />
        <Card title="Tests Done" value="130" icon={<Activity className="text-yellow-500" />} />
        <Card title="Active Cases" value="12" icon={<HeartPulse className="text-red-500" />} />
      </div>
    </div>
  );
};

const Card = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
    <div className="text-3xl">{icon}</div>
  </div>
);

export default Dashboard;
