import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../../ui/Container';
import { AvatarGroup } from '../../ui/AvatarGroup';
import { HeroContent } from './HeroContent';
import { FloatingCard } from './FloatingCard';
import { heroData } from '../../common/data/hero';
import { images } from '../../assets/images';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const dummyAvatars = [
    { src: images.hero.avatar1, alt: 'User 1' },
    { src: images.hero.avatar2, alt: 'User 2' },
    { src: images.hero.avatar3, alt: 'User 3' }
  ];

  return (
    <section id="home" className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          {/* Main Hero Content */}
          <HeroContent
            badge={heroData.badge}
            title={heroData.title}
            subheading={heroData.subheading}
            primaryCta={heroData.primaryCta}
            secondaryCta={heroData.secondaryCta}
          />

          {/* Floating Widget 1: Top Left Growth Badge */}
          <FloatingCard positionClass="topLeft">
            <div className={styles.growthBadge}>
              <div className={styles.growthIconWrapper}>
                <ArrowUpRight size={14} color="#22c55e" />
              </div>
              <span>{heroData.stats.growthPercentage}</span>
            </div>
          </FloatingCard>

          {/* Floating Widget 2: Bottom Left Income Card */}
          <FloatingCard positionClass="bottomLeft">
            <div className={styles.incomeCard}>
              <span className={styles.cardLabel}>Total Income</span>
              <span className={styles.cardValue}>{heroData.stats.incomeBottomLeft}</span>
              <div className={styles.smallGrowth}>
                <ArrowUpRight size={12} color="#22c55e" />
                <span>{heroData.stats.growthPercentage}</span>
              </div>
            </div>
          </FloatingCard>

          {/* Floating Widget 3: Top Right Income Badge */}
          <FloatingCard positionClass="topRight">
            <div className={styles.topIncomeCard}>
              <span className={styles.cardLabel}>Total Income</span>
              <span className={styles.cardValueLarge}>{heroData.stats.incomeTopRight}</span>
            </div>
          </FloatingCard>

          {/* Floating Widget 4: Bottom Right 50k+ Community Card */}
          <FloatingCard positionClass="bottomRight">
            <div className={styles.communityCard}>
              <span className={styles.communityNumber}>{heroData.stats.communityCount}</span>
              <span className={styles.communityText}>{heroData.stats.communityText}</span>
              <div className={styles.avatarsWrapper}>
                <AvatarGroup avatars={dummyAvatars} showAddButton={true} />
              </div>
            </div>
          </FloatingCard>
        </div>
      </Container>
    </section>
  );
};
