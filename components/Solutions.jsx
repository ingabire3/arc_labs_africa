// Solutions.jsx (Replacing Services.jsx)
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, CreditCard, BarChart3 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: FileText,
      title: 'Property Management',
      description: 'Bring all your properties together. Track maintenance, lease agreements, and documents in one easy-to-use platform.',
      buttonText: 'Learn how →'
    },
    {
      icon: Shield,
      title: 'Tenant Trust Score',
      description: 'Build trust using our scoring system based on payment history and reliability.',
      buttonText: 'Learn more →'
    },
    {
      icon: CreditCard,
      title: 'Automated Rent Collection',
      description: 'Automate rent payments using secure online payments and instant reconciliation.',
      buttonText: 'View payments →'
    },
    {
      icon: BarChart3,
      title: 'Analytics Platform',
      description: 'Get key insights into your investment performance, tenant ratings, and profits using real-time reports.',
      buttonText: 'View analytics →'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Property Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-[#F5B400] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#F5B400]/10 rounded-xl flex items-center justify-center mb-6">
                <solution.icon size={28} className="text-[#F5B400]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {solution.description}
              </p>
              <button className="text-[#F5B400] font-semibold hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                {solution.buttonText}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;