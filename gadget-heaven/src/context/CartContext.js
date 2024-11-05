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
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find(item => item.product_id === product.product_id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
