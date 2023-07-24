import { CardText } from "./_components/card-text";
import { SocialButton } from "./_components/social-button";

export default function Home() {
  return (
    <>
      <header className="max-w-3xl mx-auto mt-24">
        <h1 
          className="font-extrabold text-center text-9xl text-zinc-100 tracking-tight hover:text-indigo-700 transition-colors animate-pulse"
          >This is my Blogsite
        </h1>
      </header>
      <CardText />
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-700 mt-12"></div>
      <div className="flex justify-center mt-8 gap-12">
        <SocialButton title="Repositório" social="Github" url="https://github.com/willianac"/>
        <SocialButton title="Meu Perfil" social="Linkedin" url="https://www.linkedin.com/in/willianac/"/>
      </div>
    </>
  )
}