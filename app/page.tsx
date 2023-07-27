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
      <div className="flex justify-center mt-8 gap-12">
        <SocialButton title="Repositório" social="Github" url="https://github.com/willianac"/>
        <SocialButton title="Meu Perfil" social="Linkedin" url="https://www.linkedin.com/in/willianac/"/>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-700 mt-12"></div>
      <div className="px-64 mt-12">
        <h2 className="text-zinc-200 text-3xl font-extrabold tracking-tight text-center">
          Para adicionar um artigo basta acessar o projeto no DatoCMS e escrever um artigo.
        </h2>
      </div>
    </>
  )
}