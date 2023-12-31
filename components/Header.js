import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
        
            <Image className={styles.logo} src="/logo.png" alt="Logo" width={50} height={50} />
        
        </Link>
      </div>
      <nav className={styles.menu}>
        <Link href="/mission">MISSION</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;
