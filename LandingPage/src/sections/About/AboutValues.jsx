import React from 'react';
import { DollarSign } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { aboutValuesData } from '../../common/data/aboutPage';
import styles from './AboutValues.module.css';

export const AboutValues = () => {
  return (
    <div className={styles.valuesSection}>
      <Container>
        {/* Header Block */}
        <div className={styles.headerGroup}>
          <Badge className={styles.valuesBadge}>{aboutValuesData.badge}</Badge>
          <h2 className={styles.title}>{aboutValuesData.title}</h2>
          <p className={styles.subtitle}>{aboutValuesData.description}</p>
        </div>

        {/* Fluid Responsive Values Grid */}
        <div className={styles.valuesGrid}>
          {aboutValuesData.values.map((val) => (
            <div key={val.id} className={styles.valueCard}>
              <div className={styles.iconCircle}>
                <DollarSign size={20} color="#0f172a" />
              </div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
