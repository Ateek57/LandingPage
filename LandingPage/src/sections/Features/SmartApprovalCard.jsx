import React from 'react';
import { Button } from '../../ui/Button';
import styles from './FeaturesSection.module.css';

export const SmartApprovalCard = ({ data }) => {
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
        <div className={styles.spendingChartMockup}>
          <span className={styles.chartTitle}>Spendings</span>
          <h4 className={styles.personName}>Sandro Tavares</h4>
          
          <div className={styles.barGraphLayout}>
            {/* Y Axis Labels */}
            <div className={styles.yAxis}>
              <span>$1000</span>
              <span>$500</span>
              <span>$200</span>
              <span>$0</span>
            </div>

            {/* Vertical Bar Bars */}
            <div className={styles.barGraphWrapper}>
              <div className={styles.barCol} style={{ height: '45%' }} />
              <div className={styles.barCol} style={{ height: '20%' }} />
              <div className={styles.barCol} style={{ height: '35%' }} />
              <div className={styles.barCol} style={{ height: '55%' }} />
              <div className={styles.barCol} style={{ height: '25%' }} />
              <div className={styles.barCol} style={{ height: '80%' }} />
              <div className={styles.barCol} style={{ height: '30%' }} />
              <div className={styles.barCol} style={{ height: '65%' }} />
              <div className={styles.barCol} style={{ height: '85%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
