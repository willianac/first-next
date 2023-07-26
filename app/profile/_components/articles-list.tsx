"use client"

import { useContext } from "react"
import { ArticleContext } from "../../../context/ArticlesContext"
import { ArticleCard } from "../../_components/article-card"

export function ArticlesList() {
  const { articles } = useContext(ArticleContext)
  
  return (
    <ul className="flex flex-col gap-9">
      {articles?.map(article => (
        <ArticleCard 
          author={article.author} 
          imgSrc={article.headerImg.url}
          title={article.title}
          key={article.id}
        />
      ))}
    </ul>
  )
}