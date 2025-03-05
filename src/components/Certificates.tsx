import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
  description?: string;
}

interface Diploma {
  id: string;
  title: string;
  institution: string;
  date: string;
  image: string;
  description: string;
}

const Certificates: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCertificate]);

  const certificates: Certificate[] = [
    {
      id: 'cert1',
      title: 'Cloud Monitoring with Prometheus/Grafana',
      issuer: 'Okalobe School',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      description: 'This certification validates my expertise in setting up and managing monitoring solutions using Prometheus and Grafana. It covers topics such as metrics collection, alert configuration, dashboard creation, and monitoring best practices for cloud environments.'
    },
    {
      id: 'cert2',
      title: 'Jenkins CI/CD',
      issuer: 'Udemy',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      url: '#',
      description: 'This certification demonstrates my proficiency in implementing CI/CD pipelines using Jenkins. It covers topics such as pipeline creation, integration with version control systems, automated testing, and deployment strategies for various environments.'
    },
    {
      id: 'cert3',
      title: 'Mobile Development with Flutter',
      issuer: 'Udemy',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      url: '#',
      description: 'This certification validates my skills in developing cross-platform mobile applications using Flutter and Dart. It covers topics such as UI design, state management, API integration, and deployment to both Android and iOS platforms.'
    }
  ];

  const diplomas: Diploma[] = [
    {
      id: 'diploma1',
      title: 'Computer Science Degree',
      institution: 'CFI-CIRAS (Centre de Formation en Informatique du Centre d\'Informatique et de Recherche des Systèmes de l\'Armée)',
      date: '2018-2021',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Specialization in Systems Administration and Network Security. Developed a strong foundation in computer science principles, networking, operating systems, and programming. Participated in several projects related to system automation and network security.'
    }
  ];

  const openCertificateDetails = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateDetails = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('certificates.title')}</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('certificates.description')}
          </p>
        </div>

        {/* Diplomas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t('certificates.diplomasTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {diplomas.map((diploma, index) => (
              <div 
                key={diploma.id}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={diploma.image}
                    alt={diploma.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{diploma.title}</h4>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                      {diploma.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{diploma.institution}</p>
                  <p className="text-gray-600 text-sm">{diploma.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t('certificates.certificatesTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 hover:shadow-lg hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${(index + diplomas.length) * 150}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start mb-2">
                  <Award className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                  <h4 className="text-lg font-semibold text-gray-900">{certificate.title}</h4>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 text-sm">{certificate.issuer}</p>
                  <span className="text-gray-500 text-sm">{certificate.date}</span>
                </div>
                <button 
                  onClick={() => openCertificateDetails(certificate)}
                  className="mt-3 flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> {t('certificates.view')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Details Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.title}</h3>
              <button 
                onClick={closeCertificateDetails}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Certificate Image */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 mb-6">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Certificate Details */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-indigo-600 mr-2" />
                    <span className="text-lg font-semibold text-gray-900">{selectedCertificate.issuer}</span>
                  </div>
                  <span className="px-4 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                    {selectedCertificate.date}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {selectedCertificate.description}
                </p>
                
                <a
                  href={selectedCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" /> {t('certificates.view')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;