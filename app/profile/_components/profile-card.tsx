export function ProfileCard() {
  return (
    <div className="flex rounded-2xl lg:w-[1080px] overflow-hidden shadow-zinc-900/90 shadow-xl">
      <div className="flex flex-col items-center w-1/3 py-32 bg-gradient-to-br from-blue-500 to-indigo-700">
        <div className="w-32">
          <img className="rounded-full" src="https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png" alt="default_profile_icon" />
        </div>
        <div className="mt-12 flex flex-col items-center gap-1.5">
          <h2 className="text-white text-3xl font-light">Willian Almeida</h2>
          <h3 className="text-white font-bold">Software Engineer</h3>
        </div>
      </div>
      <div className="bg-zinc-900 flex-grow px-16 pt-8 w-2/3">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold mb-2 text-white">Informações</h1>
          <button className="bg-indigo-700 py-2 px-5 rounded-md text-white font-semibold hover:bg-indigo-800 transition">
            Seguir
          </button>
        </div>
        <div className="w-full h-0.5 bg-zinc-700 rounded"></div>
        <div className="grid grid-cols-2 mt-8">
          <h2 className="text-white text-xl font-medium">Artigos: <span>3</span></h2>
          <h2 className="text-white text-xl font-medium justify-self-end">Membro desde: <span>01/07/2023</span></h2>
        </div>
        <div className="mt-40">
          <p className="text-zinc-200">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
      </div>
    </div>
  )
}