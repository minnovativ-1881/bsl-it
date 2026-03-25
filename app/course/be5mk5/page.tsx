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

export default function CoursePart5() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 5 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 5 – Imparare ad addormentarsi e dormire tutta la notte con dolcezza
            </h1>

            <CourseNav current={5} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Benvenuta alla quinta e ultima parte di questo corso. Oggi ti mostrero come aiutare il tuo amato bambino a imparare a dormire tutta la notte.</p>

              <p>A questo punto, dovresti aver completato quattro passi fondamentali:</p>
              <ol className="space-y-2 text-warm-600 list-decimal pl-5">
                <li>Hai tenuto un diario del sonno e hai individuato i ritmi del tuo bambino</li>
                <li>Avete trovato una routine quotidiana che sostiene il ritmo biologico del tuo piccolo</li>
                <li>Hai introdotto una routine serale dolce e tranquilla</li>
                <li>Il tuo tesoro si e gradualmente abituato a nuove abitudini rassicuranti per addormentarsi</li>
              </ol>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il collegamento tra addormentarsi e dormire tutta la notte</h2>
              <p>La chiave per dormire tutta la notte e insegnare al tuo bambino ad addormentarsi <strong>senza bisogno del tuo aiuto diretto</strong>. Perche il modo in cui si addormenta all&apos;ora della nanna e lo stesso che vorra utilizzare anche durante la notte per tornare a dormire.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Domande e risposte importanti</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-warm-800">1. Addormentarsi e dormire tutta la notte: si deve davvero imparare?</p>
                  <p className="text-warm-600">Si, dormire e una capacita che si apprende, in particolare la capacita di calmarsi da soli e prendere sonno. E un po&apos; come imparare a nuotare: alla fine, tutti imparano e ne beneficiano per tutta la vita.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">2. Bisogna smettere completamente di allattare?</p>
                  <p className="text-warm-600">No. Dopo che ho insegnato alla nostra piu piccola a dormire tutta la notte, ho potuto comunque continuare ad allattarla per farla addormentare durante il giorno e la sera.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">3. Da quando il mio bambino puo imparare a dormire tutta la notte?</p>
                  <p className="text-warm-600">Un&apos;eta importante e quella di circa 6 mesi. In genere, i bambini hanno bisogno solo di una poppata notturna e sono in grado di calmarsi da soli.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">4. Qual e il metodo giusto per il mio bambino?</p>
                  <p className="text-warm-600">La cosa piu importante e trovare un metodo che corrisponda al tuo stile educativo e al carattere del tuo bambino. Non esiste una formula magica valida per tutte le famiglie.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">5. Qual e la tua esperienza con i metodi per imparare a dormire?</p>
                  <p className="text-warm-600">Con il mio quinto figlio ho percorso chilometri su e giu per la camera da letto nei primi sei mesi. Ero veramente esausta. Quando aveva quasi sei mesi, dormivo meno di cinque ore a notte. Cosi abbiamo iniziato un percorso di apprendimento del sonno rispettoso del legame — e non ce ne siamo mai pentiti!! Dopo pochi giorni dormiva molto meglio. Sono infinitamente grata che abbiamo preso questa decisione.</p>
                </div>
              </div>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">I quattro metodi piu comuni per imparare a dormire</h2>
              <p>Come puo il mio amato bambino imparare ad addormentarsi e dormire tutta la notte nel modo piu dolce ed efficace possibile, senza dipendere da me? Nelle mie consulenze raccomando spesso <strong>una combinazione dei metodi rispettosi del legame qui sotto</strong>, in modo che possiate trovare il giusto equilibrio tra dolcezza ed efficacia per la vostra situazione unica.</p>

              <div className="space-y-6 mt-4">
                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">1. Il metodo del distacco graduale</p>
                  <p className="text-warm-600 text-sm mb-3">Un metodo molto dolce e graduale — perfetto per i genitori che vogliono evitare completamente il pianto e sono disposti a investire tempo e pazienza.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Continui ad aiutare il tuo bambino ad addormentarsi (allattando, cullando, tenendolo in braccio, ecc.), ma nel tempo riduci gradualmente il tuo coinvolgimento — passo dopo passo, fino a quando il bambino riesce ad addormentarsi da solo.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Adatto per:</strong> Bambini a partire da sei settimane. Adatto a tutti i bambini e bambini piccoli.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">2. Il metodo prendi e rimetti</p>
                  <p className="text-warm-600 text-sm mb-3">Un altro metodo dolce e amorevole.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Completi la tua routine serale e metti giu il bambino. Se inizia ad agitarsi o a piangere, lo prendi in braccio per consolarlo. Una volta che e calmo e assonnato di nuovo, lo rimetti dolcemente nel suo letto. Ripeti questo finche il bambino si addormenta.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Adatto per:</strong> Bambini a partire da 6-8 settimane. Nota: alcuni bambini si sovrastimolano con il ciclo continuo di prendere e rimettere — osserva attentamente come risponde il tuo bambino.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">3. Il metodo PAL (Pianto Abbracciato con Amore)</p>
                  <p className="text-warm-600 text-sm mb-3">Un approccio rispettoso del legame basato sul lavoro della psicologa dello sviluppo Dr. Aletha J. Solter.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Smetti di usare distrazioni estenuanti all&apos;ora di dormire. Invece, tieni con calma il tuo bambino tra le braccia e permettigli di esprimere quello che sente — attraverso le lacrime — senza cercare di fermare o reindirizzare l&apos;emozione. Offri presenza amorevole e parole confortanti che riconoscano i suoi sentimenti.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Esperienza di Sarah:</strong> Abbiamo usato questo metodo con la nostra quinta figlia a sei mesi. Quello che ho amato di piu e stato la capacita di essere davvero presente per lei nella sua frustrazione — e spesso si vedono progressi verso un sonno migliore molto rapidamente.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">4. Il metodo della sedia</p>
                  <p className="text-warm-600 text-sm mb-3">Una buona opzione per i genitori che sentono che gli approcci piu dolci non hanno funzionato — o che si sentono sicuri nel gestire le proteste del bambino rimanendo vicini.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Metti una sedia vicino alla culla del tuo bambino. Una volta completata la routine serale e quando il bambino e assonnato, lo metti giu e ti siedi tranquillamente sulla sedia mentre si addormenta. Nel corso di diverse notti, sposti gradualmente la sedia piu lontano dalla culla finche, alla fine, non sei fuori dalla stanza.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Adatto per:</strong> Bambini intorno ai 5,5-6 mesi e piu. Particolarmente utile per i bambini piu grandi. Richiede pazienza e costanza.</p>
                </div>
              </div>

              <div className="bg-blush-50 border border-blush-200 rounded-2xl p-6 my-8">
                <p className="font-semibold text-warm-800 mb-2">Questo e un corso di avviamento — c&apos;e molto di piu disponibile</p>
                <p className="text-warm-600 text-sm">Questi cinque passi coprono le fondamenta piu importanti. Ma ogni bambino e ogni situazione familiare e unica. Se hai bisogno di una guida piu personalizzata — su misura per le sfide specifiche di sonno del tuo bambino, la sua eta e il suo temperamento — i nostri programmi piu approfonditi, e-book e consulenze personali possono aiutarti molto di piu.</p>
                <Link href="/chi-siamo" className="inline-block mt-3 text-blush-500 font-medium text-sm hover:text-blush-600 transition-colors">
                  Scopri di piu su Sarah e il suo team →
                </Link>
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
