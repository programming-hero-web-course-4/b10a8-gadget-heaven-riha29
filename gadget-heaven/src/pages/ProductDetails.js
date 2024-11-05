// src/pages/ProductDetails.js
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { products } from '../data';
import ReactStars from 'react-rating-stars-component';

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart, addToWishlist, wishlist } = useContext(CartContext);
  const product = products.find((item) => item.product_id === parseInt(productId));
  const [wishlistDisabled, setWishlistDisabled] = useState(
    wishlist.some(item => item.product_id === product?.product_id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setWishlistDisabled(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Helmet>
        <title>{product.product_title} - Gadget Heaven</title>
      </Helmet>

      <div className="text-center bg-purple-700 text-white py-8 rounded-t-lg">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p>Explore the latest gadgets that will take your experience to the next level.</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 mt-4 flex space-x-8">
        {/* Product Image */}
        <div className="w-1/3">
          <img src={product.product_image} alt={product.product_title} className="w-full h-auto rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">{product.product_title}</h2>
          <p className="text-xl font-bold mt-2">Price: ${product.price}</p>
          <p className="text-green-600 font-semibold mt-2">
            {product.availability ? "In Stock" : "Out of Stock"}
          </p>
          <p className="mt-4">{product.description}</p>
          <h3 className="font-semibold mt-4">Specification:</h3>
          <ul className="list-decimal ml-5 mt-2 text-gray-700">
            {product.Specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Rating */}
          <div className="mt-4 flex items-center">
            <span className="font-semibold mr-2">Rating:</span>
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />
            <span className="ml-2 text-gray-600">{product.rating}</span>
          </div>

          {/* Add to Cart and Wishlist Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg flex items-center"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`bg-gray-300 text-gray-700 px-6 py-2 rounded-lg flex items-center ${wishlistDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={wishlistDisabled}
            >
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
