"use client"

import { useEffect } from "react"
import { ArticleCard } from "../../_components/article-card"
import { useQuery } from "@tanstack/react-query"
import { Article } from "../../../infra/cms/Article"

const CMS_API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN

const userArticlesQuery = `
  query {
    allContentArticles(filter: {author: {matches: {pattern: "Willian Almeida", caseSensitive: false}}}) {
      title,
      author,
      headerImg {
        url
      }
    }
  }
`

export function ArticlesList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user-articles"],
    queryFn: async() => {
      const response = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + CMS_API_TOKEN
        },
        body: JSON.stringify({ query: userArticlesQuery })
      })
      const data = await response.json()
      return data.data.allContentArticles as Article[]
    }
  })

  useEffect(() => {
    console.log(data)
  }, [data])
  
  if(isLoading) {
    return <h1 className="text-white text-lg">Carregando</h1>
  }
  
  return (
    <ul className="flex flex-col gap-9">
      {data.map(article => (
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