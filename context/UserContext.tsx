"use client"

import { createContext, useState } from "react";

export type User = {
  id: string
  name: string
}

export const UserContext = createContext({
  user: {
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
    name: ""
  })

  function saveUser(user: User) {
    setUser(user)
  }

  function setIsUserAuthenticated(value: boolean) {
    setUserAuthenticated(value)
  }

  function logout() {
    setUser({id: "", name: ""})
    setIsUserAuthenticated(false)
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