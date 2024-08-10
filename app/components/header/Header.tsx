'use client';

import Menu from "./Menu";
import Nav from "./Nav";

const Header = () => (
  <header className="p-2 border-b border-gray-300 text-xs">
    <Nav />
    <Menu />
  </header>
);

export default Header;