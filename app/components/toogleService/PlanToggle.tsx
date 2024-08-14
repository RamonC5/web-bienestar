import React from 'react';

interface PlanToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

const PlanToggle: React.FC<PlanToggleProps> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex justify-center my-4 space-x-4">
      <button
        className={`py-2 px-4 rounded ${!isAnnual ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
        type="button"
        onClick={() => onToggle(false)}
      >
        Plan mensual
      </button>
      <button
        className={`py-2 px-4 rounded ${isAnnual ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
        type="button"
        onClick={() => onToggle(true)}
      >
        Plan anual
      </button>
    </div>
  );
};

export default PlanToggle;
