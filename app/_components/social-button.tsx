"use client"

type SocialButtonProps = {
  title: string
  social?: string
  url: string
}

export function SocialButton({ title, social, url }: SocialButtonProps) {
  function openSocial() {
    window.open(url)
  }

  return (
    <div onClick={openSocial} className="p-4 outline-dashed outline-indigo-700 rounded-lg flex flex-col items-center hover:shadow-indigo-700/95 hover:shadow-xl hover:outline hover:scale-105 transition-all cursor-pointer">
      <div className="flex gap-0.5">
        <span className="text-white font-semibold">{title}</span>
        <svg className="text-zinc-300" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="14"><path fill="currentColor" d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z"/></svg>
      </div>
      <span className="text-zinc-500 text-xs">{social}</span>
    </div>
  )
}