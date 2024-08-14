import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Brand Logo" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-bold text-gray-900">MiSalud</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-green-600">Inicio</a>
            <a href="/especialistas" className="text-gray-900 hover:text-green-600">Expertos</a>
            <a href="/blog" className="text-gray-900 hover:text-green-600">Blog</a>
            <a href="/pricing" className="text-gray-900 hover:text-green-600">Precios</a>
            <a href="/contact" className="text-gray-900 hover:text-green-600">Contacto</a>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Buscar expertos"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Sign In / Register Button */}
          <div className="hidden md:flex ml-4">
            <a href="/login" className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">Iniciar Sesión</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;