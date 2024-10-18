import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services'];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { offsetTop, clientHeight } = sectionElement;

          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + clientHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setMobileMenuOpen(false); // Close mobile menu after clicking
    window.history.pushState(null, '', `#${section}`);
  };

  return (
    <nav className="bg-blue-600 p-4 fixed top-0 w-full z-30 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-white text-lg font-bold">
          Shamzbridge Consulting
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`text-white hover:text-yellow-300 ${activeSection === 'hero' ? 'text-yellow-300 font-semibold' : ''}`}
            onClick={() => handleLinkClick('hero')}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`text-white hover:text-yellow-300 ${activeSection === 'about' ? 'text-yellow-300 font-semibold' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className={`text-white hover:text-yellow-300 ${activeSection === 'services' ? 'text-yellow-300 font-semibold' : ''}`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </Link>
        </div>
        
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute bg-blue-600 w-full md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={`text-white hover:text-yellow-300 ${activeSection === 'hero' ? 'text-yellow-300 font-semibold' : ''}`}
              onClick={() => handleLinkClick('hero')}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`text-white hover:text-yellow-300 ${activeSection === 'about' ? 'text-yellow-300 font-semibold' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About Us
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`text-white hover:text-yellow-300 ${activeSection === 'services' ? 'text-yellow-300 font-semibold' : ''}`}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
