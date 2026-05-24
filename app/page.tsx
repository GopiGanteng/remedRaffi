"use client";

import Sidebar from "@/component/sidebar";
import { mobilList } from "./data/mobil";
import Image from "next/image";

export default function Home() {

  
  return (
    <>
    <div className="flex-1 text-center p-8 mt-40">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">
        SELAMAT DATANG
      </h1>
       
       <p className="text-gray-600 text-sm max-w-2xl flex-1 teks-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        ipsum cum laborum adipisci dicta similique enim ex eius facere eligendi
        eos necessitatibus, repudiandae iste earum tempora rem voluptas, error
        ad!
       </p>
      </div>
        </>

        
  );
}