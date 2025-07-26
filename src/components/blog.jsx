import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiCode,
  FiTrendingUp,
  FiBookOpen,
  FiExternalLink,
  FiUser,
  FiTag
} from 'react-icons/fi';

const BlogSection = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and implement robust REST APIs that can handle millions of requests. From architecture patterns to performance optimization techniques.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Backend Development",
      tags: ["Node.js", "Express", "API Design", "Performance"],
      featured: true,
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "React Performance Optimization: Beyond Memoization",
      excerpt: "Dive deep into advanced React optimization techniques including code splitting, lazy loading, and virtual DOM optimization strategies.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Frontend Development",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      featured: false,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Exploring different database patterns, from CQRS to event sourcing, and when to use each approach in your applications.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Database Design",
      tags: ["Database", "Design Patterns", "Architecture", "SQL"],
      featured: false,
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Microservices vs Monolith: A Practical Guide",
      excerpt: "A comprehensive comparison of architectural approaches with real-world examples and decision frameworks for your next project.",
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "System Design", "DevOps"],
      featured: false,
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 5,
      title: "The Future of AI in Software Development",
      excerpt: "How AI tools are transforming the development workflow and what it means for software engineers in the next decade.",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      category: "AI & Technology",
      tags: ["AI", "Future", "Development", "Trends"],
      featured: false,
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "Docker Best Practices for Production",
      excerpt: "Essential Docker practices for deploying containerized applications in production environments with security and performance in mind.",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Production", "Containers"],
      featured: false,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Frontend", count: 1 },
    { name: "Backend", count: 2 },
    { name: "DevOps", count: 1 },
    { name: "Architecture", count: 1 },
    { name: "AI & Tech", count: 1 }
  ];

  const BlogCard = ({ post, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer ${
        post.featured ? 'lg:col-span-2' : ''
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white">
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category & Meta */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium border"
            style={{ 
              backgroundColor: `${post.color}20`,
              borderColor: `${post.color}40`,
              color: post.color 
            }}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 ${
          post.featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}
        style={{
          backgroundImage: `linear-gradient(135deg, ${post.color}, ${post.color}80)`
        }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-white/70 mb-4 leading-relaxed ${
          post.featured ? 'text-base md:text-lg' : 'text-sm'
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, post.featured ? 4 : 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div className="flex items-center justify-between">
          <motion.button
            className="flex items-center gap-2 text-white/80 hover:text-white font-medium group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            Read More
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
          <div className="flex items-center gap-2 text-white/60">
            <FiBookOpen className="w-4 h-4" />
            <span className="text-sm">Technical</span>
          </div>
        </div>
      </div>
    </motion.article>
  );

  return (
    <section
      id="blog"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-blue-400/30"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            opacity: [0, 0.6, 0.3, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1.5 h-1.5 rounded-full bg-purple-400/40"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -30, 0],
            opacity: [0, 0.8, 0.2, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Insights
            </motion.span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Sharing knowledge, insights, and practical experiences from the world of software engineering
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                category.active 
                  ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                  : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              {category.count && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {category.count}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiBookOpen className="w-5 h-5" />
            View All Posts
            <FiExternalLink className="w-4 h-4" />
          </motion.button>
          <p className="text-white/50 mt-4 text-sm">
            Explore more technical articles and tutorials
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Get notified when I publish new technical articles and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-white/50 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;