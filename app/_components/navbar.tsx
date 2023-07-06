import Link from "next/link"

export default function Navbar() {
  return (
    <header className="h-16 shadow-md flex justify-between items-center px-12 bg-black">
      <div>
        <h1 className="text-white font-semibold text-lg">My Blog</h1>
      </div>
      <nav className="h-full">
        <ul className="flex font-medium text-white h-full">
          <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
            <Link href="/articles" prefetch={false}>Artigos</Link>
          </li>
          <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
            <Link href="/profile">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}