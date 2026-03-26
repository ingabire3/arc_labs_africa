import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Our Work', 'About Us', 'Team', 'Blog', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ARC LABS AFRIKA Logo" className="w-12 h-12 rounded-lg" />
              <span className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-xl`}>ARC LABS AFRIKA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${isScrolled ? 'text-black font-semibold' : 'text-white font-semibold'} hover:text-orange-500 transition-colors duration-300 text-base`}
              >
                {item}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
              isScrolled ? 'border-gray-300 bg-gray-50' : 'border-white/30 bg-white/10'
            }`}>
              <Globe size={16} className={isScrolled ? 'text-black' : 'text-white'} />
              <span className={`${isScrolled ? 'text-black' : 'text-white'} font-medium`}>EN</span>
            </div>

            {/* Contact Button */}
            <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-orange-500 transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 bg-white shadow-lg' : 'max-h-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-black font-semibold hover:text-orange-500 transition-colors duration-300 py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-4 py-2">
              <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
