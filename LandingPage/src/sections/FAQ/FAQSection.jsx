import React from 'react';
import { Container } from '../../ui/Container';
import { Accordion } from '../../ui/Accordion';
import { FAQSupportCard } from './FAQSupportCard';
import { faqData } from '../../common/data/faqs';
import styles from './FAQSection.module.css';

export const FAQSection = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <Container>
        <div className={styles.faqGrid}>
          {/* Left Column Title & Support Card */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Frequently <br />
              Asked Questions
            </h2>
            <FAQSupportCard
              title={faqData.supportBox.title}
              description={faqData.supportBox.description}
              buttonText={faqData.supportBox.buttonText}
              buttonLink={faqData.supportBox.buttonLink}
            />
          </div>

          {/* Right Column Accordion List */}
          <div className={styles.rightCol}>
            <Accordion items={faqData.items} />
          </div>
        </div>
      </Container>
    </section>
  );
};
