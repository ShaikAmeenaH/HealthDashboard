import React from "react";
import { CalendarCheck, Clock, Stethoscope } from "lucide-react";

const historyData = [
  {
    id: 1,
    date: "2025-05-10",
    time: "09:00 AM",
    doctor: "Dr. Smith",
    description: "General check-up",
  },
  {
    id: 2,
    date: "2025-04-21",
    time: "02:30 PM",
    doctor: "Dr. Wilson",
    description: "Blood test follow-up",
  },
  {
    id: 3,
    date: "2025-03-15",
    time: "11:00 AM",
    doctor: "Dr. Adams",
    description: "Headache and nausea consultation",
  },
];

const History = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">History</h2>

      <div className="space-y-4">
        {historyData.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-700">
                <CalendarCheck className="w-4 h-4 text-green-600" />
                <span className="text-sm">Date: {entry.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Time: {entry.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Stethoscope className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Doctor: {entry.doctor}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
