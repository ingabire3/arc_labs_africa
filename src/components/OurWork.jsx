import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const OurWork = () => {
  const caseStudies = [
    {
      client: "Marie's Boutique - Kimironko",
      problem: "Lost track of fabric inventory during wedding season. Was selling out of popular patterns while unpopular ones gathered dust.",
      solution: "Built a simple inventory app that sends alerts 2 weeks before peak seasons based on historical sales data.",
      results: "47% increase in revenue, never runs out of wedding fabric anymore.",
      timeline: "3 weeks",
      tech: "React, Firebase, SMS notifications",
      quote: "Now I know exactly when to order more fabric. My customers are happy because I never say 'out of stock' anymore.",
      image: "/api/placeholder/400/300"
    },
    {
      client: "Kigali Coffee Roasters",
      problem: "Manual order tracking was causing chaos. Orders were getting lost, customers were angry, and staff was stressed.",
      solution: "Created an order management system that integrates with their existing WhatsApp for customer updates.",
      results: "Cut order processing time by 60%, zero lost orders in 6 months.",
      timeline: "4 weeks",
      tech: "Node.js, WhatsApp Business API, React",
      quote: "Our morning rush is actually manageable now. The team doesn't dread Monday mornings anymore.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section id="our-work" className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Actual Work
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            These are real businesses we've helped. No stock photos, no fake testimonials. 
            Just actual results from actual clients who actually exist.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.client}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="card">
                  {/* Client Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={16} className="text-orange-600" />
                    <span className="text-accent text-sm">{study.client}</span>
                    <div className="flex items-center gap-2 text-accent text-sm">
                      <Calendar size={14} />
                      <span>{study.timeline}</span>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">The Problem</h3>
                    <p className="text-accent">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">What We Built</h3>
                    <p className="text-accent">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">The Results</h3>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <TrendingUp size={16} />
                      <span>{study.results}</span>
                    </div>
                  </div>

                  {/* Client Quote */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-accent italic mb-2">"{study.quote}"</p>
                    <p className="text-accent text-sm font-medium">- {study.client.split(' - ')[0]}</p>
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {study.client.split(' ')[0][0]}
                      </span>
                    </div>
                    <p className="text-accent font-medium">{study.client}</p>
                    <p className="text-accent text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
