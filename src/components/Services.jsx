import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Server, 
  Cloud, 
  BarChart3, 
  Cpu, 
  Lightbulb 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Digital Platforms',
      description: 'Custom web and mobile applications designed for African markets with user-centric interfaces.',
    },
    {
      icon: Server,
      title: 'Enterprise Software',
      description: 'Scable business management systems that streamline operations and improve productivity.',
    },
    {
      icon: Cloud,
      title: 'Cloud Systems',
      description: 'Secure and reliable cloud infrastructure solutions for businesses of all sizes.',
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics Tools',
      description: 'Advanced analytics platforms to help businesses make data-driven decisions.',
    },
    {
      icon: Cpu,
      title: 'Automation Systems',
      description: 'Intelligent automation solutions to reduce manual work and increase efficiency.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Strategic technology consulting to help businesses navigate digital transformation.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to accelerate your digital journey
            and drive business growth in the African market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                <service.icon size={32} className="text-secondary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-accent leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-secondary font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                Learn More
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your digital transformation goals.
            </p>
            <button className="btn-primary bg-secondary text-primary hover:bg-yellow-400">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
