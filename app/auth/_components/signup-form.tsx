import Link from "next/link";

export function SignUpForm() {
  return (
    <div className="bg-zinc-950 rounded-lg w-full max-w-lg p-10 shadow-zinc-950/50 shadow-lg flex flex-col">
      <h1 className="text-zinc-100 text-2xl font-semibold text-center">Crie uma conta agora</h1>
      <form className="flex flex-col gap-3.5 w-full mt-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-zinc-300 font-semibold text-sm mb-1.5">Seu nome</label>
          <input
            type="text" 
            name="name" 
            id="name"
            className="h-11 bg-zinc-800 rounded-md px-3 outline-none font-sans text-zinc-100 outline focus:outline-indigo-700 transition-all"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-zinc-300 font-semibold text-sm mb-1.5">Nome de usuário</label>
          <div className="relative w-full">
            <svg className="absolute top-2.5 left-1.5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"/></svg>
            <input
              type="text" 
              name="username" 
              id="username"
              className="h-11 bg-zinc-800 rounded-md pl-9 outline-none font-sans text-zinc-100 w-full outline focus:outline-indigo-700 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-zinc-300 font-semibold text-sm mb-1.5">Senha</label>
          <div className="relative w-full">
            <svg className="absolute top-2.5 left-1.5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path fill="currentColor" d="M220-80q-24.75 0-42.375-17.625T160-140v-434q0-24.75 17.625-42.375T220-634h70v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h70q24.75 0 42.375 17.625T800-574v434q0 24.75-17.625 42.375T740-80H220Zm260.168-200Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96Z"/></svg>
            <input 
              type="password" 
              name="password"
              id="password"
              className="h-11 bg-zinc-800 rounded-md pl-9 outline-none font-sans text-zinc-100 w-full outline focus:outline-indigo-700 transition-all"
            />
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-indigo-700 w-full h-11 rounded-md text-white font-bold hover:bg-indigo-800 transition">Entrar</button>
        </div>
      </form>
      <span className="text-white text-sm mt-5">
        Já possui conta? <Link href="/auth/login" className="text-indigo-700 font-bold">Entrar</Link>
      </span>
    </div>
  )
}