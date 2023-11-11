import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { constructMetaData } from '@/lib/untils'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} starBackdrop`}>
        <header>
          <NavBar />
        </header>
        {children}
        <Analytics />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
