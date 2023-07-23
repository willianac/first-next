"use client"
import { createContext, useState } from "react";
import { Article } from "../infra/cms/Article";


export const ArticleContext = createContext({
  articles: [],
  updateArticlesList: (articles: Article[]) => {}
})

export default function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState<Article[]>([])

  function updateArticlesList(articles: Article[]) {
    setArticles(articles)
  }
  
  return (
    <ArticleContext.Provider value={{articles, updateArticlesList}}>
      { children }
    </ArticleContext.Provider>
  )
}