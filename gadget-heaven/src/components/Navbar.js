import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { cart, wishlist } = useContext(CartContext);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  const isHomePage = location.pathname === '/';
  const navbarClasses = isHomePage
    ? "flex justify-between items-center p-4 mx-4 mt-4 rounded-t-2xl bg-purple-700 text-white"
    : "flex justify-between items-center p-4 bg-white text-black" ;

  return (
    <nav className= {navbarClasses}>
      <Link to="/" className="text-xl font-bold">
        Gadget Heaven
      </Link>

      <div className="flex space-x-8 text-lg">
        <Link
          to="/"
          className={`hover:text-purple-700 ${
            isActive('/') ? 'underline' : ''
          }`}
        >
          Home
        </Link>
        <Link
          to="/statistics"
          className={`hover:text-purple-700 ${
            isActive('/statistics') ? 'underline' : ''
          }`}
        >
          Statistics
        </Link>
        <Link
          to="/dashboard"
          className={`hover:text-purple-700 ${
            isActive('/dashboard') ? 'underline' : ''
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/about"
          className={`hover:text-purple-700 ${isActive('/about') ? 'underline' : ''}`}
        >
          About Us
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative rounded-3xl bg-white p-2">
          <img src={`${process.env.PUBLIC_URL}/cart.png`} alt="Cart" className="w-6 h-6 cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>

        <div className="relative rounded-3xl bg-white p-2">
          <img src={`${process.env.PUBLIC_URL}/heart.png`} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
