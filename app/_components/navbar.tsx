import Link from "next/link"

export default function Navbar() {
  return (
    <header className="h-16 shadow-md flex justify-between items-center px-12 bg-black">
      <div>
        <h1 className="text-white font-semibold text-lg">My Blog</h1>
      </div>
      <nav>
        <ul className="flex gap-2 font-medium text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/articles">Artigos</Link>
          </li>
          <li>
            <Link href="/profile">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}