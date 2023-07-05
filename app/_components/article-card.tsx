type ArticleCardProps = {
  title: string
  author: string
  imgSrc: string
}

export function ArticleCard({ title, author, imgSrc }: ArticleCardProps) {
  return (
    <div className="max-w-md border-t border-b border-zinc-600 border-opacity-50">
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


{/* <div className="w-80 h-56 border border-black rounded-lg overflow-hidden shadow-xl">
      <div className="flex flex-col h-full">
        <div className="h-28 bg-white rounded">
          
        </div>
        <div className="flex-grow bg-zinc-950 relative">
        <span className="absolute text-white -top-3 bg-zinc-600 left-0 right-0 mx-12 rounded text-center">Teste de titulo</span>
          teste
        </div>
      </div>
    </div> */}