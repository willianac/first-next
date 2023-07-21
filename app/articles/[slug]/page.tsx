import { Metadata, ResolvingMetadata } from "next";
import { ArticleHeader } from "../_components/article-header";
import { ArticleBody } from "../_components/article-body";
import { cmsService } from "../../../infra/cms/cmsService";
import { AllArticles } from "../../../infra/cms/Article";

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