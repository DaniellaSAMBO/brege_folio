import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Ch0 from '../components/assets/C0.png';
import Ch1 from '../components/assets/C1.png';
import Ch2 from '../components/assets/C2.png';
import Ch3 from '../components/assets/C3.png';
import Ch4 from '../components/assets/C4.png';
import ph1 from '../components/assets/ph1.png';
import ph2 from '../components/assets/ph2.png';
import ph3 from '../components/assets/ph3.png';
import ph4 from '../components/assets/ph4.png';
import serverless from '../components/assets/serverless.jpeg';
import preuve1 from '../components/assets/preuve1.png';
import preuve2 from '../components/assets/preuve2.png';
import preuve3 from '../components/assets/preuve3.png';
import preuve4 from '../components/assets/preuve4.png';
import RA from '../components/assets/RA.jpeg';
import AWI from '../components/assets/AWI.jpg';
import shop1 from '../components/assets/shop1.png';
import shop2 from '../components/assets/shop2.png';
import shop3 from '../components/assets/shop3.png';
import archi1 from '../components/assets/archi1.png';
import archi2 from '../components/assets/archi2.png';
import archi3 from '../components/assets/archi3.png';
import archi4 from '../components/assets/archi4.png';

interface Project {
  id: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  detailImages?: string[];
}



const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageModalRef = useRef<HTMLDivElement>(null);

  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
        setSelectedImage(null);
      }
    };
  
    if (selectedProject && !selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject, selectedImage]);

  useEffect(() => {
    const handleImageModalClickOutside = (event: MouseEvent) => {
      if (imageModalRef.current && !imageModalRef.current.contains(event.target as Node)) {
        setSelectedImage(null);
      }
    };
  
    if (selectedImage) {
      document.addEventListener('mousedown', handleImageModalClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleImageModalClickOutside);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage, selectedProject]);
  
  

  const projects = [

    {
      id: 'project1',
      image: serverless,
      tags: ['AWS Lambda', 'DynamoDB', 'CloudFront', 'Route 53', 'S3', 'Serverless'],
      
      githubUrl: 'https://github.com/Brege-NG/Serverless_app',
      detailImages: [
        preuve1,
        preuve2,
        preuve3,
        preuve4,
      ]
    },

    {
      id: 'project2',
      image: RA,
      tags: ['AWS', 'VPC', 'EC2', 'React', 'Infrastructure'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/aws-vpc-react',
      detailImages: [
        shop1,
        shop2,
        shop3
      ]
    },
    {
      id: 'project3',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['Prometheus', 'Grafana', 'Monitoring', 'Alerting'],
      // liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Brege-NG/prometheus-grafana_configuration',
      detailImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 'project4',
      image: AWI,
      tags: ['AWS', 'VPC', 'Subnets', 'NAT Gateway', 'Infrastructure'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/aws-advanced-networking',
      detailImages: [
        archi1,
        archi2,
        archi3,
        archi4
      ]

    },

    // {
    //   id: 'project5',
    //   image: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   tags: ['Mobile', 'Security', 'Flutter', 'Dart'],
    //   // liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/rv-gates/permis-Carte_grise',
    //   detailImages: [
    //     ph1,
    //     ph2,
    //     ph3,
    //     ph4
    //   ]

    // },

    // {
    //   id: 'project6',
    //   image:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    //   tags: ['Jenkins', 'Docker', 'Netlify', 'Git/Github', 'CI/CD'],
    //   // liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/Brege-NG',
    //   detailImages: [
    //     Ch0,Ch1,Ch2,Ch3,Ch4
    //   ]
    // }
  ];

  const openProjectDetails = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  

  const getProjectTitle = (projectId: string) => {
    return t(`${projectId}.title`);
  };

  const getProjectDescription = (projectId: string) => {
    return t(`${projectId}.description`);
  };

  const getProjectDetailDescription = (projectId: string) => {
    return t(`${projectId}.detailDescription`);
  };

  
  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={getProjectTitle(project.id)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{getProjectTitle(project.id)}</h3>
                <p className="text-gray-700 mb-4">{getProjectDescription(project.id)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => openProjectDetails(project.id)}
                    className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> {t('projects.learnMore')}
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://github.com/Brege-NG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors inline-flex items-center hover:scale-105 transform duration-300"
          >
            <Github className="h-5 w-5 mr-2" /> {t('projects.moreGithub')}
          </a>
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{getProjectTitle(selectedProject)}</h3>
              <button 
                onClick={closeProjectDetails}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
      
              
              {/* Detailed description */}
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {getProjectDetailDescription(selectedProject)}
                </p>
                </div>
              
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {projects.find(p => p.id === selectedProject)?.detailImages?.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-lg overflow-hidden shadow-md h-48 cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => openImageModal(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${getProjectTitle(selectedProject)} - Image ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>


              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.find(p => p.id === selectedProject)?.detailImages?.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src={img} 
                      alt={`${getProjectTitle(selectedProject)} - Image ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div> */}
              
              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('projects.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {projects.find(p => p.id === selectedProject)?.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="mt-8 flex space-x-4">
                <a
                  href={projects.find(p => p.id === selectedProject)?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 transition-colors inline-flex items-center"
                >
                  <Github className="h-5 w-5 mr-2" /> {t('projects.viewCode')}
                </a>
                {/* <a
                  href={projects.find(p => p.id === selectedProject)?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" /> {t('projects.viewProject')}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-size image modal */}
{selectedImage && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
    onClick={closeImageModal}
  >
    <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
      <button 
        onClick={closeImageModal}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>
      <img 
        src={selectedImage} 
        alt="Full size preview" 
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}

    </section>
  );
};


export default Projects;
