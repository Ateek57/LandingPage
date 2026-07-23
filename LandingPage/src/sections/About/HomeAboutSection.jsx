import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { aboutData } from '../../common/data/hero';
import styles from './HomeAboutSection.module.css';

export const HomeAboutSection = () => {
  return (
    <section id="about-summary" className={styles.homeAboutSection}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Badge & Title */}
          <div className={styles.leftCol}>
            <Badge className={styles.badge}>{aboutData.badge}</Badge>
            <h2 className={styles.title}>
              One Platform for Healthcare <br className={styles.desktopBr} /> & Education Financing
            </h2>
          </div>

          {/* Right Column: Description Paragraph */}
          <div className={styles.rightCol}>
            <p className={styles.description}>{aboutData.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
