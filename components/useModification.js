import { useState } from 'react';

const useModification = () => {
  const [inputText, setInputText] = useState('');
  const [modifiedText, setModifiedText] = useState('');

  const modifyText = async () => {
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

  return { inputText, setInputText, modifiedText, modifyText };
};

export default useModification;
