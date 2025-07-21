const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/30 font-[Inter,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Name - Override CSS with inline styles */}
        <a 
          href="/"
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

        {/* Navigation Links - Override CSS with inline styles */}
        <ul className="flex gap-8">
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
              href="#resume"
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
              Resume
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
          <li>
            <a
              href="#extra"
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
              More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;