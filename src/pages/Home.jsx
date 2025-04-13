import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen once or every time you scroll
    });
  }, []);

  const handleDownload = () => {
    const resumeUrl = "/myresume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Abdur_Razzaq_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headings = [
    "FRONTEND DEVELOPER",
    "REACT DEVELOPER",
    "Master in Tailwind",
    "WEB DEVELOPER",
    "FIGMA INTO CODE ",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [headings.length]);

  return (
    <>
      <div className="bg-[#252525] pt-4 pb-72 sm:pt-0 sm:pb-4 sm:pb-[121px] md:pb-0 md:pt-0 flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center">
        <div className="md:bg-yellow-500 md:h-screen md:w-72 md:relative"></div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="static w-60 h-56 bg-black rounded-full border-2 border-gray-400 shadow-inner shadow-white sm:w-44 sm:h-40 md:absolute md:left-16 md:w-[26rem] md:h-[88vh] md:rounded-3xl md:shadow-xl md:shadow-black md:border-none"
        >
          <img
            className="rounded-full w-60 h-56 sm:w-44 sm:h-40 md:w-[26rem] md:h-[88vh] md:object-cover md:rounded-md"
            src={profile}
            alt=""
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="heading flex flex-col items-center space-y-4 my-4 text-center md:space-y-7 md:w-[30rem] md:mr-72"
        >
          <h1 className="text-yellow-500 font-bold text-4xl sm:text-5xl md:text-7xl">
            dev
            <span className="text-green-500 text-5xl md:text-8xl font-extrabold">
              AR
            </span>
            coder
          </h1>
          <h1 className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-mono font-extrabold text-2xl md:text-4xl transition-opacity duration-500 ease-in-out">
            {headings[index]}
          </h1>
          <p className="text-md text-gray-300 font-semibold px-4 md:text-xl">
            I’m Abdur Razzaq, a Frontend Developer skilled in React.js, Tailwind
            CSS, and JavaScript, building modern, responsive, and interactive
            web applications.
          </p>
          <div className="flex space-x-4 text-4xl text-white">
            <a target="_blank" rel="noopener noreferrer" className="animate-bounce" href="https://github.com/devARcoder">
              <FaGithub className="text-white hover:text-gray-400 border border-white p-1.5 rounded-full" />
            </a>
            
            <a target="_blank" rel="noopener noreferrer" className="animate-bounce" href="https://www.linkedin.com/in/abdur-razzaq-8b569a335/" >
            
              <FaLinkedin className="text-white hover:bg-sky-400 border border-white p-1.5 rounded-full" />
            </a>
          </div>
          
          <button
            onClick={handleDownload}
            className="flex items-center bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            📄 Download CV{" "}
            <span className="ml-2 text-2xl animate-bounce">
              <IoMdDownload />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
