import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthorBox from '@/components/AuthorBox'

const parts = [
  { num: 1, label: 'Parte 1 – Ritmi', href: '/course/be1m1k' },
  { num: 2, label: 'Parte 2 – Routine', href: '/course/be2m1k' },
  { num: 3, label: 'Parte 3 – Rituale', href: '/course/be3m1k' },
  { num: 4, label: 'Parte 4 – Abitudini', href: '/course/be4m4' },
  { num: 5, label: 'Parte 5 – Notte intera', href: '/course/be5mk5' },
]

function CourseNav({ current }: { current: number }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {parts.map((p) => (
        <Link
          key={p.num}
          href={p.href}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            p.num === current
              ? 'bg-blush-400 text-white'
              : p.num < current
              ? 'bg-blush-100 text-blush-600'
              : 'bg-warm-100 text-warm-400 pointer-events-none'
          }`}
        >
          <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${p.num === current ? 'bg-white text-blush-500' : p.num < current ? 'bg-blush-300 text-white' : 'bg-warm-200 text-warm-400'}`}>
            {p.num}
          </span>
          {p.label}
        </Link>
      ))}
    </div>
  )
}

export default function CoursePart3() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 3 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 3 – Introduci una routine rilassante prima della nanna
            </h1>

            <CourseNav current={3} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Sia gli esperti del sonno che psicologi e pediatri raccomandano all&apos;unanimita di introdurre una routine serena e costante ogni sera prima della nanna. Fare ogni sera le stesse cose, alla stessa ora e nello stesso ordine, aiuta tantissimo il corpo e il cervello del tuo bambino a rilassarsi e a predisporli alla fase dell&apos;addormentamento.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La scienza conferma l&apos;effetto</h2>
              <p>Due studi, del 2009 e del 2015, hanno dimostrato che una routine serale ben definita porta chiaramente a un sonno migliore nei bambini: addormentamento anticipato, addormentamento piu rapido, meno risvegli notturni e una durata complessiva del sonno piu lunga.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Consigli pratici</h2>
              <ol className="space-y-3 text-warm-600 list-decimal pl-5">
                <li>Lasciati guidare dalle vostre preferenze, ma scegli attivita tranquille</li>
                <li>Le attivita piu calme dovrebbero trovarsi alla fine</li>
                <li>Un ordine fisso, facilmente riconoscibile per il tuo bambino, e fondamentale</li>
                <li>La durata della routine dovrebbe essere adeguata all&apos;eta</li>
                <li>Separa l&apos;ultima poppata dal momento di addormentarsi con 10-15 minuti di distanza</li>
                <li>La routine deve avere una fine ben definita, ripetuta ogni sera nello stesso modo</li>
              </ol>

              <p>Elementi possibili della tua routine:</p>
              <p className="text-warm-600">Bagnetto caldo o cambio del pannolino · Massaggio al bambino · Indossare il pigiamino o il sacco nanna · Poppata o biberon · Portarlo in braccio · Coccole · Guardare un libro insieme · Cantare una ninna nanna — E poi a nanna, sempre con la stessa frase: <em>&quot;Buonanotte, dormi bene mio piccolo tesoro.&quot;</em></p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il momento del papa</h2>
              <p>Anche tanti papa sono bravissimi a mettere a letto i piccoli tesori. La cosa bella e che cosi papa e figlio avranno un tempo speciale tutto per loro, e ne nasceranno momenti di forte legame emotivo. E la mamma potra nel frattempo prendersi qualche minuto per sorseggiare un te caldo e mettere finalmente i piedi alzati.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La storia personale di Sarah</h2>
              <p>Con la mia quinta figlia dormivo alla fine solo 4-5 ore a notte, con tanti risvegli lunghi, e durante il giorno dovevo comunque prendermi cura degli altri bambini. Dovevamo cambiare qualcosa — e cosi abbiamo fatto! Si, la fase di transizione e stata una settimana tosta. Ma poi la nostra piccola ha cominciato a dormire quasi sempre tutta la notte! E il regalo piu bello: mia figlia era finalmente anche lei serena, felice e piena di energia!</p>

            </div>

            <AuthorBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
