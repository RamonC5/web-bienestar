import React from 'react';
import { UserAddIcon, SearchIcon, ChatAlt2Icon, ThumbUpIcon } from '@heroicons/react/outline';

const steps = [
    {
      title: 'Regístrate',
      description: 'Crea tu cuenta en minutos para acceder a expertos en salud y bienestar de manera personalizada.',
      icon: <UserAddIcon className="h-12 w-12 text-red-500" />,
    },
    {
      title: 'Busca el Experto Ideal',
      description: 'Encuentra al profesional que mejor se adapte a tus necesidades específicas y preferencias.',
      icon: <SearchIcon className="h-12 w-12 text-red-500" />,
    },
    {
      title: 'Mejora tu Bienestar',
      description: 'Agenda sesiones con expertos y comienza tu camino hacia una vida más saludable y equilibrada.',
      icon: <ChatAlt2Icon className="h-12 w-12 text-red-500" />,
    },
    {
      title: 'Valora al Profesional',
      description: 'Comparte tu experiencia y ayuda a otros a encontrar los mejores expertos valorando sus servicios.',
      icon: <ThumbUpIcon className="h-12 w-12 text-red-500" />,
    },
  ];

const HowItWorks = () => {


    return (
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">¿Cómo Funciona?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default HowItWorks;
