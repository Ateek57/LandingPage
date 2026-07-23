import React from 'react';
import { images } from '../../assets/images';
import styles from './ProcessSection.module.css';

export const TestimonialCard = ({ quote, author, role, brand }) => {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.quote}>{quote}</p>

      <div className={styles.authorRow}>
        <div className={styles.authorLeft}>
          <img
            src={images.process.testimonialAuthor}
            alt={author}
            className={styles.authorAvatar}
          />
          <div className={styles.authorInfo}>
            <strong className={styles.authorName}>{author}</strong>
            <span className={styles.authorRole}>{role}</span>
          </div>
        </div>

        {/* Right Brand Logo */}
        <div className={styles.brandBadge}>
          <img
            src={images.brand.navLogo}
            alt={brand}
            className={styles.brandLogoImg}
          />
        </div>
      </div>
    </div>
  );
};
