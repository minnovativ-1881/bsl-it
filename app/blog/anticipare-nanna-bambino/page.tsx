import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Anticipare la Nanna del Bambino: 5 Passi | Il Regno della Nanna',
  description: 'Un orario della nanna anticipato migliora il sonno notturno. Scopri quando e come farlo funzionare con 5 semplici passi e tabelle complete per ogni età.',
}

export default function AnticiparNannaBambinoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Routine del Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              5 passi per anticipare la nanna del tuo bambino (con tabelle!)
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
                <span>11 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/anticipare-nanna-bambino.webp"
                alt="Anticipare la nanna del bambino"
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
            Ti capita che il tuo bambino vada a dormire solo tra le <strong className="text-warm-800">22:00 e le 23:00</strong>?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sei preoccupata di cambiare la sua routine perché temi che anticipare la nanna possa <strong className="text-warm-800">peggiorare la situazione</strong>?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche io lo pensavo! Ma ti stupirai (proprio come è successo a me) quando scoprirai <strong className="text-warm-800">quanto è semplice anticipare dolcemente la nanna del tuo bambino</strong> – senza compromettere il suo sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo articolo ti mostrerò <strong className="text-warm-800">come farlo in 5 semplici passi</strong>.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Ecco come puoi aiutarlo</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Prima di tutto, è importante sapere che <strong className="text-warm-800">per i neonati è assolutamente normale addormentarsi tardi</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nei <strong className="text-warm-800">primi 2-3 mesi</strong>, è meglio <strong className="text-warm-800">non forzare un orario anticipato</strong>, perché il loro ritmo sonno-veglia è ancora in fase di sviluppo. Inoltre, in questa fase non riescono ancora a dormire molte ore di fila, il che significa <strong className="text-warm-800">notti più frammentate per noi genitori</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ma a partire <strong className="text-warm-800">dal terzo mese</strong>, e soprattutto con i bambini più grandi, è possibile <strong className="text-warm-800">anticipare gradualmente l&apos;orario della nanna</strong>.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">1. Scopri l&apos;orario ideale per la nanna</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il primo passo è capire <strong className="text-warm-800">qual è l&apos;orario di sonno più adatto all&apos;età del tuo bambino</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Nei primi mesi di vita</strong>, i neonati tendono ad addormentarsi tardi, <strong className="text-warm-800">tra le 22:00 e le 24:00</strong>. <strong className="text-warm-800">Dai 3 mesi in poi</strong>, l&apos;orario della nanna <strong className="text-warm-800">inizia naturalmente ad anticiparsi</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per esempio, <strong className="text-warm-800">a 3 mesi</strong>, il momento ideale per addormentarsi è tra le <strong className="text-warm-800">20:00 e le 21:00</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Perché questi orari sono importanti?</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Sono in linea con il <strong className="text-warm-800">bioritmo naturale del bambino</strong>, che si sviluppa sempre di più.</li>
            <li>Sono collegati alla produzione di <strong className="text-warm-800">ormoni del sonno</strong>, all&apos;ambiente circostante e al naturale ciclo giorno-notte.</li>
            <li><strong className="text-warm-800">Favoriscono le 10-11 ore di sonno notturno</strong> di cui un bambino di 3 mesi ha bisogno.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Studi dimostrano che i bambini con un <strong className="text-warm-800">orario di nanna regolare e adatto all&apos;età</strong> dormono più a lungo, sono meno irritabili e hanno una maggiore capacità di attenzione.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Guida agli orari della nanna</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-warm-600 border-collapse">
              <thead>
                <tr className="bg-blush-50">
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Età</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Orario nanna</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-blush-200">Neonati</td><td className="p-3 border border-blush-200">Tardi (intorno alle 23:00)</td><td className="p-3 border border-blush-200">Il bambino si nutre frequentemente; ha solo brevi fasi di veglia (45-90 min)</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">2-3 mesi</td><td className="p-3 border border-blush-200">20:00-22:00</td><td className="p-3 border border-blush-200">L&apos;alimentazione frequente serale prolunga il sonno notturno</td></tr>
                <tr><td className="p-3 border border-blush-200">4-6 mesi</td><td className="p-3 border border-blush-200">19:00-20:30</td><td className="p-3 border border-blush-200">Il bambino è pronto per un orario di nanna anticipato</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">7-8 mesi</td><td className="p-3 border border-blush-200">19:00-20:30</td><td className="p-3 border border-blush-200">Anticipare se il bambino smette il 3° pisolino giornaliero</td></tr>
                <tr><td className="p-3 border border-blush-200">9-15 mesi</td><td className="p-3 border border-blush-200">19:00-20:00</td><td className="p-3 border border-blush-200">Un orario anticipato risolve spesso molti problemi di sonno</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">Da 16 mesi</td><td className="p-3 border border-blush-200">19:00-20:00</td><td className="p-3 border border-blush-200">Anticipare se il bambino smette il 2° pisolino giornaliero</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-warm-500 text-sm mb-6 italic">Questa guida si basa su un orario di risveglio compreso tra le 6:00 e le 8:00.</p>

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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">2. La strada per il successo</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ci sono due ottime strategie per <strong className="text-warm-800">anticipare l&apos;orario della nanna</strong> del tuo bambino:
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">I. Passo dopo passo</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Puoi provare ad <strong className="text-warm-800">anticipare la nanna di 15-20 minuti ogni due o tre giorni</strong>. Questo metodo è semplice, graduale e solitamente efficace. È la tecnica più consigliata dagli esperti del sonno infantile.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">II. Trasformare il pisolino serale in orario di nanna</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il tuo bambino <strong className="text-warm-800">fa ancora un pisolino serale tardi</strong>, potresti provare a trasformarlo direttamente nella sua nuova ora di nanna. Per esempio: se il tuo bambino <strong className="text-warm-800">dorme tra le 20:00 e le 21:00</strong>, ma poi si sveglia per stare sveglio ancora un&apos;ora con nervosismo e piagnucolii, <strong className="text-warm-800">potresti provare a stabilire questo come orario di nanna definitivo</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Di solito, ci vogliono <strong className="text-warm-800">1-2 settimane</strong> prima che le serate diventino completamente tranquille. Ma poi… le tue serate saranno finalmente libere!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche il tuo bambino ne trarrà beneficio: dormirà meglio, avrà meno crisi di pianto serali e eviterà di accumulare troppa stanchezza.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un&apos;importante regola d&apos;oro del sonno infantile: <strong className="text-warm-800">&quot;Il sonno favorisce il sonno.&quot;</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molti pensano che tenere il bambino sveglio più a lungo lo aiuterà a dormire meglio… <strong className="text-warm-800">ma non è così!</strong> In realtà, è controproducente.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">3. Fai attenzione alla durata delle fasi di veglia</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Durante il giorno, cerca di <strong className="text-warm-800">osservare i segnali di sonno del tuo bambino</strong>. L&apos;ideale è metterlo a dormire né troppo presto né troppo tardi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Cosa succede se il bambino resta sveglio troppo a lungo?</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il suo corpo rilascia <strong className="text-warm-800">ormoni dello stress</strong> come cortisolo e adrenalina.</li>
            <li>Questo lo rende <strong className="text-warm-800">ipereccitato e irritabile</strong>.</li>
            <li>Addormentarsi diventa <strong className="text-warm-800">più difficile</strong>, e il sonno può essere più leggero e disturbato.</li>
          </ul>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Guida alle fasi di veglia</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-warm-600 border-collapse">
              <thead>
                <tr className="bg-blush-50">
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Età</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Fase di veglia</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-blush-200">Neonato</td><td className="p-3 border border-blush-200">30 – 90 min</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">2-3 mesi</td><td className="p-3 border border-blush-200">1 – 2 ore</td></tr>
                <tr><td className="p-3 border border-blush-200">4-5 mesi</td><td className="p-3 border border-blush-200">1,5 – 2,5 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">6-8 mesi</td><td className="p-3 border border-blush-200">2 – 3 ore</td></tr>
                <tr><td className="p-3 border border-blush-200">9-12 mesi</td><td className="p-3 border border-blush-200">2,5 – 3,5 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200">Toddler con 2 pisolini</td><td className="p-3 border border-blush-200">3 – 4 ore</td></tr>
                <tr><td className="p-3 border border-blush-200">Toddler con 1 pisolino</td><td className="p-3 border border-blush-200">4 – 5,5 ore</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">4. Inizia con una routine serale rilassante</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Su una cosa <strong className="text-warm-800">tutti gli esperti del sonno</strong> sono d&apos;accordo: il consiglio numero uno per aiutare il tuo bambino a rilassarsi e addormentarsi più facilmente è <strong className="text-warm-800">una routine serale costante e rilassante!</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ripetere <strong className="text-warm-800">le stesse attività, alla stessa ora e nello stesso ordine</strong> ogni sera aiuta il bambino a entrare nel giusto stato d&apos;animo per dormire.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Dai 2 mesi in su</strong>, è il momento perfetto per introdurre una piccola routine serale.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Studi dimostrano che i bambini che iniziano una routine serale prima del primo anno di vita dormono più a lungo, si svegliano meno spesso di notte, si addormentano più velocemente – e le loro mamme sono più serene!
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Come creare una routine serale?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Esempio di routine per neonati:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Bagnetto caldo.</li>
            <li>Trasferimento in una stanza buia e tranquilla.</li>
            <li>Breve massaggio rilassante.</li>
            <li>Poppata/biberon.</li>
            <li>Fasciatura (se il bambino lo gradisce).</li>
            <li>Coccole o dondolio con una ninna nanna.</li>
            <li>Messa a letto.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Man mano che cresce</strong>, potresti allungare la routine con un piccolo gioco tranquillo, una storia o un libro della buonanotte.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La chiave per una buona routine serale è <strong className="text-warm-800">la coerenza</strong>: stessi gesti, nello stesso ordine, alla stessa ora ogni sera. Questo aiuta il tuo bambino a capire che è ora di dormire e gli dà un senso di sicurezza e stabilità.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Coinvolgere il papà</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">I papà sono bravissimi ad addormentare i bambini!</strong> Se il rituale della nanna include l&apos;allattamento o il biberon, il papà può prendersi cura di altre fasi: fare il ruttino, fasciare il bambino, cantare una ninna nanna o cullarlo. Anche se all&apos;inizio il bambino protesta, <strong className="text-warm-800">in pochi giorni si abituerà</strong> e svilupperà un bellissimo legame con il papà.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">5. Un po&apos; di aria fresca ogni giorno</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Una passeggiata all&apos;aperto nel pomeriggio è un vero toccasana!</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>La luce naturale <strong className="text-warm-800">regola il ritmo circadiano</strong> del bambino.</li>
            <li>Il movimento e l&apos;aria fresca <strong className="text-warm-800">favoriscono il rilassamento</strong>.</li>
            <li>Aiuta il bambino <strong className="text-warm-800">a stancarsi in modo sano</strong> e ad avere meno difficoltà a dormire.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Provaci per qualche giorno e osserva i risultati!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Spero che questi consigli ti aiutino a <strong className="text-warm-800">creare una serata serena per te e il tuo bambino.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong>Con affetto,<br />Sarah</strong>
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi ancora più strategie?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Scopri altri consigli utili nel nostro corso gratuito sul sonno del bambino!
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
