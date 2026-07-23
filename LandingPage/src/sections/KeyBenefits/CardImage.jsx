import React from 'react';
import styles from './KeyBenefitsSection.module.css';

export const CardImage = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={styles.cardImg} />
    </div>
  );
};
