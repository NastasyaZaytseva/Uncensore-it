import React from 'react';
import styles from '../styles/Mission.module.css';

export default function Mission() {
  return (
    <div className={styles.mission}>
      <div className={styles.content}>
        <h1 className={styles.text}>Our Mission</h1>
        <p className={styles.intro}>
          We believe in the power of open communication about sexual health and wellness. 
          Our mission is to help content creators and educators share important information 
          without being unfairly restricted by social media algorithms.
        </p>
        <p className={styles.intro}>
          By providing this tool, we aim to support the sexual health community in reaching 
          their audience while maintaining compliance with platform guidelines.
        </p>
      </div>
    </div>
  );
}
