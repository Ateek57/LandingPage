import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { aboutMissionData } from '../../common/data/aboutPage';
import { images } from '../../assets/images';
import styles from './AboutMission.module.css';

export const AboutMission = () => {
  const [activePillar, setActivePillar] = useState('01');

  return (
    <div className={styles.missionSection}>
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Title & Accordion */}
          <div className={styles.leftCol}>
            <Badge className={styles.missionBadge}>{aboutMissionData.badge}</Badge>
            
            <h2 className={styles.title}>{aboutMissionData.title}</h2>

            <div className={styles.accordionList}>
              {aboutMissionData.pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    className={`${styles.accordionItem} ${isActive ? styles.activeItem : ''}`}
                    onClick={() => setActivePillar(pillar.id)}
                  >
                    <div className={styles.itemHeader}>
                      <span className={styles.itemTitle}>
                        {pillar.number}. {pillar.title}
                      </span>
                      {isActive && <ArrowRight size={20} className={styles.arrowIcon} />}
                    </div>

                    {isActive && (
                      <p className={styles.itemDescription}>{pillar.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Top Description & Image Card with Overlay */}
          <div className={styles.rightCol}>
            <p className={styles.headerDesc}>{aboutMissionData.headerDesc}</p>

            <div className={styles.imageCardContainer}>
              <img
                src={images.about.missionMan}
                alt="Empowering Healthcare & Education"
                className={styles.missionImg}
              />

              {/* Floating Overlay Card */}
              <div className={styles.overlayCard}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.trustedText}>
                    {aboutMissionData.overlayCard.trustedByText}
                  </span>
                  <button className={styles.joinBtn}>
                    {aboutMissionData.overlayCard.btnText}
                  </button>
                </div>

                <div className={styles.statValue}>
                  {aboutMissionData.overlayCard.statValue}
                </div>

                <div className={styles.statLabel}>
                  {aboutMissionData.overlayCard.statLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
