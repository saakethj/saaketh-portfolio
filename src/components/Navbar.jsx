import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/30 font-[Inter,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Name */}
        <a 
          href="/saaketh-portfolio"
          className="tracking-wide"
          style={{
            fontSize: '1.75rem',
            lineHeight: '2.25rem',
            fontWeight: '600',
            color: '#ffffff',
            margin: '0',
            textDecoration: 'none'
          }}
        >
          Saaketh
        </a>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="#about"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button - Visible on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <span
            className={`transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#ffffff',
              display: 'block'
            }}
          ></span>
          <span
            className={`transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#ffffff',
              display: 'block'
            }}
          ></span>
          <span
            className={`transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#ffffff',
              display: 'block'
            }}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Slides down when open */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800/30 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 max-h-96 visible'
            : 'opacity-0 max-h-0 invisible overflow-hidden'
        }`}
      >
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#fb923c'}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#extra"
              onClick={closeMenu}
              className="block px-6 py-3 transition-all duration-300 hover:bg-gray-800/50"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#f3f4f6',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fb923c'}
              onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
            >
              More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;