import React from 'react';
import CardService from './CardService';
import { CheckIcon } from '@heroicons/react/solid';

const features = [
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Sencillo editor con función de arrastrar y soltar' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1 millón de plantillas diseñadas por profesionales' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1000 tipos de diseño (para posts para redes sociales y mucho más)' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 3 millones de elementos gráficos y fotos de stock' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Escritura y diseños generados por IA' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Impresión y envío de diseños' },
    { icon: <CheckIcon className="h-6 w-6" />, description: '5 GB de almacenamiento en la nube' },
  ];

const ListPricingPage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="container mx-auto p-6 xl:flex xl:flex-row">
      <CardService
        title="Canva Gratis"
        description="Te encantará todo lo que incluye:"
        features={features}
        price="0 €"
        priceDetail="/mes para una persona"
        buttonText="Empecemos"
        onButtonClick={handleButtonClick}
      />
      <CardService
        title="Canva Gratis 2"
        description="Te encantará todo lo que incluye:"
        features={features}
        price="0 €"
        priceDetail="/mes para una persona"
        buttonText="Empecemos"
        onButtonClick={handleButtonClick}
      />
      <CardService
        title="Canva Gratis 3"
        description="Te encantará todo lo que incluye:"
        features={features}
        price="0 €"
        priceDetail="/mes para una persona"
        buttonText="Empecemos"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default ListPricingPage;
