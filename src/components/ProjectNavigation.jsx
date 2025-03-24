import React from "react";
import { Link } from "react-router-dom";
const ProjectNavigation = () => {
  return (
    <nav className="text-white mt-40 py-4 px-6 flex justify-center space-x-6">
      <Link to="../pages/project_nav/All" className="hover:text-yellow-500">All</Link>
      <Link to="/design" className="hover:text-yellow-500">UI</Link>
      <Link to="/services" className="hover:text-yellow-500">Services</Link>
      <Link to="/about" className="hover:text-yellow-500">About</Link>
      <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
    </nav>
  );
};

export default ProjectNavigation;
