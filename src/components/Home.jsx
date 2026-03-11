import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Mission from './Mission';
import Services from './Services';
import Market from './Market';
import ProblemSolution from './ProblemSolution';
import Advantages from './Advantages';
import Vision from './Vision';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Market />
      <ProblemSolution />
      <Advantages />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
