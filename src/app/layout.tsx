'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/Nav/NavBar'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <header>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </header>
      <body className={inter.className}>
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
