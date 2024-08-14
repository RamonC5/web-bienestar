'use client';
import React, { useState } from 'react';
import PlanToggle from './PlanToggle';
import PlanDetails from './PlanDetails';

const PlanSelector: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <div className="mx-auto p-4">
      <PlanToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      <PlanDetails isAnnual={isAnnual} />
    </div>
  );
};

export default PlanSelector;
