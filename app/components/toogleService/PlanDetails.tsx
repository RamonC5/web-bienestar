import React from 'react';
import PricingPage from '../targetService/PricingPage';

interface PlanDetailsProps {
  isAnnual: boolean;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ isAnnual }) => {
  return (
    <div className="mt-6">
      {isAnnual ? (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <PricingPage/>
        </div>
      ) : (
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <PricingPage/>
        </div>
      )}
    </div>
  );
};

export default PlanDetails;
