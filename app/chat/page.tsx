'use client';

import { ToastProvider } from '@apideck/components'
import { MessagesProvider } from '../utils/useMessages'
import MessageForm from '../Components/MessageForm'
import MessagesList from '../Components/MessagesList'

export default function ChatPage() {
  return (
    <ToastProvider>
      <MessagesProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 overflow-y-auto pb-32">
            <MessagesList />
          </div>
          <div className="fixed bottom-0 right-0 left-0">
            <MessageForm />
          </div>
        </div>
      </MessagesProvider>
    </ToastProvider>
  );
} 