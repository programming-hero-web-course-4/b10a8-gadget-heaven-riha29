// src/pages/HomePage.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CategoriesSidebar from '../components/CategoriesSidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'iPhone'];
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const handleViewDetails = (productId) => {
    // Implement navigation to the details page, e.g., `navigate("/product/" + productId)`
    console.log("View details for product ID:", productId); // Placeholder
  };

  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <Navbar />  {/* Navbar with cart and wishlist */}
      <Banner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Cutting-Edge Gadgets</h1>
        <div className="flex">
          {/* Sidebar */}
          <div className="mr-8">
            <CategoriesSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {filteredProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
