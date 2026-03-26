import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Coffee } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Our Work', 'Team', 'Blog', 'Contact']
    },
    {
      title: 'Services',
      links: ['Web Apps', 'Mobile Apps', 'Custom Software', 'Consulting']
    },
    {
      title: 'Resources',
      links: ['Case Studies', 'Blog', 'FAQ', 'Support']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service']
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="ARC LABS AFRIKA Logo" className="w-12 h-12 rounded-lg" />
                <span className="text-white font-bold text-xl">ARC LABS AFRIKA</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We build software that actually works in Rwanda. No fancy corporate talk, 
                no overpriced solutions—just tools that solve real problems for real businesses.
              </p>
              
              {/* Human Touch */}
              <div className="flex items-center gap-2 mb-6">
                <Coffee size={16} className="text-orange-500" />
                <span className="text-gray-300 text-sm">
                  Made with ☕ in Kigali, Rwanda
                </span>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} className="text-orange-500" />
                  <span className="text-sm">hello@arclabsafrika.rw</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-orange-500" />
                  <span className="text-sm">+250 788 504 917</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={16} className="text-orange-500" />
                  <span className="text-sm">Kigali, Rwanda (usually near good coffee)</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ARC LABS AFRIKA. Built with love, coffee, and stubbornness.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;