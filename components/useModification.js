import { useEffect, useState } from 'react';

const useModification = () => {
  const [inputText, setInputText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  // Live update modified text as the user types (debounced)
  useEffect(() => {
    const trimmed = inputText.trim();
    if (trimmed === '') {
      setModifiedText('');
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/modification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed }),
          signal: controller.signal,
        });
        if (!response.ok) return;
        const data = await response.json();
        setModifiedText(data.modifiedText);
      } catch (err) {
        // ignore aborts
      } finally {
        setIsLoading(false);
      }
    }, 350);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [inputText]);

  return { inputText, setInputText, modifiedText, modifyText, isLoading };
};

export default useModification;
