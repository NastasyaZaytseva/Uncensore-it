import { useState } from 'react';

export default function ModifyText() {
  const [inputText, setInputText] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/modification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    });
    const data = await response.json();
    setModifiedText(data.modifiedText);
  };

  return (
    <div className="modify-text-container">
      <h1>Uncensor it</h1>
      <div className="input-result-container">
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
        onClick={handleSubmit} 
        className="button"
      >
        PRESS TO UNCENSOR IT
      </button>
    </div>
  );
  
  
}
