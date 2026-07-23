import React from 'react';
import styles from './KeyBenefitsSection.module.css';

export const CardTitle = ({ children }) => {
  return <h3 className={styles.cardTitle}>{children}</h3>;
};
