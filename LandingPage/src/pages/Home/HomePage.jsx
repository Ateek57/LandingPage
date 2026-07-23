import React from 'react';
import { Navbar } from '../../layout/Navbar';
import { Footer } from '../../layout/Footer';
import { HeroSection } from '../../sections/Hero';
import { HomeAboutSection } from '../../sections/About';
import { WhyChooseSection } from '../../sections/WhyChoose';
import { KeyBenefitsSection } from '../../sections/KeyBenefits';
import { FeaturesSection } from '../../sections/Features';
import { ExceptionalFeatureSection } from '../../sections/ExceptionalFeature';
import { StatisticsSection } from '../../sections/Statistics';
import { ProcessSection } from '../../sections/Process';
import { FAQSection } from '../../sections/FAQ';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <main>
        <HeroSection />
        <HomeAboutSection />
        <WhyChooseSection />
        <KeyBenefitsSection />
        <FeaturesSection />
        <ExceptionalFeatureSection />
        <StatisticsSection />
        <ProcessSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};
