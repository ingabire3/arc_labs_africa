import React from 'react';
import { ArrowRight, MessageCircle, TrendingUp, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32">
            <path 
              fill="#F5B400" 
              fillOpacity="0.1"
              d="M0,64 C360,96 720,32 1080,80 C1260,96 1350,64 1440,80 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Small Text Above Headline */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp size={16} />
            <span>Made with ☕ in Kigali, Rwanda</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            We build software that
            <span className="block text-orange-600">actually works in Rwanda.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-accent mb-12 max-w-4xl mx-auto leading-relaxed">
            No fancy corporate talk. Just tools that help real Rwandan businesses 
            solve real problems. Like Marie's boutique that now knows exactly when 
            to reorder fabric before wedding season.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 text-lg">
              Let's chat about your project
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-black font-semibold py-4 px-8 rounded-lg border-2 border-black hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 text-lg">
              See our actual work
              <Phone size={20} />
            </button>
          </div>

          {/* Real Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">47</div>
              <div className="text-accent text-sm">Happy Rwandan clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-accent text-sm">Years in Kigali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-accent text-sm">Team members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-accent text-sm">Cups of coffee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group relative bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300">
          <MessageCircle size={24} />
          <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Questions? Actually ask us anything!
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
