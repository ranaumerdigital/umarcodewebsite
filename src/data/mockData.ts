import { Technology, CaseStudy, BlogPost } from '../types';

export const technologies: Technology[] = [
  {
    id: '1',
    name: 'React.js',
    icon: '⚛️',
    category: 'frontend',
    description: 'Modern React applications with hooks and performance optimization'
  },
  {
    id: '2',
    name: 'Next.js',
    icon: '▲',
    category: 'frontend',
    description: 'Full-stack React framework with SSR and SSG capabilities'
  },
  {
    id: '3',
    name: 'Node.js',
    icon: '🟢',
    category: 'backend',
    description: 'Scalable server-side applications with Express.js'
  },
  {
    id: '4',
    name: 'Python',
    icon: '🐍',
    category: 'backend',
    description: 'Django and FastAPI applications for robust backend solutions'
  },
  {
    id: '5',
    name: 'MongoDB',
    icon: '🍃',
    category: 'database',
    description: 'NoSQL database solutions for modern applications'
  },
  {
    id: '6',
    name: 'PostgreSQL',
    icon: '🐘',
    category: 'database',
    description: 'Relational database with advanced features and performance'
  },
  {
    id: '7',
    name: 'React Native',
    icon: '📱',
    category: 'mobile',
    description: 'Cross-platform mobile applications'
  },
  {
    id: '8',
    name: 'TensorFlow',
    icon: '🧠',
    category: 'ai',
    description: 'Machine learning and AI-powered solutions'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Modernization',
    description: 'Complete redesign and development of a multi-vendor e-commerce platform serving 50,000+ users.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'E-Commerce',
    client: 'TechMart Solutions',
    duration: '6 months',
    results: ['300% increase in conversion rate', '50% reduction in load time', '99.9% uptime achieved']
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Development of an intelligent analytics platform with machine learning capabilities for data insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React.js', 'PostgreSQL'],
    category: 'AI/ML',
    client: 'DataInsights Corp',
    duration: '8 months',
    results: ['Real-time data processing', 'Predictive analytics implementation', '40% cost reduction in operations']
  },
  {
    id: '3',
    title: 'Mobile Banking Application',
    description: 'Secure mobile banking app with biometric authentication and real-time transaction processing.',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'FinTech',
    client: 'SecureBank Ltd',
    duration: '10 months',
    results: ['500,000+ downloads', 'Bank-grade security implemented', '95% user satisfaction rate']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to serverless architectures.',
    content: 'Full article content here...',
    author: 'Umar Ali',
    publishedAt: '2024-01-15',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'Technology', 'AI'],
    slug: 'future-of-web-development-2024',
    seoTitle: 'Future of Web Development 2024 | UmarCode Blog',
    seoDescription: 'Discover the latest web development trends for 2024 including AI integration, serverless architecture, and more.'
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn how to structure and optimize React applications for maximum performance and maintainability.',
    content: 'Full article content here...',
    author: 'Umar Ali',
    publishedAt: '2024-01-10',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Performance', 'Best Practices'],
    slug: 'scalable-react-applications-best-practices',
    seoTitle: 'Scalable React Applications Best Practices | UmarCode',
    seoDescription: 'Learn best practices for building scalable React applications with performance optimization techniques.'
  }
];