import React from 'react';
import { Container } from '../../ui/Container';
import { Accordion } from '../../ui/Accordion';
import { FAQSupportCard } from '../FAQ/FAQSupportCard';
import { aboutFaqData } from '../../common/data/aboutFaqs';
import styles from './AboutFAQ.module.css';

export const AboutFAQ = () => {
  return (
    <section id="about-faq" className={styles.faqSection}>
      <Container>
        <div className={styles.faqGrid}>
          {/* Left Column Title & Support Card */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Frequently Asked <br />
              Questions
            </h2>
            <FAQSupportCard
              title={aboutFaqData.supportBox.title}
              description={aboutFaqData.supportBox.description}
              buttonText={aboutFaqData.supportBox.buttonText}
              buttonLink={aboutFaqData.supportBox.buttonLink}
            />
          </div>

          {/* Right Column Accordion List */}
          <div className={styles.rightCol}>
            <Accordion items={aboutFaqData.items} />
          </div>
        </div>
      </Container>
    </section>
  );
};
