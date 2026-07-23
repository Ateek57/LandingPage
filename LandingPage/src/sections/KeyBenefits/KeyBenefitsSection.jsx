import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { BenefitCard } from './BenefitCard';
import { benefitsData } from '../../common/data/benefits';
import styles from './KeyBenefitsSection.module.css';

export const KeyBenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <Container className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <Badge className={styles.badge}>{benefitsData.badge}</Badge>
          <h2 className={styles.mainTitle}>{benefitsData.title}</h2>
          <p className={styles.subtitle}>{benefitsData.description}</p>
        </div>

        {/* 3 Cards Grid */}
        <div className={styles.cardsGrid}>
          {benefitsData.cards.map((card) => (
            <BenefitCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
