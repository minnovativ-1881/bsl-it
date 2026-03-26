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

              <p>Sia gli esperti del sonno che psicologi e pediatri raccomandano all&apos;unanimità di introdurre una routine serena e costante ogni sera prima della nanna. I rituali serali sono uno dei consigli più importanti per preparare il corpo del tuo bambino al sonno. Fare ogni sera le stesse cose, alla stessa ora e nello stesso ordine, aiuta tantissimo il corpo e il cervello del tuo bambino a rilassarsi e a predisporli alla fase dell&apos;addormentamento.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La scienza conferma l&apos;effetto</h2>

              <p>E non si tratta solo di buoni consigli tramandati nel tempo: questo approccio è stato confermato da diverse ricerche scientifiche. (A proposito: anche agli adulti con problemi di sonno viene spesso consigliata una routine serale ben strutturata.)</p>

              <p>Due studi, del 2009 e del 2015, hanno dimostrato che una routine serale ben definita porta chiaramente a un sonno migliore nei bambini e nei neonati. Miglioramento del sonno significa, in questo caso:</p>

              <ul className="space-y-1 text-warm-600 list-disc pl-5">
                <li>addormentamento anticipato,</li>
                <li>addormentamento più rapido,</li>
                <li>meno risvegli notturni e</li>
                <li>una durata complessiva del sonno più lunga.</li>
              </ul>

              <p>Suona come un sogno, vero? Inoltre, si è osservata una diminuzione dei comportamenti problematici durante il giorno e un netto miglioramento dell&apos;umore materno. Gli studiosi hanno anche rilevato che in culture dove si dà molta importanza alla routine serale (come in Asia o nel Caucaso), i bambini e i neonati presentano complessivamente un sonno migliore.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Consigli pratici</h2>

              <p>Ecco alcuni suggerimenti per creare una routine della buonanotte che sia serena e adatta alla vostra famiglia:</p>

              <ol className="space-y-3 text-warm-600 list-decimal pl-5">
                <li>Lasciati guidare dalle vostre preferenze, ma scegli attività tranquille (niente battaglie con i cuscini!).</li>
                <li>Le attività più calme dovrebbero trovarsi alla fine (un bagnetto come ultimo passo può essere troppo stimolante per molti neonati).</li>
                <li>Un ordine fisso, facilmente riconoscibile per il tuo bambino, è fondamentale.</li>
                <li>La durata della routine dovrebbe essere adeguata all&apos;età (più cresce, più lunga può essere).</li>
                <li>Separa l&apos;ultima poppata o pasto dal momento di addormentarsi con 10-15 minuti di distanza. (Se si addormenta sempre durante la poppata, può significare che dovresti anticipare la nanna di circa 15 minuti.)</li>
                <li>È fondamentale che la vostra routine abbia una fine ben definita, riconoscibile e che venga ripetuta ogni sera nello stesso modo.</li>
              </ol>

              <p>Elementi possibili della tua routine:</p>

              <p className="text-warm-600">Bagnetto caldo o cambio del pannolino · Massaggio al bambino · Indossare il pigiamino o il sacco nanna · Poppata o biberon · Portarlo in braccio · Coccole · Guardare un libro insieme · Cantare una ninna nanna — E poi a nanna, sempre con la stessa frase: <em>&quot;Buonanotte, dormi bene mio piccolo tesoro.&quot;</em></p>

              <p>Ciò che conta davvero non sono i singoli elementi, ma la <strong>costanza</strong> nell&apos;applicarli! Una routine serale significa ripetere ogni sera le stesse attività, alla stessa ora e nello stesso ordine. Proprio questa regolarità e coerenza aiutano il corpo del tuo bambino a prepararsi per la nanna e facilitano l&apos;addormentamento.</p>

              <p>Naturalmente, la routine serale deve essere anche <strong>piacevole per entrambi</strong> e <strong>realistica</strong>. Non deve diventare un&apos;ulteriore fonte di stress. Ciò che conta davvero è <strong>la continuità</strong>, non la singola attività.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Fasce d&apos;età diverse</h2>

              <p>A partire dai due mesi circa, è il momento ideale per introdurre una piccola routine serale. Naturalmente, un neonato di 3-6 mesi ha bisogno di un rituale serale più breve rispetto a un bambino più grande. Più il tuo bambino cresce, più tempo gli servirà probabilmente per passare dalla fase attiva e giocosa della giornata a un&apos;atmosfera calma e rilassante prima della nanna.</p>

              <p>In generale, però, preferisco pochi elementi fissi e ripetuti rispetto a una lunga sequenza &quot;perfetta&quot; che viene poi subito abbandonata perché troppo complicata da mantenere.</p>

              <p>Se desideri che il tuo bambino impari ad addormentarsi da solo nel suo lettino, ti consiglio davvero di iniziare con una routine della buonanotte ben strutturata. In questo modo, il tuo piccolo stabilirà delle abitudini serali solide che gli trasmetteranno sicurezza e serenità. Eventuali cambiamenti successivi nelle condizioni di addormentamento non lo destabilizzeranno troppo. Al contrario: il tuo bambino percepirà che tutto va bene e che la mamma o il papà è lì per lui.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Tempo di papà</h2>

              <p>A proposito: anche tanti papà sono bravissimi a mettere a letto i nostri piccoli tesori. Potete alternarvi oppure, se la routine serale prevede l&apos;allattamento o il biberon, il papà può occuparsi della parte prima o dopo. Probabilmente troverà il suo modo personale per calmare il vostro bambino.</p>

              <p>La cosa bella è che così papà e figlio avranno anche un tempo speciale tutto per loro, e ne nasceranno momenti di forte legame emotivo. E la mamma potrà nel frattempo occuparsi dei fratellini più grandi. O magari prendersi qualche minuto per sorseggiare un tè caldo e mettere finalmente i piedi alzati.</p>

              <p>Forse, o quasi sicuramente, il tuo piccolo protesterà un po&apos; nei primi giorni per questi cambiamenti. Ma se riuscite a superare questa fase, ne trarrete tutti e tre un grande beneficio. Nella maggior parte dei casi succede poi che il tuo piccolo cominci ad aspettarsi ogni singolo passo della routine serale — e addirittura lo richieda — per poi addormentarsi sereno e tranquillo.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Una tappa verso il sonno continuo</h2>

              <p>Una routine serale non è solo una bella tradizione o un&apos;occasione speciale per creare legame ogni sera. Aiuta davvero il tuo bambino a lasciarsi alle spalle le tensioni e le emozioni della giornata. Col tempo, riuscirà ad addormentarsi più facilmente e, dopo tante coccole e attenzioni, sarà pronto ad accogliere delle abitudini legate al sonno che non dipendano più completamente da voi. E questo è proprio il segreto per arrivare al sonno continuo!</p>

              <p>Domani parleremo del passaggio più importante, quello che manca ancora — e che purtroppo tanti genitori saltano. Ti mostrerò quali supporti dolci puoi introdurre per accompagnare con delicatezza e in modo rispettoso il tuo piccolo verso un sonno continuativo.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La storia personale di Sarah</h2>

              <p>Complimenti! Sei già al terzo giorno del corso via e-mail, quindi hai già fatto il terzo passo. Da genitori, abbiamo anche la responsabilità di dire, al momento giusto, &quot;Adesso basta!&quot; — soprattutto quando la situazione legata al sonno diventa insostenibile.</p>

              <p>So bene di cosa parlo: con la mia quinta figlia dormivo alla fine solo 4-5 ore a notte, con tanti risvegli lunghi, e durante il giorno dovevo comunque prendermi cura degli altri bambini. Dovevamo cambiare qualcosa — e così abbiamo fatto! Sì, la fase di transizione è stata una settimana tosta. Ma poi la nostra piccola ha cominciato a dormire quasi sempre tutta la notte!</p>

              <p>Puoi immaginare quanto fossimo sollevati! E il regalo più bello: mia figlia era finalmente anche lei serena, felice e piena di energia!</p>

            </div>

            <AuthorBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
