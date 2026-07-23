import React from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  ...props
}) => {
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={styles.icon} size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={styles.icon} size={18} />}
    </>
  );

  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  );
};
