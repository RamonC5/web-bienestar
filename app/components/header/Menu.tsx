'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink ';



const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="color_text md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/about">Especialistas</NavLink>
          <NavLink href="/contact">Para Profesionales</NavLink>
          <NavLink href="/contact">Servicios</NavLink>
          <NavLink href="/public/contact">Contacto</NavLink>
        </div>
      )}
    </>
  );
};

export default Menu;