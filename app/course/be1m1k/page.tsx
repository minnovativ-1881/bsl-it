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

export default function CoursePart1() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 1 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 1: Scopri i ritmi di sonno del tuo bambino
            </h1>

            <CourseNav current={1} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Sono davvero felice che tu ti sia iscritta a questo corso! Ti aspettano cinque lezioni ricche di informazioni preziose e consigli pratici. Sono Sarah, mamma di una grande famiglia, blogger, autrice e consulente certificata del sonno infantile. Da oltre 12 anni mi occupo con passione di questo tema.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Senza sonno non si puo andare avanti</h2>
              <p>La mancanza di sonno puo mettere noi mamme davvero a dura prova. E non sempre, con il tempo, il sonno dei bambini migliora da solo. Lo so bene. Quattro dei miei bambini hanno avuto un sonno incredibilmente difficile — ognuno in modo diverso. Ma so anche un&apos;altra cosa: non siamo qui perche siamo &lsquo;incompetenti&rsquo; o &lsquo;cattivi genitori&rsquo;, ma perche abbiamo cercato di fare tutto al meglio.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Ogni bambino e unico</h2>
              <p>Per quanto si sentano tanti consigli &lsquo;miracolosi&rsquo;, la verita e che ogni bambino e diverso. Prendiamo l&apos;esempio del co-sleeping: un&apos;idea bellissima sulla carta. Ma nel mio caso, ha portato solo a 13 poppate a notte. E con il secondo figlio, tutti finivano per svegliarsi a vicenda. A volte, la relazione di coppia ha bisogno di un po&apos; di spazio. O forse il tuo bambino e sempre irritabile e nervoso durante il giorno, e senti che un sonno migliore gli farebbe davvero bene.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Non e colpa tua!</h2>
              <p>Ci sono tanti motivi per cui si finisce nella spirale dell&apos;insonnia, ma non e perche hai sbagliato qualcosa! Hai fatto del tuo meglio, con tutto l&apos;amore possibile. Dobbiamo accettare che ogni bambino e unico — porta con se la propria personalita, le proprie sfide e le proprie esigenze.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Passo 1: Scopri i ritmi di sonno del tuo bambino</h2>
              <p>Per capire come dorme il tuo bambino, prendi nota del suo sonno per alcuni giorni. Lo so, nessuno e entusiasta all&apos;idea di tenere un diario del sonno, ma ti assicuro che e davvero essenziale per individuare schemi e dettagli che altrimenti potresti non notare. Ti consiglio di annotare il suo ritmo di sonno per almeno una settimana.</p>
              <p>Scrivi tutto il ritmo giornaliero e notturno, includendo:</p>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-6">
                <p className="font-semibold text-warm-800 mb-3">Registra ogni giorno:</p>
                <ul className="space-y-1 text-warm-600">
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Orari di veglia</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti di sonno (pisolini e sonno notturno)</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Orari della nanna</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti di alimentazione</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti di agitazione o pianto</li>
                </ul>
              </div>

              <p><strong>Obiettivo: individuare il ritmo naturale del tuo bambino.</strong></p>

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Come compilare il Diario del Sonno</h3>
              <p>Per facilitarti il lavoro, puoi scaricare e stampare il nostro Diario del Sonno in PDF. Nella colonna di sinistra scrivi i giorni della settimana. Registra giorno per giorno quando il tuo bambino ha dormito, mangiato, pianto o si e agitato.</p>
              <ul className="space-y-2 text-warm-600 list-disc pl-5">
                <li>Segna con un punto grande quando ha mangiato molto e con un punto piccolo quando ha mangiato poco.</li>
                <li>Lascia in bianco i momenti di veglia.</li>
                <li>Segna con una linea spessa le fasi di sonno.</li>
                <li>Usa una linea a zig-zag leggera per i momenti di agitazione.</li>
              </ul>

              <div className="my-6">
                <a
                  href="/it-diario-del-sonno.pdf"
                  className="inline-flex items-center gap-2 bg-blush-400 hover:bg-blush-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scarica il Diario del Sonno
                </a>
              </div>

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Una storia personale di Sarah</h3>
              <p>Non avrei mai pensato che un bambino potesse dormire troppo durante il giorno — finche e arrivata la mia quinta figlia! Lei poteva dormire ore e ore di fila di giorno, ma poi restava sveglia altrettante ore durante la notte. Ho dovuto svegliarla regolarmente, anche quando aveva quasi un anno, altrimenti il sonno notturno ne risentiva tantissimo!</p>

              <div className="bg-blush-50 border border-blush-100 rounded-2xl p-6 my-8">
                <p className="text-warm-700 font-semibold mb-2">Nella prossima lezione</p>
                <p className="text-warm-600 text-sm">Nella mail di domani ti spieghere come trovare la routine perfetta per il tuo piccolo — uno dei segreti per ridurre i risvegli notturni e avere un bambino piu sereno.</p>
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
