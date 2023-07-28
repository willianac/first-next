import { Raleway } from "next/font/google"
import "./global.css"
import { Providers } from "./providers"

const raleway = Raleway({subsets : ["latin"]})

export default function RootLayout({ children }: { children : React.ReactNode }) {
  return (
    <html lang="pt-BR" className={raleway.className}>
      <body>
      <Providers>
        { children }
      </Providers>
      </body>
    </html>
  )
}