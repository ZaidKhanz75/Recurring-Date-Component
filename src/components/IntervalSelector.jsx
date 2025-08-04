import React from "react";

// Accept activeId as a prop to make the label dynamic
const IntervalSelector = ({ activeId, onIntervalChange, interval }) => {
  // A local handler to process the raw input event.
  const handleInputChange = (e) => {
    // Call the parent's `onIntervalChange` function with the input's value.
    onIntervalChange(e.target.value);
  };
  // Determine the correct label based on the activeId prop
  const getLabel = () => {
    // Add "s" to make it plural if the interval is greater than 1
    const plural = interval > 1 ? "s" : "";
    switch (activeId) {
      case "weekly":
        return `Week${plural}`;
      case "monthly":
        return `Month${plural}`;
      case "yearly":
        return `Year${plural}`;
      case "daily":
      default:
        return `Day${plural}`;
    }
  };

  return (
    <div id="interval-selector" className="mb-6">
      <h3 className="text-lg font-semibold mb-4 text-vibrant-cyan">
        Repeat Every
      </h3>
      <div className="flex items-center space-x-4">
        <input
          id="interval"
          type="number"
          min="1"
          max="999"
          className="w-20 p-3 bg-dark-tertiary border border-gray-600 rounded-lg text-center focus:border-vibrant-cyan focus:outline-none"
          value={interval}
          onChange={handleInputChange}
        />
        <span className="text-gray-300 font-medium">{getLabel()}</span>
      </div>
    </div>
  );
};

export default IntervalSelector;
