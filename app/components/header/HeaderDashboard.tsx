'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, BellIcon, UserCircleIcon, ChatAlt2Icon } from '@heroicons/react/outline';

interface HeaderProps {
  userRole: 'cliente' | 'experto' | 'administrador';
}

const Header: React.FC<HeaderProps> = ({ userRole = 'cliente'  }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo y Nombre de la Plataforma */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          Mi Plataforma
        </Link>
      </div>

      {/* Botón del Menú en Móviles */}
      <button 
        className="md:hidden block text-white" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Contenido del Header */}
      <div 
        className={`md:flex md:items-center md:space-x-4 ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto`}
      >
        
        {/* Links específicos según el rol del usuario */}
        {userRole === 'cliente' && (
          <Link href="/dashboard/cliente/citas" className="block mt-2 md:mt-0">
            Mis Citas
          </Link>
        )}
        {userRole === 'experto' && (
          <Link href="/dashboard/experto/gestion-citas" className="block mt-2 md:mt-0">
            Gestión de Citas
          </Link>
        )}
        {userRole === 'administrador' && (
          <Link href="/dashboard/administrador/control-panel" className="block mt-2 md:mt-0">
            Panel de Control
          </Link>
        )}
        {userRole === 'administrador' && (
          <Link href="/dashboard/administrador/admin-chats" className="text-blue-300 hover:text-white flex items-center">
          <ChatAlt2Icon className="h-6 w-6 mr-1" />
            Chats
      </Link>
        )}
        {(userRole === 'experto' || userRole === 'cliente'  ) && (
        <Link href="/dashboard/chats" className="text-blue-300 hover:text-white flex items-center">
            <ChatAlt2Icon className="h-6 w-6 mr-1" />
            Chats
        </Link>
        )}
        {/* Icono de Notificaciones */}
        <Link href="/dashboard/notifications" className="block mt-2 md:mt-0">
            <BellIcon className="h-6 w-7" />
            Notificaciones
        </Link>

        {/* Menú de Usuario */}
        <div className="relative mt-2 md:mt-0">
          <button 
            className="flex items-center space-x-2"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            <UserCircleIcon className="h-8 w-8 rounded-full" />
            <span className="hidden md:inline">{userRole}</span>
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <Link href="/perfil" className="block px-4 py-2">
                Perfil
              </Link>
              <Link href="/configuracion" className="block px-4 py-2">
                Configuración
              </Link>
              <Link href="/logout" className="block px-4 py-2">
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
