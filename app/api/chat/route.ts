import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';

    
    if (!apiKey) {
      console.error('is API key missing? Did you mess up?');
      return NextResponse.json({ error: 'OpenAI API key is not set up' }, { status: 500 });
    }

    const body = JSON.stringify({
      messages,
      model: 'gpt-3.5-turbo',
      stream: false,
    });

    console.log('Sending request to OpenAI API...');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });
    
    const data = await response.json();
    
    if (data.error) {
      console.error('OpenAI API Error:', data.error);
      return NextResponse.json(
        { error: `OpenAI API error: ${data.error.message || JSON.stringify(data.error)}` }, 
        { status: 500 }
      );
    }
    
    console.log('OpenAI API response received successfully');
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
} 