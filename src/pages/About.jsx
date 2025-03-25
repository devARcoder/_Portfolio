import { useEffect } from "react";
import AOS from "aos";
import profile from "../assets/profile.png";
import Skills from "../components/Skills";
import Educations from "../components/Educations";
const About = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (in ms)
        easing: "ease-in-out", // Animation easing
        once: false, // Whether animation should happen once or every time you scroll
      });
    }, []);
  return (
    <>
      <div className="bg-[#252525] pb-10">
        <div className="heading relative text-white flex flex-col items-center py-7">
          <h1 className="absolute text-7xl font-extrabold tracking-widest md:tracking-wider opacity-15 md:text-9xl">
            RESUME
          </h1>
          <h1 className="absolute top-8 md:top-16 text-4xl md:text-6xl font-extrabold">
            ABOUT <span className="text-yellow-500">ME</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full mt-20 bg-black w-60 h-56 md:hidden" data-aos="zoom-in">
            <img
              className="rounded-full w-60 h-56 md:w-[26rem] md:hidden"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div className="allheadings md:flex md:flex-row md:justify-evenly md:mt-28" >
          <div className="info flex flex-row " data-aos="fade-right">
            <div className="naming flex space-x-6 mx-6 mt-7 mb-3">
              <div className="flex flex-col space-y-5">
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  First Name:{" "}
                  <span className="text-white font-bold">Abdur</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Age: <span className="text-white font-bold">20 Years</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Open Network:{" "}
                  <span className="text-green-500 font-bold">Available</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Phone:{" "}
                  <span className="text-white font-bold">+923070925248</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  WhatsApp:{" "}
                  <span className="text-white font-bold">03070925248</span>
                </h1>
              </div>
              <div className="flex flex-col space-y-5">
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Last Name:{" "}
                  <span className="text-white font-bold">Razzaq</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Nationality:{" "}
                  <span className="text-white font-bold">Pakistan</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Address:{" "}
                  <span className="text-white font-bold">Hangu, Peshawar</span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Email:{" "}
                  <span className="text-white font-bold text-[13px]">
                    devarcoder789@gmail.com
                  </span>
                </h1>
                <h1 className="flex flex-col text-gray-400 font-semibold ">
                  Language:{" "}
                  <span className="text-white font-bold text-[14px]">
                    English, Urdu and Pashto
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="worksExp grid grid-cols-2 gap-4 my-6 mx-4" data-aos="fade-right">
            <div className="1 flex flex-col space-y-2 pl-9 md:pr-3 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">
                02{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </h1>

              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-14 md:h-0.5 md:bg-white"></div>
                <p className="text-white text-lg font-semibold md:w-36">
                  {" "}
                  YEARS OF EXPERIENCE
                </p>
              </div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">
                25{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </h1>

              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-14 md:h-0.5 md:bg-white"></div>
                <p className="text-white text-lg font-semibold md:w-36">
                  {" "}
                  COMPLETED PROJECTS
                </p>
              </div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">
                12{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </h1>

              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-14 md:h-0.5 md:bg-white"></div>
                <p className="text-white text-lg font-semibold md:w-36">
                  {" "}
                  HAPPY CUSTOMERS
                </p>
              </div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">
                03{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </h1>

              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-14 md:h-0.5 md:bg-white"></div>
                <p className="text-white text-lg font-semibold md:w-36">
                  {" "}
                  AWARDS WINNING
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          
          <p
            id="forScrollToSkills"
            className="animate-bounce sm:ml-28 mt-1 cursor-pointer"
            onClick={() => {
              document.getElementById("skills")?.scrollIntoView({
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

        <Skills id="skills" />
        <Educations id="education" />
      </div>
    </>
  );
};

export default About;
