import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fabbisogno di Sonno del Bambino: Quanto Deve Dormire? | Il Regno della Nanna',
  description: 'Una tabella chiara per ogni età — dal neonato al bambino di 6 anni — con consigli pratici per aiutare il tuo bambino a dormire quanto ne ha bisogno.',
}

export default function FabbisognoSonnoBambinoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Fabbisogno di Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Sonno e fasi di veglia: Quanto deve dormire il tuo bambino?
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
                <span>9 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/fabbisogno-sonno-bambino.webp"
                alt="Fabbisogno di sonno del bambino"
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
            Il tuo dolce piccolo dorme abbastanza? Sembra attento e sereno? Di quante ore di sonno ha realmente bisogno un neonato o un bambino piccolo?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sapevi che il sonno è estremamente importante per il tuo bambino? Non lo dico solo io (con la mia esperienza di cinque bambini che hanno dormito ben poco!), ma anche numerosi studi scientifici.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Fabbisogno di sonno del bambino: una regola d&apos;oro</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come puoi capire se il tuo piccolo sta dormendo abbastanza? Più approfondivo le mie ricerche sul sonno dei bambini, più mi rendevo conto di un consiglio davvero importante:
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">&quot;Il sonno favorisce il sonno.&quot;</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In parole semplici: più il tuo bambino dorme, meglio dormirà! La stanchezza eccessiva è uno dei principali nemici di un sonno sereno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">La vecchia credenza secondo cui &quot;se lo tieni sveglio più a lungo, dormirà meglio&quot; è, nella maggior parte dei casi, SBAGLIATA.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anzi, è proprio il contrario! Prova invece a fare il contrario: lascia che il tuo bambino dorma di più e mettilo a letto prima.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quindi, è una nostra grande responsabilità come genitori conoscere il fabbisogno di sonno dei nostri bambini e fare in modo che dormano a sufficienza!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come il tuo bambino trae beneficio da un sonno adeguato</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per uno sviluppo ottimale, il tuo neonato o bambino piccolo ha bisogno di dormire a sufficienza. Secondo numerosi studi, un sonno adeguato favorisce lo sviluppo del bambino in diversi ambiti:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Maggiore capacità di apprendimento e assimilazione</li>
            <li>Appetito sano e peso equilibrato</li>
            <li>Maggiore tolleranza alla frustrazione</li>
            <li>Meno crisi emotive</li>
            <li>Maggiore capacità di attenzione</li>
            <li>Competenze sociali migliorate</li>
            <li>Meno momenti di irritabilità e pianto</li>
            <li>Sviluppo motorio ottimale</li>
            <li>Sviluppo cerebrale</li>
            <li>Rigenerazione cellulare</li>
            <li>Rafforzamento del sistema immunitario</li>
          </ul>

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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Tabella del fabbisogno di sonno del neonato e del bambino</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Di seguito troverai una tabella molto utile sul fabbisogno di sonno del tuo bambino. Ti aiuterà a capire rapidamente se sta dormendo abbastanza o se è necessario apportare qualche cambiamento.
          </p>
          <p className="text-warm-500 text-sm mb-4 italic">
            Nota importante: I valori indicati nella tabella sono medi e non rappresentano periodi di sonno ininterrotto. Per i bambini nati prematuri, è consigliabile fare riferimento alla data presunta del parto.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Ore di sonno notturno e fabbisogno totale</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-warm-600 border-collapse">
              <thead>
                <tr className="bg-blush-50">
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Età</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Sonno notturno</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Fabbisogno totale in 24 ore</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-blush-200"><strong>Neonati</strong></td><td className="p-3 border border-blush-200">8-10 ore (con numerosi risvegli)</td><td className="p-3 border border-blush-200">16-18 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>1-2 mesi</strong></td><td className="p-3 border border-blush-200">8,5-10 ore</td><td className="p-3 border border-blush-200">14,5-16 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>3 mesi</strong></td><td className="p-3 border border-blush-200">9-11 ore</td><td className="p-3 border border-blush-200">14-15 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>4 mesi</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">14-15 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>5 mesi</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">14-15 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>6-8 mesi</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">14-15 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>9-10 mesi</strong></td><td className="p-3 border border-blush-200">11-12 ore</td><td className="p-3 border border-blush-200">13,5-14,5 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>11-12 mesi</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">13-14 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>1-1,5 anni</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">13-14 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>1,5-3 anni</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">12-13 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>3-5 anni</strong></td><td className="p-3 border border-blush-200">10-12 ore</td><td className="p-3 border border-blush-200">11-12 ore</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Sonno diurno e fasi di veglia</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-warm-600 border-collapse">
              <thead>
                <tr className="bg-blush-50">
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Età</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Sonno diurno totale</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Numero di sonnellini</th>
                  <th className="text-left p-3 border border-blush-200 font-semibold text-warm-700">Fasi di veglia</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-blush-200"><strong>Neonati</strong></td><td className="p-3 border border-blush-200">5-8 ore</td><td className="p-3 border border-blush-200">variabile</td><td className="p-3 border border-blush-200">30 – 90 minuti</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>1-2 mesi</strong></td><td className="p-3 border border-blush-200">6-7 ore</td><td className="p-3 border border-blush-200">variabile</td><td className="p-3 border border-blush-200">1-2 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>3 mesi</strong></td><td className="p-3 border border-blush-200">5-6 ore</td><td className="p-3 border border-blush-200">3-5</td><td className="p-3 border border-blush-200">1-2 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>4 mesi</strong></td><td className="p-3 border border-blush-200">3-5 ore</td><td className="p-3 border border-blush-200">3-4</td><td className="p-3 border border-blush-200">1,5-2,5 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>5 mesi</strong></td><td className="p-3 border border-blush-200">3-4,5 ore</td><td className="p-3 border border-blush-200">3 (eventualmente 4)</td><td className="p-3 border border-blush-200">1,5-2,5 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>6-8 mesi</strong></td><td className="p-3 border border-blush-200">2-4 ore</td><td className="p-3 border border-blush-200">2-3</td><td className="p-3 border border-blush-200">2-3 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>9-12 mesi</strong></td><td className="p-3 border border-blush-200">2-3 ore</td><td className="p-3 border border-blush-200">2</td><td className="p-3 border border-blush-200">2,5-3,5 ore</td></tr>
                <tr className="bg-blush-50/50"><td className="p-3 border border-blush-200"><strong>1-1,5 anni</strong></td><td className="p-3 border border-blush-200">2-3 ore</td><td className="p-3 border border-blush-200">1-2</td><td className="p-3 border border-blush-200">3-4 ore</td></tr>
                <tr><td className="p-3 border border-blush-200"><strong>1,5-3 anni</strong></td><td className="p-3 border border-blush-200">2-3 ore</td><td className="p-3 border border-blush-200">1</td><td className="p-3 border border-blush-200">4-4,5 ore</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-warm-500 text-sm mb-6 italic">
            Nota: Il quarto mese è spesso il temuto &quot;mese dei micro-sonnellini&quot;, in cui il bambino tende a fare solo un sonnellino più lungo e gli altri durano solo 30-45 minuti. Questo è assolutamente normale! Entro il sesto mese, la maggior parte dei bambini si stabilizza su tre sonnellini al giorno.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Informazioni utili sul fabbisogno di sonno ottimale</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ovviamente, la tabella sopra riportata contiene solo valori medi. Ci sono genitori convinti che il loro bambino abbia bisogno di meno sonno, ma nella maggior parte dei casi ciò non è vero.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Naturalmente, ci saranno anche bambini che si trovano all&apos;estremità inferiore o superiore della media del fabbisogno di sonno. Tuttavia, è ampiamente riconosciuto che i bambini sotto i 2 anni dovrebbero dormire <strong className="text-warm-800">almeno 10 ore di notte</strong> per garantire un adeguato recupero fisico e mentale.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come cambia il fabbisogno di sonno nei primi anni?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Dalla tabella possiamo osservare i seguenti dati:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>I neonati dormono fino a 18 ore in 24 ore, con numerosi risvegli sia di giorno che di notte.</li>
            <li>Alla fine del primo mese, dormono circa 16 ore.</li>
            <li>I bambini tra i 4 e gli 11 mesi hanno bisogno di circa 14-15 ore di sonno nelle 24 ore.</li>
            <li>A due anni, il fabbisogno di sonno scende a 12-13 ore.</li>
            <li>A partire dai 4 anni, i bambini dormono circa 11-12 ore al giorno.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">IMPORTANTE:</strong> Ci sono periodi in cui il tuo bambino attraversa grandi salti di sviluppo e per 2-4 settimane il sonno può peggiorare notevolmente. Queste <strong className="text-warm-800">regressioni del sonno</strong> sono temporanee e non devono essere motivo di preoccupazione.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Consigli utili</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1° Passo: Tenere un diario del sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per avere una panoramica chiara delle abitudini di sonno del tuo bambino, ti consiglio di <strong className="text-warm-800">prendere nota per alcuni giorni di quando e per quanto tempo dorme</strong>. Dopo una settimana, avrai una visione chiara dei suoi ritmi e potrai capire meglio quando si stanca o quando ha bisogno di nutrirsi.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2° Passo: Analizzare i dati</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Cosa emerge dalla tua &quot;statistica del sonno&quot;? Il tuo bambino dorme molto meno rispetto alla media? Se sì, potrebbe essere cronicamente stanco e avresti bisogno di aiutarlo a dormire di più e meglio.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3° Passo: Apportare cambiamenti</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ad esempio, reagendo più rapidamente ai suoi segnali di stanchezza, anticipando l&apos;orario della nanna o creando un ambiente più favorevole al sonno, con luci soffuse e una stanza adeguatamente oscurata.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ogni bambino ha esigenze di sonno diverse – questo è normale. Ma avere una tabella di riferimento aiuta a capire meglio il fabbisogno individuale del tuo piccolo. Sì, richiede un po&apos; di impegno, ma ne vale davvero la pena. Per te (e per le tue serate). Per tutta la famiglia. E soprattutto per il tuo bambino.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con affetto e con l&apos;augurio di notti serene,<br />
            <strong>Sarah</strong>
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi migliorare il sonno del tuo bambino passo dopo passo?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Nel mio corso gratuito via e-mail troverai metodi dolci e rispettosi del legame con il tuo bambino,
              adattabili alla vostra situazione familiare.
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
