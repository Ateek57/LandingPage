import React from 'react';
import styles from './Container.module.css';

export const Container = ({ children, className = '', fluid = false }) => {
  return (
    <div className={`${styles.container} ${fluid ? styles.fluid : ''} ${className}`}>
      {children}
    </div>
  );
};
