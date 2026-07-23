import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ children, variant = 'blue', className = '' }) => {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
};
