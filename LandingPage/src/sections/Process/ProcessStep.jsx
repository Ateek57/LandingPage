import React from 'react';
import styles from './ProcessSection.module.css';

export const ProcessStep = ({ number, title, description }) => {
  return (
    <div className={styles.stepCard}>
      <h3 className={styles.stepTitle}>
        {number} {title}
      </h3>
      <p className={styles.stepDesc}>{description}</p>
    </div>
  );
};
