import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    'language.toggle': 'FR',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Junior DevOps Engineer',
    'hero.description': 'I specialize in infrastructure automation, CI/CD, and cloud technologies to help companies optimize their development and deployment processes.',
    'hero.contact': 'Contact Me',
    'hero.projects': 'View My Projects',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate Junior DevOps Engineer Based in CONGO Brazzaville',
    'about.paragraph1': 'I am a junior DevOps engineer passionate about automation, continuous integration, and continuous deployment. With a solid background in system administration and hands-on experience with cloud technologies, I strive to create efficient pipelines and robust infrastructures.',
    'about.paragraph2': 'My approach to DevOps focuses on improving collaboration between development and operations teams, automating manual processes, and implementing scalable infrastructure solutions. I am constantly learning and keeping up with the latest technologies and industry best practices.',
    'about.name': 'Name:',
    'about.email': 'Email:',
    'about.location': 'Location:',
    'about.availability': 'Availability:',
    'about.availability.value': 'Full-time',
    'about.location.value': 'CONGO Brazzaville',
    'about.contact': 'Contact Me',

    // Skills
    'skills.title': 'My Skills',
    'skills.description': 'Here are some of the DevOps technologies and skills I have developed throughout my training and professional experiences.',
    'skills.other': 'Other Skills & Tools',

    // Projects
    'projects.title': 'My Projects',
    'projects.description': 'Here are some of the DevOps projects I have worked on. Each project represents different infrastructure and automation skills and technologies.',
    'projects.learnMore': 'Learn More',
    'projects.viewCode': 'View Code',
    'projects.viewProject': 'View Project',
    'projects.technologies': 'Technologies Used',
    'projects.moreGithub': 'See More on GitHub',

    // Certificates
    'certificates.title': 'Certificates & Diplomas',
    'certificates.description': 'My educational background and professional certifications in DevOps and cloud technologies.',
    'certificates.diplomasTitle': 'Academic Diplomas',
    'certificates.certificatesTitle': 'Professional Certifications / Badges',
    'certificates.view': 'View Certificate',

//     // Project 1
    'project1.title': 'Serverless Web Application on AWS',
    'project1.description': 'Building a scalable serverless web application fully hosted on AWS using AWS Lambda, DynamoDB, CloudFront, Route 53, and S3.',
    'project1.detailDescription': `A dynamic application enabling users to interact with a DynamoDB database through CRUD operations (Create, Read, Update, Delete) - all without managing a single server!.

Key Features:
- Serverless backend using AWS Lambda functions
- NoSQL database with Amazon DynamoDB for flexible data storage
- Content delivery through CloudFront CDN
- Custom domain configuration with Route 53
- Static asset hosting on S3


Technical Implementation:
- Created Lambda function to handle CRUD operations
- Implemented DynamoDB tables with optimized access patterns
- Set up CloudFront distribution with custom SSL certificate
- Configured Route 53 for domain management
- Established S3 bucket for static content hosting

The architecture ensures high availability, automatic scaling, and cost optimization through pay-per-use pricing models.`,


    // Project 2
    
 'project2.title': 'AWS VPC with React Application',
 'project2.description': 'Implementation of a complete AWS infrastructure with VPC, subnet, Internet Gateway, and a React application running on an EC2 instance.',
 'project2.detailDescription': `This project demonstrates the implementation of a secure and scalable AWS infrastructure hosting a React application.

Key Features:
- Custom VPC with public subnet
- Internet Gateway for public internet access
- EC2 instance running a React application
- Security groups for access control
- Elastic IP for stable public addressing
- Route tables for network traffic management

Technical Implementation:
- VPC created with CIDR block 10.0.0.0/16
- Public subnet with CIDR 10.0.1.0/24
- Internet Gateway attached to VPC
- Route table configured for internet access
- EC2 instance with Amazon Linux 2
- Nginx server configured as reverse proxy
- React application deployed with PM2
- Security group allowing HTTP/HTTPS traffic

The architecture ensures secure and reliable hosting of the React application while maintaining best practices for AWS networking.`,


    // Project 3
    'project3.title': 'Monitoring System',
    'project3.description': 'Implementation of a comprehensive monitoring solution with Prometheus and Grafana to monitor application and infrastructure performance. Configuration of alerts and custom dashboards.',
    'project3.detailDescription': `This project involved setting up a complete monitoring solution for a cloud infrastructure and distributed applications, using Prometheus for metric collection and Grafana for visualization.

The main features include:

Real-time system and application metric collection

Custom dashboards for different teams (development, operations, management)

Intelligent alerting system with automatic routing and escalation

Integration with ticketing and communication systems (Slack, PagerDuty, Gmail)

Metric historization for trend analysis and capacity planning

First, Prometheus is used to collect and store real-time metrics. This includes data such as CPU usage, memory, request rates, and more. 🖥️

For alert management, I integrated Alertmanager with Prometheus. This allows me to define specific alert rules and receive email notifications via Gmail when certain conditions are met, ensuring proactive system monitoring. 📧

I also configured Node Exporter, which is a tool for monitoring system metrics such as disk and network usage. Blackbox Exporter is used to monitor external endpoints and ensure they are accessible and functional. 📈

All these collected data are then visualized and presented in Grafana. Grafana allows creating interactive and customizable dashboards, offering a comprehensive and real-time view of the monitored systems' status. 🌐`,

    // Project 4

    'project4.title': 'Advanced AWS Networking',
 'project4.description': 'Design and implementation of a sophisticated AWS network architecture with public and private subnets, NAT Gateway, and advanced routing.',
 'project4.detailDescription': `This project showcases advanced AWS networking concepts with a focus on security and high availability.

Key Features:
- VPC with multiple subnets (public and private)
- NAT Gateway for private subnet internet access
- Advanced routing configuration
- Network ACLs for additional security
- Bastion host for secure access
- High availability design

Technical Implementation:
- VPC with CIDR block 10.0.0.0/16
- Public subnet (10.0.1.0/24) for internet-facing resources
- Private subnet (10.0.2.0/24) for protected resources
- NAT Gateway deployed in public subnet
- Custom route tables for both subnets
- Network ACLs with specific allow/deny rules
- Bastion host in public subnet for secure access
- Security groups configured for minimal access

This infrastructure demonstrates best practices for AWS networking, including security, scalability, and maintainability.`,



