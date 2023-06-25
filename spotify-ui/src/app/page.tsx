import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { AlbumCard } from "@/components/AlbumCard"
import { MusicCard } from "@/components/MusicCard"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">God Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <AlbumCard /> 
            <AlbumCard /> 
            <AlbumCard /> 
            <AlbumCard /> 
            <AlbumCard /> 
            <AlbumCard /> 
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Fábio Junik</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
