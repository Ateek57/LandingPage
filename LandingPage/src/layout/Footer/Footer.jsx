import React from "react";
import { Container } from "../../ui/Container";
import { images } from "../../assets/images";
import styles from "./Footer.module.css";

const quickLinks = [
  {
    label: "Why FlexifitPay",
    href: "#why-choose",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Webinars",
    href: "#webinars",
  },
  {
    label: "Blogs",
    href: "#blogs",
  },
  {
    label: "Use Cases",
    href: "#use-cases",
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    label: "Youtube",
    href: "https://youtube.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        {/* ==========================
            Logo Row
        ========================== */}
        <div className={styles.logoRow}>
          <a href="/" className={styles.logoLink}>
            <img
              src={images.brand.navLogo}
              alt="FlexiFitPay"
              className={styles.logoImg}
            />
          </a>
        </div>

        {/* ==========================
            Content Row
        ========================== */}
        <div className={styles.contentRow}>
          {/* Description */}
          <div className={styles.descriptionCol}>
            <p className={styles.brandDesc}>
              FlexiFitPay helps clinics and hospitals offer instant EMI options
              for treatments, making healthcare payments easier for patients and
              faster for providers.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>

            <ul className={styles.linksList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={styles.socialCol}>
            <h3 className={styles.colTitle}>Social</h3>

            <ul className={styles.linksList}>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==========================
            Bottom
        ========================== */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            Copyright © 2026. All Right Reserved Warish Ahmad.
          </p>
        </div>
      </Container>
    </footer>
  );
};