import React from 'react';
import { Lightbulb, Rocket, Users, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Story */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How We Actually Started
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-accent mb-8 leading-relaxed">
              Back in 2021, I was sitting at a small café in Kigali, watching my friend Marie 
              struggle with her boutique's inventory. She was using Excel sheets that kept crashing, 
              losing track of which fabrics were selling during wedding season, and honestly? 
              She was about to give up.
            </p>
            <p className="text-xl text-accent mb-8 leading-relaxed">
              "There has to be a better way," she said. I nodded, but honestly, I didn't know 
              if there was. Most software was made for big companies in other countries. 
              Nothing worked for small businesses here in Rwanda.
            </p>
            <p className="text-xl text-accent leading-relaxed">
              So we built one. A simple inventory system that actually worked on her phone, 
              didn't crash when the power went out, and understood that "fabric" isn't just 
              one thing—it's kitenge, ankara, batik, and each has different selling seasons.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                <Coffee size={20} className="text-orange-600" />
                <span className="text-orange-600 font-medium">Started over coffee at Café Bourbon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Challenges */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">The Real Struggle</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Power Outages</h4>
              <p className="text-gray-300">
                Our first office lost power 3 times a week. We learned to save everything 
                every 5 minutes and work offline-first.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Internet Issues</h4>
              <p className="text-gray-300">
                Sometimes our clients have spotty internet. Our apps need to work even 
                when connection drops to 2G.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Language Barriers</h4>
              <p className="text-gray-300">
                Not everyone speaks English fluently. We learned to build interfaces 
                that work in Kinyarwanda, French, and English.
              </p>
            </div>
          </div>
        </div>

        {/* What We Actually Do */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Lightbulb size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              We Listen First
            </h3>
            <p className="text-accent leading-relaxed">
              No fancy presentations. We sit with you, drink coffee (or tea!), and actually 
              understand what keeps you up at night about your business.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Rocket size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              We Build Fast
            </h3>
            <p className="text-accent leading-relaxed">
              None of this "6-month development cycle" nonsense. We build something 
              useful in weeks, not months. If it doesn't work, we pivot quickly.
            </p>
          </div>

          <div className="card">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Users size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              We Stick Around
            </h3>
            <p className="text-accent leading-relaxed">
              We don't disappear after launch. Marie still calls me when her system 
              acts weird. That's how we roll.
            </p>
          </div>
        </div>

        {/* Real Numbers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">The Real Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">47%</div>
              <div className="text-accent text-sm">Average revenue increase for our clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-accent text-sm">Hours saved per week per client</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-accent text-sm">Client retention rate (we lose people when they move, not when they're unhappy)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-accent text-sm">Actually, we sleep. But we respond within 2 hours during work days.</div>
            </div>
          </div>
        </div>

        {/* Human Touch */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3">
            <Heart size={20} className="text-red-500" />
            <span className="text-accent font-medium">
              Built with love, coffee, and a bit of stubbornness in Kigali
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
