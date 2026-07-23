import React from 'react';
import { Container } from '../../ui/Container';
import { SectionHeader } from '../../ui/SectionHeader';
import { SmarterCard } from './SmarterCard';
import { whyChooseData } from '../../common/data/hero';
import styles from './WhyChooseSection.module.css';

export const WhyChooseSection = () => {
  return (
    <section id="services" className={styles.whyChooseSection}>
      <Container>
        <SectionHeader
          badge={whyChooseData.badge}
          title={whyChooseData.title}
          description={whyChooseData.description}
        />

        <div className={styles.bentoGrid}>
          {/* Column 1: Left Large Patient Card */}
          <div className={styles.gridColLeft}>
            <SmarterCard type="patient-approval" />
          </div>

          {/* Column 2: Middle Column (EMI Content + Button) */}
          <div className={styles.gridColMiddle}>
            <SmarterCard type="instant-emi-text" data={whyChooseData.instantEmiCard} />
            <SmarterCard type="instant-emi-button" data={whyChooseData.instantEmiCard} />
          </div>

          {/* Column 3: Right Wallet Card */}
          <div className={styles.gridColRight}>
            <SmarterCard type="wallet" data={whyChooseData.walletCard} />
          </div>
        </div>
      </Container>
    </section>
  );
};
