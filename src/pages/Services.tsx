import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import toast from 'react-hot-toast';

interface ServiceFormData {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  projectDetails: string;
  budget: string;
  timeline: string;
}

const serviceDetails = [
  {
    id: 'individual',
    icon: User,
    title: 'Individual Resource Hiring',
    description: 'Scale your team with expert developers on-demand',
    features: [
      'Pre-vetted senior developers',
      'Flexible engagement models (hourly, part-time, full-time)',
      'Quick onboarding process (24-48 hours)',
      'Direct communication with developers',
      'Performance monitoring and reporting',
      'Risk-free trial period'
    ],
    process: [
      'Define your requirements',
      'Review developer profiles',
      'Interview selected candidates',
      'Start with trial period',
      'Scale as needed'
    ],
    pricing: 'Starting from $25/hour',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team Outsourcing',
    description: 'Get a complete managed development team',
    features: [
      'Complete team setup with team lead',
      'Project management included',
      'Daily standup meetings',
      'Weekly progress reports',
      'Quality assurance process',
      'Agile development methodology'
    ],
    process: [
      'Project scope analysis',
      'Team composition planning',
      'Team assembly and training',
      'Sprint planning and execution',
      'Regular reviews and adjustments'
    ],
    pricing: 'Starting from $8,000/month',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'project',
    icon: Briefcase,
    title: 'Complete Project Handover',
    description: 'End-to-end project delivery with full ownership',
    features: [
      'Complete project analysis and planning',
      'Custom solution architecture',
      'Full development and testing',
      'Deployment and launch support',
      'Documentation and training',
      '3-month post-launch support'
    ],
    process: [
      'Requirements gathering',
      'Project proposal and timeline',
      'Development and testing phases',
      'User acceptance testing',
      'Deployment and handover'
    ],
    pricing: 'Starting from $15,000',
    color: 'from-purple-500 to-purple-600'
  }
];

export function Services() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ServiceFormData>();

  const onSubmit = async (data: ServiceFormData) => {
    try {
      const response = await fetch('https://formspree.io/f/xwpbnooy', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Your request has been submitted! We\'ll contact you within 24 hours.');
        reset();
      } else {
        toast.error(result?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect engagement model for your business needs. From individual experts to complete project delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">Starting Price</span>
                      <span className="text-2xl font-bold text-primary-600">{service.pricing}</span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Process</h3>
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                              {idx + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Tell us about your project and we'll provide a customized solution.</p>
          </motion.div>

          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  {...register('name', { required: 'Name is required' })}
                  error={errors.name?.message}
                />
                <Input
                  label="Email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  error={errors.email?.message}
                />
              </div>

              <Input
                label="Company (Optional)"
                {...register('company')}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select
                  {...register('serviceType', { required: 'Please select a service type' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select a service</option>
                  <option value="individual">Individual Resource Hiring</option>
                  <option value="team">Team Outsourcing</option>
                  <option value="project">Complete Project Handover</option>
                </select>
                {errors.serviceType && <p className="text-sm text-red-600 mt-1">{errors.serviceType.message}</p>}
              </div>

              <Textarea
                label="Project Details"
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                {...register('projectDetails', { required: 'Project details are required' })}
                error={errors.projectDetails?.message}
                rows={5}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    {...register('budget', { required: 'Please select a budget range' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                  {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    {...register('timeline', { required: 'Please select a timeline' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                  {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Request'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
