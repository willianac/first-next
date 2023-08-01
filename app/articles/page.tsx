import { Metadata } from "next";
import { ArticleCard } from "../_components/article-card";
import Link from "next/link";
import { Article } from "../../infra/cms/Article";

export const metadata: Metadata = {
  title : "Artigos",
}

const CMS_API_TOKEN = process.env.CMS_API_TOKEN

async function getArticles() {
  const allArticlesQuery = `
    query {
      allContentArticles {
        title,
        author,
        headerImg {
          url
        },
        id,
        content {
          value
        }
      }
    }
  `
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + CMS_API_TOKEN
    },
    body: JSON.stringify({ query: allArticlesQuery })
  })

  if(!response.ok) {
    throw new Error("Não foi possível listar os artigos")
  }

  const data = await response.json()
  return data.data.allContentArticles
}

export default async function Articles() {
  const articles: Article[] = await getArticles()

  return (
    <>
      <main className="max-w-5xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
          {articles?.map(item => (
            <Link href={`articles/${item.id}`} key={item.id} prefetch={false}>
              <ArticleCard 
                author={item.author} 
                imgSrc={item.headerImg.url}
                title={item.title}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}