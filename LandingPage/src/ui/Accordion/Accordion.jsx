import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './Accordion.module.css';

export const Accordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(
    items.find((item) => item.defaultOpen)?.id || items[0]?.id
  );

  const toggleItem = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.open : ''}`}
          >
            <button
              type="button"
              className={styles.header}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.iconWrapper}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className={styles.content}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
