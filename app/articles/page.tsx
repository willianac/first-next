"use client"

import { Metadata } from "next";
import { ArticleCard } from "../_components/article-card";
import Link from "next/link";
import { useContext } from "react";
import { ArticleContext } from "../../context/ArticlesContext";

export const metadata: Metadata = {
  title : "Artigos",
}

export default function Articles() {
  const { articles } = useContext(ArticleContext)
  
  return (
    <>
      <main className="max-w-5xl mx-auto mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-8">
          {articles?.map(item => (
            <Link href={`articles/${item.id}`} key={item.id} prefetch={false}>
              <ArticleCard 
                author={item.author} 
                imgSrc={item.headerImg.url}
                title={item.title}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}