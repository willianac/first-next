import { Metadata } from "next";
import { ArticleCard } from "../_components/article-card";
import Link from "next/link";
import { cmsService } from "../../infra/cms/cmsService";
import { AllArticles } from "../../infra/cms/Article";

export const metadata: Metadata = {
  title : "Artigos",
}

const articlesQuery = `
  query {
    allContentArticles {
        title,
        author,
        content {
          value
        },
        headerImg {
          url
        },
        id
    }
  }
`

export default async function Articles() {
  const { data } = await cmsService({ query: articlesQuery }) as AllArticles
  const articles = data.data.allContentArticles
  return (
    <>
      <main className="max-w-5xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
          {articles.map(item => (
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