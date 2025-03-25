import React from "react";
import ProjectTabs from "../components/ProjectTabs";
const Projects = () => {
  return (
    <>
      <div className="bg-[#252525] pb-40">
        <div className="bg-[#252525]">
          <div className="heading relative text-white flex flex-col items-center py-7">
            <h1 className="absolute text-7xl font-extrabold tracking-widest md:tracking-wider opacity-15 md:text-9xl">
              WORKS
            </h1>
            <h1 className="absolute top-8 md:top-16 text-4xl md:text-6xl font-extrabold">
              MY <span className="text-yellow-500">PROJECTS</span>
            </h1>
          </div>
        <ProjectTabs/>
        </div>
      </div>
    </>
  );
};

export default Projects;
