"use client"

export function CardText() {

  function openDatoCMS() {
    window.open("https://www.datocms.com/")
  }

  return (
    <section className="flex justify-center mt-12">
      <div className="p-14 bg-zinc-950 rounded-2xl shadow-zinc-950 shadow-lg">
        <h2 className="font-semibold text-2xl text-zinc-100">
          Este blog foi feito em Next.js e está integrado com o <span onClick={openDatoCMS} className="text-indigo-700 underline cursor-pointer hover:text-indigo-800">DatoCMS</span>
        </h2>
      </div>
    </section>
  )
}