import React from "react";
import { calendarPreviewClasses as classes } from "../config/RecurrenceData.js";

const CalendarPreview = ({
  activeId,
  interval,
  startDate,
  endDate,
  selectedDays,
}) => {
  // --- Date Logic Setup ---
  const today = new Date(); // Get today's date
  const currentYear = today.getFullYear(); // Get the current year
  const currentMonth = today.getMonth(); // Get the current month
  const currentMonthName = today.toLocaleString("default", { month: "long" }); // Get the full month name based on the user's locale settings.

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]; // Short names for the days of the week

  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get days in the current month

  const days = Array.from({ length: numDays }, (_, i) => i + 1); // create an array of days in the month

  const startDay = new Date(currentYear, currentMonth, 1).getDay(); // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, etc.)

  const spacers = Array.from({ length: startDay }, (_, index) => (
    <div key={`spacer-${index}`}></div>
  ));

  // --- Recurrence Calculation Setup ---
  // Parse the start and end dates once for efficiency. Use fallbacks if they don't exist.
  const start = startDate ? new Date(startDate) : today;
  const end = endDate ? new Date(endDate) : null;

  // Use 1 if the interval is empty or invalid.
  const effectiveInterval =
    typeof interval === "number" && interval > 0 ? interval : 1;
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      id="mini-calendar-preview"
      className="recurring-pattern rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold mb-4 text-vibrant-cyan">
        Preview Calendar
      </h3>
      <div className="text-center mb-4">
        <h4 className="text-xl font-bold text-vibrant-purple">
          {currentMonthName} {currentYear}
        </h4>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day, index) => (
          <div key={index} className="p-2 text-gray-400 font-semibold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {spacers}
        {days.map((day) => {
          const cellDate = new Date(currentYear, currentMonth, day);
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          let isActive = false;

          // Rule 1 & 2: Check if the date is within the start and end range.
          if (cellDate >= start && (!end || cellDate <= end)) {
            // Rule 3: Apply the specific recurrence logic.
            switch (activeId) {
              case "daily":
                const diffTime = Math.abs(cellDate - start); // (milliseconds in a day) * (3 days)
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays % effectiveInterval === 0) {
                  isActive = true;
                }
                break;
              case "weekly":
                // ✨ FIX: This is the corrected weekly logic ✨
                const cellDayName = dayNames[cellDate.getDay()];

                // A. Check if the day of the week is one of the selected days.
                if (selectedDays.includes(cellDayName)) {
                  // B. Check if it falls in the correct week interval.
                  const startWeek = Math.floor(
                    (start.getDate() -
                      1 +
                      new Date(
                        start.getFullYear(),
                        start.getMonth(),
                        1
                      ).getDay()) /
                      7
                  );
                  const currentWeek = Math.floor(
                    (cellDate.getDate() -
                      1 +
                      new Date(
                        cellDate.getFullYear(),
                        cellDate.getMonth(),
                        1
                      ).getDay()) /
                      7
                  );

                  if ((currentWeek - startWeek) % effectiveInterval === 0) {
                    isActive = true;
                  }
                }
                break;
              case "monthly":
                // Rule A: Check if it's the right day of the month.
                if (cellDate.getDate() === start.getDate()) {
                  // Rule B: Check if it's in the correct month interval.
                  const monthDiff =
                    (cellDate.getFullYear() - start.getFullYear()) * 12 +
                    (cellDate.getMonth() - start.getMonth());
                  if (monthDiff % effectiveInterval === 0) {
                    isActive = true;
                  }
                }
                break;
              case "yearly":
                // Rule A: Check if it's the right day and month.
                if (
                  cellDate.getMonth() === start.getMonth() &&
                  cellDate.getDate() === start.getDate()
                ) {
                  // Rule B: Check if it's in the correct year interval.
                  const yearDiff = cellDate.getFullYear() - start.getFullYear();
                  if (yearDiff % effectiveInterval === 0) {
                    isActive = true;
                  }
                }
                break;
            }
          }

          return (
            <div
              key={day}
              className={
                isToday
                  ? classes.today
                  : isActive
                  ? classes.active
                  : classes.inactive
              }
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPreview;
