import { Raleway } from "next/font/google"
import "./global.css"
import Navbar from "./_components/navbar"
import { Providers } from "./providers"

const raleway = Raleway({subsets : ["latin"]})

export default function RootLayout({ children }: { children : React.ReactNode }) {
  return (
    <html lang="pt-BR" className={raleway.className}>
      <body>
      <Providers>
        <Navbar />
        { children }
      </Providers>
      </body>
    </html>
  )
}