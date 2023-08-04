"use client"

import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { SearchBar } from "./searchbar"
import { PopOverMenu } from "./popover-menu"
import { User, UserContext } from "../../context/UserContext"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { 
    isUserAuthenticated, 
    user, 
    logout,
    setIsUserAuthenticated,
    saveUser 
  } = useContext(UserContext)


  const handlePopOver = () => {
    setIsMenuOpen(prevState => !prevState)
  }

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


  useEffect(() => {
    const token = getCookie("x-access-token")
    if(token) {
      const user: User = JSON.parse(token.toString())
      setIsUserAuthenticated(true)
      saveUser(user)
    }
  }, [])

  return (
    <header className="fixed top-0 w-full h-16 shadow-md flex justify-between items-center px-12 bg-black transition-all duration-500" id="navbar">
      <div className="flex items-center gap-x-48">
        <Link href="/">
          <h1 className="text-white font-semibold text-lg">Next-Blog</h1>
        </Link>
        <SearchBar />
      </div>
      <nav className="h-full relative">
        <ul className="flex font-medium text-white h-full">
          <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
            <Link href="/articles" prefetch={false}>Artigos</Link>
          </li>
          {isUserAuthenticated ?
            <li className="px-2">
              <svg onClick={handlePopOver} className="text-white relative top-3.5 rounded-full hover:text-indigo-700 transition" xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="currentColor" d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"/></svg>
            </li>
            :
            <li className="px-2 transition ease-linear hover:bg-indigo-700 flex items-center">
              <Link href="/auth/login">Entrar</Link>
            </li>
          }
        </ul>
        {isMenuOpen &&
          <div className="absolute right-0">
            <PopOverMenu firstname={user.name} username={user.username} logout={logout}/>
          </div>
        }
      </nav>
    </header>
  )
}