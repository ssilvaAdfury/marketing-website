import { useMessages } from '../utils/useMessages'
import { useEffect, useRef } from 'react'

// Define the message type inline
type Message = { role: string; content: string };

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages()
  // Create a ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Function to handle scrolling to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mx-auto max-w-3xl pt-8 overflow-y-auto">
      {messages?.map((message: Message, i: number) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null
        return (
          <div
            id={`message-${i}`}
            className={`fade-up mb-4 flex ${
              isUser ? 'justify-end' : 'justify-start'
            } ${i === 1 ? 'max-w-md' : ''}`}
            key={message.content}
          >
            {!isUser && (
              <img
                src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
                className="h-9 w-9 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative rounded-lg px-3 py-2 ${
                isUser
                  ? 'mr-2 bg-blue-100 text-gray-900 dark:bg-blue-600 dark:text-white'
                  : 'ml-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
              }`}
            >
              {message.content.trim()}
            </div>
            {isUser && (
              <img
                src="https://www.teamsmart.ai/next-assets/profile-image.png"
                className="h-9 w-9 cursor-pointer rounded-full"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="mb-4 flex justify-start">
          <img
            src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
            className="h-9 w-9 rounded-full"
            alt="avatar"
          />
          <div className="loader relative ml-2 flex items-center justify-between space-x-1.5 rounded-full bg-gray-200 p-2.5 px-4 dark:bg-gray-800">
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
          </div>
        </div>
      )}
      {/* This invisible div marks the end of messages for scrolling */}
      <div ref={messagesEndRef} />
    </div>
  )
}
export default MessagesList