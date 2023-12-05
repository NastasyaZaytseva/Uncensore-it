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
      <h1>Uncesore it</h1>
      <form onSubmit={handleSubmit} className="modify-text-form">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text"
        />
        <button type="submit" className="button">Modify text</button>
      </form>
      {modifiedText && <div className="modified-text-result"><strong>Transformed:</strong> {modifiedText}</div>}
    </div>
  );
}
