import React from 'react';
import styles from './Card.module.css';

export const Card = ({
  children,
  variant = 'white', // 'white' | 'glass' | 'subtle'
  padding = 'normal', // 'compact' | 'normal' | 'spacious'
  hoverEffect = true,
  className = '',
  ...props
}) => {
  const cardClasses = `
    ${styles.card}
    ${styles[variant]}
    ${styles[padding]}
    ${hoverEffect ? styles.hoverable : ''}
    ${className}
  `;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};
