import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const navbar_left = document.querySelector('.navbar-left');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbar_left.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        navbar_left.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">SmartMD</a>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Team</a>
      </div>
    </nav>
  );
}

export default Navbar;
