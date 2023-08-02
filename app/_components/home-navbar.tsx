import Link from "next/link";

export function HomeNavbar() {
  return (
    <header className="h-16 bg-black flex justify-between items-center px-96">
      <div className="flex gap-4">
        <img src="icon.png"/>
        <h1 className="text-white text-3xl font-bold">Next-Blog</h1>
      </div>
      <nav>
        <Link href="/articles" className="text-white text-lg font-semibold rounded-md outline outline-zinc-800 outline-1 hover:bg-zinc-900 py-1.5 px-5 transition">Artigos</Link>
      </nav>
    </header>
  )
}