import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from "react-router-dom";

const services = [
  {
    id: 'individual',
    icon: User,
    title: 'Individual Resources',
    description: 'Hire skilled developers on-demand for your specific project needs. Scale your team instantly with expert talent.',
    features: ['Flexible hiring models', 'Pre-vetted developers', 'Quick onboarding', 'Dedicated support'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team Outsourcing',
    description: 'Get a complete development team managed by us. Focus on your business while we handle the technical execution.',
    features: ['Complete team setup', 'Project management', 'Quality assurance', 'Regular reporting'],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'project',
    icon: Briefcase,
    title: 'Complete Projects',
    description: 'Full project handover from conception to deployment. We handle everything so you can focus on your business.',
    features: ['End-to-end delivery', 'Custom solutions', 'Post-launch support', 'Documentation'],
    color: 'from-purple-500 to-purple-600',
  },
];

export function ServicesSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Engagement Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need individual experts, complete teams, or full project delivery, 
            we have the perfect solution for your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full group">
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}

                  
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which model fits your needs?
          </p>


                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09qtgSM7qJcS5YCvyTW84DVw3Pasd_nEQ9vt4WAGMFClFroVzlwftJ8SaBQd7x4GLfi4L0oeXM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Schedule a Consultation
                  </Button>
                </a>



        </motion.div>
      </div>
    </section>
  );
}