//  // Project 5

//     'project5.title': 'CI/CD Pipeline',
//     'project5.description': 'Design and implementation of a complete CI/CD pipeline with Jenkins for a React application using JSON-Server, including code analysis and continuous deployment on Netlify.',
//     'project5.detailDescription': `Recently, I developed a TodoList application using JSON-Server for the back-end and Axios for the front-end. I also set up a continuous integration and automatic deployment workflow.

// The pipeline includes the following steps:

// - Install dependencies
// - Build Application
// - Clean all of the containers
// - Staging-deploy App
// - Build for production
// - Deploy to Netlify . 

// 🐳 Dockerization I dockerized my application by creating a Dockerfile for the front-end and using Docker Compose to orchestrate the entire setup with JSON-Server, making my application easily deployable.

// ⚙️ Continuous Integration with Jenkins I configured a CI pipeline with Jenkins, which triggers on every commit. This pipeline checks the status of Docker images and my docker-compose.ymlfile, using secured credentials to access the necessary resources. I also used ngrok to expose the application locally and set up a webhook.

// 💻 Free Deployment on Netlify I chose Netlify to host my application. With every commit validation, my pipeline automatically deploys the changes with no additional effort.

// 🤩 Advantages 
// ✔️ Dockerization: Facilitates deployment and portability. 
// ✔️ Continuous Integration with Jenkins: Quickly validates code changes using secured credentials. 
// ✔️ Free Deployment: Significantly reduces infrastructure costs.`,


//  // Project 5

//  'project5.title': 'Authentication Mobile App',
//  'project5.description': 'Creation of a mobile app for Permit/Registration Card control.',
//  'project5.detailDescription': `This innovative project involved developing a mobile application that allows instant verification of the authenticity of driver's licenses and vehicle registration documents to combat document fraud.

//  I am thrilled to announce the launch of my mobile app for Permit and Registration Card control, developed with Flutter, Dart, and Firebase. This innovative solution aims to simplify and secure administrative verifications for traffic officers. 🚀

// With a user-friendly interface and robust features, the app allows efficient real-time document management. Users can log in, scan the QR code on their permit to verify its authenticity, and enter a registration card number to validate its information. 🌐

// Users can now securely store and access their information, thanks to Firebase integration. 🔒

