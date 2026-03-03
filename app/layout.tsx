import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TM Builders - Premium House Construction in Bahria Town',
  description: 'TM Builders specializes in building premium residential homes in Bahria Town, Rawalpindi. Explore our portfolio of completed projects.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.jfif',
        type: 'image/jpeg',
      },
    ],
    apple: '/logo.jfif',
  },
  openGraph: {
    title: 'TM Builders - Premium House Construction',
    description: 'Luxury residential construction at Bahria Town Rawalpindi',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
