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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Введите текст здесь..."
        />
        <button type="submit">Модифицировать текст</button>
      </form>
      {modifiedText && <div><strong>Модифицированный текст:</strong> {modifiedText}</div>}
    </div>
  );
}
