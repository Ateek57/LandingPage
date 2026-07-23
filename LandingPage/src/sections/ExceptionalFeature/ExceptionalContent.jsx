import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { TransparentImage } from '../../ui/TransparentImage';
import { images } from '../../assets/images';
import styles from './ExceptionalFeatureSection.module.css';

export const ExceptionalContent = ({ title, description, ctaText }) => {
  return (
    <div className={styles.cardContainer}>
      {/* Left Column with Background Graphic Image & Man Cutout */}
      <div className={styles.imageCol}>
        {/* Background Graphic Image added by User */}
        <img
          src={images.exceptionalFeature.bgImage}
          alt="Background graphic"
          className={styles.bgGraphic}
        />

        {/* Man Cut-out with Transparent Background */}
        <TransparentImage
          src={images.exceptionalFeature.userWithPhone}
          alt="Smiling user with phone"
          className={styles.userImg}
          threshold={45}
        />
      </div>

      {/* Right Column Text Copy & Action CTA */}
      <div className={styles.textCol}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button variant="primary" size="lg" icon={ArrowRight} className={styles.ctaBtn}>
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
