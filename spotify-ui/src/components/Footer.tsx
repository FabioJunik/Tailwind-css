import Image from "next/image";
import { Shuffle, SkipBack } from "lucide-react";
import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, SkipForward, Volume } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 h-21 flex items-center justify-between ">
      <div className="flex items-center gap-1">
        <Image src="/album.jpeg" width={56} height={56} alt="Foto do albúm" />
        <div className="flex flex-col">
          <strong className="font-normal">Me atraiu</strong>
          <span className="text-xs text-zinc-400">Gabriela Rocha</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="p-2 rounded-full bg-white text-black w-10 h-10 flex items-center justify-center">
            <Play fill='bg-black' />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:45</span>
          <div className="w-96 h-1 bg-zinc-500 rounded-full">
            <div className="w-20 h-1 bg-zinc-100 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:20</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="w-24 h-1 bg-zinc-500 rounded-full">
            <div className="w-5 h-1 bg-zinc-100 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}