// Feel free to test the app and share your feedback! 😊`,
 
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Do you have a project in mind or would you like to collaborate? Feel free to contact me using the form below.',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    'contact.sendMessage': 'Send Me a Message',
    'contact.yourName': 'Your Name',
    'contact.yourEmail': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.success': 'Thank you for your message! I will get back to you as soon as possible.',
    'contact.error': 'There was an error sending your message. Please try again or contact me directly via email.',

    // Footer
    'footer.description': 'Infrastructure automation and DevOps solutions for efficient and reliable deployments.',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.certificates': 'Certificats',
    'nav.contact': 'Contact',
    'language.toggle': 'EN',

    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Ingénieur DevOps Junior',
    'hero.description': 'Je me spécialise dans l\'automatisation des infrastructures, le CI/CD et les technologies cloud pour aider les entreprises à optimiser leurs processus de développement et de déploiement.',
    'hero.contact': 'Me Contacter',
    'hero.projects': 'Voir Mes Projets',

    // About
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'DevOps Junior Passionné Basé au CONGO Brazzaville',
    'about.paragraph1': 'Je suis un ingénieur DevOps junior passionné par l\'automatisation, l\'intégration continue et le déploiement continu. Avec une solide expérience et pratique des technologies cloud, je m\'efforce de créer des pipelines efficaces et des infrastructures robustes.',
    'about.paragraph2': 'Mon approche du DevOps se concentre sur l\'amélioration de la collaboration entre les équipes de développement et d\'opérations, l\'automatisation des processus manuels et la mise en place de solutions d\'infrastructure évolutives. Je suis constamment en train d\'apprendre et de me tenir au courant des dernières technologies et des meilleures pratiques du secteur.',
    'about.name': 'Nom:',
    'about.email': 'Email:',
    'about.location': 'Localisation:',
    'about.availability': 'Disponibilité:',
    'about.availability.value': 'Temps plein',
    'about.location.value': 'CONGO Brazzaville',
    'about.contact': 'Me Contacter',

    // Skills
    'skills.title': 'Mes Compétences',
    'skills.description': 'Voici quelques-unes des technologies et compétences DevOps que j\'ai développées au fil de ma formation et de mes expériences professionnelles.',
    'skills.other': 'Autres Compétences & Outils',

    // Projects
    'projects.title': 'Mes Projets',
    'projects.description': 'Voici quelques-uns des projets DevOps sur lesquels j\'ai travaillé. Chaque projet représente différentes compétences et technologies d\'infrastructure et d\'automatisation.',
    'projects.learnMore': 'En savoir plus',
    'projects.viewCode': 'Voir le code',
    'projects.viewProject': 'Voir le projet',
    'projects.technologies': 'Technologies utilisées',
    'projects.moreGithub': 'Voir Plus sur GitHub',

    // Certificates
    'certificates.title': 'Certificats & Diplômes',
    'certificates.description': 'Mon parcours académique et mes certifications professionnelles en DevOps et technologies cloud.',
    'certificates.diplomasTitle': 'Diplômes Académiques',
    'certificates.certificatesTitle': 'Certifications / Badges Professionnelles',
    'certificates.view': 'Voir le Certificat',

//project 1
    'project1.title': 'Application Web Serverless sur AWS',
    'project1.description': 'Construction d\'une application web serverless évolutive entièrement hébergée sur AWS utilisant AWS Lambda, DynamoDB, CloudFront, Route 53 et S3. ',
    'project1.detailDescription': `Une application dynamique permettant aux utilisateurs d'interagir avec une base de données DynamoDB via des opérations CRUD (Create, Read, Update, Delete), le tout sans gérer un seul serveur !.

Fonctionnalités principales :
- Backend serverless utilisant les fonctions AWS Lambda
- Base de données NoSQL avec Amazon DynamoDB pour un stockage flexible des données
- Distribution de contenu via le CDN CloudFront
- Configuration de domaine personnalisé avec Route 53
- Hébergement d'actifs statiques sur S3

Implémentation technique :
- Création d'une fonction Lambda pour gérer les opérations CRUD
- Implémentation de tables DynamoDB avec des modèles d'accès optimisés
- Configuration de la distribution CloudFront avec certificat SSL personnalisé
- Configuration de Route 53 pour la gestion des domaines
- Mise en place d'un bucket S3 pour l'hébergement de contenu statique

L'architecture assure une haute disponibilité, une mise à l'échelle automatique et une optimisation des coûts grâce aux modèles de tarification à l'usage.`,


