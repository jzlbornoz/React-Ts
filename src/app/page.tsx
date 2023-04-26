import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RandomFoxes } from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //return a number between 1 and 122
  const randomNumber = () => Math.floor(Math.random() * 121) + 1;
  const imageUrl = `https://randomfox.ca/images/${randomNumber()}.jpg`

  //--
  return (
    <main>
      <h1 className="text-4xl font-bold text-gray-900">Hola</h1>
      <RandomFoxes url={imageUrl} />
    </main>
  )
}
