import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom'; // Ensure this is imported at the top

const allTechnologies = [
  // Frontend
  { id: '1', name: 'React.js', icon: '⚛️', category: 'frontend', level: 'Expert', projects: 45, description: 'Modern React applications with hooks, context, and performance optimization', trending: true },
  { id: '2', name: 'Next.js', icon: '▲', category: 'frontend', level: 'Expert', projects: 32, description: 'Full-stack React framework with SSR, SSG, and API routes', trending: true },
  { id: '3', name: 'Vue.js', icon: '💚', category: 'frontend', level: 'Advanced', projects: 28, description: 'Progressive framework for building user interfaces', trending: false },
  { id: '4', name: 'Angular', icon: '🅰️', category: 'frontend', level: 'Advanced', projects: 22, description: 'Platform for building mobile and desktop web applications', trending: false },
  { id: '5', name: 'TypeScript', icon: '📘', category: 'frontend', level: 'Expert', projects: 50, description: 'Typed superset of JavaScript for large-scale applications', trending: true },
  { id: '6', name: 'Tailwind CSS', icon: '🎨', category: 'frontend', level: 'Expert', projects: 40, description: 'Utility-first CSS framework for rapid UI development', trending: true },
  
  // Backend
  { id: '7', name: 'Node.js', icon: '🟢', category: 'backend', level: 'Expert', projects: 48, description: 'JavaScript runtime for scalable server-side applications', trending: true },
  { id: '8', name: 'Python', icon: '🐍', category: 'backend', level: 'Expert', projects: 42, description: 'Django, FastAPI, and Flask for robust backend solutions', trending: true },
  { id: '9', name: 'PHP', icon: '🐘', category: 'backend', level: 'Advanced', projects: 35, description: 'Laravel and Symfony for enterprise web applications', trending: false },
  { id: '10', name: 'Java', icon: '☕', category: 'backend', level: 'Advanced', projects: 25, description: 'Spring Boot for enterprise-grade applications', trending: false },
  { id: '11', name: 'Go', icon: '🔷', category: 'backend', level: 'Intermediate', projects: 15, description: 'High-performance concurrent applications', trending: true },
  
  // Database
  { id: '12', name: 'MongoDB', icon: '🍃', category: 'database', level: 'Expert', projects: 38, description: 'NoSQL database for modern applications', trending: true },
  { id: '13', name: 'PostgreSQL', icon: '🐘', category: 'database', level: 'Expert', projects: 35, description: 'Advanced relational database with JSON support', trending: true },
  { id: '14', name: 'MySQL', icon: '🐬', category: 'database', level: 'Advanced', projects: 30, description: 'Reliable relational database management system', trending: false },
  { id: '15', name: 'Redis', icon: '🔴', category: 'database', level: 'Advanced', projects: 25, description: 'In-memory data structure store for caching', trending: true },
  
  // Mobile
  { id: '16', name: 'React Native', icon: '📱', category: 'mobile', level: 'Expert', projects: 28, description: 'Cross-platform mobile app development', trending: true },
  { id: '17', name: 'Flutter', icon: '🦋', category: 'mobile', level: 'Advanced', projects: 20, description: 'Google\'s UI toolkit for mobile applications', trending: true },
  { id: '18', name: 'Swift', icon: '🍎', category: 'mobile', level: 'Intermediate', projects: 15, description: 'Native iOS application development', trending: false },
  { id: '19', name: 'Kotlin', icon: '🤖', category: 'mobile', level: 'Intermediate', projects: 12, description: 'Modern Android application development', trending: false },
  
  // AI/ML
  { id: '20', name: 'TensorFlow', icon: '🧠', category: 'ai', level: 'Advanced', projects: 18, description: 'Machine learning and deep learning framework', trending: true },
  { id: '21', name: 'PyTorch', icon: '🔥', category: 'ai', level: 'Advanced', projects: 15, description: 'Dynamic neural network framework', trending: true },
  { id: '22', name: 'OpenAI API', icon: '🤖', category: 'ai', level: 'Expert', projects: 22, description: 'GPT integration and AI-powered applications', trending: true },
  { id: '23', name: 'Scikit-learn', icon: '📊', category: 'ai', level: 'Advanced', projects: 20, description: 'Machine learning library for Python', trending: false },
  
  // Cloud & DevOps
  { id: '24', name: 'AWS', icon: '☁️', category: 'cloud', level: 'Expert', projects: 40, description: 'Amazon Web Services cloud platform', trending: true },
  { id: '25', name: 'Docker', icon: '🐳', category: 'cloud', level: 'Expert', projects: 35, description: 'Containerization and deployment', trending: true },
  { id: '26', name: 'Kubernetes', icon: '⚙️', category: 'cloud', level: 'Advanced', projects: 25, description: 'Container orchestration platform', trending: true },
  { id: '27', name: 'Google Cloud', icon: '🌐', category: 'cloud', level: 'Advanced', projects: 20, description: 'Google Cloud Platform services', trending: true },
];

const categories = [
  { id: 'all', name: 'All Technologies', count: allTechnologies.length },
  { id: 'frontend', name: 'Frontend', count: allTechnologies.filter(t => t.category === 'frontend').length },
  { id: 'backend', name: 'Backend', count: allTechnologies.filter(t => t.category === 'backend').length },
  { id: 'database', name: 'Database', count: allTechnologies.filter(t => t.category === 'database').length },
  { id: 'mobile', name: 'Mobile', count: allTechnologies.filter(t => t.category === 'mobile').length },
  { id: 'ai', name: 'AI & ML', count: allTechnologies.filter(t => t.category === 'ai').length },
  { id: 'cloud', name: 'Cloud & DevOps', count: allTechnologies.filter(t => t.category === 'cloud').length },
];

const levelColors = {
  'Expert': 'bg-green-100 text-green-800',
  'Advanced': 'bg-blue-100 text-blue-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
};

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const { ref, controls } = useScrollAnimation();

  const filteredTechnologies = allTechnologies
    .filter(tech => activeCategory === 'all' || tech.category === activeCategory)
    .filter(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'projects') return b.projects - a.projects;
      if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      return a.name.localeCompare(b.name);
    });

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
              Our Technology Stack
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We master the latest technologies to deliver cutting-edge solutions. 
              From frontend frameworks to AI integration, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">27+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">Trending Tech</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Sort by Name</option>
                <option value="projects">Sort by Projects</option>
                <option value="trending">Sort by Trending</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{ visible: { opacity: 1 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {tech.trending && (
                          <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[tech.level as keyof typeof levelColors]}`}>
                          {tech.level}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tech.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {tech.projects} Projects
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {tech.level}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredTechnologies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No technologies found matching your criteria.</div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need a Custom Technology Stack?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We adapt to your specific requirements and can work with any technology stack. 
            Our team continuously learns and implements the latest industry standards.
          </p>

          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Discuss Your Requirements
            </Button>
          </Link>



        </div>
      </section>
    </div>
  );
}