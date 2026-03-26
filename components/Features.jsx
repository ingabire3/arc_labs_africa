// Features.jsx (New file for property management features)
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, CreditCard, BarChart3, FileText, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Bring all your properties together. Track maintenance, leases, and documents in one easy-to-use platform.'
    },
    {
      icon: Shield,
      title: 'Tenant Trust Score',
      description: 'Build trust with our scoring system based on payment history and reliability.'
    },
    {
      icon: CreditCard,
      title: 'Automated Rent Collection',
      description: 'Automate rent collection with secure online payments and instant reconciliation.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Get real-time insights on portfolio performance, occupancy rates, and revenue.'
    },
    {
      icon: FileText,
      title: 'Digital Lease Management',
      description: 'Create, sign, and store lease agreements digitally with e-signature capabilities.'
    },
    {
      icon: Users,
      title: 'Tenant Portal',
      description: 'Empower tenants with self-service portal for payments, maintenance requests, and communication.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One platform for all
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Simple solutions for every type of property. Grow your investment with our complete 
            management and financial tools—ready to use solo or with your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-[#F5B400] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#F5B400]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#F5B400] transition-all duration-300">
                <feature.icon size={24} className="text-[#F5B400] group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <button className="mt-4 text-[#F5B400] text-sm font-medium hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                Learn more 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;