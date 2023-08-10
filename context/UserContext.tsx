"use client"

import { createContext, useState } from "react";
import { deleteCookie } from "cookies-next";

export type User = {
  id?: string
  name: string
  username?: string
}

type UserContextType = {
  user: User
  saveUser: (user: User) => void
  isUserAuthenticated: boolean
  setIsUserAuthenticated: (value: boolean) => void
  logout: () => void
}

export const UserContext = createContext<UserContextType>({
  user: {
    username: "",
    id: "",
    name: ""
  },
  saveUser: (user: User) => {},
  isUserAuthenticated: false,
  setIsUserAuthenticated: (value: boolean) => {},
  logout: () => {}
})

export default function UserProvider({ children }) {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false)
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    username: ""
  })

  function saveUser(user: User) {
    setUser(user)
  }

  function setIsUserAuthenticated(value: boolean) {
    setUserAuthenticated(value)
  }

  function logout() {
    setUser({id: "", name: "", username: ""})
    setIsUserAuthenticated(false)
    deleteCookie("x-access-token")
  }
  

  return (
    <UserContext.Provider
      value={{
        user, 
        saveUser, 
        isUserAuthenticated, 
        setIsUserAuthenticated,
        logout
      }}>
      { children }
    </UserContext.Provider>
  )
}