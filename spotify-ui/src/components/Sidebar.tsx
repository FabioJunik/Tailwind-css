import { data } from "@/app/data";
import { Home, Library, Search } from "lucide-react";

export function Sidebar () {
    return (
        <aside className="w-64 bg-zinc-950 p-6">
        <nav className="space-y-5">
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Home />
            Início
          </a>
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Search />
            Procurar
          </a>
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Library />
            A tua Biblioteca
          </a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          {data.libary.map(name => (
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{name}</a>
          ))}
        </nav>
      </aside>
    )
}