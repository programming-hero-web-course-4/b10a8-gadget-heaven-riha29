import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import { products } from '../data';
import ReactStars from 'react-rating-stars-component';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from './NotFound';

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart, addToWishlist, wishlist } = useContext(CartContext);
  const product = products.find((item) => item.product_id === parseInt(productId));
  const [wishlistDisabled, setWishlistDisabled] = useState(
    wishlist.some(item => item.product_id === product?.product_id)
  );

  if (!product) {
    return {NotFound};
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setWishlistDisabled(true);
    toast.info('Item added to wishlist!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <div className='absolute mx-auto w-full'>
      <Helmet>
        <title>{product.product_title} - Gadget Heaven</title>
      </Helmet>
      <Navbar />
      <div className="text-center bg-purple-700 pb-80 text-white py-8 mx-auto">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p className='max-w-3xl text-center mx-auto py-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      <div className="bg-white shadow-lg mb-24 -mt-72 max-w-3xl mx-auto rounded-lg p-8 mt-4 flex space-x-8">
        {/* Product Image */}
        <div className="w-1/3">
          <img src={product.product_image} alt={product.product_title} className="w-full h-auto rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">{product.product_title}</h2>
          <p className="text-xl font-bold mt-2">Price: ${product.price}</p>
          <button className="text-green-600 font-semibold border-2 border-green-600 p-2 rounded-3xl bg-green-100 mt-2">
            {product.availability ? "In Stock" : "Out of Stock"}
          </button>
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
              Add to Cart <img src={`${process.env.PUBLIC_URL}/cart.png`} alt="Wishlist" className="w-4 h-4 ml-1 filter invert cursor-pointer" />
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`border-2 border-gray-300 text-gray-700 px-3 py-1 rounded-3xl flex items-center ${wishlistDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={wishlistDisabled}
            >
            <img src={`${process.env.PUBLIC_URL}/heart.png`} alt="Wishlist" className="w-4 h-4 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
