import React from "react";
import { FileText, CheckCircle, XCircle, Clock } from "lucide-react";

const testReports = [
  {
    id: 1,
    testName: "Blood Test",
    date: "2025-05-20",
    status: "Completed",
    result: "Normal",
  },
  {
    id: 2,
    testName: "X-Ray Chest",
    date: "2025-05-18",
    status: "Pending",
    result: "Waiting for review",
  },
  {
    id: 3,
    testName: "MRI Brain",
    date: "2025-05-10",
    status: "Completed",
    result: "Normal",
  },
  {
    id: 4,
    testName: "COVID-19 Test",
    date: "2025-04-28",
    status: "Cancelled",
    result: "N/A",
  },
];

const statusStyles = {
  Completed: { icon: <CheckCircle className="text-green-600" />, color: "text-green-600" },
  Pending: { icon: <Clock className="text-yellow-500" />, color: "text-yellow-500" },
  Cancelled: { icon: <XCircle className="text-red-500" />, color: "text-red-500" },
};

const Tests = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Medical Tests</h2>

      <div className="space-y-4">
        {testReports.map((test) => (
          <div
            key={test.id}
            className="flex justify-between items-start bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <FileText className="text-blue-500 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-700">{test.testName}</p>
                <p className="text-sm text-gray-500">Date: {test.date}</p>
                <p className="text-sm text-gray-500">Result: {test.result}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {statusStyles[test.status].icon}
              <span className={`text-sm font-medium ${statusStyles[test.status].color}`}>
                {test.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tests;
