import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden',
        hover && 'hover:shadow-2xl cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}