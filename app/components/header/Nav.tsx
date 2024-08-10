'use client';

import NavLink from './NavLink ';




const Nav = () => (
  <nav className="container mx-auto flex justify-between items-center">
    <div className="text-xs font-bold">MyApp</div>
    <div className="hidden md:flex justify-end space-x-4">
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/about">Especialistas</NavLink>
      <NavLink href="/contact">Para Profesionales</NavLink>
      <NavLink href="/contact">Servicios</NavLink>
      <NavLink href="/public/Contact">Contacto</NavLink>
    </div>
  </nav>
);

export default Nav;