import React from 'react';
import { Calendar, Clock, User, ArrowRight, Coffee } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How We Built an Inventory System That Works Without Internet",
      excerpt: "Marie's boutique kept losing sales because her 'smart' inventory system needed constant internet. Here's how we built one that works even during Kigali's frequent power outages.",
      author: "Pierre MUGISHA",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Case Study",
      content: "Last month, Marie called me in tears. Her boutique in Kimironko was having its best wedding season ever, but she kept running out of the most popular fabrics...",
      featured: true
    },
    {
      title: "Why Your App Needs to Work on 2G",
      excerpt: "Most developers build for 4G and WiFi. In Rwanda, that's a luxury. Here's what we learned building apps that work on slow, unreliable connections.",
      author: "Josiane INGABIRE",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Technical",
      content: "I was testing our new app while riding a moto from Nyabugogo to Kigali City. The app kept crashing. Not because of bugs, but because..."
    },
    {
      title: "Designing for Grandma: UX Lessons from Rwandan Market Traders",
      excerpt: "We thought our beautiful interface was perfect. Then we watched a 60-year-old market trader try to use it. Everything changed.",
      author: "Josiane INGABIRE",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Design",
      content: "Mama Jean has been selling tomatoes at Nyabugogo market for 30 years. She can calculate change faster than a calculator, but..."
    },
    {
      title: "The Day Our Server Crashed During a Client's Peak Season",
      excerpt: "It was 2AM on a Monday. Our biggest client's busiest day. And everything broke. This is the story of how we recovered and what we learned.",
      author: "Pierre MUGISHA",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Technical",
      content: "The alert came at 2:17 AM. 'Database connection failed'. My heart sank. It was the first day of the wedding season..."
    },
    {
      title: "Running a Tech Company in Rwanda: The Real Challenges",
      excerpt: "Everyone talks about the 'African tech opportunity'. Nobody talks about power outages, internet issues, and finding talent who actually want to stay.",
      author: "Josiane INGABIRE",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Business",
      content: "Last week, we lost power 4 times in one day. Each time, we had to restart our development servers. Our European clients don't understand..."
    },
    {
      title: "How We Test Apps While Riding Motorbikes Through Kigali Traffic",
      excerpt: "Real testing doesn't happen in a lab. It happens in bumpy moto rides, crowded markets, and coffee shops with bad WiFi.",
      author: "Pierre MUGISHA",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Testing",
      content: "Patrick was testing our new app while riding from Remera to town. The app kept crashing every time he hit a pothole..."
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

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee size={32} className="text-orange-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">
              Get Our Stories in Your Inbox
            </h3>
            
            <p className="text-accent mb-8 max-w-2xl mx-auto">
              No spam, no marketing fluff. Just real stories about building tech in Rwanda, 
              sent every couple weeks when we actually have something interesting to share.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
              <button className="bg-orange-500 text-primary font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-accent text-sm mt-4">
              We respect your privacy. Unsubscribe anytime (though we'll be sad to see you go).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
