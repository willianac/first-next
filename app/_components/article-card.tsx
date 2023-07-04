import Link from "next/link";

export function ArticleCard() {
  return (
    <div className="max-w-md border-t border-b border-zinc-600 border-opacity-50">
      <div className="flex justify-between items-center">
        <div className="p-4">
          <Link href="articles/1">
            <h2 className="text-white font-bold text-lg">Um guia prático de como fazer manutenção no seu Notebook.</h2>
          </Link>
          <span className="text-white text-xs">
            Por <span className="text-white underline underline-offset-2">Wallace Coelho</span>
          </span>
        </div>
        <div>
        <Link href="articles/1">
          <img className="max-w-[180px]" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
        </Link>
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