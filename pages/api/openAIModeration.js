import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function getAssesment(word) {
    
    const moderation = await openai.moderations.create({ input: word });
  
    console.log(moderation);
  }