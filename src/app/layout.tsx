import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: 'http://localhost:3000', // Update this with your actual base URL
  title: 'Machine statement',
  description: 'Machine operator system',
  openGraph: {
    title: 'Machine statement',
    url: 'machine',
    type: 'website',
    description: 'Machine operator system',
  },
};

export default function RootLayout({children,}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className={`w-screen h-screen overflow-hidden ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
