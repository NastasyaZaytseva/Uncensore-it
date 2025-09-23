import React, { useState } from 'react';
import useModification from './useModification';
import Link from 'next/link';
import Image from 'next/image';

export default function ModifyText() {
  const { inputText, setInputText, modifiedText, modifyText } = useModification();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };
  return (
    <div className="modify-text-container">
      <div className="header">
        <Image src="/un-censorit.svg" alt="un-censorit" width={126} height={26} />
        <p className="description">
          Sidestep shadow bans on social media.<br />
          Regenerate your caption to avoid triggering censorship algorithms.
        </p>
        <a href="#examples" className="examples-link">See examples</a>
      </div>

      <div className="translator-box">
        <div className="input-box">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or copy text"
            className="text-area"
          />
          {inputText && (
            <button 
              onClick={() => setInputText('')} 
              className="clear-button"
              aria-label="Clear text"
            >
              × Clear
            </button>
          )}
        </div>



        <div className="output-box">
          <button
            type="button"
            className="regen-button"
            onClick={modifyText}
            disabled={!inputText}
            aria-label="Generate another version"
            title="Generate another version"
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
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
              <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
            </svg>
          </button>
          {modifiedText ? (
            <>
              <div className="modified-text">
                {modifiedText}
              </div>
              <button 
                onClick={() => handleCopy(modifiedText)}
                className="copy-cta"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <Link href="/contribute" className="missing-link">Missing a word?</Link>
            </>
          ) : (
            <>
              <div className="placeholder-text">Educators discussing menstruΛtion, mastų®βΛtion, and s3xuΛl health often find their content restricted on social media platforms #uncensor-it</div>
              <Link href="/contribute" className="missing-link">Missing a word?</Link>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .contribute-link {
          margin-top: 20px;
          text-align: center;
        }

        .examples-link {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 12px;
          line-height: 18px;
          color: #111111;
          text-decoration: underline;
          display: inline-block;
          margin-top: 6px;
        }

        .contribute-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;

          border-radius: 25px;
          color: #ffffff !important;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
  
        }

    

        .translator-box {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .text-area, .output-box {
          width: 100%;
          min-height: 150px;
        }

        @media (max-width: 960px) {
          .text-area, .output-box {
            min-height: 150px;
            width: 90%;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .text-area, .output-box {
            min-height: 150px;
            width: 85%;
          }
          
          .contribute-button {
            font-size: 12px;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}
