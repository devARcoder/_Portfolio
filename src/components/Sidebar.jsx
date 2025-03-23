import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPersonShelter } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidContact } from "react-icons/bi";
import { BsFillBrightnessHighFill } from "react-icons/bs";
const Sidebar = () => {
  
    const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen once or every time you scroll
    });
  }, []);
  return (
    <>
    <div className="sidebar  fixed bottom-0 w-full md:w-auto bg-gray-700 md:fixed md:right-0 md:top-32 md:bg-transparent">
          <div className="sidebar flex flex-row justify-center items-center space-x-3 md:flex md:flex-col md:justify-center md:items-center md:space-y-3 md:px-5">
            <div className="hidden md:text-3xl md:text-white md:transition-all md:duration-500 md:ease-in-out md:-translate-y-24">
            <BsFillBrightnessHighFill />
            </div>
            {/** Home Link */}
            <Link
              to="/"
              className={`text-3xl p-4 rounded-full text-white transition-all duration-500 ${
                location.pathname === "/"
                  ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px] md:bg-yellow-500 md:-translate-y-0"
                  : ""
              }`}
            >
              <FaHome />
            </Link>

            {/** About Link */}
            <Link
              to="/about"
              className={`text-3xl p-4 rounded-full text-white transition-all duration-500 ${
                location.pathname === "/about"
                  ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px] md:bg-yellow-500 md:-translate-y-0"
                  : ""
              }`}
            >
              <FaPersonShelter />
            </Link>

            {/** Projects Link */}
            <Link
              to="/projects"
              className={`text-3xl p-4 rounded-full text-white transition-all duration-500 ${
                location.pathname === "/projects"
                  ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px] md:bg-yellow-500 md:-translate-y-0"
                  : ""
              }`}
            >
              <GrProjects />
            </Link>

            {/** Testimonials Link */}
            <Link
              to="/testimonials"
              className={`text-3xl p-4 rounded-full text-white transition-all duration-500 ${
                location.pathname === "/testimonials"
                  ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px] md:bg-yellow-500 md:-translate-y-0"
                  : ""
              }`}
            >
              <HiUserGroup />
            </Link>

            {/** Contact Link */}
            <Link
              to="/contact"
              className={`text-3xl p-4 rounded-full text-white transition-all duration-500 ${
                location.pathname === "/contact"
                  ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px] md:bg-yellow-500 md:-translate-y-0"
                  : ""
              }`}
            >
              <BiSolidContact />
            </Link>
          </div>
        </div>
    </>
  )
}

export default Sidebar
