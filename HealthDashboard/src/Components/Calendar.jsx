import React, { useState } from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center py-2 px-4 bg-blue-600 text-white rounded-t-md">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          ◀
        </button>
        <div className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </div>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          ▶
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";

    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-medium">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 bg-blue-100 p-2 text-sm">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());
        const isSelected = isSameDay(day, selectedDate);

        days.push(
          <div
            key={day}
            className={`p-2 text-center cursor-pointer border rounded-md hover:bg-blue-200 ${
              isToday ? "bg-green-200 font-bold" : ""
            } ${isSelected ? "bg-blue-300" : ""} ${!isCurrentMonth ? "text-gray-400" : ""}`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} className="grid grid-cols-7 gap-1">{days}</div>);
      days = [];
    }

    return <div className="p-2">{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mt-5">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
