import React from 'react';
import { AboutHero } from './AboutHero';
import { AboutStory } from './AboutStory';
import { AboutValues } from './AboutValues';
import { AboutMission } from './AboutMission';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutMission />
    </section>
  );
};
