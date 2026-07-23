import React from 'react';
import { Badge } from '../Badge';
import styles from './SectionHeader.module.css';

export const SectionHeader = ({
  badge,
  title,
  description,
  align = 'center', // 'center' | 'left'
  className = ''
}) => {
  return (
    <div className={`${styles.header} ${styles[align]} ${className}`}>
      {badge && <Badge className={styles.badge}>{badge}</Badge>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
