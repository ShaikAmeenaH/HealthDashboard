import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const appointmentData = [
  { month: "Jan", appointments: 20 },
  { month: "Feb", appointments: 35 },
  { month: "Mar", appointments: 50 },
  { month: "Apr", appointments: 40 },
  { month: "May", appointments: 60 },
];

const patientTrend = [
  { day: "Mon", patients: 10 },
  { day: "Tue", patients: 14 },
  { day: "Wed", patients: 8 },
  { day: "Thu", patients: 16 },
  { day: "Fri", patients: 20 },
];

const Statistic = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Statistics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Monthly Appointments
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={appointmentData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="appointments" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Daily Patient Flow
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patientTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#60A5FA" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
