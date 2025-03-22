import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>    
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/testimonials" element={<Testimonials/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
