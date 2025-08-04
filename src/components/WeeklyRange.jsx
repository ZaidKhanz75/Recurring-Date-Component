import React from "react";
import { weeklyOptions, weeklyColorClasses } from "../config/RecurrenceData.js";

const WeeklyRange = ({ selectedDays, toggleDay, activeId }) => {
  // Inactive classes for the buttons
  const inactiveClasses =
    "border-gray-600 bg-dark-tertiary hover:border-gray-400";

  return (
    <div id="weekly-days-selector" className="mb-6">
      <h3 className="text-lg font-semibold mb-4 text-vibrant-cyan">
        Select Days
      </h3>
      <div className="flex space-x-2">
        {weeklyOptions.map((option) => {
          const isActive = selectedDays.includes(option.id);
          const color = option.color;
          const activeClasses = `${weeklyColorClasses[color].active} vibrant-shadow`;

          return (
            <button
              key={option.id} // Add a unique key for each item in the loop
              className={` text-white w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                isActive ? activeClasses : inactiveClasses
              }`}
              onClick={() => toggleDay(option.id)}
            >
              <span className="text-sm font-medium" id={option.id}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyRange;
