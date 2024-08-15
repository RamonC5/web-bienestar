import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information & Social Media Links */}
          <div className="mb-8 w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.5-4.5m-4.5 4.5L12 7m6 0a9.934 9.934 0 01-2.648 6.651A9.944 9.944 0 0112 18a9.944 9.944 0 01-6.649-2.649A9.934 9.934 0 013 9m18 0h-6" />
              </svg>
              +123 456 7890
            </p>
            <p className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 10.5l2.5 2.5-2.5 2.5M21 12a9 9 0 10-9 9 9 9 0 009-9z" />
              </svg>
              contacto@misalud.com
            </p>
            <div className="flex space-x-4">
              {/* SVG icons for Social Media */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.595 0 0 .595 0 1.324v21.353C0 23.406.595 24 1.324 24h11.479V14.692h-3.13v-3.525h3.13V8.41c0-3.1 1.893-4.786 4.658-4.786 1.324 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.591l-.468 3.525h-3.123V24h6.123c.729 0 1.324-.595 1.324-1.324V1.324C24 .595 23.405 0 22.676 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.866 9.866 0 01-2.828.775A4.932 4.932 0 0023.337 3.4a9.864 9.864 0 01-3.127 1.195A4.926 4.926 0 0016.616 3c-2.732 0-4.943 2.21-4.943 4.94 0 .388.044.765.127 1.127C7.728 8.9 4.1 7.077 1.67 4.15a4.913 4.913 0 00-.67 2.484c0 1.714.874 3.228 2.202 4.118a4.902 4.902 0 01-2.238-.618v.061c0 2.396 1.704 4.391 3.964 4.844a4.93 4.93 0 01-2.233.084c.63 1.968 2.457 3.397 4.616 3.436A9.878 9.878 0 010 21.54 13.905 13.905 0 007.548 24c9.056 0 14.01-7.504 14.01-14.011 0-.213-.005-.425-.014-.636A10.006 10.006 0 0024 4.557z"/>
                </svg>
              </a>
              {/* Add additional social icons similarly */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-8 w-full md:w-1/3 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Útiles</h3>
            <nav className="space-y-2">
                <a href="/" className="block hover:text-white">Inicio</a>
                <a href="/especialistas" className="block hover:text-white">Expertos</a>
                <a href="/precios" className="block hover:text-white">Precios</a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="mb-8 w-full md:w-1/3 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Legales</h3>
            <nav className="space-y-2">
              <a href="/terms" className="block hover:text-white">Términos de Uso</a>
              <a href="/privacy" className="block hover:text-white">Política de Privacidad</a>
              <a href="/contact" className="block hover:text-white">Contacto</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 MiSalud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
