import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import styles from './HeroSection.module.css';

export const HeroButtons = ({ primaryText, secondaryText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className={styles.buttonGroup}>
      <Button variant="primary" size="lg" icon={ArrowRight} onClick={onPrimaryClick}>
        {primaryText}
      </Button>
      <Button variant="white" size="lg" onClick={onSecondaryClick}>
        {secondaryText}
      </Button>
    </div>
  );
};
