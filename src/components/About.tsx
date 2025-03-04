import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`md:w-1/2 mb-8 md:mb-0 md:pr-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="DevOps Engineer working"
              className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          <div 
            className={`md:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('about.subtitle')}
            </h3>
            <p className="text-gray-700 mb-4">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('about.paragraph2')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-medium text-gray-900">{t('about.name')}</p>
                <p className="text-gray-700">NGOULOU herve</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('about.email')}</p>
                <p className="text-gray-700">ngouloubrege10@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('about.location')}</p>
                <p className="text-gray-700">{t('about.location.value')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('about.availability')}</p>
                <p className="text-gray-700">{t('about.availability.value')}</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors inline-block hover:scale-105 transform duration-300"
            >
              {t('about.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;