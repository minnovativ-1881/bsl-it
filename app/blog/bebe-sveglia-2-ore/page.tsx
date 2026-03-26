import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Il Bebè Si Sveglia Ogni 2 Ore di Notte: È Normale? | Il Regno della Nanna',
  description: 'Quanto spesso dovrebbe dormire un neonato? E da quando può dormire tutta la notte? Risposte oneste di una consulente del sonno infantile con 6 bambini.',
}

export default function BebeSveglia2OrePage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Sonno Notturno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Bebè si sveglia ogni 2 ore? Consigli di un&apos;esperta
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/sarahmann.webp"
                  alt="Sarah Mann"
                  width={36}
                  height={36}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="text-sm text-warm-500">
                <span className="font-medium text-warm-700">Sarah Mann</span>
                {' · '}
                <span>26 marzo 2026</span>
                {' · '}
                <span>8 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bebe-sveglia-2-ore.webp"
                alt="Bebè si sveglia ogni 2 ore"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Contenuto dell'articolo */}
        <article className="max-w-3xl mx-auto px-6 pb-20">

          <p className="text-warm-600 leading-relaxed mb-4">
            Ti senti così esausta per la mancanza di sonno che non sai più distinguere il giorno dalla notte?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il tuo bambino si sveglia ogni 2 ore per essere allattato o nutrito? E dormire tutta la notte sembra ancora un sogno lontano?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sai una cosa? Non sei sola! Solo un terzo dei bambini dorme tutta la notte a 12 mesi… E la metà dei genitori soffre di privazione del sonno.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Quando il mio bambino dormirà tutta la notte?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            La risposta alla domanda su QUANDO un bambino possa teoricamente dormire tutta la notte varia molto tra i diversi esperti del sonno e pediatri.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Alcuni dicono che il bambino dovrebbe aver raddoppiato il peso alla nascita. Altri affermano che <strong className="text-warm-800">1-2 poppate notturne fino ai 9 mesi siano del tutto normali</strong>. La maggior parte delle guide ritiene che un neonato possa &quot;imparare&quot; a dormire tutta la notte intorno ai 6 mesi, ma ovviamente non vale per tutti.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Personalmente, mi affiderei alla versione più &quot;dolce&quot; tra le varie teorie proposte, per andare sul sicuro.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">SEI tu che conosci meglio il tuo bambino</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Di fronte a risposte così contrastanti, la conclusione logica è: nessuno conosce il tuo bambino meglio di te (e del tuo pediatra)! Sei tu a dover capire se il tuo piccolo ha ancora bisogno di nutrirsi di notte.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Si tratta più di un&apos;abitudine o di una reale fame quando il tuo bambino cerca il seno o il biberon più volte durante la notte? Spesso è un circolo vizioso: se il bambino beve molto di notte, tende a mangiare e bere meno durante il giorno. Di conseguenza, la notte successiva avrà di nuovo fame.
          </p>

          {/* CTA Box */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Stanca? Esausta? Senza idee?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Iscriviti al corso gratuito sul sonno del bambino e ricevi consigli pratici passo dopo passo
              direttamente nella tua casella di posta.
            </p>
            <Link
              href="/gratis"
              className="inline-block bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Sì! Voglio il corso gratuito
            </Link>
          </div>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Perché non dovresti forzare il sonno continuato prima dei 6 mesi</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il tuo bambino ha <strong className="text-warm-800">meno di 6 mesi</strong>, sconsiglio assolutamente di insegnargli a dormire tutta la notte in questa fase:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Dalla mia esperienza con i miei sei bambini allattati, mi baserei sull&apos;età più tarda indicata, ovvero tra i <strong className="text-warm-800">9 e i 12 mesi</strong>.</li>
            <li>Inoltre, l&apos;allattamento e i frequenti risvegli notturni riducono il rischio di SIDS (morte in culla). Questo rischio cala naturalmente dopo i primi 4-6 mesi.</li>
            <li>La maggior parte degli esperti ritiene che un bambino sviluppi la capacità di addormentarsi autonomamente solo intorno ai 4-6 mesi.</li>
            <li>Attorno ai 4 mesi, i bambini attraversano una fase di cambiamenti significativi nello sviluppo cerebrale e nei cicli di sonno.</li>
          </ul>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Cosa significa davvero &quot;dormire tutta la notte&quot;?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Il termine &quot;dormire tutta la notte&quot; ha diverse definizioni</strong>. Molti manuali di sonno considerano già 5 ore consecutive di sonno come &quot;dormire tutta la notte&quot;. Nell&apos;uso comune, invece, si intende un sonno di 10-12 ore ininterrotte.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            D&apos;altra parte, molte mamme non avrebbero nulla in contrario a una breve interruzione per allattare o coccolare il proprio bambino – purché fosse solo UNA volta a notte!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La temuta soglia dei 4 mesi</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Alcuni neonati si svegliano ogni 2-3 ore fin dall&apos;inizio. Altri, invece, sono così assonnati che riescono a dormire 4-5 ore di fila durante la notte. Almeno finché non arriva un picco di crescita o qualche altro cambiamento.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Intorno ai 4 mesi si capisce davvero se il tuo bambino sarà un &quot;grande dormiglione&quot;.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tra le 14 e le 19 settimane, lo schema del sonno del neonato cambia in modo permanente. Da questo momento in poi, i suoi cicli di sonno inizieranno ad assomigliare sempre più a quelli di un adulto. Ciò significa più fasi di sonno leggero e, di conseguenza, maggiori probabilità di svegliarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tantissimi bambini che fino a quel momento avevano dormito abbastanza bene, intorno ai 4 mesi iniziano a manifestare problemi di sonno. Si tratta di un fenomeno legato allo sviluppo ed è assolutamente normale!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">In sintesi</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Gli esperti ritengono che un bambino di 4 mesi che pesa almeno 7 kg possa dormire per 5 ore consecutive senza svegliarsi durante la notte. Di solito, questa fase di sonno più lunga si verifica all&apos;inizio della notte, seguita da risvegli più frequenti.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come la maggior parte delle consulenti del sonno infantile, sono convinta che la maggior parte dei bambini sani possa imparare a &quot;dormire tutta la notte&quot; intorno ai 6 mesi. Fidati del tuo istinto e non di semplici tabelle!
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Una risposta chiara</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Dalla mia esperienza con i miei sei bambini e dalle mie ricerche, ritengo che <strong className="text-warm-800">9 mesi sia un ottimo punto di riferimento</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Dai 10 mesi, e al più tardi dai 12, si può iniziare ad aspettarsi o incoraggiare il sonno continuato. A questa età, la stragrande maggioranza dei bambini è in grado di distribuire le proprie poppate durante il giorno e di comprendere che la notte è fatta per dormire.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Panoramica generale</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-warm-600 border-collapse">
              <thead>
                <tr className="bg-blush-50">
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Età</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Il tuo bambino è pronto?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-blush-200">0-4 mesi</td><td className="p-3 border border-blush-200">Ha bisogno di poppate notturne (alcuni bambini riescono a dormire 3-5 ore consecutive)</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">5-6 mesi</td><td className="p-3 border border-blush-200">Ha bisogno di poppate notturne (alcuni bambini riescono a dormire 5-6 ore consecutive)</td></tr>
                <tr><td className="p-3 border border-blush-200">6-9 mesi</td><td className="p-3 border border-blush-200">Molti bambini possono essere svezzati di notte (soprattutto quelli allattati con il biberon)</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">10-12 mesi</td><td className="p-3 border border-blush-200">La grande maggioranza non ha più bisogno di poppate notturne o può essere dolcemente svezzata</td></tr>
                <tr><td className="p-3 border border-blush-200">Da 1 anno in su</td><td className="p-3 border border-blush-200">Non necessita più di poppate notturne (se in salute e con un buon accrescimento)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con affetto e dolci sogni,<br />
            <strong>Sarah di Il Regno della Nanna</strong>
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi aiutare il tuo bambino a dormire meglio?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Scopri i 5 semplici passi per aiutare il tuo bambino a dormire tutta la notte nel nostro corso gratuito via e-mail.
            </p>
            <Link
              href="/gratis"
              className="inline-block bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Sì! Voglio il corso gratuito
            </Link>
          </div>

          {/* Author Box */}
          <div className="mt-12 border-t border-blush-100 pt-10 flex gap-5 items-start">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/sarahmann.webp"
                alt="Sarah Mann"
                width={64}
                height={64}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-warm-800 mb-1">Sarah Mann</p>
              <p className="text-xs text-blush-500 mb-2">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              <p className="text-warm-500 text-sm leading-relaxed">
                Sarah è la fondatrice e autrice principale di <em>Il Regno della Nanna</em>. La sua missione è
                aiutare i genitori esausti a ritrovare notti serene e maggiore sicurezza nel rispondere ai bisogni
                dei loro piccoli tesori — con metodi dolci e rispettosi del legame genitore-bambino.
              </p>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </>
  )
}
