import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDark ? 'dark' : 'light'}`}>
      {/* Animated background gradient */}
      <div className="navbar-gradient"></div>
      
      <div className="navbar-container">
        {/* Brand with glow effect */}
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            warmy
          </Link>
          <div className="brand-underline"></div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
            onClick={() => setActiveLink('/')}
          >
            <div className="link-bg"></div>
            <div className="link-glow"></div>
            <span className="link-text">Home</span>
            {activeLink === '/' && <div className="link-indicator"></div>}
          </Link>
          
          <Link 
            to="/favorites" 
            className={`nav-link ${activeLink === '/favorites' ? 'active' : ''}`}
            onClick={() => setActiveLink('/favorites')}
          >
            <div className="link-bg"></div>
            <div className="link-glow"></div>
            <span className="link-text">Favorites</span>
            {activeLink === '/favorites' && <div className="link-indicator"></div>}
          </Link>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
          >
            <div className="toggle-glow"></div>
            <div className="icon-container">
              {/* Sun Icon */}
              <svg 
                className={`sun-icon ${isDark ? 'visible' : 'hidden'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              
              {/* Moon Icon */}
              <svg 
                className={`moon-icon ${isDark ? 'hidden' : 'visible'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu">
          <button className="mobile-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="navbar-bottom-glow"></div>
    </nav>
  );
}

export default NavBar;