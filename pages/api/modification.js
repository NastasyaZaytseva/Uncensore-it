// pages/api/modification.js
import modificationsData from '../api/modifications.json'; 

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const modifiedText = randomizeText(text);
    res.status(200).json({ modifiedText });
  } else {
    res.status(405).end(); 
  }
}

function randomizeText(text) {
  return text
    .split(/\b/)
    .map(word => {
      const lowerWord = word.toLowerCase();
      return modificationsData[lowerWord] ? getRandomElement(modificationsData[lowerWord]) : word;
    })
    .join('');
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
