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
  let modifiedText = inputText;
  
  // Sort words by length (longest first) to handle overlapping matches correctly
  const sortedWords = [...wordsToReplace.Words].sort((a, b) => b.length - a.length);
  
  // Process each word in the list
  sortedWords.forEach(wordToReplace => {
    // Create multiple regex patterns to catch different variations
    const patterns = [
      // Exact match with word boundaries
      new RegExp(`\\b${escapeRegex(wordToReplace)}\\b`, 'gi'),
      // Match without word boundaries for partial words
      new RegExp(escapeRegex(wordToReplace), 'gi')
    ];
    
    patterns.forEach((pattern, index) => {
      modifiedText = modifiedText.replace(pattern, (match) => {
        // Only modify if the match hasn't already been modified (doesn't contain symbols)
        if (!containsSymbols(match)) {
          return modifyWord(match);
        }
        return match;
      });
    });
  });
  
  return modifiedText;
}

function modifyWord(word) {
  if (word.length <= 2) {
    // For very short words, just replace some characters
    return Array.from(word, char => replaceCharWithSymbol(char)).join('');
  }
  
  const randomSliceSize = getRandomSliceSize(word.length);
  const shouldModifyOriginal = Math.random() < 0.5;
  
  const modifiedWord = Array.from(word, char => replaceCharWithSymbol(char)).join('');
  
  const finalWord = shouldModifyOriginal
    ? word.slice(0, -randomSliceSize) + modifiedWord.slice(-randomSliceSize)
    : modifiedWord.slice(0, randomSliceSize) + word.slice(randomSliceSize);
  
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
  // Check if text contains any of the replacement symbols
  const allSymbols = Object.values(symbols).flat().filter(symbol => symbol !== '');
  return allSymbols.some(symbol => text.includes(symbol));
}

