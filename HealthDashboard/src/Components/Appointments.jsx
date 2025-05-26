import React from "react";
import { Calendar, Clock, User, Stethoscope } from "lucide-react";

const appointments = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    date: "2025-06-01",
    time: "10:00 AM",
  },
  {
    id: 2,
    patient: "Jane Roe",
    doctor: "Dr. Wilson",
    date: "2025-06-02",
    time: "11:30 AM",
  },
  {
    id: 3,
    patient: "Robert Lane",
    doctor: "Dr. Adams",
    date: "2025-06-02",
    time: "02:00 PM",
  },
];

const Appointment = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Appointments</h2>

      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{appt.patient}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Stethoscope className="w-4 h-4 text-green-500" />
                <span className="text-sm">Doctor: {appt.doctor}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Date: {appt.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Time: {appt.time}</span>
              </div>
            </div>

            {/* Action button placeholder */}
            <button className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;

