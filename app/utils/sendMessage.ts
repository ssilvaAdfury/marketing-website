import { CustomChatCompletionRequestMessage } from './useMessages';

export const sendMessage = async (messages: CustomChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })
    
    const result = await response.json()
    if (result.error) {
      console.error('API Error:', result.error)
      throw new Error(result.error)
    }
    return result
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}