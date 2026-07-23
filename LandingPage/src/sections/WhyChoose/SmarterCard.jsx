import React from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { TransparentImage } from '../../ui/TransparentImage';
import { CreditCard } from 'lucide-react';
import { images } from '../../assets/images';
import styles from './WhyChooseSection.module.css';

export const SmarterCard = ({ type, data }) => {
  if (type === 'patient-approval') {
    return (
      <Card variant="white" className={styles.patientCard}>
        <div className={styles.imageMockup}>
          {/* Background Image Asset provided by user */}
          <img
            src={images.whyChoose.bgImage}
            alt="Background graphic"
            className={styles.blueShapeBackground}
          />

          {/* Bar Graph Image Asset */}
          <img
            src={images.whyChoose.bargraph}
            alt="Patient Approvals Chart"
            className={styles.bargraphImg}
          />

          {/* Smiling Man Cut-out Asset with Automatic Background Removal */}
          <TransparentImage
            src={images.whyChoose.patientApproval}
            alt="Patient check"
            className={styles.mockupImg}
            threshold={50}
          />

          {/* Floating Treatment Value Badge */}
          <div className={styles.floatingApprovalBadge}>
            <div className={styles.badgeIconCircle}>
              <CreditCard size={18} color="#ffffff" />
            </div>
            <div className={styles.badgeTextGroup}>
              <span className={styles.badgeLabel}>Treatment Value</span>
              <span className={styles.badgeVal}>$2,40,000.80</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (type === 'instant-emi-text') {
    return (
      <Card variant="white" className={styles.emiTextCard}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardDesc}>{data.description}</p>
      </Card>
    );
  }

  if (type === 'instant-emi-button') {
    return (
      <Card variant="white" className={styles.emiButtonCard}>
        <Button variant="primary" size="lg" className={styles.cardBtn}>
          {data.cta}
        </Button>
      </Card>
    );
  }

  if (type === 'wallet') {
    return (
      <Card variant="white" className={styles.walletCard}>
        <div className={styles.walletImgWrapper}>
          <img
            src={images.whyChoose.walletCards}
            alt="Leather wallet with credit card"
            className={styles.walletImg}
          />
        </div>
        <p className={styles.walletDesc}>
          Choose plans that fit <br />
          your budget.
        </p>
      </Card>
    );
  }

  return null;
};
