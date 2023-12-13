import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <p> For Inquiries:</p>
      <h2>
      <a href="mailto:info@un-censor.it?subject=Inquiry%20from%20studiobramble.com">info@un-censor.it</a>
      <br></br>
            <a href="tel:+11111111">+1 212 232 2121</a></h2>
      <div>
       <p> Noord-Holland 1071 GZ, Netherlands</p> </div>
    </div>
  );
};

export default Contact;
