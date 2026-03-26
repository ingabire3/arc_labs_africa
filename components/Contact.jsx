// Updated Contact.jsx with black/orange theme
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your property management? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F5B400] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F5B400] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F5B400] focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-gray-500"
                  placeholder="Tell us about your property management needs..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#F5B400] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#e0a800] transition-all duration-300 w-full flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5B400]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#F5B400]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Kigali, Rwanda</p>
                    <p className="text-gray-500 text-sm">East Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5B400]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#F5B400]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">info@arclabsafrika.com</p>
                    <p className="text-gray-500 text-sm">support@arclabsafrika.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5B400]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#F5B400]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+250 788 504 917</p>
                    <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM CAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-[#F5B400]/20 to-gray-900 rounded-2xl p-6 border border-[#F5B400]/20">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={24} className="text-[#F5B400]" />
                <h4 className="text-xl font-bold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-400 mb-4">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F5B400]/10 rounded-full px-3 py-1 text-sm text-[#F5B400]">24h Response</span>
                <span className="bg-[#F5B400]/10 rounded-full px-3 py-1 text-sm text-[#F5B400]">Free Consultation</span>
                <span className="bg-[#F5B400]/10 rounded-full px-3 py-1 text-sm text-[#F5B400]">Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;