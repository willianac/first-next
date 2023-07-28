import Navbar from "../_components/navbar";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}