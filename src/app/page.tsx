"use client";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { RandomFoxes } from "@/components/RandomFox";
import { useState } from "react";
import { ImageModel } from "@/models/Image.model";

const inter = Inter({ subsets: ["latin"] });

//return a number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 121) + 1;

// return id
const uniqueId = () => Math.random().toString(36).substring(2, 9);
const Home: NextPage = () => {
  const [images, setImages] = useState<ImageModel[]>([
    {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    },
    {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    },
    {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    },
    {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    },
  ]);

  //--
  return (
    <main>
      <h2 className="text-4xl font-bold text-gray-900">Random Foxes</h2>
      {images.map((item, index) => (
        <div key={item.id + index} className="p-4">
          <RandomFoxes url={item.url} />
        </div>
      ))}
    </main>
  );
};
export default Home;
