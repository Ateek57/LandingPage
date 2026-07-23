import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { aboutStoryData } from '../../common/data/aboutPage';
import { images } from '../../assets/images';
import styles from './AboutStory.module.css';

export const AboutStory = () => {
  return (
    <div className={styles.storySection}>
      {/* Background Grid Image Asset added by User (Bg ImageAbout.png) */}
      <img
        src={images.about.bgGrid}
        alt="Background grid"
        className={styles.bgGridImage}
      />

      <Container>
        {/* Top Split Layout: Left Badge, Right Story Content */}
        <div className={styles.topSplitGrid}>
          <div className={styles.leftBadgeCol}>
            <Badge className={styles.storyBadge}>{aboutStoryData.badge}</Badge>
          </div>

          <div className={styles.rightContentCol}>
            <h2 className={styles.storyTitle}>
              Making Healthcare and Learning More{'\n'}Accessible
            </h2>
            <div className={styles.paragraphsGroup}>
              {aboutStoryData.paragraphs.map((para, idx) => (
                <p key={idx} className={styles.storyParagraph}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 4 Metric Cards Row */}
        <div className={styles.metricsGrid}>
          {aboutStoryData.metrics.map((metric, idx) => (
            <div key={idx} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
