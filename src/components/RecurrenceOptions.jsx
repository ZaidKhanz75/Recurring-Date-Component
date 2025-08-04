import React from "react";
import RecurrenceButtons from "./RecurrenceButtons.jsx";

const RecurrenceOptions = ({
  options,
  activeId,
  handleClick,
  colorClasses,
}) => {
  return (
    <div id="recurrence-options" className="mb-6 font-[Inter]">
      <h3 className="text-lg font-semibold mb-4 text-vibrant-cyan">
        Recurrence Pattern
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RecurrenceButtons
          options={options}
          activeId={activeId}
          handleClick={handleClick}
          colorClasses={colorClasses}
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
