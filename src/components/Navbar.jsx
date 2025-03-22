import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaPersonShelter } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidContact } from "react-icons/bi";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
    <div className="flex flex-row items-center justify-center bg-gray-700 text-white py-2 fixed bottom-0 w-full md:flex md:flex-col md:justify-center md:items-center md:hidden">
      <div className="theme hidden">
        <p>theme</p>
      </div>
      <div className="sidebar flex flex-row justify-center items-center space-x-3">
      {/** Home Link */}
      <Link
        to="/"
        className={`text-3xl p-4 rounded-full transition-all duration-500 ${
          location.pathname === "/" ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px]" : ""
        }`}
      >
        <FaHome />
      </Link>

      {/** About Link */}
      <Link
        to="/about"
        className={`text-3xl p-4 rounded-full transition-all duration-500 ${
          location.pathname === "/about" ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px]" : ""
        }`}
      >
        <FaPersonShelter />
      </Link>

      {/** Projects Link */}
      <Link
        to="/projects"
        className={`text-3xl p-4 rounded-full transition-all duration-500 ${
          location.pathname === "/projects" ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px]" : ""
        }`}
      >
        <GrProjects />
      </Link>

      {/** Testimonials Link */}
      <Link
        to="/testimonials"
        className={`text-3xl p-4 rounded-full transition-all duration-500 ${
          location.pathname === "/testimonials" ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px]" : ""
        }`}
      >
        <HiUserGroup />
      </Link>

      {/** Contact Link */}
      <Link
        to="/contact"
        className={`text-3xl p-4 rounded-full transition-all duration-500 ${
          location.pathname === "/contact" ? "bg-[#252525] text-white ease-in-out -translate-y-10 text-[33px]" : ""
        }`}
      >
        <BiSolidContact />
      </Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
