import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Logo and Tagline */}
        <h1 className="text-2xl font-bold mb-2">Gadget Heaven</h1>
        <p className="text-gray-500 mb-8">
          Leading the way in cutting-edge technology and innovation.
        </p>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Services Column */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Services</h2>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Product Support</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Company</h2>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Legal</h2>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;