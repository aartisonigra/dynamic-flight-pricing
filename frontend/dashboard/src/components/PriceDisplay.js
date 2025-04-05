import React from 'react';

const PriceDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <p className="text-3xl font-bold text-green-600">₹ 499</p>
      <p className="text-gray-500 mt-2">Based on predicted demand</p>
    </div>
  );
};

export default PriceDisplay;
