import React from "react";
import All from '../pages/project_nav/All'
// import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="bg-[#252525] h-screen">
        <div className="bg-[#252525] h-screen">
          <div className="heading relative text-white flex flex-col items-center py-7">
            <h1 className="absolute text-7xl font-extrabold tracking-widest md:tracking-wider opacity-15 md:text-9xl">
              WORKS
            </h1>
            <h1 className="absolute top-8 md:top-16 text-4xl md:text-6xl font-extrabold">
              MY <span className="text-yellow-500">PORTFOLIO</span>
            </h1>
          </div>
            <All/>
        </div>
      </div>
    </>
  );
};

export default Projects;
