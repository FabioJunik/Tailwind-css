import { Home, Library, Search } from "lucide-react";

export function Sidebar () {
    return (
        <aside className="w-64 bg-zinc-950 p-6">
        <nav className="space-y-5">
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Home />
            Home
          </a>
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Search />
            Search
          </a>
          <a href="" className="flex gap-3 items-center text-ms font-semibold text-zinc-200">
            <Library />
            Your Library
          </a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Minhas Músicas</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> louvores</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> NerdHit</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Em inglês 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Para relaxar</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Só mais uma</a>
        </nav>
      </aside>
    )
}