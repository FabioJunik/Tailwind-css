import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumCardProps {
    image: string;
    title: string;
}

export function AlbumCard({image, title}: AlbumCardProps) {
    return (
        <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
            <Image src={image} width={80} height={80} className="h-full object-cover" alt="Foto do albúm" />
            <strong>{title}</strong>
            <button className="p-2 rounded-full bg-green-500 text-black w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play fill='bg-black' />
            </button>
        </a>
    )
}