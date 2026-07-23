import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { EligibilityCard } from './EligibilityCard';
import { SmartApprovalCard } from './SmartApprovalCard';
import { DashboardCard } from './DashboardCard';
import { featuresData } from '../../common/data/features';
import { images } from '../../assets/images';
import styles from './FeaturesSection.module.css';

export const FeaturesSection = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      {/* Background Grid Image Asset added by User */}
      <img
        src={images.features.bgGrid}
        alt="Background grid"
        className={styles.gridOverlay}
      />

      <Container>
        {/* Split Header: Left Title + Right Description */}
        <div className={styles.splitHeader}>
          <div className={styles.headerLeft}>
            <Badge className={styles.badge}>{featuresData.badge}</Badge>
            <h2 className={styles.mainTitle}>
              Everything You Need in One <br />
              Powerful Platform
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerSubtitle}>
              {featuresData.description}
            </p>
          </div>
        </div>

        {/* Top Feature Banner Card */}
        <EligibilityCard data={featuresData.mainFeature} />

        {/* 2 Sub Feature Cards Grid directly below */}
        <div className={styles.subFeaturesGrid}>
          <SmartApprovalCard data={featuresData.subFeatures[0]} />
          <DashboardCard data={featuresData.subFeatures[1]} />
        </div>
      </Container>
    </section>
  );
};
