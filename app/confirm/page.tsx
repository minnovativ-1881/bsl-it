import Link from 'next/link'
import { Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ConfirmPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-xl mx-auto px-6 text-center">

            <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-blush-400" />
            </div>

            <h1 className="font-serif font-light text-warm-800 text-4xl mb-4">
              Solo un altro piccolo passo
            </h1>
            <p className="text-warm-500 text-lg mb-12">
              Conferma il tuo indirizzo e-mail per ricevere il tuo corso gratuito sul sonno del bambino.
            </p>

            <div className="bg-white border border-warm-100 rounded-3xl p-8 text-left space-y-6 mb-10">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blush-100 text-blush-500 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-warm-800">Sei iscritta!</p>
                  <p className="text-warm-400 text-sm mt-0.5">La tua richiesta e stata ricevuta.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blush-400 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-warm-800">Vai nella tua casella di posta</p>
                  <p className="text-warm-500 text-sm mt-0.5">Clicca sul link di conferma nell&apos;e-mail che ti abbiamo appena inviato.</p>
                  <p className="text-warm-400 text-xs mt-1 italic">Non la vedi? Controlla la cartella spam.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-100 text-warm-400 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-warm-700">Ricevi subito la Parte 1 del tuo corso gratuito!</p>
                  <p className="text-warm-400 text-sm mt-0.5">Una lezione al giorno, direttamente in casella di posta.</p>
                </div>
              </div>

            </div>

            <Link
              href="/"
              className="text-warm-400 hover:text-warm-600 text-sm transition-colors"
            >
              ← Torna a Il Regno della Nanna
            </Link>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
