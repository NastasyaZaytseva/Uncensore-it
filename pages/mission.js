import React from 'react';
import styles from '../styles/Mission.module.css';

const Mission = () => {
  return (
    <div className={styles.mission}>
        <p className={styles.intro}>
        The project, established by Nienke Hedler, has more details available <a href="https://www.nienkehelder.com/">here</a>):
    </p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris. Justo nec ultrices dui sapien eget mi proin. Justo nec ultrices dui sapien. Morbi tristique senectus et netus et malesuada fames ac. 
        Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis molestie a iaculis at.</p>
        <p className={styles.text}>Sit amet purus gravida quis. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. 
        Justo donec enim diam vulputate.Porttitor massa id neque aliquam vestibulum morbi blandit cursus.</p>
   
    </div>
  );
};

export default Mission;
