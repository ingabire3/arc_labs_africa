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
    },
    {
      client: "Rwanda Tours & Travel",
      problem: "Tour guides were using paper schedules. Last minute changes were impossible to communicate.",
      solution: "Mobile app with offline capability for when guides are in areas with poor internet.",
      results: "95% reduction in scheduling conflicts, guides actually show up on time now.",
      timeline: "6 weeks",
      tech: "React Native, Offline-first design, GPS tracking",
      quote: "Our guides love it. Even when they're in Akagera with no signal, they still know their schedule.",
      image: "/api/placeholder/400/300"
    },
    {
      client: "Nyabugogo Market Traders Association",
      problem: "500+ traders tracking sales in notebooks. Impossible to see market trends or plan for holidays.",
      solution: "Simple SMS-based reporting system. No smartphones needed, just basic phones.",
      results: "Association can now predict market trends 3 months in advance.",
      timeline: "8 weeks",
      tech: "SMS gateway, Basic web dashboard, Data analytics",
      quote: "Even Mama Jean who doesn't have a smartphone can report her daily sales. It's that simple.",
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

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">Tech Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.split(', ').map((tech) => (
                        <span key={tech} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
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

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to be our next case study?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for interesting problems to solve. If you're a Rwandan 
              business struggling with something that technology could fix, let's talk.
            </p>
            <button className="bg-orange-500 text-primary font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Tell us about your problem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
