import { Metadata, ResolvingMetadata } from "next";
import { ArticleHeader } from "../_components/article-header";
import { ArticleBody } from "../_components/article-body";
import { cmsService } from "../../../infra/cms/cmsService";
import { AllArticles } from "../../../infra/cms/Article";
import Link from "next/link";

type PageProps = {
  params: { slug: string }
}

export default async function Article({ params }: PageProps) {
  const id = params.slug

  const articleByIdQuery = `
    query {
      allContentArticles(filter : {id : { eq: ${id}}}) {
        title,
        author,
        headerImg {
          url
        },
        content {
          value
        }
      }
    }
  `
  const { data } = await cmsService({ query: articleByIdQuery }) as AllArticles
  const currentArticle = data.data.allContentArticles[0]

  return (
    <>
      <button>
        <Link href="/articles">
          <svg className="absolute top-28 left-56 text-white" xmlns="http://www.w3.org/2000/svg" height="56" viewBox="0 -960 960 960" width="56"><path fill="currentColor" d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg>
        </Link>
      </button>
      <section className="max-w-3xl mx-auto mt-24">
        <ArticleHeader
          title={currentArticle.title} 
          author={currentArticle.author} 
          imgSrc={currentArticle.headerImg.url} 
        />
      </section>
      <ArticleBody content={currentArticle.content} />    
    </>
  )
}

export async function generateMetadata(
  { params }: PageProps, 
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug
  const currentArticleQuery = `
    query {
      allContentArticles(filter : {id : { eq: ${id}}}) {
        title
      }
    }
  `
  const { data } = await cmsService({ query : currentArticleQuery })
  return {
    title : data.data.allContentArticles[0].title
  }
}