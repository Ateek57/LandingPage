import React from 'react';
import { Badge } from '../../ui/Badge';
import styles from './AboutSection.module.css';

export const AboutContent = ({ badge, title, description }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.leftCol}>
        <Badge className={styles.badge}>{badge}</Badge>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.rightCol}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
