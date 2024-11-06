import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-purple-300 px-4 py-16">
        <h1 className="text-4xl font-bold text-purple-700 text-center mb-8">About Gadget Heaven</h1>
        <p className="text-lg text-center max-w-5xl mx-auto mb-6">
          Welcome to <span className="font-semibold text-red-700">Gadget Heaven</span>, your ultimate destination for cutting-edge technology and innovative gadgets. 
          Our platform is designed to help you explore, discover, and adopt the best gadgets that suit your needs and enhance your daily life.
        </p>
        <div className=' mx-16 justify-between space-x-8 bg-purple-700 p-8 text-white rounded-2xl w-auto flex'>
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-300 underline mb-4">Our Vision</h2>
        <p className="text-lg mx-auto max-w-3xl mb-6 leading-7">
          We aim to bridge the gap between technology enthusiasts and the latest innovations in the gadget world. At Gadget Heaven, we believe that technology can empower 
          individuals and make life more convenient, enjoyable, and productive.
        </p>
            </div>
            <div>
                <h2 className="text-2xl text-center font-bold text-gray-300 underline mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mb-6 leading-7">
          Our mission is to offer a platform where users can explore a diverse range of gadgets, compare their features, and make informed decisions before purchasing. 
          Whether it's smart devices, accessories, or the latest laptops, we strive to provide a seamless experience for our users.
        </p>
            </div>
            <div >
                <h2 className="text-2xl text-center font-bold text-gray-300 underline mb-4">Our Promise</h2>
                <p className="text-lg max-w-3xl mb-6 ">
                    We promise quality and satisfaction. From the selection of gadgets to post-purchase support, 
                    our commitment is to ensure that every product meets your expectations.
                
                it includes authentic products directly from top brands,
                30-day return policy for peace of mind, and
                dedicated support team for all your needs.
                </p>
            </div>  
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default About;
