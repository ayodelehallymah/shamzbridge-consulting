import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </Router>
  );
};

export default App;
