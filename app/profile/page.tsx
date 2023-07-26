import { ArticlesList } from "./_components/articles-list";
import { ProfileCard } from "./_components/profile-card";

export default function Profile() {
  return (
    <>
      <main className="w-[1080px] mx-auto mt-24">
        <section>
          <ProfileCard />
        </section>
        <div className="mt-8 bg-zinc-900 py-9 px-16 flex justify-between rounded-2xl">
          <h2 className="text-4xl text-zinc-100 font-bold">Artigos</h2>
          <div>
            <ArticlesList />
          </div>
        </div>
      </main>
    </>
  )
}