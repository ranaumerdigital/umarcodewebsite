import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, Code2, Zap, Shield, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const teamMembers = [
  {
    id: '1',
    name: 'Umar Ali',
    role: 'Founder & Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack developer with 5+ years of experience in modern web technologies and AI integration.',
    skills: ['React.js', 'Node.js', 'Python', 'AI/ML', 'Cloud Architecture'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'UI/UX focused developer specializing in React, Vue.js, and modern frontend architectures.',
    skills: ['React.js', 'Vue.js', 'TypeScript', 'UI/UX Design', 'Mobile Development'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    id: '3',
    name: 'Ahmed Hassan',
    role: 'Backend Architect',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Backend specialist with expertise in microservices, databases, and cloud infrastructure.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    id: '4',
    name: 'Maria Rodriguez',
    role: 'AI/ML Engineer',
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Machine learning engineer focused on AI integration and data science solutions.',
    skills: ['TensorFlow', 'PyTorch', 'Python', 'Data Science', 'OpenAI API'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  }
];

const values = [
  {
    icon: Code2,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends and implement cutting-edge solutions that give our clients a competitive advantage.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous testing and quality checks to ensure reliability, security, and performance.'
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our success. We build long-term partnerships and provide ongoing support for sustainable growth.'
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast, iterative development cycles with regular feedback loops to ensure projects stay on track and exceed expectations.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We work with clients worldwide, bringing diverse perspectives and international best practices to every project.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Our collaborative approach ensures seamless communication and knowledge sharing across all project stakeholders.'
  }
];

const milestones = [
  { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
  { year: '2020', title: 'First Major Client', description: 'Delivered our first enterprise-level e-commerce platform' },
  { year: '2021', title: 'Team Expansion', description: 'Grew to a team of 10+ skilled developers and specialists' },
  { year: '2022', title: 'AI Integration', description: 'Pioneered AI-powered solutions for business automation' },
  { year: '2023', title: '100+ Projects', description: 'Successfully delivered over 100 projects across various industries' },
  { year: '2024', title: 'Global Presence', description: 'Expanded services globally with clients in 15+ countries' }
];

export function About() {
  const { ref, controls } = useScrollAnimation();

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
              About UmarCode
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a passionate team of developers, designers, and innovators dedicated to 
              engineering future technologies that transform businesses and create lasting impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe in creating software that not only meets 
                  current needs but anticipates future challenges and opportunities.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading technology partner for businesses worldwide, known for our 
                  innovation, quality, and commitment to client success. We envision a future 
                  where technology seamlessly integrates with business processes to create 
                  unprecedented value and growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center group">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From a small startup to a global technology partner - here's our story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in cutting-edge technologies 
              and innovative problem-solving approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center group">
                  <div className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help transform your business with innovative technology solutions.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09qtgSM7qJcS5YCvyTW84DVw3Pasd_nEQ9vt4WAGMFClFroVzlwftJ8SaBQd7x4GLfi4L0oeXM" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    Start Your Project
                  </Button>
                </a>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09qtgSM7qJcS5YCvyTW84DVw3Pasd_nEQ9vt4WAGMFClFroVzlwftJ8SaBQd7x4GLfi4L0oeXM" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                    Schedule a Call
                  </Button>
                </a>
              </div>

        </div>
      </section>
    </div>
  );
}