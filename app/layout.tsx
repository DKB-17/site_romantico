import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Para Isadora Consoni - ❤️',
  description: 'Criado por Diego Brito',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icone.svg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
