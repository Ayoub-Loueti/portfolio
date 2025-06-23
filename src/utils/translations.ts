import { Language } from '../types';

export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    contact: 'Contact',
    themes: 'Thèmes',
    
    // Home
    fullStackDeveloper: 'Développeur Full Stack',
    phone: 'Téléphone',
    email: 'Email',
    location: 'Localisation',
    degrees: 'Diplômes',
    socialMedia: 'Réseaux Sociaux',
    
    // About
    aboutMe: 'À propos de moi',
    downloadCV: 'Télécharger CV',
    technicalExpertise: 'Expertise Technique',
    programmingLanguages: 'Langages de Programmation',
    backendDevelopment: 'Développement Backend',
    frontendDevelopment: 'Développement Frontend',
    uiuxDesign: 'Design UI/UX',
    toolsTechnologies: 'Outils & Technologies',
    softSkills: 'Compétences Transversales',
    
    // Projects
    myProjects: 'Mes Projets',
    technologiesUsed: 'Technologies utilisées',
    demo: 'Démo',
    source: 'Source',
    
    // Contact
    contactMe: 'Me Contacter',
    contactInformation: 'Informations de Contact',
    sendMessage: 'Envoyer un Message',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer',
    
    // Themes
    selectTheme: 'Choisir un Thème',
    selectLanguage: 'Choisir une Langue',
    lightTheme: 'Thème Clair',
    darkTheme: 'Thème Sombre',
    french: 'Français',
    english: 'Anglais',
    arabic: 'العربية'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    themes: 'Themes',
    
    // Home
    fullStackDeveloper: 'Full Stack Developer',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    degrees: 'Degrees',
    socialMedia: 'Social Media',
    
    // About
    aboutMe: 'About Me',
    downloadCV: 'Download CV',
    technicalExpertise: 'Technical Expertise',
    programmingLanguages: 'Programming Languages',
    backendDevelopment: 'Backend Development',
    frontendDevelopment: 'Frontend Development',
    uiuxDesign: 'UI/UX Design',
    toolsTechnologies: 'Tools & Technologies',
    softSkills: 'Soft Skills',
    
    // Projects
    myProjects: 'My Projects',
    technologiesUsed: 'Technologies Used',
    demo: 'Demo',
    source: 'Source',
    
    // Contact
    contactMe: 'Contact Me',
    contactInformation: 'Contact Information',
    sendMessage: 'Send Message',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    
    // Themes
    selectTheme: 'Select Theme',
    selectLanguage: 'Select Language',
    lightTheme: 'Light Theme',
    darkTheme: 'Dark Theme',
    french: 'Français',
    english: 'English',
    arabic: 'العربية'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عني',
    projects: 'المشاريع',
    contact: 'اتصل بي',
    themes: 'المظاهر',
    
    // Home
    fullStackDeveloper: 'مطور برمجيات شامل',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    degrees: 'الشهادات',
    socialMedia: 'وسائل التواصل',
    
    // About
    aboutMe: 'عني',
    downloadCV: 'تحميل السيرة الذاتية',
    technicalExpertise: 'الخبرة التقنية',
    programmingLanguages: 'لغات البرمجة',
    backendDevelopment: 'تطوير الخادم',
    frontendDevelopment: 'تطوير الواجهة',
    uiuxDesign: 'تصميم واجهة المستخدم',
    toolsTechnologies: 'الأدوات والتقنيات',
    softSkills: 'المهارات الناعمة',
    
    // Projects
    myProjects: 'مشاريعي',
    technologiesUsed: 'التقنيات المستخدمة',
    demo: 'عرض',
    source: 'المصدر',
    
    // Contact
    contactMe: 'اتصل بي',
    contactInformation: 'معلومات الاتصال',
    sendMessage: 'إرسال رسالة',
    subject: 'الموضوع',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Themes
    selectTheme: 'اختر المظهر',
    selectLanguage: 'اختر اللغة',
    lightTheme: 'المظهر الفاتح',
    darkTheme: 'المظهر الداكن',
    french: 'Français',
    english: 'English',
    arabic: 'العربية'
  }
};

export const getTranslation = (key: string, language: Language): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};