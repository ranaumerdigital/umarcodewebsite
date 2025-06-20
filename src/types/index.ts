export interface ServiceForm {
  id: string;
  type: 'individual' | 'team' | 'project';
  title: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'ai';
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
  slug: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  serviceType?: string;
  submittedAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}