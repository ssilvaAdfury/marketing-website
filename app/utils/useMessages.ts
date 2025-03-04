import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@apideck/components';
import { sendMessage } from './sendMessage';

export interface CustomChatCompletionRequestMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ContextProps {
  messages: CustomChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<CustomChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: CustomChatCompletionRequestMessage = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.',
      };
      const welcomeMessage: CustomChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Hi, How can I help you today?',
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: CustomChatCompletionRequestMessage = {
        role: 'user',
        content,
      };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      
      console.log('Sending message to API...');
      const response = await sendMessage(newMessages);
      console.log('API response:', response);
      
      if (response.error) {
        throw new Error(response.error);
      }
      
      if (!response.data || !response.data.choices || !response.data.choices[0]) {
        throw new Error('Invalid response format from API');
      }
      
      const reply = response.data.choices[0].message;
      setMessages([...newMessages, reply]);
    } catch (error) {
      console.error('Error in addMessage:', error);
      addToast({ 
        title: error instanceof Error ? `Error: ${error.message}` : 'An error occurred', 
        type: 'error' 
      });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return React.createElement(
    ChatsContext.Provider,
    { value: { messages, addMessage, isLoadingAnswer } },
    children
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};