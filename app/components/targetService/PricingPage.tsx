import React from 'react';
import ListPricingPage from './ListPricingPage';


const PricingPage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="container mx-auto p-6">
      <ListPricingPage/>
    </div>
  );
};

export default PricingPage;
