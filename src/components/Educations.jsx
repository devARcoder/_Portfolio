import React from 'react'
import { IoBagCheckSharp } from "react-icons/io5";
const Educations = () => {
  return (
    <>
    <div className="h-screen">
        <div className="grid grid-cols-1 gap-y-3 md:grid md:grid-cols-2 md:gap-4">
            <h1>EXPERIENCE & EDUCATION</h1>
            <div className="1 flex">
                <div className="flex flex-col items-center">
                <p className='text-white text-xl bg-yellow-500 p-4 rounded-full'><IoBagCheckSharp/></p>
                <div className="line w-[1px] h-24 bg-gray-500"></div>
                </div>
                <div className="head flex flex-col">
                    <p>2021 - PRESENT</p>
                    <h1></h1>
                </div>
            </div>
        </div>
        </div>  
    </>
  )
}

export default Educations
