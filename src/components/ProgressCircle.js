import React, { useEffect, useState } from "react";

const ProgressCircle = ({ skill, percentage, color, name}) => {
  const [progress, setProgress] = useState(251.2);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.75;

      if (top < triggerPoint && bottom > 0) {
        const offset = 251.2 - (percentage / 100) * 251.2;
        setProgress(offset);
      } else {
        setProgress(251.2); // Reset when scrolling away
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage]);

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle cx="50" cy="50" r="40" stroke="#343a40" strokeWidth="8" fill="none"></circle>
        {/* Animated Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-in-out"
        ></circle>
        
      </svg>
      <h1 className=" text-center tet-3xl text-white font-bold mt-2">{name}</h1>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
        {skill}
        
      </div>
    </div>
  );
};

export default ProgressCircle;
