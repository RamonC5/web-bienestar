import React from 'react';
import { ShieldCheckIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/outline';
const reasons = [
    {
      title: 'Seguridad y Confianza en Cada Sesión',
      description: 'Tu bienestar es nuestra prioridad. Ofrecemos un entorno online seguro donde puedes confiar plenamente en la calidad y confidencialidad de nuestras sesiones de salud y bienestar.',
      icon: <ShieldCheckIcon className="h-12 w-12 text-green-600" />,
    },
    {
      title: 'Accesibilidad Global para Todos',
      description: 'No importa dónde te encuentres, nuestra plataforma te conecta con los mejores expertos en salud y bienestar de todo el mundo, para que accedas al mejor cuidado desde la comodidad de tu hogar.',
      icon: <GlobeAltIcon className="h-12 w-12 text-green-600" />,
    },
    {
      title: 'Compromiso con Tu Bienestar Integral',
      description: 'Nos dedicamos a acercar la salud y el bienestar a todas las personas, creando un espacio en línea donde puedes mejorar tu calidad de vida con el apoyo de profesionales cualificados.',
      icon: <HeartIcon className="h-12 w-12 text-green-600" />,
    },
  ];
const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Por Qué Elegirnos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default WhyChooseUs;
