import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <p> Do you have input for us in the mean time?<br></br> Feel free to reach out via:</p>
      <h2>
      <a href="mailto:info@un-censor.it?subject=Inquiry%20from%20studiobramble.com">info@un-censor.it</a>
     </h2>

    </div>
  );
};

export default Contact;
