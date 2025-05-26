import React from "react";
import { HelpCircle, Mail, Phone } from "lucide-react";

const Support = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <HelpCircle /> Support Center
      </h2>

      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <p className="text-gray-700">
          If you're facing any issues or need assistance, feel free to contact us.
        </p>

        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="text-blue-600" /> support@healthdashboard.com
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="text-green-600" /> +91 98765 43210
        </div>
      </div>
    </div>
  );
};

export default Support;
