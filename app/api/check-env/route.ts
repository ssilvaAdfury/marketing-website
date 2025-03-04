import { NextResponse } from 'next/server';

export async function GET() {
  // Don't expose the actual API key, just check if it exists
  const apiKey = process.env.OPENAI_API_KEY || '';
  const hasApiKey = !!apiKey;
  
  return NextResponse.json({ 
    hasApiKey,
    nodeEnv: process.env.NODE_ENV,
    // Show the first few characters of the API key if it exists (for debugging)
    keyPreview: hasApiKey ? `${apiKey.substring(0, 5)}...` : 'Not set'
  });
} 