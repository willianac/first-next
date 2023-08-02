import Link from "next/link";
import { useRouter } from "next/navigation";

type ComponentProps = {
  firstname: string
  logout: () => void
}

export function PopOverMenu({ firstname, logout }: ComponentProps) {
  const router = useRouter()
  
  const handleLogout = () => {
    logout()
    router.push("/")
  }  

  return (
    <div className="bg-zinc-950 w-64 h-64 rounded-lg py-2 relative shadow-black/40 shadow-lg">
      <div className="flex flex-col">
        <h1 className="text-zinc-100 ml-6 text-lg font-bold">{firstname}</h1>
        <small className="text-zinc-200 text-xs ml-6 font-medium">@willianac</small>
      </div>
      <ul className="gap-2 mt-5 ">
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <Link href="/profile" className="text-zinc-200 font-medium ml-6 block">Perfil</Link>
        </li>
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <h1 className="text-zinc-200 font-medium ml-6">Configurações</h1>
        </li>
        <li onClick={handleLogout} className="py-1 hover:bg-slate-700 transition duration-200">
          <h1 className="text-zinc-200 font-medium ml-6 block cursor-pointer">Sair</h1>
        </li>
      </ul>
      <div className="relative top-12 px-3">
        <button className="bg-zinc-50 font-semibold hover:text-white hover:bg-indigo-700 transition rounded py-0.5 w-full">Escrever um artigo</button>
      </div>
    </div>
  )
}