import { Metadata, ResolvingMetadata } from "next";
import { ArticleHeader } from "../_components/article-header";
import { ArticleBody } from "../_components/article-body";
import data from "../../../articles.json";

type PageProps = {
  params: { slug: string }
}

export default function Article({ params }: PageProps) {
  const articles = data.articles
  const id = params.slug
  const currentArticle = articles.find(item => item.id === Number(id))

  return (
    <>
      <section className="max-w-3xl mx-auto mt-6">
        <ArticleHeader
          title={currentArticle.title} 
          author={currentArticle.author} 
          imgSrc={currentArticle.imgSrc} 
        />
      </section>
      <ArticleBody articleID={id} />
    </>
  )
}

export async function generateMetadata(
  { params }: PageProps, 
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug
  const currentArticle = data.articles.find(item => item.id === Number(id))
  return {
    title : currentArticle.title
  }
}