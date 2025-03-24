import React from "react";
import { IoBagCheckSharp } from "react-icons/io5";
const Educations = () => {
  return (
    <>
      <div id="education" className=" pb-16 pt-6">
        <h1 className="text-2xl mx-5 md:mx-0 text-white font-bold md:text-4xl md:tracking-widest md:text-center mt-16">
          EXPERIENCE & EDUCATION
        </h1>
        <div className="grid grid-cols-1 gap-y-3 md:grid md:grid-cols-2 md:gap-4 mt-4 md:mt-10">
          <div className="1 flex my-4 mx-3" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <p className="text-white text-xl bg-yellow-500 p-3 rounded-full">
                <IoBagCheckSharp />
              </p>
              <div className="line w-[1px] h-28 md:h-20 bg-gray-500"></div>
            </div>
            <div className="head flex flex-col text-white mx-6 space-y-1">
              <p className="bg-gray-700 text-sm font-semibold px-3 py-1 w-36 rounded-full ">
                April 2021 - 2023
              </p>
              <h1 className="text-lg font-bold ">
                FSC COMPUTER SCIENCE -{" "}
                <span className="text-gray-500 text-[15px]">Paradise</span>
              </h1>
              <p className="text-sm">
                {" "}
                Studied at Paradise College from 2021 to 2023, completing his
                education with a strong academic foundation.
              </p>
            </div>
          </div>
          <div className="2 flex my-4 mx-3" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <p className="text-white text-xl bg-yellow-500 p-3 rounded-full">
                <IoBagCheckSharp />
              </p>
              <div className="line w-[1px] h-28 md:h-20 bg-gray-500"></div>
            </div>
            <div className="head flex flex-col text-white mx-6 space-y-1">
              <p className="bg-gray-700 text-sm font-semibold px-3 py-1 w-40 rounded-full ">
                2022 - COMPLETED
              </p>
              <h1 className="text-lg font-bold ">
                WEB DEVELOPER -{" "}
                <span className="text-gray-500 text-[15px]">Harry Bhai</span>
              </h1>
              <p className="text-sm md:mr-20">
                Learn to build web pages using HTML and style them with
                CSS.Create responsive and visually appealing designs.Perfect for
                beginners to start web development!
              </p>
            </div>
          </div>
          <div className="3 flex my-4 mx-3" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <p className="text-white text-xl bg-yellow-500 p-3 rounded-full">
                <IoBagCheckSharp />
              </p>
              <div className="line w-[1px] h-28 md:h-20 bg-gray-500"></div>
            </div>
            <div className="head flex flex-col text-white mx-6 space-y-1">
              <p className="bg-gray-700 text-sm font-semibold px-3 py-1 w-40 rounded-full ">
                2024 - COMPLETED
              </p>
              <h1 className="text-lg font-bold ">
                TAILWINDCSS -{" "}
                <span className="text-gray-500 text-[15px]">Harry Bhai</span>
              </h1>
              <p className="text-sm">
              Completed the Tailwind CSS UI Design course from Code with Harry, gaining expertise in responsive and modern web styling.
              </p>
            </div>
          </div>
          <div className="4 flex my-4 mx-3" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <p className="text-white text-xl bg-yellow-500 p-3 rounded-full">
                <IoBagCheckSharp />
              </p>
              <div className="line w-[1px] h-28 md:h-20 bg-gray-500"></div>
            </div>
            <div className="head flex flex-col text-white mx-6 space-y-1">
              <p className="bg-gray-700 text-sm font-semibold px-3 py-1 w-40 rounded-full ">
                2025 - LEARNING
              </p>
              <h1 className="text-lg font-bold ">
                REACT DEVELOPER -{" "}
                <span className="text-gray-500 text-[15px]">Jonas Schmedtman</span>
              </h1>
              <p className="text-sm md:mr-20">
              Learning the Ultimate React Course by Jonas Schmedtmann on Udemy, mastering React from basics to advanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
