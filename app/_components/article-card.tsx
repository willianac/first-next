type ArticleCardProps = {
  title: string
  author: string
  imgSrc: string
}

export function ArticleCard({ title, author, imgSrc }: ArticleCardProps) {
  return (
    <div className="max-w-md border-t border-b border-zinc-600 border-opacity-50 hover:bg-indigo-700 hover:bg-opacity-10">
      <div className="flex justify-between items-center">
        <div className="p-4">
          <h2 className="text-white font-bold text-lg">{title}</h2>
          <span className="text-white text-xs">
            Por <span className="text-white underline underline-offset-2">{author}</span>
          </span>
        </div>
        <div>
          <img className="max-w-[180px]" src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  )
}