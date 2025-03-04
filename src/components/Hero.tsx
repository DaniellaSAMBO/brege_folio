import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import myImage from './assets/rv.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t('hero.greeting')} <span className="text-indigo-600">NGOULOU Herve</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors hover:scale-105 transform duration-300"
              >
                {t('hero.contact')}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:bg-indigo-50 transition-colors hover:scale-105 transform duration-300"
              >
                {t('hero.projects')}
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/Brege-NG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors hover:scale-125 transform duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/herve-ngoulou-5517292b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors hover:scale-125 transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ngouloubrege10@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors hover:scale-125 transform duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div 
            className={`md:w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transform transition-transform duration-500">
              <img
                src={myImage}
                alt="Profile"
                className="pl-2 pr-2  w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;