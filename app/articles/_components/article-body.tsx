import { readFile, readFileSync } from "node:fs"

type ArticleTextProps = {
  articleID: string
}

export function ArticleBody({ articleID }: ArticleTextProps) {
  let text = readFileSync(`./texts/${articleID}.md`).toString("utf-8")
  console.log("article body" + "o id: " + articleID)
  
  return (
    <article className="max-w-3xl mx-auto font-serif text-zinc-300 text-xl leading-normal mt-6 bg-zinc-900 p-11 rounded-lg shadow-2xl">
      {text}
    </article>
  )
}