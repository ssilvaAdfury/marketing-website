import { NextApiRequest, NextApiResponse } from 'next'

export default async function createMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { messages } = req.body
  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'

  // Check if API key exists
  if (!apiKey) {
    console.error('API key is missing')
    return res.status(500).json({ error: 'OpenAI API key is not configured' })
  }

  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false,
  })

  try {
    console.log('Sending request to OpenAI API...')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    })
    
    const data = await response.json()
    
    // Log any error from OpenAI
    if (data.error) {
      console.error('OpenAI API Error:', data.error)
      return res.status(500).json({ error: `OpenAI API error: ${data.error.message || JSON.stringify(data.error)}` })
    }
    
    console.log('OpenAI API response received successfully')
    res.status(200).json({ data })
  } catch (error: unknown) {
    console.error('Error calling OpenAI API:', error)
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
}