// src/contexts/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load initial data from LocalStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  // Save cart and wishlist to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const addToCart = (product) => {
    if (!cart.some((item) => item.product_id === product.product_id)) {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product_id !== productId));
    // Optional: Remove from cart if the product exists there as well
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
