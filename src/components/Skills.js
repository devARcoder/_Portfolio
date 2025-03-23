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
    <section id="skills" className=" pt-5 pb-20 md:py-24">
      <h2 className="text-center text-4xl md:tracking-widest font-bold mb-12 text-white">MY SKILLS</h2>
      <div className="grid grid-cols-2 justify-items-center gap-y-10 md:grid md:grid-cols-4 md:gap-y-16 md:justify-items-center">
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
    </section>
  );
};

export default Skills;
