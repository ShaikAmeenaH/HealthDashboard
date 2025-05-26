import React from "react";
import { Settings, ToggleLeft, User, Bell } from "lucide-react";

const Setting = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Settings /> Settings
      </h2>

      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center gap-2">
            <User /> Profile Visibility
          </div>
          <ToggleLeft className="text-gray-400" />
        </div>

        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center gap-2">
            <Bell /> Notifications
          </div>
          <ToggleLeft className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
