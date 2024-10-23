import React from 'react';
import '../styles/LoadingSpinner.css'; // Certifique-se de que o caminho está correto

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
