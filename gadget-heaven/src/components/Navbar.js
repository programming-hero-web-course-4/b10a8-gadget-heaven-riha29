import React from 'react';

function Navbar() {
  return (
    <nav className="flex rounded-t-2xl mx-4 mt-4 items-center justify-between p-4 bg-purple-700">
      <h1 className="text-white font-bold text-xl">Gadget Heaven</h1>
      <div className="flex gap-4 text-white">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#statistics" className="hover:text-gray-300">Statistics</a>
        <a href="#dashboard" className="hover:text-gray-300">Dashboard</a>
      </div>
      <div className="flex gap-4">
        {/* Cart Icon */}
        <img
          src={`${process.env.PUBLIC_URL}/cart.png`}
          alt="Cart"
          className="w-8 h-8 cursor-pointer bg-white p-2 rounded-3xl"
        />

        {/* Love (Wishlist) Icon */}
        <img
          src={`${process.env.PUBLIC_URL}/heart.png`}
          alt="Wishlist"
          className="w-8 h-8 cursor-pointer bg-white p-2 rounded-3xl"
        />
      </div>
    </nav>
  );
}

export default Navbar;