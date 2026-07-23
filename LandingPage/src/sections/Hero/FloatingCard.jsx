import React from 'react';
import styles from './HeroSection.module.css';

export const FloatingCard = ({ children, positionClass, className = '' }) => {
  return (
    <div className={`${styles.floatingCard} ${styles[positionClass]} ${className}`}>
      {children}
    </div>
  );
};
