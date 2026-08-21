import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

// If using GEMINI_API_KEY in ~/.bashrc, no constructor options are needed.
const ai = new GoogleGenAI({}); 

// If keeping the variable name as TORONTO, initialize like this:
// const ai = new GoogleGenAI({ apiKey: process.env.TORONTO });

async function run() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.7-flash',
    contents: 'Say hello in one sentence.',
  });

  console.log(response.text);
}

run();
