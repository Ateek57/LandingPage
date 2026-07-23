import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { ExceptionalContent } from './ExceptionalContent';
import { exceptionalData } from '../../common/data/hero';
import styles from './ExceptionalFeatureSection.module.css';

export const ExceptionalFeatureSection = () => {
  return (
    <section className={styles.exceptionalSection}>
      <Container>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <Badge className={styles.badge}>{exceptionalData.badge}</Badge>
          <h2 className={styles.mainTitle}>{exceptionalData.title}</h2>
          <p className={styles.mainDescription}>{exceptionalData.description}</p>
        </div>

        {/* Main Banner Feature Card */}
        <ExceptionalContent
          title={exceptionalData.cardTitle}
          description={exceptionalData.cardDescription}
          ctaText={exceptionalData.ctaText}
        />
      </Container>
    </section>
  );
};
