import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Devils Wish Mods - Professional DayZ Server Modifications',
  description: 'Premium DayZ server mods with professional support and protection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-devil-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}