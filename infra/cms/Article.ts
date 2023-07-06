export type Article = {
  id: string
  author: string
  title: string
  headerImg: {
    url: string
  }
  content: Node | Document
}

export type AllArticles = {
  data: {
    data: {
      allContentArticles: Article[]
    }
  }
}