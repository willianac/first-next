import Link from "next/link";

export function PopOverMenu() {
  return (
    <div className="bg-zinc-950 w-64 h-64 rounded-lg py-2 relative shadow-black/40 shadow-lg">
      <h1 className="text-zinc-200 text-center text-lg font-bold">Faça Login</h1>
      <ul className="gap-2 mt-4">
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <Link href="/profile" className="text-zinc-200 font-medium ml-6">Perfil</Link>
        </li>
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <h1 className="text-zinc-200 font-medium ml-6">Configurações</h1>
        </li>
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <h1 className="text-zinc-200 font-medium ml-6">Sair</h1>
        </li>
      </ul>
      <div className="relative top-16 px-3">
        <button className="bg-zinc-50 font-semibold hover:text-white hover:bg-indigo-700 transition rounded py-0.5 w-full">Escrever um artigo</button>
      </div>
    </div>
  )
}