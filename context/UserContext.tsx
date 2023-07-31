"use client"

import { createContext, useState } from "react";

export const UserContext = createContext({
  user: {
    id: "",
    name: ""
  },
  saveUser: (user: any) => {}
})

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: ""
  })

  function saveUser(user: any) {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{user, saveUser}}>
      { children }
    </UserContext.Provider>
  )
}