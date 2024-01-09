import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/libs/themes/ThemeContext'
import ClientThemeWrapper from '@/libs/themes/ThemeWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Path Finder App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter} bg-slate-400`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
