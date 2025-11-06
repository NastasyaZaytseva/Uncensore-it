import React from 'react';
import Image from 'next/image';
import styles from '../styles/Mission.module.css';

export default function Mission() {
  return (
    <div className={styles.mission}>
      <div className={styles.content}>
        <p className={styles.intro}>
          We are here to help the sexual health community reach their audiences while staying compliant with platform guidelines. Not by accepting silence, but by finding new, creative strategies for visibility.
        </p>
        <p className={styles.intro}>
          Un-censor.it is a tool and an art project.
        </p>
        <p className={styles.intro}>
          We believe in the power of open communication about sexual health and wellness.
        </p>
        <p className={styles.intro}>
          Today, that communication is being restricted.
        </p>
        <p className={styles.intro}>
          All across social media, founders, brands, content creators and educators are facing systemic, sometimes invisible, censorship. Content about menstruation, anatomy, fertility, pelvic pain, menopause or sexual pleasure is flagged, hidden or removed, often under vague "adult content" policies.
        </p>
        <p className={styles.intro}>
          According to recent surveys, by initiatives such as <a href="https://www.censhership.co.uk/" target="_blank" rel="noopener noreferrer">CensHERship</a>, more than 90% of femtech and sexual wellness brands have had ads removed by major platforms, and 40% have experienced over ten separate censorship incidents. But it&apos;s not just companies, educators and clinicians are affected too.
        </p>
        <p className={styles.intro}>
          A growing number report that they&apos;ve been forced to self-censor, changing language or visuals just to stay online.
        </p>
        <p className={styles.intro}>
          This pattern has consequences.
        </p>
        <p className={styles.intro}>
          When medically accurate information about sexual health is treated as explicit, people lose access to essential education. When creators are silenced, stigma deepens. And when female-led companies can&apos;t advertise or build visibility, innovation slows down.
        </p>
        <p className={styles.intro}>
          Our mission with <a href="http://un-censor.it/" target="_blank" rel="noopener noreferrer">Un-censor.it</a> is to challenge this, by helping to share important information without being unfairly restricted by social media algorithms.
        </p>
        <p className={styles.intro}>
          We&apos;re also documenting how these systems work, making visible the biases that shape what can and cannot be said online. We are here to help the sexual health community reach their audiences while staying compliant with platform guidelines. Not by accepting silence, but by finding new, creative strategies for visibility.
        </p>
        <p className={styles.intro}>
          Because this isn&apos;t a niche issue.
        </p>
        <p className={styles.intro}>
          It&apos;s a public health problem, an economic barrier, and a form of digital inequality. Knowledge about our bodies is not unsafe. And access to that knowledge should never depend on an algorithm&apos;s approval.
        </p>
        <p className={styles.intro}>
          If you want to get in touch, write an email to<br />
          <a href="mailto:info@un-censor.it">info@un-censor.it</a>
        </p>
      </div>
    </div>
  );
}

