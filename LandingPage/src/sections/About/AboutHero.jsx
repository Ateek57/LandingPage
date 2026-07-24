import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { aboutHeroData } from '../../common/data/aboutPage';
import styles from './AboutHero.module.css';

export const AboutHero = () => {
  return (
    <div className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Instant Healthcare & Education <br className={styles.desktopBr} /> Financing, Built for Accessibility
            </h1>
            
            <p className={styles.subheading}>
              {aboutHeroData.subheading}
            </p>

            <div className={styles.buttonGroup}>
              <Button href="#contact" variant="primary" size="lg" icon={ArrowRight} className={styles.ctaBtn}>
                {aboutHeroData.primaryCta}
              </Button>
            </div>

            {/* Bottom Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{aboutHeroData.stats[0].value}</span>
                <span className={styles.statLabel}>
                  Healthcare & Education <br /> Partners
                </span>
              </div>
              
              <div className={styles.statDivider} />

              <div className={styles.statItem}>
                <span className={styles.statValue}>{aboutHeroData.stats[1].value}</span>
                <span className={styles.statLabel}>
                  Financing <br /> Facilitated
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
