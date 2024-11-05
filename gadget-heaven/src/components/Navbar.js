// src/components/Navbar.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { cart, wishlist } = useContext(CartContext);

  return (
    <nav className="flex mx-4 mt-4 rounded-t-2xl justify-between items-center p-4 bg-purple-700 text-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        Gadget Heaven
      </Link>

      {/* Centered Navigation Links */}
      <div className="flex space-x-8 text-lg">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/statistics" className="hover:text-gray-300">Statistics</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
      </div>

      {/* Cart and Wishlist Icons */}
      <div className="flex items-center space-x-6">
        {/* Cart Icon with Badge */}
        <div className="relative rounded-3xl bg-white p-2">
          <img src={`${process.env.PUBLIC_URL}/cart.png`} alt="Cart" className="w-6 h-6 cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>

        {/* Wishlist Icon with Badge */}
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
