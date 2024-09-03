import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Leonardo Sampaio',
  description:
    'Explore o portfólio de Leonardo Sampaio, um desenvolvedor dedicado com habilidades em front-end, back-end e design. Descubra projetos inovadores, tecnologias de ponta e soluções criativas que mostram a paixão por transformar ideias em realidade digital.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable}`}>
        {children}
      </body>
    </html>
  )
}
