import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matteo von Haxthausen',
  description: 'Software Developer, Student and Tech Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-stone-100'>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
