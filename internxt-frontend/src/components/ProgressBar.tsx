import React from 'react';

interface ProgressBarProps {
  progress: number; // Progresso em porcentagem (0 a 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div
      style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: progress < 100 ? '#3b5998' : '#4caf50',
          borderRadius: '5px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default ProgressBar;
