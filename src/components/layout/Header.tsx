import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { LaptopOutlined, MobileOutlined } from '@ant-design/icons';
import { useDeviceStore } from '../../stores/deviceStore';

export default function Header() {
  const [activeSection, setActiveSection] = useState('intro');
  const { activeDevice, isRealMobile, setActiveDevice } = useDeviceStore();
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
          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollToSection('intro')}
              className={clsx(
                'font-bold text-gray-800 hover:text-black transition-colors',
                isRealMobile ? 'text-base' : 'text-2xl'
              )}
            >
              Portfolio
            </button>
            {!isRealMobile && (
              <div className="flex items-center gap-5 rounded-full border-2 border-gray-300 py-1 px-3 relative">
                <div
                  className={clsx(
                    'absolute rounded-full w-[40px] h-full bg-black border-[3px] border-white transition-all duration-300 z-0',
                    {
                      'left-0': activeDevice === 'mobile',
                      'left-[36px]': activeDevice === 'laptop',
                    }
                )}
              />
              <button
                onClick={() => setActiveDevice('mobile')}
                className="z-10"
              >
                <MobileOutlined
                  className={clsx(
                    'transition-all duration-300',
                    activeDevice === 'mobile' ? 'text-white' : 'text-black'
                  )}
                />
              </button>
              <button
                onClick={() => setActiveDevice('laptop')}
                className="z-10"
              >
                <LaptopOutlined
                  className={clsx(
                    'transition-all duration-300',
                    activeDevice === 'laptop' ? 'text-white' : 'text-black'
                  )}
                />
              </button>
            </div>
            )}
          </div>
          <nav
            className={clsx(
              'flex items-center',
              isRealMobile ? 'space-x-2 text-xs' : 'space-x-6'
            )}
          >
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
