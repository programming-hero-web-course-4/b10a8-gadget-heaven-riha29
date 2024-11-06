import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import CartProvider from './context/CartContext';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />}/> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
