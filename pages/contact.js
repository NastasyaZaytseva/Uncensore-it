import React from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <h1 className={styles.title}>Get in Touch</h1>
        
        <div className={styles.messageBox}>
          <p className={styles.message}>
            Do you have input for us? Want to contribute or share your thoughts?
            <br />
            We would love to hear from you!
          </p>
        </div>

        <div className={styles.emailContainer}>
          <a 
            href="mailto:info@un-censor.it?subject=Inquiry%20from%20un-censor.it" 
            className={styles.emailLink}
          >
            info@un-censor.it
          </a>
        </div>

        <div className={styles.additionalInfo}>
          <p>
            We value your feedback and are committed to improving our tool for the community.
          </p>
        </div>
      </div>
    </div>
  );
}
