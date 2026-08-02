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

      {/* Mobile Only 3-Capsule Image Row */}
      <div className={styles.mobileCapsuleImages}>
        <div className={`${styles.capsuleItem} ${styles.capsuleLeft}`}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80"
            alt="Education & Learning"
            className={styles.capsuleImg}
          />
        </div>
        <div className={`${styles.capsuleItem} ${styles.capsuleCenter}`}>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
            alt="Healthcare Doctor"
            className={styles.capsuleImg}
          />
        </div>
        <div className={`${styles.capsuleItem} ${styles.capsuleRight}`}>
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80"
            alt="Pharmacy Specialist"
            className={styles.capsuleImg}
          />
        </div>
      </div>
    </div>
  );
};
