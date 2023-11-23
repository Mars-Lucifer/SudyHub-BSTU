import { Montserrat } from 'next/font/google'
import './bootstrap-grid.min.css'
import './bootstrap.min.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  weight: ['500', '600', '700'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
      <Analytics />
    </html>
  )
}