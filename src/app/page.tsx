"use client";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { RandomFoxes } from "@/components/RandomFox";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  //return a number between 1 and 122
  const randomNumber = () => Math.floor(Math.random() * 121) + 1;
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
  ]);

  //--
  return (
    <main>
      <h2 className="text-4xl font-bold text-gray-900">Random Foxes</h2>
      {images.map((item, index) => (
        <div key={index} className="p-4">
          <RandomFoxes url={item} />
        </div>
      ))}
    </main>
  );
};
export default Home;
