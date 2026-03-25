import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito } from 'next/font/google'
import './globals.css'
import { OptInProvider } from '@/context/OptInContext'
import OptInModal from '@/components/OptInModal'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Il Regno della Nanna – Sonno dolce per neonati e bambini',
  description:
    'Aiutiamo i genitori a migliorare il sonno dei loro bambini con metodi dolci e rispettosi del legame. Corso gratuito sul sonno del bambino.',
  keywords: [
    'sonno bambino',
    'consulente sonno neonato',
    'come far dormire il bambino',
    'problemi di sonno neonato',
    'metodo dolce sonno',
    'bambino non dorme',
    'regressione del sonno',
    'bambino dorme tutta la notte',
  ],
  openGraph: {
    title: 'Il Regno della Nanna',
    description: 'Aiutiamo i genitori a dormire meglio — con dolcezza, rispetto del legame e metodi comprovati.',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${nunito.variable}`}>
      <body>
        <OptInProvider>
          {children}
          <OptInModal />
        </OptInProvider>
      </body>
    </html>
  )
}
