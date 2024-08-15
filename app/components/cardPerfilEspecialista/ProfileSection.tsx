// components/ProfileSection.tsx
import { FC } from 'react';

import ProfileAvatar from './ProfileAvatar';
import CoverPhoto from './CoverPhoto';

import { ProfessionalCardProps } from './UserProfile';
import BodyCard from './BodyCard';
import EstrellaCard from '../estrella/Estrella';
import ProfileDetails from './ProfileDetails';

const ProfileSection : React.FC<ProfessionalCardProps> = ({ name, specialty, price, city, rating,description, imageUrl, fondoUrl, link }) => {


  return (
    <section className="container">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <CoverPhoto coverPhotoUrl={fondoUrl} />
        <section className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center relative">
          <img
            src="/assets/img/foto.jpg"
            alt="Expert Name"
            className="h-40 w-40 rounded-full object-cover mr-8"
          />
          <div className='flex flex-col'>
            <h1 className="text-3xl font-bold text-gray-900">Dr. Maria Gómez</h1>
            <div className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-5 h-5 mr-2"
                            >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" 
                                />
                            </svg>
                            <p className="text-lg text-gray-600 mx-2">{specialty}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="text-lg text-gray-600">{city}</p>
                        <div className="mb-4">
                    </div>
              </div>
            <EstrellaCard rating={4}  />
           
            <div className="inline-flex space-x-2">
              <h5 className="text-sm font-semibold">Especialidades</h5>
              <p className="text-sm">{[
                'TDAH', 'Adicción', 'Consumo de alcohol', 'Bisexualidad',
                // Add more areas
              ].join(', ')}</p>
           </div>
           <div className="inline-flex space-x-2">
            <h5 className="text-sm font-semibold">Idiomas</h5>
            <p className="text-sm">{['Inglés'].join(', ')}</p>
          </div>
          <div className="block">
            <a href="#booking" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full">
              Reserva una Sesión
            </a>
            </div>
          </div>
        </div>
      </section>
             {/* Detailed Biography and Credentials */}
    <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Conoce a Dr. Maria Gómez</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Soy psicóloga clínica con más de 15 años de experiencia ayudando a personas a superar la
            ansiedad y otros trastornos emocionales. Graduada de la Universidad de Madrid con certificaciones en terapia
            cognitivo-conductual, me dedico a guiar a mis pacientes hacia una vida más equilibrada y plena.
          </p>

          {/* Interactive/Highlight Section */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Experiencia y Logros</h3>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 01-2 0V7zm1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">Doctorado en Psicología Clínica - Universidad de Madrid</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 01-2 0V7zm1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">Certificación en Terapia Cognitivo-Conductual</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 01-2 0V7zm1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">Más de 15 años de experiencia en práctica privada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
        <div className="py-6 bg-gray-100">
            <BodyCard name={name}
                  specialty={specialty}
                  price={price}
                  city={city}
                  rating={rating}
                  description={description}
                  imageUrl={imageUrl}
                  link={link} fondoUrl={''}/>
        </div>
        
      </div>
    </section>
  );
};

export default ProfileSection;