import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'intro',
        'story',
        'career',
        'skills',
        'gallery',
        'projects',
        'contact',
        'outro',
      ];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b transition-all duration-300',
        activeSection === 'intro' ? 'h-[80px]' : 'h-[50px]'
      )}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => scrollToSection('intro')}
            className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
          >
            Portfolio
          </button>
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('intro')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-black border-b-2 border-black': activeSection === 'intro',
                'text-black hover:text-black': activeSection !== 'intro',
              })}
            >
              Intro
            </button>

            {/* <button
              onClick={() => scrollToSection('story')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-blue-600 border-b-2 border-blue-600':
                  activeSection === 'story',
                'text-gray-600 hover:text-blue-600': activeSection !== 'story',
              })}
            >
              Story
            </button> */}
            <button
              onClick={() => scrollToSection('skills')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-black border-b-2 border-black':
                  activeSection === 'skills',
                'text-black hover:text-black': activeSection !== 'skills',
              })}
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection('career')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-black border-b-2 border-black':
                  activeSection === 'career',
                'text-black hover:text-black': activeSection !== 'career',
              })}
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-black border-b-2 border-black':
                  activeSection === 'gallery',
                'text-black hover:text-black': activeSection !== 'gallery',
              })}
            >
              Gallery
            </button>

            {/* <button
              onClick={() => scrollToSection('projects')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-blue-600 border-b-2 border-blue-600':
                  activeSection === 'projects',
                'text-gray-600 hover:text-blue-600':
                  activeSection !== 'projects',
              })}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-blue-600 border-b-2 border-blue-600':
                  activeSection === 'contact',
                'text-gray-600 hover:text-blue-600':
                  activeSection !== 'contact',
              })}
            >
              Contact
            </button> */}
            <button
              onClick={() => scrollToSection('outro')}
              className={clsx('font-semibold transition-colors duration-200', {
                'text-black border-b-2 border-black': activeSection === 'outro',
                'text-black hover:text-black': activeSection !== 'outro',
              })}
            >
              Outro
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
