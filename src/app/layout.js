import { Providers } from "./providers"
import '@/app/random/globals.css'



export default function RootLayout({ children }) {
return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
