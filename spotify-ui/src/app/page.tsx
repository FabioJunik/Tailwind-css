import { ChevronLeft, ChevronRight } from "lucide-react"
import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"
import { AlbumCard } from "@/components/AlbumCard"
import { MusicCard } from "@/components/MusicCard"
import { data, MusicProps } from "./data"

export default function Home() {
  function getMusic(musicId: number) {
    const musicData = data.music.find(({ id }) => id === musicId)

    return musicData || {} as MusicProps
  }
  return (
    <div className="h-screen grid grid-rows-[auto,84px]">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6  max-h-[calc(100vh-84px)] overflow-auto">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Reproduzido recentemente</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {data.recentlyPlayed.map((id) => {
              const { image, title } = getMusic(id)
              return <AlbumCard image={image} title={title} />
            })}
          </div>
          <h2 className="font-semibold text-2xl mt-10">Feito por Fábio Junik</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {data.music.map(({autor, image, title})=> (
              <MusicCard autor={autor} image={image} title={title}/>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
