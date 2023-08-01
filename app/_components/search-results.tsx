"use client"

import { useContext } from "react"
import { ArticleContext } from "../../context/ArticlesContext"
import { SearchResultsItem } from "./search-results-item"
import Link from "next/link"

type ComponentProps = {
  clearSearchTerms: () => void
}

export function SearchResults({ clearSearchTerms }: ComponentProps) {

  const { articles } = useContext(ArticleContext)
  
  return (
    <div className="bg-zinc-100 w-[334px] rounded-lg px-3 py-2 max-h-96 overflow-y-auto flex flex-col gap-3 shadow-black/90 shadow-lg">
      {articles?.map(item => (
        <Link href={`/articles/${item.id}`} onClick={clearSearchTerms}>
          <SearchResultsItem
            title={item.title}
            author={item.author}
            key={item.id}
          />
        </Link>
      ))}
    </div>
  )
}