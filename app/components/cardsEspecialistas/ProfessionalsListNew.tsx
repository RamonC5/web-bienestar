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
    const [filters, setFilters] = useState({
      category: '',
      specialty: '',
      minPrice: '',
      maxPrice: '',
      rating: '',
      mode: '',
      sortBy: '',
    });
  
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      setFilters({ ...filters, [name]: value });
    };
  
    const filteredExperts = experts
      .filter((expert) => {
        return (
          (filters.category ? expert.category === filters.category : true) &&
          (filters.specialty ? expert.specialty === filters.specialty : true) &&
          (filters.minPrice ? expert.price >= Number(filters.minPrice) : true) &&
          (filters.maxPrice ? expert.price <= Number(filters.maxPrice) : true) &&
          (filters.rating ? expert.rating >= Number(filters.rating) : true) &&
          (filters.mode ? expert.mode === filters.mode : true)
        );
      })
      .sort((a, b) => {
        if (filters.sortBy === 'priceAsc') return a.price - b.price;
        if (filters.sortBy === 'priceDesc') return b.price - a.price;
        if (filters.sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Encuentra un Experto</h1>
  
          {/* Filters Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filtrar Expertos</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>
    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
    <select
      id="category"
      name="category"
      value={filters.category}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Todas</option>
      <option value="Psicólogo">Psicólogo</option>
      <option value="Nutricionista">Nutricionista</option>
    </select>
  </div>

  {filters.category === 'Psicólogo' && (
    <div>
      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Especialidad</label>
      <select
        id="specialty"
        name="specialty"
        value={filters.specialty}
        onChange={handleFilterChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Todas</option>
        <option value="Ansiedad">Ansiedad</option>
        <option value="Depresión">Depresión</option>
      </select>
    </div>
  )}

  {filters.category === 'Nutricionista' && (
    <div>
      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Especialidad</label>
      <select
        id="specialty"
        name="specialty"
        value={filters.specialty}
        onChange={handleFilterChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Todas</option>
        <option value="Dieta Mediterránea">Dieta Mediterránea</option>
        <option value="Pérdida de Peso">Pérdida de Peso</option>
      </select>
    </div>
  )}

  <div>
    <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Precio Mínimo</label>
    <input
      type="number"
      id="minPrice"
      name="minPrice"
      value={filters.minPrice}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
  </div>

  <div>
    <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Precio Máximo</label>
    <input
      type="number"
      id="maxPrice"
      name="maxPrice"
      value={filters.maxPrice}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
  </div>

  <div>
    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Valoración Mínima</label>
    <select
      id="rating"
      name="rating"
      value={filters.rating}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Todas</option>
      <option value="1">1 Estrella</option>
      <option value="2">2 Estrellas</option>
      <option value="3">3 Estrellas</option>
      <option value="4">4 Estrellas</option>
      <option value="5">5 Estrellas</option>
    </select>
  </div>

  <div>
    <label htmlFor="mode" className="block text-sm font-medium text-gray-700">Modalidad</label>
    <select
      id="mode"
      name="mode"
      value={filters.mode}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Todas</option>
      <option value="Online">Online</option>
      <option value="Presencial">Presencial</option>
      <option value="Mixta">Mixta</option>
    </select>
  </div>

  <div className="lg:col-span-3">
    <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">Ordenar por</label>
    <select
      id="sortBy"
      name="sortBy"
      value={filters.sortBy}
      onChange={handleFilterChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Sin Orden</option>
      <option value="priceAsc">Precio: Menor a Mayor</option>
      <option value="priceDesc">Precio: Mayor a Menor</option>
      <option value="rating">Valoración</option>
    </select>
  </div>

  {/* Apply Filters Button */}
  <div className="lg:col-span-3">
    <button
      type="button"
      onClick={() => console.log("Filters applied")}
      className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Aplicar Filtros
    </button>
  </div>
</form>
          </div>
  
          {/* Expert Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert) => (
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
                                   <Link href={`/especialistas`} legacyBehavior>
                                     <a className="bg-indigo-500 text-white py-1 px-3 rounded-md hover:bg-indigo-600 transition-colors text-center text-sm">
                                       Saber más
                                     </a>
                                   </Link>
                                   <Link href={`/especialistas`} legacyBehavior>
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