import React, { useState } from "react";
import RecurrenceOptions from "./RecurrenceOptions.jsx";
import IntervalSelector from "./IntervalSelector.jsx";
import DateRange from "./DateRange.jsx";
import WeeklyRange from "./WeeklyRange.jsx";
import CalendarPreview from "./CalendarPreview.jsx";
import { options, colorClasses } from "../config/RecurrenceData.js";

const RecurrenceProvider = () => {
  // --- State Management ---
  const [activeId, setActiveId] = useState("daily");
  const [interval, setInterval] = useState(1);
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  // Set a default selected day based on today's date
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selectedDays, setSelectedDays] = useState([
    dayNames[new Date().getDay()],
  ]);

  // --- Event Handlers ---
  const handleClick = (id) => {
    setActiveId(id);
    // UX Improvement: When switching to weekly, auto-select the start date's day of the week.
    if (id === "weekly" && startDate) {
      const startDayName = dayNames[new Date(startDate).getDay()];
      setSelectedDays([startDayName]);
    }
  };

  const handleIntervalChange = (value) => {
    if (value === "") {
      setInterval(""); // Allow clearing the input, preview will default to 1
    } else {
      const numValue = parseInt(value, 10);
      // Only update state if it's a valid number in our range
      if (!isNaN(numValue) && numValue > 0 && numValue <= 999) {
        setInterval(numValue); // Set state with a number, not a string
      }
    }
  };

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const toggleDay = (dayName) => {
    setSelectedDays((prev) =>
      prev.includes(dayName)
        ? prev.filter((d) => d !== dayName)
        : [...prev, dayName]
    );
  };

  return (
    <div
      id="date-picker-container"
      className="bg-dark-secondary rounded-2xl p-8 vibrant-shadow"
    >
      <div className="space-y-6" id="recurring-date-picker">
        <RecurrenceOptions
          options={options}
          activeId={activeId}
          handleClick={handleClick}
          colorClasses={colorClasses}
        />
        <IntervalSelector
          activeId={activeId}
          interval={interval}
          onIntervalChange={handleIntervalChange}
        />
        <DateRange
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
        />
        {activeId === "weekly" && (
          <WeeklyRange
            activeId={activeId}
            selectedDays={selectedDays}
            toggleDay={toggleDay}
          />
        )}
        <CalendarPreview
          activeId={activeId}
          interval={interval}
          startDate={startDate}
          endDate={endDate}
          selectedDays={selectedDays}
        />
      </div>
    </div>
  );
};

export default RecurrenceProvider;
