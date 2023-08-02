"use client"
import Link from "next/link"
import { useEffect } from "react"
import { SearchBar } from "./searchbar"

export default function Navbar() {
  useEffect(() => {
    let prevScrollPos = window.scrollY
    window.onscroll = function() {
      let currentScrollPos = window.scrollY
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-64px";
      }
      prevScrollPos = currentScrollPos;
    }
  })
  return (
    <header className="fixed top-0 w-full h-16 shadow-md flex justify-between items-center px-12 bg-black transition-all duration-500" id="navbar">
      <div className="flex items-center gap-x-48">
        <Link href="/">
          <h1 className="text-white font-semibold text-lg">Next-Blog</h1>
        </Link>
        <SearchBar />
      </div>
      <nav className="h-full">
        <ul className="flex font-medium text-white h-full">
          <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
            <Link href="/auth/login">Entrar</Link>
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