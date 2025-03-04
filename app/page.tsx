'use client';

import paragraphComponent from "./Components/paragraph";
import Image from "next/image";

export default function Home() {
  return (

    
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="relative w-full h-96 bg-[url('/images/landingpageTestImage4.png')] bg-fixed bg-cover bg-[position:50%_60%] flex items-center justify-center backdrop-blur-lg">
      <div className="absolute inset-0 bg-black/64"></div>
        <p className="relative text-4xl font-bold text-white text-center px-8 p-4">
          Title Text Test
        </p>
      </div> 

    
  <div className="grid gap-y-4">


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
  );
}
