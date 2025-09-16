import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Analyzing... Please wait.</p>
    </div>
  );
};

export default LoadingSpinner;