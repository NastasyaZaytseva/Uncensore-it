import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/un-censorit.svg" alt="un-censorit" width={126} height={26} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
