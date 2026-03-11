import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-accent max-w-4xl mx-auto leading-relaxed">
            To create innovative technology products that solve real-world challenges
            and support sustainable digital transformation in Rwanda and across Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-secondary/20 transition-colors duration-300">
              <Target size={40} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Purpose-Driven</h3>
            <p className="text-accent leading-relaxed">
              Every solution we build addresses specific challenges faced by African businesses and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-secondary/20 transition-colors duration-300">
              <Zap size={40} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Innovation First</h3>
            <p className="text-accent leading-relaxed">
              We leverage cutting-edge technology to create solutions that are ahead of the curve and future-ready.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-secondary/20 transition-colors duration-300">
              <Globe size={40} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">African Impact</h3>
            <p className="text-accent leading-relaxed">
              Our focus is on creating sustainable digital transformation that benefits communities across the continent.
            </p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
            "We believe technology should empower, not complicate. Our mission is to build 
            digital solutions that are accessible, affordable, and transformative for African businesses."
          </blockquote>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
