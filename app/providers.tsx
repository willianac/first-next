"use client"
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import ArticlesProvider from "../context/ArticlesContext";
import UserProvider from "../context/UserContext";


export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <UserProvider>
      <ArticlesProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </QueryClientProvider>
      </ArticlesProvider>
    </UserProvider>
  )
}