import React from 'react';
import { Coffee, Code, Music, Camera, Linkedin, Twitter, User } from 'lucide-react';
import pierreImage from '../assets/peter.jpeg';
import josianeImage from '../assets/Josiane.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: "MUGISHA Pierre",
      role: "CEO & Founder",
      story: "Founded ARC LABS AFRIKA with a vision to create technology solutions that work for African businesses. Passionate about innovation and digital transformation.",
      skills: ["Leadership", "Strategy", "Business Development", "Innovation"],
      hobby: "Reading tech blogs and mentoring startups",
      coffee: "3 cups of coffee daily",
      quote: "Technology should solve real problems, not create new ones.",
      initials: "MP",
      hasImage: true,
      image: pierreImage
    },
    {
      name: "INGABIRE Josiane",
      role: "Co-Founder",
      story: "Co-founded ARC LABS AFRIKA with expertise in operations and client relations. Ensures our solutions meet real business needs.",
      skills: ["Operations", "Client Relations", "Project Management", "Strategy"],
      hobby: "Community service and women's empowerment initiatives",
      coffee: "Tea enthusiast",
      quote: "Our success is measured by our clients' success.",
      initials: "IJ",
      hasImage: true,
      image: josianeImage
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Led by experienced founders committed to building technology solutions 
            that drive business growth across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="card group hover:-translate-y-2 transition-all duration-300">
              {/* Avatar with Reserved Image Space */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {member.hasImage ? (
                  <img 
                    src={member.image} 
                    alt={`${member.name}`} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-orange-300">
                    <User size={32} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  {member.role.includes('CEO') && <Code size={16} className="text-orange-600" />}
                  {member.role.includes('Co-Founder') && <Camera size={16} className="text-orange-600" />}
                </div>
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-primary mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-orange-600 font-semibold mb-4 text-center">
                {member.role}
              </p>

              {/* Story */}
              <p className="text-accent text-sm leading-relaxed mb-4 text-center">
                {member.story}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Personal Details */}
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-accent text-sm">
                  <Coffee size={14} />
                  <span>{member.coffee}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-accent text-sm">
                  <Music size={14} />
                  <span>{member.hobby}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-accent text-xs italic text-center">
                  "{member.quote}"
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4">
                <button
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={16} />
                </button>
                <button
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Vision */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Leadership Vision</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-4">Innovation Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Building solutions for African markets</li>
                <li>• Embracing cutting-edge technology</li>
                <li>• Fostering digital transformation</li>
                <li>• Creating sustainable business impact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-4">Commitment to Excellence</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Client-centric approach</li>
                <li>• Quality-driven development</li>
                <li>• Long-term partnerships</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <Coffee size={20} className="text-orange-500" />
              <span className="text-white">
                Leading with vision, innovation, and commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
