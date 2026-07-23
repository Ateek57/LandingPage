import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { statisticsData } from '../../common/data/statistics';
import styles from './StatisticsSection.module.css';

export const StatisticsSection = () => {
  return (
    <section className={styles.statisticsSection}>
      <Container>
        {/* Top Header & Large Metric Banners Layout */}
        <div className={styles.topHeaderGrid}>
          {/* Left Text Content */}
          <div className={styles.leftCol}>
            <Badge className={styles.badge}>{statisticsData.badge}</Badge>
            <h2 className={styles.mainTitle}>
              Creating Access <br />
              Through Smart <br />
              Financing
            </h2>
            <p className={styles.description}>{statisticsData.description}</p>
          </div>

          {/* Right Hero Banners Stack */}
          <div className={styles.rightHeroStack}>
            {statisticsData.heroCards.map((hero, idx) => (
              <div key={idx} className={styles.heroBannerCard}>
                <span className={styles.heroVal}>{hero.value}</span>
                <span className={styles.heroLabel}>{hero.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 4 Stat Cards Row */}
        <div className={styles.bottomCardsRow}>
          {statisticsData.gridStats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.gridVal}>{stat.value}</span>
              <span className={styles.gridLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className={styles.footerNote}>{statisticsData.footerNote}</p>
      </Container>
    </section>
  );
};
