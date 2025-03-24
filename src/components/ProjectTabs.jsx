import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import img1 from '../assets/ecommerce.jpeg'
import img2 from '../assets/yt_clone.jpeg'
import img3 from '../assets/inotebook.webp'
import img4 from '../assets/weather.webp'
import img5 from '../assets/fanta.jpeg'
import img6 from '../assets/fb_clone.jpg'
import img7 from '../assets/news.jpeg'
const projects = [
  {
    name: "E-commerce Store", img: img1, description: "E-Commerce Store 🛍️ A fully responsive E-Commerce website built with React.js and Tailwind CSS, using the Platzi Fake Store API to fetch real-time product data. It includes sorting, pagination, and a modern UI, optimized for all devices. 🚀", category: "React"
  },
  {
    name: "iNotebook App", img: img3, description: "A full-stack note-taking app built with React.js, Tailwind CSS, Bootstrap 5, Node.js, Express.js, and MongoDB. Securely create, edit, and manage notes with a sleek UI. 🚀🔥 Features: ✔️ JWT Authentication ✔️ CRUD Notes ✔️ Responsive UI ✔️ Secure Backend", category: "React"
  },
  { name: "YouTube Clone", img: img2, description: "Built with HTML, Tailwind CSS, JavaScript, and NewsAPI, featuring search functionality and trending news updates.", category: "JavaScript" },
  { name: "Fanta Soft Drinks", img: img5, description: "Developed using HTML, CSS, Tailwind CSS, and animations, showcasing vibrant branding and smooth interactivity.", category: "TailwindCSS" },
  { name: "Weather App", img: img4, description: "Created with HTML, Tailwind CSS, and JavaScript, providing real-time weather updates and essential details for cities worldwide.", category: "JavaScript" },
  { name: "NewsMonkey App", img: img7, description: "Created with HTML, Tailwind CSS, and JavaScript, providing real-time weather updates and essential details for cities worldwide.", category: "React" },
  { name: "Facebook Clone", img: img6, description: "A Facebook Clone 📱 built with Tailwind CSS and the Pixabay API, designed for mobile devices. It features a sleek, responsive feed 🖼️ showcasing high-quality images dynamically fetched from Pixabay, ensuring a smooth and engaging user experience.", category: "TailwindCSS" },
];

const categories = ["All", "TailwindCSS", "JavaScript", "React"];

const ProjectTabs =() =>{
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
      useEffect(() => {
          AOS.init({
            duration: 1000, // Animation duration (in ms)
            easing: "ease-in-out", // Animation easing
            once: false, // Whether animation should happen once or every time you scroll
          });
        }, []);

  return (
    <div className="pt-32 max-w-5xl mx-auto p-4 ">
      <div className="flex justify-center items-center space-x-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={` px-4 py-2 text-md font-semibold border-b-2 transition-all duration-200 ease-in-out ${
              activeCategory === category ? "border-green-500 text-yellow-500" : "border-transparent text-white hover:text-gray-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 justify-items-center mt-4 pt-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="mb-4 relative" data-aos="zoom-in">
              
              <img data-aos="zoom-in" className="w-72 h-44 sm:h-44 md:h-44 lg:h-48 object-cover rounded-lg absolute z-0  " src={project.img} alt="" />
              
              <div className="headings text-white w-72 h-44 sm:h-44 md:h-44 lg:h-48 object-cover rounded-lg asolute z-30 bg-black opacity-0 transform transition-all ease-in-out duration-1000 hover:opacity-75 text-center p-3 overflow-hidden">
                <h1 className="text-2xl font-extrabold text-green-500 font-mono">{project.name}</h1>
                <h3 className="text-lg text-gray-100 font-bold">{project.category}</h3>
                <p className="text-md text-gray-200 font-semibold">{project.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
export default ProjectTabs