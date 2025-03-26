import { useState, useEffect } from "react";
import Modal from "./Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/ecommerce.jpeg";
import img2 from "../assets/yt_clone.jpeg";
import img3 from "../assets/inotebook.webp";
import img4 from "../assets/weather.webp";
import img5 from "../assets/fanta.jpeg";
import img6 from "../assets/fb_clone.jpg";
import img7 from "../assets/news.jpeg";

const projects = [
  {
    name: "E-commerce Store",
    img: img1,
    description: "E-Commerce Store 🛍️ A fully responsive E-Commerce website built with React.js and Tailwind CSS, using the Platzi Fake Store API to fetch real-time product data. It includes sorting, pagination, and a modern UI, optimized for all devices. 🚀",
    category: "React",
    url: "https://github.com/devARcoder/EcommerceBrands-Store"
  },
  {
    name: "iNotebook App",
    img: img3,
    description: "A full-stack note-taking app built with React.js, Tailwind CSS, Bootstrap 5, Node.js, Express.js, and MongoDB. Securely create, edit, and manage notes with a sleek UI. 🚀🔥 Features: ✔️ JWT Authentication ✔️ CRUD Notes ✔️ Responsive UI ✔️ Secure Backend",
    category: "React",
    url: "https://github.com/devARcoder/iNotebook"
  },
  {
    name: "YouTube Clone",
    img: img2,
    description: "Built with HTML, Tailwind CSS, JavaScript, and NewsAPI, featuring search functionality and trending news updates.",
    category: "JavaScript",
    url: "https://github.com/devARcoder/YouTube_Clone"
  },
  {
    name: "Fanta Soft Drinks",
    img: img5,
    description: "Developed using HTML, CSS, Tailwind CSS, and animations, showcasing vibrant branding and smooth interactivity.",
    category: "Tailwind",
    url: "https://github.com/devARcoder/Fanta-Drinks"
  },
  {
    name: "Weather App",
    img: img4,
    description: "Created with HTML, Tailwind CSS, and JavaScript, providing real-time weather updates and essential details for cities worldwide.",
    category: "JavaScript",
    url: "https://github.com/devARcoder/Weather_App"
  },
  {
    name: "NewsMonkey App",
    img: img7,
    description: "Created with HTML, Tailwind CSS, and JavaScript, providing real-time weather updates and essential details for cities worldwide.",
    category: "React",
    url: "https://github.com/devARcoder/NewsMonkey"
  },
  {
    name: "Facebook Clone",
    img: img6,
    description: "A Facebook Clone 📱 built with Tailwind CSS and the Pixabay API, designed for mobile devices. It features a sleek, responsive feed 🖼️ showcasing high-quality images dynamically fetched from Pixabay, ensuring a smooth and engaging user experience.",
    category: "Tailwind",
    url: "https://github.com/devARcoder/Facebook_Clone"
  },
];

const categories = ["All", "Tailwind", "JavaScript", "React"];

const ProjectTabs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-32 max-w-5xl mx-auto p-4">
      {/* Category Tabs */}
      <div className="flex justify-center items-center space-x-5">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-0 py-2 text-md font-semibold border-b-2 transition-all duration-200 ease-in-out ${
              activeCategory === category
                ? "border-green-500 text-yellow-500"
                : "border-transparent text-white hover:text-gray-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center mt-4 pt-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="relative w-72 rounded-lg overflow-hidden">
              {/* Project Image */}
              <img
                className="w-full h-44 object-cover rounded-lg"
                src={project.img}
                alt={project.name}
              />

              {/* Overlay with Project Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg text-center p-4">
                <h1 className="text-xl font-bold text-green-500">{project.name}</h1>
                
                <button
                  className="mt-3 px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-lg"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                >
                  More Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found in this category.</p>
        )}
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.name}
          description={selectedProject.description}
          url={selectedProject.url}

        />
      )}
    </div>
  );
};

export default ProjectTabs;
