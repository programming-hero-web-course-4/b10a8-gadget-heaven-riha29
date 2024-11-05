// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
