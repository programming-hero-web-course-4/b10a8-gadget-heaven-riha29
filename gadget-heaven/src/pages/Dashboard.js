// src/pages/Dashboard.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Dashboard() {
  const { cart, wishlist, setCart, removeFromCart, removeFromWishlist } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('cart');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Calculate total price of cart items
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Sort items by price (descending)
  const handleSortByPrice = () => {
    setCart([...cart].sort((a, b) => b.price - a.price));
  };

  // Handle purchase
  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  // Close modal and redirect
  const handleCloseModal = () => {
    setCart([]); // Empty the cart
    setIsModalOpen(false);
    toast.success('Thank you for your purchase!');
    navigate('/');
  };

  return (
    <div>
      <Navbar />

      {/* Dashboard Header */}
      <div className="bg-purple-700 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className='mx-auto max-w-3xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 w-1/6 border rounded-full ${activeTab === 'cart' ? 'bg-white text-purple-700' : 'bg-purple-700 text-white'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart
          </button>
          <button
            className={`px-4 py-2 w-1/6 border rounded-full ${activeTab === 'wishlist' ? 'bg-white text-purple-700' : 'bg-purple-700 text-white'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-8 px-4">
        {activeTab === 'cart' ? (
          <>
            {/* Cart Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl w-1/2 font-semibold mb-4">Cart</h2>
              <span className="text-xl font-bold">Total cost: ${totalPrice.toFixed(2)}</span>
              <div>
                <button
                  className="text-purple-700 px-4 py-2 rounded-3xl border border-purple-700 mr-4"
                  onClick={handleSortByPrice}
                >
                  Sort by Price
                </button>
                <button
                  className={`bg-purple-700 text-white px-4 py-2 rounded-3xl ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePurchase}
                  disabled={cart.length === 0}
                >
                  Purchase
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product_id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <img src={item.product_image} alt={item.product_title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.product_title}</h3>
                    <p>{item.description}</p>
                    <p className="text-gray-700 font-semibold">Price: ${item.price}</p>
                  </div>
                  <button
                    className="text-red-500 text-xl"
                    onClick={() => removeFromCart(item.product_id)} // Use removeFromCart function
                  >
                    &#x2715;
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Wishlist Section */}
            <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.product_id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <img src={item.product_image} alt={item.product_title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.product_title}</h3>
                    <p>{item.description}</p>
                    <p className="text-gray-700 font-semibold">Price: ${item.price}</p>
                    <button
                      className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-3xl"
                      onClick={() => setCart([...cart, item])}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="text-red-500 text-xl"
                    onClick={() => removeFromWishlist(item.product_id)} // Use removeFromWishlist function
                  >
                    &#x2715;
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Purchase Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
            <p>Thanks for purchasing.</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;
