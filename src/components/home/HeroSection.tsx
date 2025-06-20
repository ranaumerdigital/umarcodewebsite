import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Link } from "react-router-dom";

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

const FloatingCard = ({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className={`absolute bg-white/10 backdrop-blur-md rounded-xl p-4 ${className}`}
  >
    {children}
  </motion.div>
);

export function HeroSection() {
  const typedText = useTypewriter("Engineering Future Technologies", 100);
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
      <ParticleBackground />
      
      {/* Floating Elements */}
      <FloatingCard delay={0.5} className="top-20 right-10 hidden lg:block">
        <div className="flex items-center space-x-2 text-white">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-sm">5.0 Rating</span>
        </div>
      </FloatingCard>
      
      <FloatingCard delay={0.7} className="top-1/3 left-10 hidden lg:block">
        <div className="flex items-center space-x-2 text-white">
          <Users className="w-5 h-5 text-primary-400" />
          <span className="text-sm">50+ Clients</span>
        </div>
      </FloatingCard>
      
      <FloatingCard delay={0.9} className="bottom-1/3 right-20 hidden lg:block">
        <div className="flex items-center space-x-2 text-white">
          <Award className="w-5 h-5 text-green-400" />
          <span className="text-sm">100+ Projects</span>
        </div>
      </FloatingCard>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-primary-400"
              >
                <div className="w-12 h-0.5 bg-primary-400"></div>
                <span className="font-medium">Welcome to UmarCode</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-1 h-16 bg-primary-400 ml-2"
                />
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Transform your business with cutting-edge software solutions. We provide individual resources, complete teams, and end-to-end project delivery for modern enterprises.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { label: 'Projects Delivered', value: '100+' },
                { label: 'Happy Clients', value: '50+' },
                { label: 'Years Experience', value: '5+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    className="text-3xl font-bold text-primary-400 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >


              <Link to="/contact">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>


              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main gradient orb */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-conic from-primary-400 via-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"
              />
              
              {/* Floating tech icons */}
              {[
                { name: '⚛️', delay: 0, position: 'top-10 left-10' },
                { name: '🐍', delay: 0.2, position: 'top-20 right-20' },
                { name: '🟢', delay: 0.4, position: 'bottom-20 left-20' },
                { name: '📱', delay: 0.6, position: 'bottom-10 right-10' },
                { name: '🧠', delay: 0.8, position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tech.delay + 1, duration: 0.5 }}
                  className={`absolute ${tech.position} w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl animate-float`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}