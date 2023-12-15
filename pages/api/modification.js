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
  const wordsToReplaceSet = new Set(wordsToReplace.Words);

  const modifiedWords = inputText.split(/\s+/).map(word => {
    const normalizedWord = normalizeWord(word);

    if (wordsToReplaceSet.has(normalizedWord)) {
      const randomSliceSize = getRandomSliceSize(word.length);

      const shouldModifyOriginal = Math.random() < 0.5;

      const modifiedWord = Array.from(word, char => replaceCharWithSymbol(char)).join('');

      const finalWord = shouldModifyOriginal
        ? word.slice(0, -randomSliceSize) + modifiedWord.slice(-randomSliceSize)
        : modifiedWord.slice(0, -randomSliceSize) + word.slice(-randomSliceSize);

      return finalWord;
    } else {
      return word;
    }
  });

  return modifiedWords.join(' ');
}

function getRandomSliceSize(wordLength) {
  const minSliceSize = 2;
  const maxSliceSize = wordLength - 2;
  return Math.floor(Math.random() * (maxSliceSize - minSliceSize + 1)) + minSliceSize;
}

function replaceCharWithSymbol(char) {
  const symbolMapping = symbols[char.toLowerCase()];
  return symbolMapping !== undefined && symbolMapping !== null ? getRandomElement(symbolMapping) : char;
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function normalizeWord(word) {
  // Remove trailing punctuation and make it lowercase
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "").toLowerCase();
}
