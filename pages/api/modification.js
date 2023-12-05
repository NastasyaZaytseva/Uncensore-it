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
  const wordsArr = wordsToReplace["Words"];

  const inputWords = inputText.split(/\s+/);

  const modifiedWords = inputWords.map(word => {
    if (wordsArr.includes(word.toLowerCase())) {
      const modifiedWord = word.split('').map(char => symbols[char.toLowerCase()].getRandomElement() || char).join('');
      return modifiedWord.slice(0, -2) + word.slice(-2); // Replace (length - 2) characters
    } else {
      return word;
    }
  });

  const modifiedText = modifiedWords.join(' ');

  return modifiedText;
}
