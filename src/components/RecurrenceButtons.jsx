import React from "react";

const RecurrenceButtons = ({
  options,
  activeId,
  handleClick,
  colorClasses,
}) => {
  return (
    <>
      {options.map((option) => {
        const isActive = activeId === option.id;
        const color = option.color;
        const activeClasses = `${colorClasses[color].active} vibrant-shadow`;
        const inactiveClasses =
          "border-gray-600 bg-dark-tertiary hover:border-gray-400";

        return (
          <button
            key={option.id}
            className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              isActive ? activeClasses : inactiveClasses
            }`}
            onClick={() => handleClick(option.id)}
          >
            <i
              className={`${option.icon} text-2xl mb-1.5 ${colorClasses[
                color
              ].active
                .split(" ")
                .at(-1)}`}
            ></i>
            <div className="text-sm font-medium text-white">{option.label}</div>
          </button>
        );
      })}
    </>
  );
};
export default RecurrenceButtons;
