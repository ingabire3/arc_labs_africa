import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  MapPin, 
  DollarSign, 
  Layers, 
  Microscope, 
  TrendingUp 
} from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Rocket,
      title: 'Product-driven innovation',
      description: 'We focus on creating products that solve real problems and deliver measurable value.',
    },
    {
      icon: MapPin,
      title: 'Locally adapted technology',
      description: 'Solutions designed specifically for African markets and local business contexts.',
    },
    {
      icon: DollarSign,
      title: 'Affordable solutions',
      description: 'Cost-effective technology that provides excellent ROI for businesses of all sizes.',
    },
    {
      icon: Layers,
      title: 'Scalable architecture',
      description: 'Built to grow with your business from startup to enterprise scale.',
    },
    {
      icon: Microscope,
      title: 'Research & development',
      description: 'Continuous innovation through dedicated R&D and cutting-edge technology adoption.',
    },
    {
      icon: TrendingUp,
      title: 'Proven track record',
      description: 'Successful implementations across multiple industries and business types.',
    },
  ];

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
            Why ARC LABS
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with deep local knowledge to deliver 
            solutions that drive real business growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                <advantage.icon size={32} className="text-secondary group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {advantage.title}
              </h3>
              <p className="text-accent leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h3>
            <p className="text-gray-300">
              We've partnered with businesses across various sectors to drive their digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">30%</div>
              <div className="text-gray-400 text-sm">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">2x</div>
              <div className="text-gray-400 text-sm">Faster Implementation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
