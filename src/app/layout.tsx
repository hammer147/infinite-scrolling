import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Gallery',
  description: 'A demo for testing Next.js 13 Server Side Pagination'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='py-8'>
          <nav className='container'>
            <ul className='flex space-x-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/movies'>Movies</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
