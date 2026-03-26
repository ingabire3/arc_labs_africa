// FAQ.jsx (New file for frequently asked questions)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does rent collection work?',
      answer: 'Our platform automates rent collection with secure online payments. Tenants can pay via credit card, bank transfer, or mobile money, and funds are automatically reconciled and deposited to your account.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption and security measures to protect all your data. We are SOC 2 Type II certified and comply with all relevant data protection regulations.'
    },
    {
      question: 'Can I manage multiple properties?',
      answer: 'Absolutely! Our platform is designed to scale from single properties to large portfolios. You can manage hundreds of properties from a single dashboard with ease.'
    },
    {
      question: 'How does the tenant trust score work?',
      answer: 'The trust score is calculated based on payment history, communication responsiveness, and property care. It helps landlords make informed decisions about potential tenants.'
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
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#F5B400] transition-all duration-300"
              >
                <span className="text-white font-semibold text-left">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#F5B400] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-800/50 rounded-b-xl border-x border-b border-gray-800">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Floating Chat Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button className="group relative bg-[#F5B400] text-black p-4 rounded-full shadow-lg hover:bg-[#e0a800] transition-all duration-300 hover:scale-110">
            <MessageCircle size={24} />
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Need help? Ask us
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;