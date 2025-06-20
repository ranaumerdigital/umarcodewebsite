import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Headphones } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['Kahror Pacca, Punjab', 'Pakistan'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+923255709047', 'Available 9 AM - 6 PM PKT'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['contact@umarcode.com', 'We reply within 24 hours'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 4 PM'],
    color: 'from-orange-500 to-orange-600'
  }
];

const services = [
  { id: 'individual', name: 'Individual Resource Hiring' },
  { id: 'team', name: 'Team Outsourcing' },
  { id: 'project', name: 'Complete Project Handover' },
  { id: 'consulting', name: 'Technical Consulting' },
  { id: 'support', name: 'Maintenance & Support' },
  { id: 'other', name: 'Other Services' }
];

const urgencyLevels = [
  { id: 'low', name: 'Low - General Inquiry' },
  { id: 'medium', name: 'Medium - Project Discussion' },
  { id: 'high', name: 'High - Urgent Requirement' },
  { id: 'critical', name: 'Critical - Immediate Assistance' }
];

export function Contact() {
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center group h-full">
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
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
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Let's Start a Conversation</h3>
                    <p className="text-primary-100">We're here to help bring your ideas to life</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex items-center space-x-3">
                    <Send className="w-5 h-5 text-green-300" />
                    <span className="text-sm">Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-300" />
                    <span className="text-sm">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones className="w-5 h-5 text-green-300" />
                    <span className="text-sm">Expert Support</span>
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mjkrewgn"
                method="POST"
                className="p-8 space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://umarcode.com/thank-you" />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Full Name *" name="name" placeholder="John Doe" required />
                  <Input label="Email Address *" name="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Company" name="company" placeholder="Your Company" />
                  <Input label="Phone Number" name="phone" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                    <select
                      name="urgency"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select urgency</option>
                      {urgencyLevels.map((level) => (
                        <option key={level.id} value={level.name}>{level.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                  <div className="grid grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="contactMethod" value="email" required className="mr-2" />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contactMethod" value="phone" required className="mr-2" />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contactMethod" value="both" required className="mr-2" />
                      Both
                    </label>
                  </div>
                </div>

                <Textarea
                  label="Message *"
                  name="message"
                  placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                  required
                  rows={6}
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
    </div>
  );
}