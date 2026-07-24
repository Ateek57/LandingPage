import React from 'react';
import { Container } from '../../ui/Container';
import { Badge } from '../../ui/Badge';
import { aboutTeamData } from '../../common/data/aboutPage';
import { images } from '../../assets/images';
import styles from './AboutTeam.module.css';

const InstagramIcon = ({ size = 18, color = '#0f172a' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const AboutTeam = () => {
  return (
    <section id="our-team" className={styles.teamSection}>
      <Container>
        {/* Split Header: Left Badge & Title, Right Description */}
        <div className={styles.splitHeader}>
          <div className={styles.headerLeft}>
            <Badge className={styles.badge}>{aboutTeamData.badge}</Badge>
            <h2 className={styles.mainTitle}>{aboutTeamData.title}</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerSubtitle}>{aboutTeamData.description}</p>
          </div>
        </div>

        {/* 4 Team Member Cards Grid */}
        <div className={styles.teamGrid}>
          {aboutTeamData.members.map((member, idx) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={images.about.team[member.imageIndex]}
                  alt={member.name}
                  className={styles.memberImg}
                />
              </div>
              <div className={styles.infoRow}>
                <div className={styles.nameGroup}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                </div>
                <button className={styles.socialBtn} aria-label={`${member.name} Instagram`}>
                  <InstagramIcon size={18} color="#0f172a" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
