import React from 'react'
import profile from '../assets/profile.png'
const Home = () => {
  return (
    <>
    <div className="bg-[#252525] h-screen flex flex-col items-center justify-center">
        <div className="w-52 h-48 bg-black rounded-full border-2 border-gray-400">
        <img className='rounded-full w-52 h-48' src={profile} alt="" />
        </div>
        <div className="heading flex flex-col items-center space-y-3 my-4 text-center">
          <h1 className='text-yellow-500 font-bold text-4xl '>dev<span className='text-green-500 text-5xl font-extrabold'>AR</span>coder</h1>
          <h1 className='text-white font-extrabold text-3xl'>FRONTEND DEVELOPER</h1>
          <p className='text-xl text-white font-semibold px-4'>I’m Abdur Razzaq, a ⚡ Frontend Developer skilled in 🚀 React.js, 🎨 Tailwind CSS, and 🖥️ JavaScript, building modern, responsive, and interactive web applications.</p>
          <div className="">
          <button className=" border border-yellow-500 text-white rounded-full px-6 py-3 text-lg font-bold">MORE ABOUT ME</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-8 w-12 h-12 font-extrabold bg-yellow-500 rounded-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

          </div>
        </div>
    </div>
    </>
  )
}

export default Home
