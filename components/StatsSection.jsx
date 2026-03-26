// StatsSection.jsx (New file for statistics)
import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { value: '10K+', label: 'Properties Managed' },
    { value: '$500M+', label: 'Annual Rent Processed' },
    { value: '99.99%', label: 'Platform Uptime' },
    { value: '50+', label: 'Cities Supported' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Modern Property Management Infrastructure
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#F5B400] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;