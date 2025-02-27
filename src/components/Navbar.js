import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <Link to="/home" onClick={() => setIsOpen(false)}>
          <h2>Free Learn</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {['home', 'about', 'resources', 'contact'].map((page) => (
          <Link key={page} to={`/${page}`} onClick={() => setIsOpen(false)}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
        <Link
          to="/login"
          className="login-btn"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
