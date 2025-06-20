import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Tag, Filter, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom'; // Make sure this is at the top

const allCaseStudies = [
  {
    id: '1',
    title: 'E-Commerce Platform Modernization',
    description: 'Complete redesign and development of a multi-vendor e-commerce platform serving 50,000+ users with advanced features.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'E-Commerce',
    client: 'TechMart Solutions',
    duration: '6 months',
    budget: '$75,000',
    results: ['300% increase in conversion rate', '50% reduction in load time', '99.9% uptime achieved', 'Mobile-first responsive design'],
    challenge: 'The client had an outdated e-commerce platform that was slow, not mobile-friendly, and couldn\'t handle their growing user base.',
    solution: 'We built a modern, scalable platform using React.js and Node.js with microservices architecture, integrated payment gateways, and implemented advanced caching.',
    featured: true
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Development of an intelligent analytics platform with machine learning capabilities for real-time data insights and predictions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React.js', 'PostgreSQL', 'Docker'],
    category: 'AI/ML',
    client: 'DataInsights Corp',
    duration: '8 months',
    budget: '$120,000',
    results: ['Real-time data processing', 'Predictive analytics implementation', '40% cost reduction in operations', 'Automated reporting system'],
    challenge: 'The client needed to process large amounts of data and generate actionable insights for their business decisions.',
    solution: 'We developed a comprehensive analytics platform with ML models for prediction, real-time data processing, and interactive dashboards.',
    featured: true
  },
  {
    id: '3',
    title: 'Mobile Banking Application',
    description: 'Secure mobile banking app with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Blockchain'],
    category: 'FinTech',
    client: 'SecureBank Ltd',
    duration: '10 months',
    budget: '$200,000',
    results: ['500,000+ downloads', 'Bank-grade security implemented', '95% user satisfaction rate', 'PCI DSS compliance achieved'],
    challenge: 'Creating a secure, user-friendly mobile banking solution that meets strict financial regulations and security standards.',
    solution: 'We developed a comprehensive mobile banking app with advanced security features, biometric authentication, and seamless user experience.',
    featured: true
  },
  {
    id: '4',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management platform for hospitals with patient records, appointment scheduling, and telemedicine features.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'WebRTC'],
    category: 'Healthcare',
    client: 'MediCare Systems',
    duration: '12 months',
    budget: '$150,000',
    results: ['50% reduction in administrative tasks', 'HIPAA compliance achieved', 'Telemedicine integration', '99.5% system uptime'],
    challenge: 'Digitizing healthcare operations while ensuring patient data security and regulatory compliance.',
    solution: 'We built a comprehensive healthcare management system with secure patient records, appointment scheduling, and telemedicine capabilities.',
    featured: false
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    description: 'Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API'],
    category: 'Real Estate',
    client: 'PropertyHub Inc',
    duration: '7 months',
    budget: '$90,000',
    results: ['200% increase in property inquiries', 'Virtual tour integration', 'Mobile app launched', 'SEO optimization completed'],
    challenge: 'Creating an engaging real estate platform that showcases properties effectively and connects buyers with agents.',
    solution: 'We developed a modern real estate platform with advanced search, virtual tours, and integrated communication tools.',
    featured: false
  },
  {
    id: '6',
    title: 'Educational Learning Platform',
    description: 'Interactive online learning platform with video courses, quizzes, progress tracking, and certification system.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    category: 'Education',
    client: 'EduTech Solutions',
    duration: '9 months',
    budget: '$110,000',
    results: ['10,000+ active students', 'Interactive learning modules', 'Certification system', 'Mobile app development'],
    challenge: 'Building an engaging online learning platform that keeps students motivated and tracks their progress effectively.',
    solution: 'We created an interactive learning platform with gamification, progress tracking, and comprehensive course management.',
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'E-Commerce', name: 'E-Commerce' },
  { id: 'AI/ML', name: 'AI & Machine Learning' },
  { id: 'FinTech', name: 'FinTech' },
  { id: 'Healthcare', name: 'Healthcare' },
  { id: 'Real Estate', name: 'Real Estate' },
  { id: 'Education', name: 'Education' },
];

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const { ref, controls } = useScrollAnimation();

  const filteredCaseStudies = allCaseStudies
    .filter(study => activeCategory === 'all' || study.category === activeCategory)
    .filter(study => 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const featuredCases = allCaseStudies.filter(study => study.featured);

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
              Case Studies & Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with 
              innovative software solutions and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Client: {study.client}</span>
                      <span>{study.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button variant="outline" className="w-full">
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search case studies..."
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

      {/* All Case Studies */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{ visible: { opacity: 1 } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {study.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {study.client}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          +{study.technologies.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No case studies found matching your criteria.</div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>


          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
          </Link>



        </div>
      </section>
    </div>
  );
}