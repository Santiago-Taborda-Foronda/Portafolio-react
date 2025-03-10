import React from 'react';

export const Subtitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl text-white font-semibold drop-shadow-md glow mb-2 ${className}`}>
      {children}
    </h2>
  );
};