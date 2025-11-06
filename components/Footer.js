import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.fundingLabel}>This project is funded by</span>
          <Image
            src="/SCI_Woordbeeld_EN_3_regels_RGB.png"
            alt="Funding organization"
            width={74}
            height={46}
            className={styles.fundingLogo}
          />
        </div>
        <div className={styles.right}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.iconLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.instagramIcon}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>
          <Link href="/about-us" className={styles.link}>About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
