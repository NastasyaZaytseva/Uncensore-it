import wordsToReplace from '../api/words-to-replace.json';
import symbols from '../api/symbols-for-replacement.json';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const modifiedText = modifyText(text);
    res.status(200).json({ modifiedText });
  } else {
    res.status(405).end();
  }
}

function modifyText(inputText) {
  const wordsArr = new Set(wordsToReplace["Words"]);

  const modifiedWords = inputText.split(/\s+/).map(word => {
    const normalizedWord = normalizeWord(word);

    if (wordsArr.has(normalizedWord)) {
      const modifiedWord = Array.from(word, char => {
        const symbolMapping = symbols[char.toLowerCase()];
        return symbolMapping !== undefined && symbolMapping !== null ? getRandomElement(symbolMapping) : char;
      }).join('').slice(0, -2) + word.slice(-2); // Replace (length - 2) characters

      return modifiedWord;
    } else {
      return word;
    }
  });

  return modifiedWords.join(' ');
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function normalizeWord(word) {
  // Remove trailing punctuation and make it lowercase
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
}
