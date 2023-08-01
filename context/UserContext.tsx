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
  saveUser: (user: User) => {}
})

export default function UserProvider({ children }) {
  const [user, setUser] = useState<User>({
    id: "",
    name: ""
  })

  function saveUser(user: User) {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{user, saveUser}}>
      { children }
    </UserContext.Provider>
  )
}