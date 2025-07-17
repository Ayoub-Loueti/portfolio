import { PersonalInfo, ContactInfo, Project } from '../types';
import club22Image from './imagepPoject/club22login.jpg';
import polyRHIMAGE from './imagepPoject/polyRH.png';
import DriveShareImage from './imagepPoject/DriveShare.png';
import Aandekchi from './imagepPoject/aandkechi.png';
import VirtualCampus from './imagepPoject/VirtualCampus.png';
import PortfolioImage from './imagepPoject/portfolio.png';
import profileImagee from './ayoub_picture.jpg';
import posteChatImage from './imagepPoject/posetChat.png';
import midaImage from './imagepPoject/MidaImage.png';
import GamingImage from './imagepPoject/GamingShop.png';

export const personalInfo: PersonalInfo = {
  name: 'Ayoub Loueti',
  title: 'Développeur Full Stack',
  profileImage: profileImagee,
  degrees: [
    'Future ingénierie en Informatique, Réseaux et Médias',
    'Licence en technologie de l’informatique',
    'Baccalauréat informatique'
  ],
  certifications: [
    'IT Specialist in Java by Certiport',
    'IT Specialist – Data Analytics',
    'Contrôle de version avec Git',
    'HTML, CSS et Javascript pour les développeurs web'
  ],
  about: `Développeur Full Stack passionné spécialisé dans la création d'applications web et mobiles innovantes. 
  
  Expert dans les technologies modernes comme React, Node.js, Python et JavaScript, je transforme des idées complexes en solutions digitales élégantes et performantes.
  
  Mon expertise couvre l'ensemble du cycle de développement : de la conception UX/UI jusqu'au déploiement en production, en passant par l'optimisation des performances et la sécurité.
  
  Toujours à l'affût des dernières tendances technologiques, j'aime relever des défis techniques stimulants et créer des produits qui font la différence.`
};

export const contactInfo: ContactInfo = {
  phone: '+216 53 112 327',
  whatsapp: '+216 53 112 327',
  github: 'https://github.com/Ayoub-Loueti',
  linkedin: 'https://www.linkedin.com/in/ayoub-loueti-26666725b/',
  facebook: 'https://www.facebook.com/ayoub.loueti.2025/',
  instagram: 'https://www.instagram.com/ayoub_loueti/',
  email: 'ayoub.loueti1@gmail.com',
  location: 'Tunis, Tunisie'
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Club22',
    description: 'Plateforme permettra aux internautes de partager leurs expériences et exprimer leurs avis par la publication de leurs bons plans. Pour les employés, ils peuvent réserver des offres chez des agences et enseignes collaboratrices avec la compagnie Ooredoo.',
    image: club22Image,
    technologies: ['React', 'Node.js', 'Express Js', 'MySQL', 'Socket.io','Figma'],
    demoUrl: 'https://www.youtube.com/watch?v=1dvlD_aHi4E',
    sourceUrl: 'https://github.com/Ayoub-Loueti/club22'
  },
  {
    id: '2',
    title: 'PolyRH',
    description: 'PolyRH est une application de tableau de bord interactif dédiée à la gestion des KPI RH (absences, turnover, performances), intégrant prédiction, analyse de bien-être, filtres dynamiques, sécurité par rôle et génération automatisée de rapports.',
    image: polyRHIMAGE ,
    technologies: ['React', 'Vite.js', 'Express', 'MySQL',],
    demoUrl: 'https://www.youtube.com/watch?v=bkgNLleq9zc',
    sourceUrl: 'https://github.com/Ayoub-Loueti/Poly-RH'
  },
  {
    id: '3',
    title: 'DriveShare',
    description: 'DriveShare est une application de covoiturage intuitive permettant aux conducteurs de publier leurs trajets, aux passagers de réserver facilement, et aux administrateurs de gérer les utilisateurs, véhicules, réclamations et réservations en toute simplicité.',
    image: DriveShareImage,
    technologies: ['React', 'Node.js', 'Express Js', 'MySQL'],
    demoUrl: 'https://www.youtube.com/watch?v=sxVX4NEHUgk',
    sourceUrl: 'https://github.com/Ayoub-Loueti/couvoiturage'
  },
  {
    id: '4',
    title: '3andekchi Shkoon',
    description: '3andekchi Shkoon est une application tunisienne qui connecte ceux ayant besoin d’aide (tâches ménagères, cours, réparations…) avec des personnes disponibles à proximité. Elle facilite les échanges via géolocalisation, messagerie et système de notation fiable.',
    image: Aandekchi,
    technologies: ['React Native', 'Node.Js', 'Express JS', 'MongoDB'],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/3andekchi_shkoon'
  },
  {
    id: '5',
    title: 'Virtual Campus',
    description: 'VirtualCampus est une application JavaFX simulant un campus intelligent, gérant bâtiments, étudiants, personnel et ressources. Elle intègre événements aléatoires, interface graphique dynamique, statistiques, et base de données pour une expérience immersive de gestion universitaire.',
    image: VirtualCampus,
    technologies: ['JavaFX' , 'Java' ,'MySQL' ],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/virtualCampus'
  },
  {
    id: '6',
    title: 'Portfolio',
    description: 'Portfolio interactif présentant mes projets, compétences et expériences. Conçu avec une interface moderne et responsive, il met en valeur mes réalisations techniques à travers des descriptions, visuels et liens externes.',
    image: PortfolioImage,
    technologies: ['React' , 'emailjs-com' ,'predeploy' ],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/portfolio'
  },
  {
    id: '7',
    title: 'Poste Chat',
    description: 'PosteChat est une application web de messagerie en temps réel permettant aux utilisateurs de discuter, créer des groupes et partager des messages instantanément, le tout dans une interface conviviale.',
    image: posteChatImage,
    technologies: ['React' , 'NodeJs' ,'ExpressJs','MongoDB','SocketIO','ChakraUI' ],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/PosteChat'
  },
  {
    id: '8',
    title: 'Mida',
    description: 'Mida est une application web moderne pour restaurant, permettant aux utilisateurs de consulter le menu, réserver une table, parcourir une galerie de plats et gérer leur compte. Elle offre une interface responsive et une gestion dynamique des réservations.',
    image: midaImage,
    technologies: ['PHP' , 'MySQL' ,'JavaScript' ],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/Mida'
  },
  {
    id: '9',
    title: 'Gaming Shop',
    description: 'Gaming Shop est une application mobile multiplateforme pour la gestion d une boutique en ligne. Elle permet aux utilisateurs de parcourir des produits, gérer leur panier, passer des commandes et consulter l historique d achats.',
    image: GamingImage,
    technologies: ['C#', '.NET', 'Xamarin.Forms', 'MVVM'],
    demoUrl: '',
    sourceUrl: 'https://github.com/Ayoub-Loueti/GamingShop'
  }
];

export const technicalSkills = {
  programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#','C','C++', 'PHP', 'HTML', 'CSS'],
  backendDevelopment: ['Node.js', 'Express',  'Spring Boot', ],
  frontendDevelopment: ['React', 'Vue.js', 'Angular', 'Next.js', 'React Native', 'Flutter', 'Bootstrap'],
  uiuxDesign: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva'],
  toolsTechnologies: ['Git',  'MongoDB',  'MySQL', 'Redis',  'Postman'],
  softSkills: ['Résolution de Problèmes', 'Travail en Équipe', 'Communication', 'Créativité', 'Adaptabilité', 'Apprentissage Continu']
};