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

const allSymbols = Object.values(symbols).flat().filter(symbol => symbol !== '');

function modifyText(inputText) {
  let modifiedText = inputText;
  
  // Sort words by length (longest first) to handle overlapping matches correctly
  const sortedWords = [...wordsToReplace.Words].sort((a, b) => b.length - a.length);
  
  // Process each word in the list
  sortedWords.forEach(wordToReplace => {
    const pattern = new RegExp(`\\b${escapeRegex(wordToReplace)}\\b`, 'gi');
    modifiedText = modifiedText.replace(pattern, (match) => {
      if (!containsSymbols(match)) {
        return modifyWord(match);
      }
      return match;
    });
  });
  
  return modifiedText;
}

function modifyWord(word) {
  if (word.length <= 2) {
    // For very short words, just replace some characters
    return Array.from(word, char => replaceCharWithSymbol(char)).join('');
  }
  
  let randomSliceSize = getRandomSliceSize(word.length);
  if (randomSliceSize > word.length) {
    randomSliceSize = word.length;
  }
  const shouldModifyOriginal = Math.random() < 0.5;
  
  const modifiedWord = Array.from(word, char => replaceCharWithSymbol(char)).join('');
  
  let finalWord = shouldModifyOriginal
    ? word.slice(0, -randomSliceSize) + modifiedWord.slice(-randomSliceSize)
    : modifiedWord.slice(0, randomSliceSize) + word.slice(randomSliceSize);
  
  if (finalWord === word) {
    finalWord = modifiedWord;
  }
  
  return finalWord;
}

function getRandomSliceSize(wordLength) {
  if (wordLength <= 3) return 1;
  const minSliceSize = Math.max(1, Math.floor(wordLength * 0.3));
  const maxSliceSize = Math.max(minSliceSize, Math.floor(wordLength * 0.7));
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

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsSymbols(text) {
  return allSymbols.some(symbol => text.includes(symbol));
}

