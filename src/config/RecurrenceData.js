// For the calendar preview cells
export const calendarPreviewClasses = {
  inactive: "calendar-cell p-2 rounded-lg text-gray-300 hover:bg-dark-tertiary",
  active:
    "calendar-cell p-2 rounded-lg bg-vibrant-cyan text-dark-secondary font-bold vibrant-shadow",
  today: "calendar-cell p-2 rounded-lg bg-vibrant-purple text-white",
};

// For the main recurrence selection (Daily, Weekly, etc.)
export const options = [
  {
    id: "daily",
    label: "Daily",
    icon: "fas fa-calendar-day",
    color: "vibrant-blue",
  },
  {
    id: "weekly",
    label: "Weekly",
    icon: "fas fa-calendar-week",
    color: "vibrant-green",
  },
  {
    id: "monthly",
    label: "Monthly",
    icon: "fas fa-calendar",
    color: "vibrant-purple",
  },
  {
    id: "yearly",
    label: "Yearly",
    icon: "fas fa-calendar-days",
    color: "vibrant-red",
  },
];

// For the main recurrence buttons and the weekly day selector

export const colorClasses = {
  "vibrant-blue": {
    active: "bg-vibrant-blue/20 border-vibrant-blue text-vibrant-blue",
  },
  "vibrant-green": {
    active: "bg-vibrant-green/20 border-vibrant-green text-vibrant-green",
  },
  "vibrant-purple": {
    active: "bg-vibrant-purple/20 border-vibrant-purple text-vibrant-purple",
  },
  "vibrant-red": {
    active: "bg-vibrant-red/20 border-vibrant-red text-vibrant-red",
  },
  "vibrant-cyan": {
    active: "bg-vibrant-cyan/20 border-vibrant-cyan text-vibrant-cyan",
  },
};

// For the weekly day selector (Sun, Mon, etc.)
export const weeklyOptions = [
  { id: "Sunday", label: "Sun", color: "vibrant-red" },
  { id: "Monday", label: "Mon", color: "vibrant-blue" },
  { id: "Tuesday", label: "Tue", color: "vibrant-green" },
  { id: "Wednesday", label: "Wed", color: "vibrant-purple" },
  { id: "Thursday", label: "Thu", color: "vibrant-cyan" },
  { id: "Friday", label: "Fri", color: "vibrant-blue" },
  { id: "Saturday", label: "Sat", color: "vibrant-red" },
];

// Weekly color classes for the weekly range selector
export const weeklyColorClasses = {
  "vibrant-blue": {
    active: "bg-vibrant-blue/20 border-vibrant-blue",
  },
  "vibrant-green": {
    active: "bg-vibrant-green/20 border-vibrant-green",
  },
  "vibrant-purple": {
    active: "bg-vibrant-purple/20 border-vibrant-purple ",
  },
  "vibrant-red": {
    active: "bg-vibrant-red/20 border-vibrant-red ",
  },
  "vibrant-cyan": {
    active: "bg-vibrant-cyan/20 border-vibrant-cyan ",
  },
};
