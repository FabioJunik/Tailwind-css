import { Play } from "lucide-react";
import Image from "next/image";

export function AlbumCard() {
    return (
        <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpeg" width={80} height={80} alt="Foto do albúm" />
            <strong>Há um vinho novo</strong>
            <button className="p-2 rounded-full bg-green-500 text-black w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play fill='bg-black' />
            </button>
        </a>
    )
}