import React from 'react';
import { ButtonProps } from '../types/types';
import styles from '../styles/button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button: React.FC<ButtonProps> = ({ destination, content, icon }) => {
  return (
    <a
      className={styles.button}
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${content} profile`}
    >
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.buttonText}>
        {content}
      </div>
    </a>
  );
};

export default Button;