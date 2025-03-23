import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen once or every time you scroll
    });
  }, []);

  const headings = ["FRONTEND DEVELOPER", "REACT DEVELOPER", "UI/UX DESIGNER", "WEB DEVELOPER", "FIGMA INTO CODE "];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [headings.length]);

  return (
    <>
      <div
        className="bg-[#252525] h-screen flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-center"
      >
        <div className="md:bg-yellow-500 md:h-screen md:w-72 md:relative"></div>
        <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="static w-60 h-56 bg-black rounded-full border-2 border-gray-400 shadow-inner shadow-white md:absolute md:left-16 md:w-[26rem] md:h-[88vh] md:rounded-3xl md:shadow-xl md:shadow-black md:border-none">
          <img
            className="rounded-full w-60 h-56 md:w-[26rem] md:h-[88vh] md:object-cover md:rounded-md"
            src={profile}
            alt=""
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="heading flex flex-col items-center space-y-4 my-4 text-center md:space-y-7 md:w-[30rem] md:mr-72"
        >
          <h1 className="text-yellow-500 font-bold text-4xl md:text-7xl">
            dev
            <span className="text-green-500 text-5xl md:text-8xl font-extrabold">
              AR
            </span>
            coder
          </h1>
          <h1 className="text-white font-extrabold text-2xl md:text-4xl transition-opacity duration-500 ease-in-out">
            {headings[index]}
          </h1>
          <p className="text-md text-gray-300 font-semibold px-4 md:text-xl">
            I’m Abdur Razzaq, a Frontend Developer skilled in React.js, Tailwind
            CSS, and JavaScript, building modern, responsive, and interactive
            web applications.
          </p>
          <div
            data-aos="zoom-in-up"
            className="flex items-center space-x-2 my-3 border border-yellow-500 rounded-full transform transition-all duration-300 hover:bg-yellow-500 "
          >
            <button className=" pl-8 md:pl-12 md:pr-5 pr-3 py-3 md:py-4 text-white text-lg font-bold">
              {" "}
              ABOUT ME
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="size-6 w-12 h-12 md:w-14 md:h-14 font-extrabold rounded-l-lg bg-yellow-500 rounded-full px-2 transform transition-all duration-300 hover:translate-x-0 hover:bg-transparent hover:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
