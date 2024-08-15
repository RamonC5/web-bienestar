'use client';
import React, { useState } from 'react';
import EstrellaCard from '../estrella/Estrella';
import Link from 'next/link';
import { StarIcon, MapIcon, DeviceMobileIcon, DesktopComputerIcon, LocationMarkerIcon, BriefcaseIcon } from '@heroicons/react/outline';
import Image from 'next/image';
export interface Expert {
  id: number;
  name: string;
  category: string;
  specialty: string;
  price: number;
  rating: number;
  mode: 'Online' | 'Presencial' | 'Mixta';
  photo: string;
}
const experts: Expert[] = [
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  {
    id: 1,
    name: 'Dr. Maria Gómez',
    category: 'Psicólogo',
    specialty: 'Ansiedad',
    price: 80,
    rating: 4.5,
    mode: 'Online',
    photo: '/assets/img/foto.jpg',
  },
  {
    id: 2,
    name: 'Dr. Juan Perez',
    category: 'Nutricionista',
    specialty: 'Dieta Mediterránea',
    price: 100,
    rating: 4.7,
    mode: 'Presencial',
    photo: '/assets/img/foto.jpg'
  },
  // Add more expert data here...
];

const ExpertListingPage: React.FC = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [mode, setMode] = useState("");
  const [sortBy, setSortBy] = useState("");
  type Filters = {
    category: string;
    minPrice: string;
    maxPrice: string;
    rating: number;
    mode: string;
    sortBy: string;
  };
  function applyFilters(filters: Filters): void {
    console.log("Filtros aplicados:", filters);
    // Aquí puedes implementar la lógica de filtrado y ordenación
  }
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Encuentra un Experto</h1>
      <div className="xl:flex sm:flex sm:flex-col xl:flex-row bg-gray-100">
        

        {/* Filters Section */}
        <div className="sticky top-0 z-10 bg-white p-6 rounded-lg shadow-md mb-6 xl:basis-1/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filtrar Expertos</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Primera Línea: Categoría y Modalidad */}
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Categoría</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="productos">Productos</option>
                  <option value="servicios">Servicios</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Modalidad</label>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Selecciona una modalidad</option>
                  <option value="online">Online</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>
            </div>

            {/* Segunda Línea: Rango de Precio y Valoración */}
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Rango de Precio</label>
                <div className="flex space-x-2 items-center">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Mín"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Máx"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Valoración mínima</label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => setRating(star)}
                      className={`h-6 w-6 cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.67a1 1 0 00.95.69h4.9c.969 0 1.372 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.67c.3.921-.755 1.688-1.54 1.118l-3.97-2.883a1 1 0 00-1.176 0l-3.97 2.883c-.785.57-1.84-.197-1.54-1.118l1.518-4.67a1 1 0 00-.364-1.118L2.49 9.097c-.784-.57-.381-1.81.588-1.81h4.9a1 1 0 00.95-.69l1.518-4.67z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Tercera Línea: Ordenación */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Selecciona una opción</option>
                <option value="precio-asc">Precio (ascendente)</option>
                <option value="precio-desc">Precio (descendente)</option>
                <option value="valoracion-asc">Valoración (ascendente)</option>
                <option value="valoracion-desc">Valoración (descendente)</option>
              </select>
            </div>

            {/* Botón de Aplicar Filtros */}
            <button
              className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors"
              onClick={() => applyFilters({ category, minPrice, maxPrice, rating, mode, sortBy })}
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
        {/* Expert Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:basis-2/3 xl:mr-1">
          {experts.map((expert) => (
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm">
              {/* Image Section */}
              <div className="relative w-full h-36">
                <Image
                  src={expert.photo}
                  alt={expert.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="w-full h-full"
                />
              </div>
              {/* Content Section */}
              <div className="flex flex-col justify-between p-4 w-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{expert.name}</h2>
                  <p className="text-xl font-extrabold text-gray-900">${expert.price}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <EstrellaCard rating={expert.rating} />
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Por sesión</p>
                </div>

                <div className="bg-gray-100 p-3 rounded-md mb-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {/* Location */}
                    <div>
                      <LocationMarkerIcon className="h-5 w-5 text-indigo-500 mx-auto" />
                      <p className="text-gray-500 text-xs mt-1">Localización</p>
                      <span className="text-gray-700 text-sm">{'Santa Cruz de Tenerife'}</span>
                    </div>
                    {/* Mode */}
                    <div>
                      <DesktopComputerIcon className="h-5 w-5 text-indigo-500 mx-auto" />
                      <p className="text-gray-500 text-xs mt-1">Modalidad</p>
                      <span className="text-gray-700 text-sm">{expert.mode}</span>
                    </div>

                    {/* Profession */}
                    <div>
                      <BriefcaseIcon className="h-5 w-5 text-indigo-500 mx-auto" />
                      <p className="text-gray-500 text-xs mt-1">Profesión</p>
                      <span className="text-gray-700 text-sm">{expert.category}</span>
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex justify-between mt-2">
                  <Link href={`/especialista`} legacyBehavior>
                    <a className="bg-indigo-500 text-white py-1 px-3 rounded-md hover:bg-indigo-600 transition-colors text-center text-sm">
                      Saber más
                    </a>
                  </Link>
                  <Link href={`/especialista`} legacyBehavior>
                    <a className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition-colors text-center text-sm">
                      Contactar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertListingPage;