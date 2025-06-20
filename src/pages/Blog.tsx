import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Search, TrendingUp, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom'; // Ensure this is at the top

const allBlogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to serverless architectures and beyond.',
    content: 'Full article content here...',
    author: 'Umar Ali',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'Technology', 'AI', 'Trends'],
    slug: 'future-of-web-development-2024',
    featured: true,
    views: 2500
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn how to structure and optimize React applications for maximum performance, maintainability, and scalability.',
    content: 'Full article content here...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Performance', 'Best Practices', 'JavaScript'],
    slug: 'scalable-react-applications-best-practices',
    featured: true,
    views: 1800
  },
  {
    id: '3',
    title: 'AI Integration in Modern Web Applications',
    excerpt: 'Discover how to integrate AI capabilities into your web applications using OpenAI API, TensorFlow.js, and other cutting-edge tools.',
    content: 'Full article content here...',
    author: 'Maria Rodriguez',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AI', 'Machine Learning', 'OpenAI', 'Integration'],
    slug: 'ai-integration-modern-web-applications',
    featured: false,
    views: 2200
  },
  {
    id: '4',
    title: 'Microservices Architecture: A Complete Guide',
    excerpt: 'Understanding microservices architecture, its benefits, challenges, and how to implement it effectively in your projects.',
    content: 'Full article content here...',
    author: 'Ahmed Hassan',
    publishedAt: '2023-12-28',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Architecture', 'Backend', 'Microservices', 'Scalability'],
    slug: 'microservices-architecture-complete-guide',
    featured: false,
    views: 1600
  },
  {
    id: '5',
    title: 'Mobile-First Design: Creating Responsive Experiences',
    excerpt: 'Master the art of mobile-first design and create seamless experiences across all devices with modern CSS techniques.',
    content: 'Full article content here...',
    author: 'Sarah Johnson',
    publishedAt: '2023-12-20',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile Design', 'Responsive', 'CSS', 'UX'],
    slug: 'mobile-first-design-responsive-experiences',
    featured: false,
    views: 1400
  },
  {
    id: '6',
    title: 'Database Optimization Techniques for High-Performance Apps',
    excerpt: 'Learn advanced database optimization techniques to improve your application performance and handle large-scale data efficiently.',
    content: 'Full article content here...',
    author: 'Ahmed Hassan',
    publishedAt: '2023-12-15',
    readTime: '11 min read',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Database', 'Performance', 'Optimization', 'SQL'],
    slug: 'database-optimization-techniques-high-performance',
    featured: false,
    views: 1900
  }
];

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'Web Development', name: 'Web Development' },
  { id: 'AI', name: 'AI & Machine Learning' },
  { id: 'Performance', name: 'Performance' },
  { id: 'Architecture', name: 'Architecture' },
  { id: 'Mobile Design', name: 'Mobile Design' },
  { id: 'Database', name: 'Database' },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { ref, controls } = useScrollAnimation();

  const filteredPosts = allBlogPosts
    .filter(post => 
      activeCategory === 'all' || 
      post.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
    )
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const featuredPosts = allBlogPosts.filter(post => post.featured);
  const recentPosts = allBlogPosts.slice(0, 5);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Tech Insights & Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of 
              software development, AI, and cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful articles covering the latest in technology and development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center bg-black/50 text-white px-2 py-1 rounded text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()} views
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{ visible: { opacity: 1 } }}
                className="space-y-8"
              >
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, y: 0 } }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="relative h-48 md:h-full overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm flex items-center"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {post.views.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg">No articles found matching your criteria.</div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3 group cursor-pointer">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Get the latest tech insights and tutorials delivered to your inbox.
                  </p>
                  <div className="space-y-4">
                    <Input placeholder="Enter your email" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to Share Your Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for guest contributors and collaboration opportunities. 
            Share your expertise with our community.
          </p>



            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Become a Contributor
              </Button>
            </Link>

        </div>
      </section>
    </div>
  );
}