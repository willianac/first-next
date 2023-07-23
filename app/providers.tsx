"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ArticlesProvider from "../context/ArticlesContext";


export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ArticlesProvider>
      <QueryClientProvider client={queryClient}>
        { children }
      </QueryClientProvider>
    </ArticlesProvider>
  )
}