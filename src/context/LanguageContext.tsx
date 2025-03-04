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
    'certificates.certificatesTitle': 'Professional Certifications',
    'certificates.view': 'View Certificate',

    // Project 1
    'project1.title': 'Infrastructure as Code',
    'project1.description': 'Implementation of a complete infrastructure on AWS using Terraform and Ansible. Automation of server, network, and service provisioning with a GitOps approach.',
    'project1.detailDescription': `This project involved setting up a complete infrastructure on AWS using Terraform for resource provisioning and Ansible for server configuration.

Key achievements include:
- Creation of a multi-AZ VPC with public and private subnets
- Deployment of auto-scaling EC2 instances behind a load balancer
- Configuration of an RDS database with replication
- Implementation of an S3 storage system for backups
- Complete deployment automation via CI/CD pipelines
- Implementation of security and monitoring best practices

All infrastructure code is versioned and follows a GitOps approach, allowing for reproducible and auditable deployments.`,

    // Project 2
    'project2.title': 'CI/CD Pipeline',
    'project2.description': 'Design and implementation of a complete CI/CD pipeline with Jenkins for a react application with json-server. Integration of automated tests, code analysis, and continuous deployment on Netlify.',
    'project2.detailDescription': `This project involved designing and implementing a complete CI/CD pipeline for a microservices architecture, using Jenkins as the main orchestration tool.

The pipeline includes the following stages:
- Continuous integration with automated unit and integration tests
- Static code analysis with SonarQube
- Building and publishing Docker images to a private registry
- Automated deployment to a Kubernetes cluster
- Post-deployment load and performance testing
- Automated monitoring and alerting

This solution reduced the deployment time for new features from several days to less than an hour, while significantly improving the quality and reliability of deployments.`,

    // Project 3
    'project3.title': 'Monitoring System',
    'project3.description': 'Implementation of a complete monitoring solution with Prometheus and Grafana to monitor application and infrastructure performance. Configuration of alerts and custom dashboards.',
    'project3.detailDescription': `This project involved setting up a comprehensive monitoring solution for cloud infrastructure and distributed applications, using Prometheus for metrics collection and Grafana for visualization.

Key features include:
- Real-time system and application metrics collection
- Custom dashboards for different teams (development, operations, management)
- Intelligent alerting system with automatic routing and escalation
- Integration with ticketing and communication systems (Slack, PagerDuty)
- Metrics historization for trend analysis and capacity planning

This solution significantly improved problem detection and resolution, reducing the mean time to resolution (MTTR) by 65%.`,

    // Project 4
    'project4.title': 'Authentication Mobile App',
    'project4.description': 'Development of a secure mobile application to verify the authenticity of driver\'s licenses and vehicle registration documents. Use of blockchain technology to ensure data integrity.',
    'project4.detailDescription': `This innovative project involved developing a mobile application that allows instant verification of the authenticity of driver's licenses and vehicle registration documents to combat document fraud.

Key features:
- Secure document scanning via smartphone camera
- Real-time verification against official databases
- Use of blockchain technology to ensure data integrity
- Two-factor authentication system for authorized users
- Timestamped verification history for audit purposes
- GDPR compliance with sensitive data encryption

The backend infrastructure was deployed on AWS with a highly available and secure architecture, using Docker containers orchestrated by Kubernetes to ensure service scalability and resilience.`,

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
    'certificates.certificatesTitle': 'Certifications Professionnelles',
    'certificates.view': 'Voir le Certificat',

    // Project 1
    'project1.title': 'Infrastructure as Code',
    'project1.description': 'Mise en place d\'une infrastructure complète sur AWS en utilisant Terraform et Ansible. Automatisation du provisionnement des serveurs, des réseaux et des services avec une approche GitOps.',
    'project1.detailDescription': `Ce projet a consisté à mettre en place une infrastructure complète sur AWS en utilisant Terraform pour le provisionnement des ressources et Ansible pour la configuration des serveurs.

Les principales réalisations incluent:
- Création d'un réseau VPC multi-AZ avec sous-réseaux publics et privés
- Déploiement d'instances EC2 auto-scalables derrière un équilibreur de charge
- Configuration d'une base de données RDS avec réplication
- Mise en place d'un système de stockage S3 pour les sauvegardes
- Automatisation complète du déploiement via des pipelines CI/CD
- Implémentation de bonnes pratiques de sécurité et de surveillance

L'ensemble du code d'infrastructure est versionné et suit une approche GitOps, permettant des déploiements reproductibles et auditables.`,

    // Project 2
    'project2.title': 'Pipeline CI/CD',
    'project2.description': 'Conception et implémentation d\'un pipeline CI/CD complet avec Jenkins pour une application React avec json-server. Intégration des tests automatisés, de l\'analyse de code et du déploiement continu sur Metlify.',
    'project2.detailDescription': `Ce projet a impliqué la conception et l'implémentation d'un pipeline CI/CD complet pour une architecture microservices, utilisant Jenkins comme outil principal d'orchestration.

Le pipeline comprend les étapes suivantes:
- Intégration continue avec tests unitaires et d'intégration automatisés
- Analyse statique du code avec SonarQube
- Construction et publication d'images Docker dans un registre privé
- Déploiement automatisé sur un cluster Kubernetes
- Tests de charge et de performance post-déploiement
- Surveillance et alertes automatisées

Cette solution a permis de réduire le temps de déploiement de nouvelles fonctionnalités de plusieurs jours à moins d'une heure, tout en améliorant considérablement la qualité et la fiabilité des déploiements.`,

    // Project 3
    'project3.title': 'Système de Monitoring',
    'project3.description': 'Mise en place d\'une solution de monitoring complète avec Prometheus et Grafana pour surveiller les performances des applications et de l\'infrastructure. Configuration d\'alertes et de tableaux de bord personnalisés.',
    'project3.detailDescription': `Ce projet a consisté à mettre en place une solution complète de monitoring pour une infrastructure cloud et des applications distribuées, en utilisant Prometheus pour la collecte de métriques et Grafana pour la visualisation.

Les principales fonctionnalités incluent:
- Collecte de métriques système et applicatives en temps réel
- Tableaux de bord personnalisés pour différentes équipes (développement, opérations, management)
- Système d'alerte intelligent avec routage et escalade automatiques
- Intégration avec les systèmes de ticketing et de communication (Slack, PagerDuty)
- Historisation des métriques pour l'analyse des tendances et la planification de capacité

Cette solution a permis d'améliorer considérablement la détection et la résolution des problèmes, réduisant le temps moyen de résolution (MTTR) de 65%.`,

    // Project 4
    'project4.title': 'App Mobile d\'Authentification',
    'project4.description': 'Développement d\'une application mobile sécurisée pour vérifier l\'authenticité des permis de conduire et cartes grises. Utilisation de la technologie blockchain pour garantir l\'intégrité des données.',
    'project4.detailDescription': `Ce projet innovant a consisté à développer une application mobile permettant de vérifier instantanément l'authenticité des permis de conduire et des cartes grises, afin de lutter contre la fraude documentaire.

Caractéristiques principales:
- Scan sécurisé des documents via l'appareil photo du smartphone
- Vérification en temps réel auprès des bases de données officielles
- Utilisation de la technologie blockchain pour garantir l'intégrité des données
- Système d'authentification à deux facteurs pour les utilisateurs autorisés
- Historique des vérifications avec horodatage pour les besoins d'audit
- Conformité RGPD avec chiffrement des données sensibles

L'infrastructure backend a été déployée sur AWS avec une architecture hautement disponible et sécurisée, utilisant des conteneurs Docker orchestrés par Kubernetes pour assurer l'évolutivité et la résilience du service.`,

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