import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY || '';
  const hasApiKey = !!apiKey;
  
  return NextResponse.json({ 
    hasApiKey,
    nodeEnv: process.env.NODE_ENV,
    keyPreview: hasApiKey ? `${apiKey.substring(0, 5)}...` : 'Not set'
  });
} 