//     // Project 2
//     'project2.title': 'Pipeline CI/CD',
//     'project2.description': 'Conception et implémentation d\'un pipeline CI/CD complet avec Jenkins pour une application React avec json-server. de l\'analyse de code et du déploiement continu sur Netlify.',
//     'project2.detailDescription': `Récemment, j'ai développé une application TodoList avec JSON-Server pour le back-end et Axios pour le front-end. J'ai également mis en place un workflow d'intégration continue et de déploiement automatique.

// Le pipeline comprend les étapes suivantes:
// - Installer les dépendances
// - Builder l'application
// - supprimer tous les containers
// - Déploiement en staging
// - Builder pour la production
// - Deployer sur Netlify

// 🐳 Dockerisation
// J'ai dockerisé mon application en créant un Dockerfile pour le front-end et en utilisant Docker Compose pour orchestrer l'ensemble avec JSON-Server, rendant ainsi mon application facilement déployable.

// ⚙️ Intégration continue avec Jenkins
// J'ai configuré un pipeline CI avec Jenkins, qui se déclenche à chaque commit. Ce pipeline vérifie l'état des images Docker et de mon fichier docker-compose.yml, en utilisant des credentials sécurisés pour accéder aux ressources nécessaires. J'ai également utilisé ngrok pour exposer l'application localement et configurer un webhook.

// 💻 Déploiement gratuit sur Netlify
// J'ai choisi Netlify pour héberger mon application. À chaque validation de commit, mon pipeline déploie automatiquement les changements, sans effort supplémentaire.

// 🤩 Les avantages
//  ✔️Dockerisation : Facilite le déploiement et la portabilité.
//  ✔️Intégration continue avec Jenkins : Valide rapidement les modifications de code tout en utilisant des credentials sécurisés.
//  ✔️Déploiement gratuit : Réduit considérablement les coûts d'infrastructure.

// `,


    // Projet 2
'project2.title': 'VPC AWS avec une Application React',
'project2.description': 'Mise en place d\'une infrastructure AWS complète avec VPC, sous-réseau, Internet Gateway et une application React exécutée sur une instance EC2.',
'project2.detailDescription': `Ce projet illustre la mise en œuvre d'une infrastructure AWS sécurisée et évolutive hébergeant une application React.

Fonctionnalités clés :
- VPC personnalisé avec un sous-réseau public
- Internet Gateway pour l'accès public à Internet
- Instance EC2 exécutant une application React
- Groupes de sécurité pour le contrôle d'accès
- IP Elastic pour une adressage public stable
- Tables de routage pour la gestion du trafic réseau

Mise en œuvre technique :
- VPC créé avec le bloc CIDR 10.0.0.0/16
- Sous-réseau public avec CIDR 10.0.1.0/24
- Internet Gateway attaché au VPC
- Table de routage configurée pour l'accès Internet
- Instance EC2 avec Amazon Linux 2
- Serveur Nginx configuré en tant que proxy inverse
- Application React déployée avec 
- Groupe de sécurité autorisant le trafic HTTP/HTTPS

L'architecture garantit un hébergement sécurisé et fiable de l'application React tout en respectant les bonnes pratiques de mise en réseau AWS.`,
    




    // Project 3
    'project3.title': 'Système de Monitoring',
    'project3.description': 'Mise en place d\'une solution de monitoring complète avec Prometheus et Grafana pour surveiller les performances des applications et de l\'infrastructure. Configuration d\'alertes et de tableaux de bord personnalisés.',
    'project3.detailDescription': `Ce projet a consisté à mettre en place une solution complète de monitoring pour une infrastructure cloud et des applications distribuées, en utilisant Prometheus pour la collecte de métriques et Grafana pour la visualisation.

Les principales fonctionnalités incluent:
- Collecte de métriques système et applicatives en temps réel
- Tableaux de bord personnalisés pour différentes équipes (développement, opérations, management)
- Système d'alerte intelligent avec routage et escalade automatiques
- Intégration avec les systèmes de ticketing et de communication (Slack, PagerDuty, gmail)
- Historisation des métriques pour l'analyse des tendances et la planification de capacité

Tout d'abord, Prometheus est utilisé pour collecter et stocker des métriques en temps réel. Cela inclut des données telles que l'utilisation du CPU, la mémoire, les taux de requêtes, etc. 🖥️


Pour la gestion des alertes, j'ai intégré Alertmanager à Prometheus. Cela me permet de définir des règles d'alerte spécifiques et de recevoir des notifications par email sur Gmail lorsque certaines conditions sont remplies, garantissant ainsi une surveillance proactive des systèmes. 📧


J'ai également configuré Node Exporter, qui est un outil permettant de surveiller les métriques du système, comme l'utilisation du disque et du réseau. Blackbox Exporter, quant à lui, permet de surveiller les points de terminaison externes et de s'assurer qu'ils sont accessibles et fonctionnels. 📈


Toutes ces données collectées sont ensuite visualisées et présentées dans Grafana. Grafana permet de créer des tableaux de bord interactifs et personnalisables, offrant une vue complète et en temps réel de l'état des systèmes surveillés. 🌐`,


