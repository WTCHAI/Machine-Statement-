import SideBar from '@/app/Components/layouts/sideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machine statement',
  description: 'Machine operater system',
  openGraph: {
    title: "",
    url: "",
    type: "website",
    description:
      "Machine operater system",
  },
}

export default function RootLayout({children,}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className={`w-screen h-screen overflow-hidden ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
