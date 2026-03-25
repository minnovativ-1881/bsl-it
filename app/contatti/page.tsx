import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContattiPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-xl mx-auto px-6 text-center">

            <h1 className="font-serif font-light text-warm-800 text-4xl mb-4">
              Contattaci
            </h1>
            <p className="text-warm-500 mb-12">
              Domande, feedback, idee di collaborazione o suggerimenti? Siamo felici di sentirti.
            </p>

            <div className="bg-white border border-warm-100 rounded-3xl p-10 text-left space-y-6">
              <div>
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:kontakt@babyschlummerland.de"
                  className="text-blush-500 font-medium text-lg hover:text-blush-600 transition-colors"
                >
                  kontakt@babyschlummerland.de
                </a>
              </div>

              <div className="pt-4 border-t border-warm-100">
                <p className="text-warm-500 text-sm">
                  Leggiamo ogni messaggio personalmente e facciamo del nostro meglio per rispondere entro pochi giorni lavorativi.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-warm-600 font-medium">Il tuo Team de Il Regno della Nanna</p>
                <p className="text-warm-400 text-sm">Sarah & Timon Mann</p>
              </div>
            </div>

            <p className="text-warm-400 text-xs mt-8 leading-relaxed">
              Le informazioni e i consigli sul sonno dei bambini forniti su questo sito web sono stati redatti con la massima cura e basandosi su evidenze scientifiche. Tuttavia, hanno esclusivamente uno scopo informativo generale e non devono essere intesi come consulenza medica.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
