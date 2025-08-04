import React from "react";
import RecurrenceProvider from "./components/RecurrenceProvider.jsx";

export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-5" // <-- FIX
      id="app-container"
    >
      <div className="max-w-6xl mx-auto" id="main-wrapper">
        <header id="header" className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vibrant-cyan to-vibrant-purple mb-2">
            Recurring Date Picker Component
          </h1>
          <p className="text-gray-400 font-medium">
            Built with React &amp; Tailwind CSS - Dark Vibrant Theme
          </p>
        </header>
        <RecurrenceProvider />
      </div>
      <footer id="footer" className="text-center mt-8 text-gray-500">
        <p> Recurring Date Picker Component. &copy;Copyright 2025</p>
      </footer>
    </div>
  );
}
