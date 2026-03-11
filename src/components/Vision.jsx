import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Globe, Rocket, Users, Award } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: 'Expand Across Africa',
      description: 'Grow our presence and impact across multiple African markets.',
    },
    {
      icon: Rocket,
      title: 'Build Sustainable Products',
      description: 'Create long-term digital solutions that evolve with market needs.',
    },
    {
      icon: Users,
      title: 'Support Digital Economy',
      description: 'Contribute to Africa\'s digital transformation and economic growth.',
    },
  ];

  const milestones = [
    { year: '2024', achievement: 'Launch 5 new products' },
    { year: '2025', achievement: 'Expand to 3 African countries' },
    { year: '2026', achievement: 'Serve 500+ businesses' },
    { year: '2027', achievement: 'Become regional tech leader' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye size={40} className="text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Vision for Growth
          </h2>
          <p className="text-xl text-accent max-w-4xl mx-auto leading-relaxed">
            ARC LABS aims to build sustainable digital products, expand across Africa, 
            and support the digital economy through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-secondary/20 transition-colors duration-300">
                <point.icon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {point.title}
              </h3>
              <p className="text-accent leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Growth Milestones</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-secondary mb-2">
                  {milestone.year}
                </div>
                <p className="text-gray-300 text-sm">
                  {milestone.achievement}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-6 py-3">
              <Target size={20} className="text-secondary" />
              <span className="text-white font-semibold">Vision 2030: Pan-African Tech Leader</span>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Commitment</h3>
            <p className="text-lg text-accent leading-relaxed mb-8">
              We are committed to building technology that not only drives business success 
              but also contributes to the broader digital transformation of Africa. 
              Every product we create is designed with sustainability, accessibility, 
              and local relevance at its core.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <Award size={16} className="text-secondary" />
                <span className="text-accent font-medium">Excellence</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <Globe size={16} className="text-secondary" />
                <span className="text-accent font-medium">Impact</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <Rocket size={16} className="text-secondary" />
                <span className="text-accent font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
