import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projectTypes = [
  'Web Application Development',
  'Mobile App Development',
  'E-commerce Platform',
  'Custom Software Solution',
  'AI/ML Integration',
  'API Development',
  'Database Design',
  'Cloud Migration',
  'DevOps & Infrastructure',
  'UI/UX Design',
  'Other'
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000+',
  'Let\'s discuss'
];

export function ContactSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Start Your Project</h3>
                  <p className="text-primary-100">Get a free consultation and project estimate</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">24h Response Time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Custom Solutions</span>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xeoklggk"
              method="POST"
              className="p-8 space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://umarcode.com/thank-you" />

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name *" name="fullName" placeholder="John Doe" required />
                <Input label="Email Address *" name="email" type="email" placeholder="john@company.com" required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Company" name="company" placeholder="Your Company" />
                <Input label="Phone Number" name="phone" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Textarea
                label="Project Description *"
                name="description"
                placeholder="Tell us about your project, goals, and any specific requirements..."
                required
                rows={5}
              />

              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
