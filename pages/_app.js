import '../styles/globals.css';
import '../styles/ModifyText.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  // Determine background based on route
  const getBackgroundClass = () => {
    if (router.pathname === '/contribute') {
      return 'bg-contribute';
    }
    if (router.pathname === '/about-us') {
      return 'bg-about';
    }
    return 'bg-main';
  };

  return (
    <div className={`container ${getBackgroundClass()}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
