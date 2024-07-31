import React from 'react';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Team';
import './App.css';
import Header from './components/Header';


export const FirstPage = () => {
  return (
      <div>
        <Header />
        <About />
        <Services />
        <Contact />
        {/* <Footer /> */}
      </div>
  );
}
