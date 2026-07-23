import React from 'react';
import { Plus } from 'lucide-react';
import styles from './AvatarGroup.module.css';

export const AvatarGroup = ({ avatars = [], showAddButton = true }) => {
  return (
    <div className={styles.avatarGroup}>
      {avatars.map((avatar, idx) => (
        <div key={idx} className={styles.avatarWrapper}>
          <img src={avatar.src} alt={avatar.alt || `User ${idx + 1}`} className={styles.avatarImg} />
        </div>
      ))}
      {showAddButton && (
        <button type="button" className={styles.addButton} aria-label="Add user">
          <Plus size={16} />
        </button>
      )}
    </div>
  );
};
