import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import ProjectsShowcase from "../Components/Projects";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProjectsShowcase />
      <Brands />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
