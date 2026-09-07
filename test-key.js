import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

// Initialize with the TORONTO_COFFEE_API environment variable
const ai = new GoogleGenAI({ apiKey: process.env.TORONTO_COFFEE_API });

async function run() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.7-flash',
    contents: 'Say hello in one sentence.',
  });

  console.log(response.text);
}

run();
