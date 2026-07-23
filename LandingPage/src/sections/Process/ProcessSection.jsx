import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { ProcessStep } from './ProcessStep';
import { TestimonialCard } from './TestimonialCard';
import { stepsData } from '../../common/data/steps';
import { images } from '../../assets/images';
import styles from './ProcessSection.module.css';

export const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column Image & Floating Testimonial Card */}
          <div className={styles.leftCol}>
            <div className={styles.imageWrapper}>
              <img
                src={images.process.manLaptop}
                alt="Man working on laptop"
                className={styles.laptopImg}
              />
            </div>
            <div className={styles.testimonialOverlay}>
              <TestimonialCard
                quote={stepsData.testimonial.quote}
                author={stepsData.testimonial.author}
                role={stepsData.testimonial.role}
                brand={stepsData.testimonial.brand}
              />
            </div>
          </div>

          {/* Right Column Header & 4 Steps List */}
          <div className={styles.rightCol}>
            <Badge className={styles.badge}>{stepsData.badge}</Badge>
            <h2 className={styles.mainTitle}>
              Get Started in 4 Simple{'\n'}Steps
            </h2>
            <p className={styles.description}>{stepsData.description}</p>

            <div className={styles.stepsList}>
              {stepsData.stepsList.map((step, idx) => (
                <ProcessStep
                  key={idx}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
