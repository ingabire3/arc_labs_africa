import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions tailored for African markets and challenges',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade systems that grow with your business needs',
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Comprehensive digital solutions to modernize your operations',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About ARC LABS AFRIKA
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Technology innovation company in Rwanda focused on digital products, 
            enterprise systems, and scalable platforms that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card text-center group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <feature.icon size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-accent leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Based in Kigali, Rwanda</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are strategically positioned in Rwanda's growing tech ecosystem to serve 
                businesses and organizations across Africa with innovative digital solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Founded by technology enthusiasts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Focused on African market needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-300">Committed to digital excellence</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">2019</div>
                <div className="text-gray-400 text-sm">Year Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-gray-400 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-gray-400 text-sm">Industries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
