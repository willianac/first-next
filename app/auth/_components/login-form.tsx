import Link from "next/link";

export function LoginForm() {
  return (
    <div className="bg-zinc-950 rounded-lg w-full max-w-lg p-10 h-[450px] shadow-zinc-950/50 shadow-lg flex flex-col">
      <h1 className="text-zinc-100 text-2xl font-semibold text-center">Bem vindo de volta</h1>
      <form className="flex flex-col gap-3.5 w-full mt-10">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-zinc-300 font-semibold text-sm mb-1.5">Nome de usuário</label>
          <input
            type="text" 
            name="username" 
            id="username"
            className="h-11 bg-zinc-800 rounded-md px-3 outline-none font-sans text-zinc-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-zinc-300 font-semibold text-sm mb-1.5">Senha</label>
          <input 
            type="password" 
            name="password"
            id="password"
            className="h-11 bg-zinc-800 rounded-md px-3 outline-none font-sans text-zinc-100"
          />
        </div>
        <div className="mt-8">
          <button className="bg-indigo-700 w-full h-11 rounded-md text-white font-bold hover:bg-indigo-800 transition">Entrar</button>
        </div>
      </form>
      <span className="text-white text-sm mt-5">
        Ainda não tem uma conta? <Link href="/auth/signup" className="text-indigo-700 font-bold">Criar</Link>
      </span>
    </div>
  )
}