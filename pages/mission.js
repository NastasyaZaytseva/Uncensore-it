import React from 'react';
import Image from 'next/image';
import styles from '../styles/Mission.module.css';

export default function Mission() {
  return (
    <div className={styles.mission}>
      <div className={styles.content}>
        <Image src="/un-censorit.svg" alt="un-censorit" width={126} height={26} className={styles.logo} />
        <p className={styles.intro}>
          Un-censor.it is a tool and an art project.
        </p>
        <p className={styles.intro}>
          We believe in the power of open communication about sexual health and wellness. Our mission is to help  content creators and educators share important information without being unfairly restricted by social media algorithms.
        </p>
        <p className={styles.intro}>
          By providing this tool, we aim to support the sexual health community in  reaching their audience while maintaining compliance with platform  guidelines.
        </p>
        <p className={styles.intro}>
          If you want to get in touch, write an email to<br />
          <a href="mailto:info@un-censor.it">info@un-censor.it</a>
        </p>
      </div>
    </div>
  );
}
