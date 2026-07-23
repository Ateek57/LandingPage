import React from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import styles from './FAQSection.module.css';

export const FAQSupportCard = ({ title, description, buttonText, buttonLink }) => {
  return (
    <Card variant="white" className={styles.supportCard}>
      <h3 className={styles.supportTitle}>{title}</h3>
      <p className={styles.supportDesc}>{description}</p>
      <Button href={buttonLink} variant="outline" size="md" className={styles.supportBtn}>
        {buttonText}
      </Button>
    </Card>
  );
};
