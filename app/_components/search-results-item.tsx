"use client"

type ComponentProps = {
  title: string
  author: string
}

export function SearchResultsItem({ author, title }: ComponentProps) {
  return (
    <div className="hover:bg-zinc-200 px-3 py-1.5 rounded-lg">
      <h2 className="font-semibold">{title}</h2>
      <small className="text-xs">{author}</small>
    </div>
  )
}