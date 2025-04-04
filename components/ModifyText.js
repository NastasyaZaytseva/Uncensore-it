import React, { useState } from 'react';
import useModification from './useModification';

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
        <h1>UNCENSOR IT</h1>
        <p className="description">
          Sidestep shadow bans on social media.<br />
          Regenerate your caption to avoid triggering censorship algorithms.
        </p>
      </div>

      <div className="translator-box">
        <div className="input-box">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="START TYPING HERE..."
            className="text-area"
          />
          {inputText && (
            <button 
              onClick={() => setInputText('')} 
              className="clear-button"
              aria-label="Clear text"
            >
              ×
            </button>
          )}
        </div>

        <button 
          onClick={modifyText} 
          className="translate-button"
          disabled={!inputText}
        >
          <span className="button-icon">↓</span>
          <span>PRESS TO UNCENSOR IT</span>
        </button>

        <div className="output-box">
          {modifiedText ? (
            <>
              <div className="modified-text">
                {modifiedText}
              </div>
              <button 
                onClick={() => handleCopy(modifiedText)}
                className="copy-button"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </>
          ) : (
            <div className="placeholder-text">
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
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
        }
      `}</style>
    </div>
  );
}
