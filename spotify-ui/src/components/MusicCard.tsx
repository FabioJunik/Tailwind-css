import Image from "next/image";

interface MusicCardProps {
    autor: string;
    image: string;
    title: string;
}

export function MusicCard({autor, image, title}:MusicCardProps) {
    return (
        <a className="bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10 ">
            <Image src={image} className="w-full" width={104} height={104} alt="Foto do albúm" />
            <strong className="font-semibold">{title}</strong>
            <span className="text-sm text-zinc-500">{autor}</span>
        </a>
    )
}