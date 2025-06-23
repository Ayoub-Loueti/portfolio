export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  email: string;
  location: string;
}

export type Theme = 'light' | 'dark';
export type Language = 'fr' | 'en' | 'ar';

export interface PersonalInfo {
  name: string;
  title: string;
  profileImage: string;
  degrees: string[];
  certifications: string[];
  about: string;
}