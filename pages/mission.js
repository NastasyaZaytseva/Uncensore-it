import React from 'react';
import styles from '../styles/Mission.module.css';

const Mission = () => {
  return (
    <div className={styles.mission}>
        <p className={styles.intro}>
        Uncensor It, established by Nienke Helder, has more details available <a href="https://www.nienkehelder.com/">here</a>):
    </p>
      <p className={styles.text}>This project in progress stems from a long term observation that people in the field of sexual health struggle to communicate on social media, because of censorship. While there is an understandable need of profanity filters to keep social media a relatively safe space, this puts a big responsibility on social media platforms, which in their turn come with many ethical questions. 


</p>
        <p className={styles.text}>Because censorship seems to disproportionately affect activism for equality and socially vulnerable groups, we are aiming to design our app based on intersectional methodologies and philosophies such as consent based technology.</p>

        <p className={styles.text}>Our first goal is to create a working prototype for the sexual health community, so that they can share their important knowledge without the risk of losing their viewers or full accounts. </p>
   
    </div>
  );
};

export default Mission;
