import React from 'react';
import useModification from './useModification';
import InputArea from './InputArea';
import ResultDisplay from './ResultDisplay';

export default function ModifyText() {
  const { inputText, setInputText, modifiedText, modifyText } = useModification();

  return (
    <div className="modify-text-container">
      <h1>UNCENSOR IT</h1>
      <p className='description'>Sidestep shadow bans on social media. Regenerate your caption to avoid triggering censorship algorithms in the context of sexual health.</p>
      <div className="input-container">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="START TYPING HERE..."
          className="textarea"
        />
        {modifiedText && (
          <div className="modified-text-result">
            <span>{modifiedText}</span>
          </div>
        )}
      </div>
      <button 
        onClick={modifyText} 
        className="button"
      >
        PRESS TO UNCENSOR IT
      </button>
    </div>
  );
}
