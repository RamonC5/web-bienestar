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
            <a href="/precios" className="text-gray-900 hover:text-green-600">Precios</a>
            <a href="/contact" className="text-gray-900 hover:text-green-600">Contacto</a>
          </nav>

          {/* Sign In / Register Button */}
          <div className="hidden md:flex ml-4">
            <a href="/login" className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">Iniciar Sesión</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;