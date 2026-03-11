import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertCircle, Lightbulb } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: X,
      title: 'Manual Systems',
      description: 'Inefficient paper-based processes that slow down operations',
    },
    {
      icon: X,
      title: 'Expensive Software',
      description: 'Foreign solutions that do not fit local needs and budgets',
    },
    {
      icon: X,
      title: 'No Scalable Tools',
      description: 'Systems that cannot grow with your business',
    },
  ];

  const solutions = [
    {
      icon: Check,
      title: 'Local Innovation',
      description: 'Solutions designed specifically for African markets',
    },
    {
      icon: Check,
      title: 'Affordable Systems',
      description: 'Cost-effective technology that delivers real value',
    },
    {
      icon: Check,
      title: 'Scalable Platforms',
      description: 'Systems that grow with your business needs',
    },
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Challenges We Solve
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Addressing real business challenges with innovative technology solutions
            designed for the African context.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Problems</h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-100"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <problem.icon size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-red-700 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Solution</h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <solution.icon size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-900 mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-green-700 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Transform Your Challenges into Opportunities</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you overcome operational hurdles with innovative technology solutions 
              designed for your specific needs.
            </p>
            <button className="btn-primary bg-secondary text-primary hover:bg-yellow-400">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