// Projet 4
'project4.title': 'Réseau AWS Avancé',
'project4.description': 'Conception et implémentation d\'une architecture réseau AWS sophistiquée avec sous-réseaux publics/privés, NAT Gateway et routage avancé.',
'project4.detailDescription': `Ce projet met en œuvre des concepts réseaux AWS avancés avec un accent sur la sécurité et la haute disponibilité.

Fonctionnalités clés :
- VPC avec multiples sous-réseaux (publics et privés)
- NAT Gateway pour l'accès Internet des sous-réseaux privés
- Configuration de routage avancée
- ACLs réseau pour une sécurité renforcée
- Hôte bastion pour un accès sécurisé
- Conception haute disponibilité

Implémentation technique :
- VPC avec bloc CIDR 10.0.0.0/16
- Sous-réseau public (10.0.1.0/24) pour les ressources exposées
- Sous-réseau privé (10.0.2.0/24) pour les ressources protégées
- NAT Gateway déployé dans le sous-réseau public
- Tables de routage personnalisées pour chaque sous-réseau
- ACLs réseau avec règles allow/deny spécifiques
- Hôte bastion dans le sous-réseau public pour accès sécurisé
- Groupes de sécurité configurés pour un accès minimal

Cette infrastructure démontre les bonnes pratiques pour les réseaux AWS, incluant sécurité, scalabilité et maintenabilité.`,


//     // Project 4
//     'project4.title': 'App Mobile d\'Authenticité',
//     'project4.description': 'Création d\'une app mobile pour le contrôle Permis/Carte grise',
//     'project4.detailDescription': `Ce projet innovant a consisté à développer une application mobile permettant de vérifier instantanément l'authenticité des permis de conduire et des cartes grises, afin de lutter contre la fraude documentaire.

// Je suis ravi d'annoncer le lancement de mon application mobile pour le contrôle des Permis et Cartes Grises, développée avec Flutter, Dart et Firebase. Cette solution innovante vise à simplifier et à sécuriser les vérifications administratives pour les agents de la circulation. 🚀


// Avec une interface conviviale et des fonctionnalités robustes, l'application permet une gestion efficace des documents en temps réel. Les utilisateurs peuvent se connecter, scanner le code QR sur leur permis pour vérifier son authenticité, et entrer un numéro de carte grise pour valider ses informations. 🌐


// Les utilisateurs peuvent désormais stocker et accéder à leurs informations en toute sécurité, grâce à l'intégration de Firebase. 🔒


// N'hésitez pas à tester l'application et à partager vos retours ! 😊

//     `,

    // Contact
    'contact.title': 'Contactez-Moi',
    'contact.subtitle': 'Vous avez un projet en tête ou vous souhaitez collaborer ? N\'hésitez pas à me contacter en utilisant le formulaire ci-dessous.',
    'contact.info': 'Informations de Contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-moi',
    'contact.sendMessage': 'Envoyez-moi un Message',
    'contact.yourName': 'Votre Nom',
    'contact.yourEmail': 'Votre Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.sending': 'Envoi en cours...',
    'contact.send': 'Envoyer le Message',
    'contact.success': 'Merci pour votre message ! Je vous répondrai dès que possible.',
    'contact.error': 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ou me contacter directement par email.',

    // Footer
    'footer.description': 'Automatisation d\'infrastructure et solutions DevOps pour des déploiements efficaces et fiables.',
    'footer.rights': 'Tous droits réservés.',
  }
};


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
