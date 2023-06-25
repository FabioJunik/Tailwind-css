import Image from "next/image";

export function MusicCard() {
    return (
        <a className="bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10 ">
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Foto do albúm" />
            <strong className="font-semibold">Me atraiu</strong>
            <span className="text-sm text-zinc-500">Gabriela Rocha</span>
        </a>
    )
}