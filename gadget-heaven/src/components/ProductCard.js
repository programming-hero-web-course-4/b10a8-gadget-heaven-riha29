// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.product_id}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="bg-gray-200 h-48 rounded-lg mb-4">
        <img src={product.product_image} alt={product.product_title} className="h-full w-full object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold">{product.product_title}</h3>
      <p className="text-gray-600">Price: ${product.price}</p>
      <button
        onClick={handleViewDetails}
        className="mt-4 border border-purple-500 text-purple-500 px-4 py-2 rounded-full"
      >
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
