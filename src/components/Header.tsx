import React, { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#certificates', label: t('nav.certificates') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold text-indigo-600 transition-all duration-300 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}>Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-10 mr-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`relative text-gray-700 hover:text-indigo-600 transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-indigo-600 font-medium' : ''
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-300 ${
                      activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </a>
              ))}
            </nav>
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 border border-indigo-300 rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span>{t('language.toggle')}</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Language Toggle Button (Mobile) */}
            <button
              onClick={toggleLanguage}
              className="mr-4 flex items-center px-2 py-1 border border-indigo-300 rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span>{t('language.toggle')}</span>
            </button>
            
            <button
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 animate-rotateIn" />
              ) : (
                <Menu className="h-6 w-6 animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-[300px] opacity-100 border-b border-gray-200' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              onClick={toggleMobileMenu}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen ? 'slideInRight 0.3s forwards' : 'none'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;