import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
        <div className="bg-[#252525]">
          <div className="heading relative text-white flex flex-col items-center py-7">
            <h1 className="absolute text-6xl font-extrabold tracking-widest md:tracking-wider opacity-15 md:text-9xl">
              CONTACT
            </h1>
            <h1 className="absolute top-7 md:top-16 text-4xl md:text-6xl font-extrabold">
              GET IN <span className="text-yellow-500">TOUCH</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-20 md:mt-36 md:flex md:flex-row md:justify-evenly md:items-center">
            <div className="1 mx-4 md:w-1/2" data-aos="fade-right">
              <div className="head text-white flex flex-col space-y-3">
                <h1 className='text-2xl font-bold'>DON'T BE SHY !</h1>
                <p className='text-lg font-semibold'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>
              <div className="flex flex-col space-y-9 my-9">
                <div className="1 flex items-center space-x-3 text-white">
                <h1 className=' text-5xl text-yellow-500'><FaLocationDot /></h1>
                  <div className='flex flex-col text-white'>
                    <p className='text-sm'>ADDRESS POINT</p>
                    <h3 className='font-bold'>Hangu to Thall main road, Khyber PakhtunKhwa, Pakistan</h3>
                  </div>
                </div>
                <div className="1 flex items-center space-x-3 text-white">
                <h1 className=' text-5xl text-yellow-500'><IoMdMail/></h1>
                  <div className='flex flex-col text-white'>
                    <p className='text-sm'>MAIL ME</p>
                    <a href="mailto:devarcoder789@gmail.com" className='font-bold'>devarcoder789@gmail.com</a>
                  </div>
                </div>
                <div className="1 flex items-center space-x-3 text-white">
                <h1 className=' text-5xl text-yellow-500'><FiPhoneCall/></h1>
                  <div className='flex flex-col text-white'>
                    <p className='text-sm'>CALL ME</p>
                    <a href="tel:+923070925248" className='font-bold'>+923070925248</a>
                  </div>
                </div>
              </div>
            </div>
            <form action="https://formsubmit.co/devarcoder789@gmail.com" method="POST">
            <div className="2 mt-6 pb-24 flex flex-col items-center space-y-5 md:space-y-8 text-white md:-ml-28" data-aos="zoom-in">

              <div className="flex flex-col space-y-5 space-x-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-3">
              <input type="hidden" name="_subject" value="New Contact Form Submission"/>
              <input className='bg-[#504e4e] border-none px-3 py-2.5 w-80 md:w-52 rounded-full' type="text" placeholder='YOUR NAME' id='name' name='name' required/>
              <input className='bg-[#504e4e] border-none px-3 py-2.5 w-80 md:w-52 rounded-full' type="text" placeholder='YOUR EMAIL' id='email' name='email' required/>
              </div>
              <input className='bg-[#504e4e] border-none px-3 py-2.5 w-80 md:w-[27rem] rounded-full' type="text" placeholder='YOUR SUBJECT' id='subject' name='subject' required/>
              <textarea rows="5" className='w-80 md:w-[27rem] bg-[#504e4e] border-none px-3 rounded-lg py-2.5' placeholder='YOUR MESSAGE' id='message' name='message' required></textarea>
              
              <button type='submit' className='bg-transparent border border-yellow-500 rounded-full text-lg text-white font-bold px-6 py-2.5 transform transition-all duration-1000 hover:bg-yellow-500'>Send Message</button>
            </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Contact
