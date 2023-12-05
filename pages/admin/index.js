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
    <div>
      <div>
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Новое слово"
        />
        <input
          value={newAlternatives}
          onChange={(e) => setNewAlternatives(e.target.value)}
          placeholder="Альтернативы (через запятую)"
        />
        <button onClick={handleAddModification}>Добавить</button>
      </div>
      {error && <p>{error}</p>}
      <table>
        {/* Отобразите здесь список модификаций */}
      </table>
    </div>
  );
}
