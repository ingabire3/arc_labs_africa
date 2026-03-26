import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Actually Talk
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            No forms that go to nowhere, no automated responses. 
            Real people ready to discuss your real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-accent font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-accent font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-accent font-medium mb-2">What's keeping you up at night?</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none h-32"
                  placeholder="Tell us about your business challenges..."
                ></textarea>
              </div>
              
              <button className="w-full bg-orange-500 text-primary font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in touch directly</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-accent">hello@arclabsafrika.rw</p>
                    <p className="text-accent text-sm">We actually respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-accent">+250 788 504 917</p>
                    <p className="text-accent text-sm">Mon-Fri, 9AM-6PM Kigali time</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-accent">Kigali, Rwanda</p>
                    <p className="text-accent text-sm">Usually near good coffee shops</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Prefer coffee over calls?</h3>
              <p className="mb-6">
                We're always up for meeting at Café Bourbon or any good coffee spot in Kigali. 
                Sometimes the best solutions start over a cup of coffee.
              </p>
              <button className="bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Schedule a coffee meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
