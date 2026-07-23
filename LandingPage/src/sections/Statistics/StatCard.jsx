import React from 'react';
import { Card } from '../../ui/Card';
import styles from './StatisticsSection.module.css';

export const StatCard = ({ value, label, size = 'normal' }) => {
  return (
    <Card variant="white" className={`${styles.statCard} ${styles[size]}`}>
      <span className={styles.statVal}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </Card>
  );
};
