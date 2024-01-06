import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavBar } from '@/components'


export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Diccover the most awesome cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
