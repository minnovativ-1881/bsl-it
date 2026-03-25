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

export default function CoursePart4() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 4 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 4 – Introdurre nuove abitudini del sonno
            </h1>

            <CourseNav current={4} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Anche il tuo piccolo bambino sviluppa man mano abitudini e condizioni precise per riuscire a rilassarsi e addormentarsi serenamente. Queste abitudini sono chiamate <strong>associazioni del sonno</strong> — collegano al cervello del tuo bambino il messaggio: <em>&quot;Va tutto bene. Posso lasciarmi andare e dormire.&quot;</em></p>

              <p>La difficolta sta nel fatto che il tuo bambino ha bisogno di queste associazioni per addormentarsi — e di notte, quando si sveglia tra una fase del sonno e l&apos;altra, le reclama di nuovo.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">7 aiuti utili per il sonno</h2>

              <div className="space-y-6 mt-6">
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">1. Rumore bianco</p>
                  <p className="text-warm-600 text-sm">Puo essere molto rassicurante perche ricorda i suoni percepiti nell&apos;utero.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">2. Copertina per fasciare o sacco nanna per neonati</p>
                  <p className="text-warm-600 text-sm">Aiutano a evitare che il piccolo si svegli a causa dei propri riflessi.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">3. Camera buia</p>
                  <p className="text-warm-600 text-sm">E dimostrato che favorisce il sonno dei bambini.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">4. Ciuccio</p>
                  <p className="text-warm-600 text-sm">Puo essere molto utile se usato solo per addormentarsi.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">5. Sacco nanna</p>
                  <p className="text-warm-600 text-sm">Molto piu sicuro di una coperta. Tiene il corpo al caldo e segnala: &quot;E ora di dormire&quot;.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">6. Peluche o copertina di compagnia</p>
                  <p className="text-warm-600 text-sm">Abitua il bambino gradualmente a un nuovo amico della buonanotte.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">7. Segnali del sonno</p>
                  <p className="text-warm-600 text-sm">Usa parole o frasi chiave che comunichino al tuo bambino che e ora di dormire. Esempio: <em>&quot;Buonanotte, piccolo tesoro. Ti voglio bene. Dormi bene.&quot;</em></p>
                </div>
              </div>

              <div className="bg-blush-50 border border-blush-100 rounded-2xl p-6 my-8">
                <p className="text-warm-700 font-semibold mb-2">Domani: l&apos;ultimo e piu importante passo</p>
                <p className="text-warm-600 text-sm">Domani si fa sul serio. Arriviamo all&apos;ultimo — e piu importante — passo: come aiutare davvero il tuo bambino a dormire tutta la notte. A domani, con affetto, Sarah</p>
              </div>

            </div>

            <AuthorBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
