import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Contribute.module.css';
export default function Contribute() {
  const [formData, setFormData] = useState({
    suggestedWord: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contribute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suggestedWord: formData.suggestedWord }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          suggestedWord: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contribute - Text Changer</title>
        <meta name="description" content="Help improve our text transformation tool by suggesting new words and features" />
      </Head>

      <div className={styles.centerWrap}>
        <div className={styles.pageHeader}>
          <Image src="/un-censorit.svg" alt="un-censorit" width={126} height={26} className={styles.logo} />
          <div className={styles.subtitle}>Suggest a missing word</div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              id="suggestedWord"
              name="suggestedWord"
              value={formData.suggestedWord}
              onChange={handleInputChange}
              className={styles.textInput}
              placeholder="Abortion"
              required
            />
            <div className={styles.sendRow}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.sendLink}
              >
                {isSubmitting ? 'Sending…' : 'Send suggestion'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className={styles.statusSuccess}>✓ Thank you! We\'ll review your suggestion.</div>
            )}
            {submitStatus === 'error' && (
              <div className={styles.statusError}>⚠ There was an error. Please try again.</div>
            )}
        </form>
      </div>
    </>
  );
} 