import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
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

  const skills = [
    { name: 'Linux/Unix', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'Kubernetes', level: 40 },
    { name: 'AWS', level: 20 },
    { name: 'CI/CD Pipelines', level: 50 },
    { name: 'Monitoring', level: 70 },
  ];

  const otherSkills = ['Git', 'Jenkins', 'Bash/Shell', 'Python', 'Prometheus', 'Grafana', 'Cloud Security', 'Flutter/Dart'];

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-indigo-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    animation: isVisible ? `pulse 2s infinite ${index * 0.2}s` : 'none'
                  }}
                >
                  <span 
                    className="absolute inset-0 bg-white opacity-30"
                    style={{
                      animation: isVisible ? `skillShine 2s infinite ${index * 0.2}s` : 'none'
                    }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } hover:shadow-xl`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t('skills.other')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors hover:scale-105 transform duration-300"
                style={{ 
                  animation: isVisible ? `popIn 0.5s ${index * 0.1}s both` : 'none'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;