import React from 'react';
import styles from './KeyBenefitsSection.module.css';

export const CardDescription = ({ children }) => {
  return <p className={styles.cardDesc}>{children}</p>;
};
