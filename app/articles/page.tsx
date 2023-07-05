import { Metadata } from "next";
import { ArticleCard } from "../_components/article-card";
import data from "../../articles.json"
import Link from "next/link";

export const metadata: Metadata = {
  title : "Artigos",
}

export default function Articles() {
  const articles = data.articles

  return (
    <>
      <main className="max-w-5xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
          {articles.map(item => (
            <Link href={`articles/${item.id}`} key={item.id} prefetch={false}>
              <ArticleCard {...item}/>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}