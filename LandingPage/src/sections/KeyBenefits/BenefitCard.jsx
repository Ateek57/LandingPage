import React from 'react';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { images } from '../../assets/images';
import styles from './KeyBenefitsSection.module.css';

export const BenefitCard = ({ card }) => {
  const getCardImage = (id) => {
    if (id === 'instant-approvals') return images.benefits.instantApproval;
    if (id === 'faster-payments') return images.benefits.fasterPayment;
    if (id === 'seamless-experience') return images.benefits.seamlessExperience;
    return null;
  };

  const cardImage = getCardImage(card.id);

  return (
    <div className={styles.benefitCard}>
      <CardImage src={cardImage} alt={card.title} />
      <div className={styles.cardTextWrapper}>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </div>
    </div>
  );
};
