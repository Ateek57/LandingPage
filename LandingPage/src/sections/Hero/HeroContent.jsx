import React from 'react';
import { Badge } from '../../ui/Badge';
import { HeroButtons } from './HeroButtons';
import styles from './HeroSection.module.css';

export const HeroContent = ({ badge, primaryCta, secondaryCta }) => {
  return (
    <div className={styles.heroContent}>
      {badge && <Badge className={styles.topBadge}>{badge}</Badge>}
      <h1 className={styles.title}>
        Finance Healthcare & <br className={styles.desktopBr} /> Education Without Barriers
      </h1>
      <p className={styles.subheading}>
        From medical treatments to higher education and professional certifications, FlexiFitPay <br className={styles.desktopBr} /> makes financing simple with instant approvals, flexible EMIs, and a fully digital experience.
      </p>
      <HeroButtons primaryText={primaryCta} secondaryText={secondaryCta} />
    </div>
  );
};
