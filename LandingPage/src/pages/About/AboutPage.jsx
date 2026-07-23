import React from 'react';
import { Navbar } from '../../layout/Navbar';
import { Footer } from '../../layout/Footer';
import { AboutHero } from '../../sections/About/AboutHero';
import { AboutStory } from '../../sections/About/AboutStory';
import { AboutValues } from '../../sections/About/AboutValues';
import { AboutMission } from '../../sections/About/AboutMission';
import { AboutTeam } from '../../sections/About/AboutTeam';
import { AboutFAQ } from '../../sections/About/AboutFAQ';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutMission />
        <AboutTeam />
        <AboutFAQ />
      </main>
      <Footer />
    </div>
  );
};
