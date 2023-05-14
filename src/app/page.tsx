"use client";
import { MouseEventHandler, useState } from "react";
import { NextPage } from "next";
import { Inter } from "next/font/google";

import { LazyImage } from "@/components/LazyImage";
import { ImageModel } from "@/models/Image.model";

const inter = Inter({ subsets: ["latin"] });

//return a number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 121) + 1;

// return id
const uniqueId = () => Math.random().toString(36).substring(2, 9);
const Home: NextPage = () => {
  const [images, setImages] = useState<ImageModel[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault(); //Ejemplo

    const newImage: ImageModel = {
      id: uniqueId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };
    setImages([...images, newImage]);
  };

  //--
  return (
    <main>
      <h2 className="text-4xl font-bold text-gray-900">Random Foxes</h2>
      <button
        onClick={addNewFox}
        className="flex  justify-center rounded-md bg-indigo-600 
      px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Fox
      </button>
      {images.map((item, index) => (
        <div key={item.id + index} className="p-4">
          <LazyImage
            src={item.url}
            onClick={() => console.log("holaaeee")}
            width={300} height={300}
            className="rounded bg-slate-600" />
        </div>
      ))}
    </main>
  );
};
export default Home;
