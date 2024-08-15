import React from 'react';
import FeatureList from './FeatureList';
interface Feature {
  icon: JSX.Element;
  description: string;
}

interface CardProps {
  title: string;
  features: Feature[];
  price: number;
  onButtonClick: () => void;
}


const CardService: React.FC<CardProps> = ({ title, features, price, onButtonClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto mt-2">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{'Te encantará todo lo que incluye'}</p>
      <div className="mt-4">
        <div className="text-3xl font-semibold">{price} €</div>
        <p className="text-gray-500">{'/día para una persona'}</p>
      </div>
      <button
        onClick={onButtonClick}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >Empecemos
      </button>
      <FeatureList features={features}/>
    </div>
  );
};

export default CardService;
