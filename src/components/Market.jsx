import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, Globe, Building } from 'lucide-react';

const Market = () => {
  const stats = [
    {
      icon: Smartphone,
      value: '78%',
      label: 'Mobile penetration',
      description: 'Growing mobile connectivity across Rwanda',
    },
    {
      icon: CreditCard,
      value: '6.3M',
      label: 'Mobile payment users',
      description: 'Expanding digital payment ecosystem',
    },
    {
      icon: Globe,
      value: '245+',
      label: 'Online government services',
      description: 'Digital transformation in public sector',
    },
    {
      icon: Building,
      value: '200k+',
      label: 'Businesses in Rwanda',
      description: 'Growing business landscape',
    },
  ];

  return (
    <section id="market" className="py-20 bg-gradient-to-b from-gray-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Growing Digital Economy
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Rwanda's digital transformation creates unprecedented opportunities for 
            technology innovation and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="card-dark bg-gradient-to-br from-primary to-accent p-6 h-full">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors duration-300">
                  <stat.icon size={32} className="text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-4">Market Potential</h3>
            <ul className="space-y-3 text-accent">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Rwanda aims to become a regional ICT hub</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Government support for digital transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Growing startup ecosystem and innovation culture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Strategic location in East Africa</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-4">Why Rwanda?</h3>
            <ul className="space-y-3 text-accent">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Political stability and supportive policies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Investment in digital infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Young, tech-savvy population</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Vision 2050 digital transformation goals</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
