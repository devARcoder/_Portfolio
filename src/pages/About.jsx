import React from "react";
import profile from "../assets/profile.png";
import Skills from "../components/Skills";
import Educations from "../components/Educations";
const About = () => {
  
  return (
    <>
    <div className="bg-[#252525] pb-10">
      <div className="heading relative text-white flex flex-col items-center py-7">
        <h1 className="absolute text-7xl font-extrabold tracking-widest md:tracking-wider opacity-15 md:text-9xl">RESUME</h1>
        <h1 className="absolute top-8 md:top-16 text-4xl md:text-6xl font-extrabold">ABOUT <span className="text-yellow-500">ME</span></h1>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="rounded-full mt-20 bg-black w-60 h-56 md:hidden">
          <img
            className="rounded-full w-60 h-56 md:w-[26rem] md:hidden"
            src={profile}
            alt=""
          />
        </div>
        
        </div>
        <div className="allheadings md:flex md:flex-row md:justify-evenly md:mt-28">
        <div className="info flex flex-row ">
          
          <div className="naming flex space-x-6 mx-6 mt-7 mb-3">
            <div className="flex flex-col space-y-5">
            <h1 className="flex flex-col text-gray-400 font-semibold ">First Name: <span className="text-white font-bold">Abdur</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Age: <span className="text-white font-bold">20 Years</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Open Network: <span className="text-green-500 font-bold">Available</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Phone: <span className="text-white font-bold">+923070925248</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">WhatsApp: <span className="text-white font-bold">03070925248</span></h1>
            </div>
            <div className="flex flex-col space-y-5">
            <h1 className="flex flex-col text-gray-400 font-semibold ">Last Name: <span className="text-white font-bold">Razzaq</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Nationality: <span className="text-white font-bold">Pakistan</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Address: <span className="text-white font-bold">Hangu, Peshawar</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Email: <span className="text-white font-bold">devarcoder789@gmail.com</span></h1>
            <h1 className="flex flex-col text-gray-400 font-semibold ">Language: <span className="text-white font-bold">English, Urdu and Pashto</span></h1>
            </div>
          </div>
          
        </div>
        

          <div className="worksExp grid grid-cols-2 gap-4 my-6 mx-4">
            <div className="1 flex flex-col space-y-2 pl-9 md:pr-3 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">02 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span></h1>

<div className="md:flex md:items-center md:space-x-4">
<div className="md:w-14 md:h-0.5 md:bg-white"></div>
<p className="text-white text-lg font-semibold md:w-36"> YEARS OF EXPERIENCE</p>
</div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">25 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span></h1>

<div className="md:flex md:items-center md:space-x-4">
<div className="md:w-14 md:h-0.5 md:bg-white"></div>
<p className="text-white text-lg font-semibold md:w-36"> COMPLETED PROJECTS</p>
</div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">12 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span></h1>

<div className="md:flex md:items-center md:space-x-4">
<div className="md:w-14 md:h-0.5 md:bg-white"></div>
<p className="text-white text-lg font-semibold md:w-36"> HAPPY CUSTOMERS</p>
</div>
            </div>
            <div className="1 flex flex-col space-y-2 pl-9 py-4  border border-gray-500">
              <h1 className="text-5xl text-yellow-500 font-bold flex items-center">03 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</span></h1>

<div className="md:flex md:items-center md:space-x-4">
<div className="md:w-14 md:h-0.5 md:bg-white"></div>
<p className="text-white text-lg font-semibold md:w-36"> AWARDS WINNING</p>
</div>
            </div>
          </div>
      </div>
      <div className="flex md:space-x-80 items-center">
         
      <div
            className="flex items-center space-x-2 my-3 mx-4 md:ml-36 border border-yellow-500 w-[13rem] md:w-[14rem] rounded-full transform transition-all duration-300 hover:bg-yellow-500 "
          >
            <button className=" pl-5 md:pl-5 md:pr-5 pr-3 py-3 md:py-4 text-white text-lg font-bold">
              {" "}
              Download CV
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6 w-12 h-12 md:w-14 md:h-14 font-extrabold bg-yellow-500 rounded-full px-2 transform transition-all duration-300 hover:translate-x-0 hover:bg-transparent hover:rotate-180">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

          </div>
          <p
  id="forScrollToSkills"
  className="animate-bounce mt-1 cursor-pointer"
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

          <Skills id="skills"/>
          <Educations/>
      </div>

    </>
  )
}

export default About
