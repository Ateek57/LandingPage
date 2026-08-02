import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import styles from './FeaturesSection.module.css';

export const EligibilityCard = ({ data }) => {
  return (
    <div className={styles.eligibilityCard}>
      {/* Left Text & Checklist Column */}
      <div className={styles.cardLeftContent}>
        <h3 className={styles.featureTitle}>{data.title}</h3>
        <p className={styles.featureDesc}>{data.description}</p>

        <ul className={styles.checklist}>
          {data.checklist.map((item, idx) => (
            <li key={idx} className={styles.checkItem}>
              <div className={styles.checkIconBox}>
                <CheckCircle2 size={18} color="#ffffff" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button variant="white" size="md" className={styles.learnBtn}>
          {data.buttonText}
        </Button>
      </div>

      {/* Right Dashboard Graphic Column */}
      <div className={styles.cardRightGraphic}>
        <div className={styles.opportunitiesMockup}>
          <span className={styles.oppLabel}>OPPORTUNITIES</span>
          
          <div className={styles.oppHeader}>
            <span className={styles.oppValue}>6,4K</span>
            <span className={styles.oppBadge}>+3.4%</span>
          </div>

          {/* Segmented Multi-color Progress Bar */}
          <div className={styles.oppSegmentedBar}>
            <div className={styles.seg1} />
            <div className={styles.seg2} />
            <div className={styles.seg3} />
            <div className={styles.seg4} />
          </div>

          {/* 2x2 Metric Cards Grid */}
          <div className={styles.oppGrid}>
            <div className={styles.oppItem}>
              <div className={styles.oppItemHeader}>
                <span className={styles.dotBlue} />
                <span className={styles.itemLabel}>ASSET RECEIVED</span>
              </div>
              <div className={styles.oppItemValRow}>
                <strong className={styles.itemVal}>1,1K</strong>
                <span className={styles.greenPill}>+3.4%</span>
              </div>
            </div>

            <div className={styles.oppItem}>
              <div className={styles.oppItemHeader}>
                <span className={styles.dotCyan} />
                <span className={styles.itemLabel}>SPENDING</span>
              </div>
              <div className={styles.oppItemValRow}>
                <strong className={styles.itemVal}>2,3K</strong>
                <span className={styles.greenPill}>+11.4%</span>
              </div>
            </div>

            <div className={styles.oppItem}>
              <div className={styles.oppItemHeader}>
                <span className={styles.dotYellow} />
                <span className={styles.itemLabel}>INVESTING</span>
              </div>
              <div className={styles.oppItemValRow}>
                <strong className={styles.itemVal}>1,5K</strong>
                <span className={styles.redPill}>-1.4%</span>
              </div>
            </div>

            <div className={styles.oppItem}>
              <div className={styles.oppItemHeader}>
                <span className={styles.dotGreen} />
                <span className={styles.itemLabel}>ALLOCATION</span>
              </div>
              <div className={styles.oppItemValRow}>
                <strong className={styles.itemVal}>1,6K</strong>
                <span className={styles.greenPill}>+7.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
