'use client';

import { useState } from 'react';

import NavLink from './NavLink ';



const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="color_text md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </button>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/especialistas">Especialistas</NavLink>
          <NavLink href="/contact">Para Profesionales</NavLink>
          <NavLink href="/service">Servicios</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </div>
      )}
    </>
  );
};

export default Menu;