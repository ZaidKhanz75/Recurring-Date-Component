import React, { useState } from "react";

const DateRange = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}) => {
  return (
    <div id="date-range-selector" className="mb-6">
      <h3 className="text-lg font-semibold mb-4 text-vibrant-cyan">
        Date Range
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="start-date"
            className="block text-sm text-gray-400 mb-2"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            className="w-full p-3 bg-dark-tertiary border border-gray-600 rounded-lg focus:border-vibrant-cyan focus:outline-none"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label
            htmlFor="end-date"
            className="block text-sm text-gray-400 mb-2"
          >
            End Date (Optional)
          </label>
          <input
            type="date"
            id="end-date"
            className="w-full p-3 bg-dark-tertiary border border-gray-600 rounded-lg focus:border-vibrant-cyan focus:outline-none"
            value={endDate}
            onChange={handleEndDateChange}
            placeholder="Optional"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRange;
