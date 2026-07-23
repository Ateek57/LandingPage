import React from 'react';
import { Button } from '../../ui/Button';
import styles from './FeaturesSection.module.css';

export const DashboardCard = ({ data }) => {
  return (
    <div className={styles.subFeatureCard}>
      <div className={styles.subCardHeader}>
        <h3 className={styles.subCardTitle}>{data.title}</h3>
        <p className={styles.subCardDesc}>{data.description}</p>
        <Button variant="white" size="md" className={styles.subCardBtn}>
          {data.buttonText}
        </Button>
      </div>

      <div className={styles.subCardGraphic}>
        <div className={styles.accentureMockup}>
          <span className={styles.chartTitle}>ACCENTURE ANALYSIS</span>
          
          <div className={styles.accentureHeaderRow}>
            <span className={styles.accentureVal}>12,3K</span>
            
            <div className={styles.accentureStatsGroup}>
              <div className={styles.statRow}>
                <div className={styles.statLabelRow}>
                  <span className={styles.dotOrange} />
                  <span className={styles.miniLabel}>SPENDING</span>
                </div>
                <div className={styles.statValRow}>
                  <strong>2,3K</strong>
                  <span className={styles.greenPill}>+11.4%</span>
                </div>
              </div>

              <div className={styles.statRow}>
                <div className={styles.statLabelRow}>
                  <span className={styles.dotPink} />
                  <span className={styles.miniLabel}>ALLOCATION</span>
                </div>
                <div className={styles.statValRow}>
                  <strong>1,6K</strong>
                  <span className={styles.greenPill}>+4.0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-segmented Stacked Bar Graph */}
          <div className={styles.stackedBarGraphWrapper}>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackPurp} style={{ height: '35px' }} />
            </div>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackPink} style={{ height: '55px' }} />
            </div>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackYellow} style={{ height: '15px' }} />
              <div className={styles.stackPink} style={{ height: '25px' }} />
            </div>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackBlue} style={{ height: '30px' }} />
            </div>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackPurp} style={{ height: '70px' }} />
            </div>
            <div className={styles.stackedBarCol}>
              <div className={styles.stackPink} style={{ height: '40px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
