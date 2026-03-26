// Updated Home.jsx with new components
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import OurWork from './OurWork';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurWork />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;