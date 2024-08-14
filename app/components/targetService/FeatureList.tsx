import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon';
import ChevronUpIcon from '@heroicons/react/solid/ChevronUpIcon';
import { useState } from 'react';

function FeatureList({ features }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="block sm:hidden">
        <button
          onClick={toggleVisibility}
          className="flex items-center px-4 py-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2">Opciones</span>
          <span className="text-gray-600">
            {isVisible ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
            </span>
        </button>
      </div>

      <ul
        className={`space-y-4 mt-2 border-t-2 border-solid ${
          isVisible ? 'block' : 'hidden'
        } sm:block`}
      >
        {features.map((feature, index: number) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-green-500">{feature.icon}</span>
            <span className="text-gray-600">{feature.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureList;
