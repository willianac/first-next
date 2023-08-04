import Link from "next/link";
import { useRouter } from "next/navigation";

type ComponentProps = {
  firstname: string
  username: string
  logout: () => void
}

export function PopOverMenu({ firstname, username, logout }: ComponentProps) {
  const router = useRouter()
  
  const handleLogout = () => {
    logout()
    router.push("/")
  }  

  return (
    <div className="bg-zinc-950 w-64 h-64 rounded-lg py-2 relative shadow-black/40 shadow-lg">
      <div className="flex flex-col">
        <h1 className="text-zinc-100 ml-6 text-lg font-bold">{firstname}</h1>
        <small className="text-zinc-200 text-xs ml-6 font-medium">{username}</small>
      </div>
      <ul className="gap-2 mt-5">
        <li className="py-1 hover:bg-slate-700 transition duration-200">
          <Link href="/profile" className="text-zinc-200 font-medium flex items-center gap-2">
            <svg className="text-white ml-4" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="currentColor" d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"/></svg>
            <span>Perfil</span>
          </Link>
        </li>
        <li className="flex items-center gap-2 py-1 hover:bg-slate-700 transition duration-200">
          <svg className="text-white ml-4" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="currentColor" d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"/></svg>
          <h1 className="text-zinc-200 font-medium">Configurações</h1>
        </li>
        <li onClick={handleLogout} className="flex items-center gap-2 py-1 hover:bg-slate-700 cursor-pointer transition duration-200">
          <svg className="text-white ml-4" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="currentColor" d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg>
          <h1 className="text-zinc-200 font-medium">Sair</h1>
        </li>
      </ul>
      <div className="relative top-12 px-3">
        <button className="bg-zinc-50 font-semibold hover:text-white hover:bg-indigo-700 transition rounded py-0.5 w-full">Escrever um artigo</button>
      </div>
    </div>
  )
}