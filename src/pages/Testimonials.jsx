import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import img1 from '../assets/elon.jpeg'
import img1 from '../assets/users.png'
import shakir from '../assets/shakir.jpg'
import waqas from '../assets/waqas.jpg'
const Testimonials = () => {
  useEffect(() => {
      AOS.init({
        duration: 1500, // Animation duration (in ms)
        easing: "ease-in-out", // Animation easing
        once: false, // Whether animation should happen once or every time you scroll
      });
    }, []);
  return (
    <>
    
        <div className="bg-[#252525] pb-20">
          <div className="heading relative text-white flex flex-col items-center py-7">
            <h1 className="absolute text-5xl font-extrabold md:tracking-wider opacity-15 md:text-9xl">
              TESTIMONIALS
            </h1>
            <h1 className="absolute top-6 md:top-16 text-3xl md:text-6xl font-extrabold">
              WHAT PEOPLE <span className="text-yellow-500">SAYS</span>
            </h1>
          </div>
          <div className="pt-28">
            <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 justify-items-center space-y-20">
              
              <div data-aos="zoom-out" className="1 flex flex-col items-center sm:mt-20 md:mt-20">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0 ">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={waqas} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>Waqas Muhammad</h1>
                <h3 className='text-lg text-green-500 font-bold'>Flutter Developer</h3>
                <p className='text-[14px] px-3 text-center'>Razzaq did an amazing job on my portfolio website! The design is sleek, responsive, and perfectly showcases my work. Highly recommended! 🚀</p>
              </div>
              </div>
              <div data-aos="zoom-out" className="2 flex flex-col items-center">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={img1} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>ZainUlAbiden</h1>
                <h3 className='text-lg text-green-500 font-bold'>Web Developer</h3>
                <p className='text-[14px] px-3 text-center'>Work is impressive! Clean code, smooth animations, and a great eye for design. Looking forward to seeing more from him! 👍🔥</p>
              </div>
              </div>
              <div data-aos="zoom-out" className="3 flex flex-col items-center">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={img1} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>Hassan Khan</h1>
                <h3 className='text-md text-green-500 font-bold'>MERN Stack dev</h3>
                <p className='text-[14px] px-1 text-center'>Your React.js skills are truly impressive! Your clean components, efficient logic & attention to detail show great potential. Keep pushing forward!</p>
              </div>
              </div>
              <div data-aos="zoom-out" className="4 flex flex-col items-center md:mt-20">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0 ">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={img1} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>Sajid Rehman</h1>
                <h3 className='text-lg text-green-500 font-bold'>Web Developer</h3>
                <p className='text-[14px] px-3 text-center'>Working with Abdur Razzaq was a fantastic experience. He delivered a stunning website on time!</p>
              </div>
              </div>
              <div data-aos="zoom-out" className="5 flex flex-col items-center">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={shakir} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>Shakir Khan</h1>
                <h3 className='text-lg text-green-500 font-bold'>Flutter Developer</h3>
                <p className='text-[14px] px-3 text-center'>Your work is exceptional! Clean architecture, flawless UI, and top-tier functionality. Truly impressive! 🚀🔥</p>
              </div>
              </div>
              <div data-aos="zoom-out" className="6 flex flex-col items-center">
              <div className="1 bg-green-500 w-56 h-56 rotate-12 rounded-lg relative z-0">
              </div>
              <div className="absolute bg-white text-black w-56 h-56 rotate- rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-125">
                <img className='w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white' src={img1} alt="user1" />
                <h1 className='text-xl font-bold mt-1'>Haris Haseeb</h1>
                <h3 className='text-md text-green-500 font-bold'>Backend Developer</h3>
                <p className='text-[14px] px-1 text-center'>frontend skills are truly inspiring! Your attention to detail, smooth UI, and seamless integration make collaboration a pleasure. Excited to build more together!</p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Testimonials
