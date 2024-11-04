// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />  {/* Navbar should be rendered here */}
      <Banner/>
      <h1>Favicon use kore cart+ wishlist dite hobe navbar e</h1>  {/* Placeholder to ensure page renders */}

      <Footer/>
      
    </div>
  );
};

export default HomePage;