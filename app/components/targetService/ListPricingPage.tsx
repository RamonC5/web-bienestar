import React from 'react';
import CardService from './CardService';
import { CheckIcon } from '@heroicons/react/solid';

  interface Feature {
    icon: JSX.Element;
    description: string;
  }

  interface Planes {
    title: string,
    price: number,
    features: Feature[]
  }


const listPlanes: Planes[] = [{
  title: 'Plan cliente', 
  price: 5,
  features: [
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Permite contactar con hasta 5 expertos' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1 millón de plantillas diseñadas por profesionales' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1000 tipos de diseño (para posts para redes sociales y mucho más)' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 3 millones de elementos gráficos y fotos de stock' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Escritura y diseños generados por IA' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Impresión y envío de diseños' },
    { icon: <CheckIcon className="h-6 w-6" />, description: '5 GB de almacenamiento en la nube' },
  ],
},
{
  title: 'Plan experto', 
  price: 5,
  features: [
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Sencillo editor con función de arrastrar y soltar' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1 millón de plantillas diseñadas por profesionales' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1000 tipos de diseño (para posts para redes sociales y mucho más)' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 3 millones de elementos gráficos y fotos de stock' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Escritura y diseños generados por IA' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Impresión y envío de diseños' },
    { icon: <CheckIcon className="h-6 w-6" />, description: '5 GB de almacenamiento en la nube' },
  ],
},
{
  title: 'Plan experto Pro', 
  price: 5,
  features: [
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Sencillo editor con función de arrastrar y soltar' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1 millón de plantillas diseñadas por profesionales' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 1000 tipos de diseño (para posts para redes sociales y mucho más)' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Más de 3 millones de elementos gráficos y fotos de stock' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Escritura y diseños generados por IA' },
    { icon: <CheckIcon className="h-6 w-6" />, description: 'Impresión y envío de diseños' },
    { icon: <CheckIcon className="h-6 w-6" />, description: '5 GB de almacenamiento en la nube' },
  ],
}]
const ListPricingPage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="container mx-auto p-6 xl:flex xl:flex-row">
      {listPlanes.map((plan) => (
      <CardService
        title={plan.title}
        features={plan.features}
        price={plan.price}
        onButtonClick={handleButtonClick}
      />
    ))}
    </div>
  );
};

export default ListPricingPage;
