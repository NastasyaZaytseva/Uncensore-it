import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [modifications, setModifications] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [newAlternatives, setNewAlternatives] = useState('');
  const [error, setError] = useState('');

  // Загрузка текущих модификаций
  useEffect(() => {
    fetchModifications();
  }, []);

  const fetchModifications = async () => {
    try {
      const response = await fetch('/api/modifications');
      const data = await response.json();
      setModifications(data);
    } catch (err) {
      console.error('Ошибка при получении модификаций:', err);
      setError('Ошибка при загрузке данных.');
    }
  };

  const handleAddModification = async () => {
    if (!newWord || !newAlternatives) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    try {
      const response = await fetch('/api/modifications/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: newWord, alternatives: newAlternatives.split(',') }),
      });
      if (!response.ok) throw new Error('Ошибка запроса');
      fetchModifications(); // Обновление списка
    } catch (err) {
      console.error('Ошибка при добавлении модификации:', err);
      setError('Ошибка при добавлении модификации.');
    }
  };

  // Подобные функции для handleUpdateModification и handleDeleteModification

  return (
    <div className="modify-text-container">
      <h1>Uncensor it</h1>
      <div className="input-result-container">
        <form onSubmit={handleSubmit} className="modify-text-form">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="START TYPING HERE..."
          />
          {modifiedText && (
            <div className="modified-text-result">
              <strong>Transformed:</strong> <span>{modifiedText}</span>
            </div>
          )}
        </form>
      </div>
      <button type="submit" form="text-form" className="button">PRESS TO UNCENSOR IT</button>
    </div>
  );
  
}
