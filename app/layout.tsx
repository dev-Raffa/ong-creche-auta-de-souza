import type { Metadata } from 'next'
import { Quicksand, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
  display: 'swap'
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Creche Auta de Souza | Promovendo o Futuro',
  description: 'Creche Auta de Souza - Uma instituição dedicada ao cuidado e educação infantil no Jardim Marchesi, Ribeirão Preto.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${quicksand.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
