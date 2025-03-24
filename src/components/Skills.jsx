import React from "react";
import ProgressCircle from "./ProgressCircle";

const Skills = () => {
  const skillsData = [
    { skill: "55%", percentage: 55, color: "#47A248", name: "MongoDB" },
    { skill: "35%", percentage: 35, color: "#8CC84B", name: "Express.js" },
    { skill: "75%", percentage: 75, color: "#61DBFB", name: "React.js" },
    { skill: "25%", percentage: 25, color: "#6DA75D", name: "Node.js" },
    { skill: "85%", percentage: 85, color: "#10B981", name: "JavaScript" },
    { skill: "100%", percentage: 100, color: "#F59E0B", name: "HTML"  },
    { skill: "80%", percentage: 80, color: "#4F46E5", name: "Custome CSS"  },
    { skill: "90%", percentage: 90, color: "#1ABCFE", name: "Figma Design" },
    
    
    
    
    
  ];

  return (
    <section id="skills" className=" pt-5 pb-0 md:py-24">
      <h2 className="text-center text-4xl md:tracking-widest font-bold mb-12 text-white">MY SKILLS</h2>
      <div className="grid grid-cols-2 justify-items-center gap-y-10 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 md:gap-y-16 md:justify-items-center">
        {skillsData.map((item, index) => (
          <ProgressCircle
            key={index}
            skill={item.skill}
            percentage={item.percentage}
            color={item.color}
            name={item.name}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
          
          <p
            id="forScrollToSkills"
            className="animate-bounce sm:ml-28 mt-1 cursor-pointer"
            onClick={() => {
              document.getElementById("education")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="size-6 w-12 rotate-90 h-12 md:w-14 md:h-14 font-extrabold rounded-full px-2 hover:bg-yellow-500 rounded-full px-2 transform transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
    </section>
  );
};

export default Skills;
