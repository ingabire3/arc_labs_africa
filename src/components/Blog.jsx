import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How We Built an Inventory System That Works Without Internet",
      excerpt: "Marie's boutique kept losing sales because her 'smart' inventory system needed constant internet. Here's how we built one that works even during Kigali's frequent power outages.",
      author: "Pierre MUGISHA",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Case Study",
      featured: true
    },
    {
      title: "Why Your App Needs to Work on 2G",
      excerpt: "Most developers build for 4G and WiFi. In Rwanda, that's a luxury. Here's what we learned building apps that work on slow, unreliable connections.",
      author: "Josiane INGABIRE",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Technical"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Blog
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            No marketing fluff. Just real stories from our journey building a tech company 
            in Rwanda. The struggles, the wins, and everything in between.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.title} className="mb-16">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-300 text-sm">{post.category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="text-gray-300">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-gray-300">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="text-gray-300">{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-orange-500 text-primary font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2">
                Read full story
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.title} className="card group hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-accent mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-4 text-sm text-accent">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <button className="text-orange-600 font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                Read more
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
