import { ArticleCard } from "../_components/article-card";

export default function Articles() {
  return (
    <>
      <main className="max-w-5xl mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </main>
    </>
  )
}