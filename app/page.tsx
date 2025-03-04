'use client';

import paragraphComponent from "./Components/paragraph";
import Image from "next/image";
import { Button, ToastProvider } from '@apideck/components'
import { AppProps } from 'next/app'
import { MessagesProvider } from './utils/useMessages'
import MessageForm from './Components/MessageForm'
import MessagesList from './Components/MessagesList'
import Link from 'next/link'


export default function Home() {
 
  return (
    <ToastProvider>
      <MessagesProvider>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          
          <div className="relative w-full h-96 bg-[url('/images/landingpageTestImage4.png')] bg-fixed bg-cover bg-[position:50%_60%] flex items-center justify-center backdrop-blur-lg">
            <div className="absolute inset-0 bg-black/64"></div>
            <div className="relative flex flex-col items-center gap-6">
              <p className="text-4xl font-bold text-white text-center px-8 p-4">
                Title Text Testy
              </p>
              <Link href="/chat">
                <Button size="large" className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg">
                  Chat Bot
                </Button>
              </Link>
            </div>
          </div> 

        
        <div className="grid gap-y-2">


            <div className="grid grid-cols-2 items-start gap-x-96 mt-64">
              <Image
                src={"/images/landingpageTestImage3.png"}
                alt={"Landing Page Test Image"}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="place-self-start">Side text test #1</p>
            </div>

            <div className="grid grid-cols-2 items-start gap-x-96 mt-32">
              <Image
                src={"/images/landingpageTestImage2.png"}
                alt={"Landing Page Test Image 2"}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="place-self-start">Side text test #2</p>
            </div>

            <div className="grid grid-cols-2 items-start gap-x-96 mt-32">
              <Image
                src={"/images/landingpageTestImage.png"}
                alt={"Landing Page Test Image 2"}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="place-self-start">Side text test #3 </p>
            </div>
          

          </div>

        </div>
      </MessagesProvider>
    </ToastProvider>
  );
}
