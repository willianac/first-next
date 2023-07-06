import { StructuredText } from "react-datocms";

type ArticleBodyProps = {
  content: any
}

export function ArticleBody({ content }: ArticleBodyProps) {
  
  return (
    <article className="max-w-3xl mx-auto font-serif text-zinc-300 text-xl leading-normal mt-6 bg-zinc-900 p-11 rounded-lg shadow-2xl">
      <StructuredText data={content}/>
    </article>
  )
}