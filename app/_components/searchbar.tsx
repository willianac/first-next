export function SearchBar() {
  return (
    <div className="flex items-center bg-zinc-100 pl-2 rounded-lg">
      <svg className="text-zinc-800" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path fill="currentColor" d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
      <input 
        type="search" 
        placeholder="Busque o artigo que você procura"
        className="w-72 h-9 outline-none ml-2 rounded-e-lg bg-zinc-100"
      />
    </div>
  )
}