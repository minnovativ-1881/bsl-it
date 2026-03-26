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

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Si comincia…</h3>

              <p>Sono davvero felice che tu ti sia iscritta a questo corso sul sonno del bambino! Ti aspettano <strong>cinque lezioni</strong>, ricche di informazioni preziose e consigli pratici per migliorare il sonno del tuo piccolo.</p>

              <p>Mi presento: sono <strong>Sarah</strong>, mamma di una grande famiglia, blogger, autrice e consulente certificata del sonno infantile. Da oltre <strong>12 anni</strong> mi occupo con passione di questo tema e il mio obiettivo è aiutare te — e tanti altri genitori esausti — a trovare soluzioni <strong>dolci e rispettose del legame genitore-bambino</strong> per i problemi di sonno del tuo bambino.</p>

              <p>Forse ti trovi in una situazione simile a quella che ho vissuto io: <strong>notti difficili, giornate stressanti, un bambino irrequieto</strong> e la grande domanda: <em>come posso migliorare tutto questo con dolcezza?</em></p>

              <p>Se stai cercando una mamma con <strong>tanta esperienza</strong>, che ha vissuto tutto questo in prima persona e ha trovato soluzioni <strong>efficaci, ma sempre amorevoli e rispettose</strong>… allora <strong>sei nel posto giusto!</strong></p>

              <p><strong>Come funziona il corso?</strong><br />
              Per i prossimi <strong>quattro giorni</strong>, riceverai ogni giorno una nuova e-mail con una lezione del corso. Attraverso esperienze personali e consigli pratici, ti guiderò con un <strong>piano passo dopo passo</strong>, che ti aiuterà a indicare al tuo bambino la strada per un sonno più sereno e profondo. <strong>E, cosa ancora più importante, anche tu potrai finalmente dormire meglio!</strong></p>

              <p>Ho sperimentato questi passi con i miei bambini e posso dirti che la differenza è stata incredibile. Dopo settimane di totale esaurimento (con appena <strong>4-5 ore di sonno per notte</strong>), ho ritrovato l&apos;energia e la serenità di cui avevo bisogno per occuparmi dei miei adorati figli e delle mie giornate impegnative.</p>

              <p><strong>Un piccolo promemoria:</strong> il piano in <strong>5 passi</strong> che condividerò con te <strong>non è un trucco segreto o una formula magica</strong> (spoiler: non esistono!), ma è un metodo <strong>testato e consigliato</strong> dai migliori esperti del sonno infantile.</p>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-6">
                <p className="font-semibold text-warm-800 mb-3">Programma del corso</p>
                <ul className="space-y-1 text-warm-600 text-sm">
                  <li><strong>Parte 1</strong> – Ritmi di sonno</li>
                  <li>Parte 2 – Routine quotidiana</li>
                  <li>Parte 3 – Orario della nanna</li>
                  <li>Parte 4 – Nuove abitudini di sonno</li>
                  <li>Parte 5 – Addormentarsi e dormire tutta la notte</li>
                </ul>
              </div>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Senza sonno non si può andare avanti</h2>

              <p>Diciamocelo: <strong>la mancanza di sonno può mettere noi mamme davvero a dura prova</strong>, giusto? E, per quanto alcuni possano dire il contrario, <strong>non tutti i bambini sono naturalmente dei grandi dormiglioni</strong>. E non sempre, con il tempo, il loro sonno migliora da solo.</p>

              <p>Lo so bene. <strong>Quattro dei miei sei bambini</strong> hanno avuto un sonno incredibilmente difficile — ognuno in modo diverso. Ma so anche un&apos;altra cosa: <strong>non siamo qui perché siamo &quot;incompetenti&quot; o &quot;cattivi genitori&quot;</strong>, ma perché abbiamo cercato di fare tutto al meglio. Perché abbiamo dato amore e sicurezza <strong>giorno e notte</strong>, spesso fino allo sfinimento.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Ogni bambino è unico</h2>

              <p>Per quanto si sentano tanti consigli &quot;miracolosi&quot; o soluzioni universali, la verità è che <strong>ogni bambino è diverso</strong>.</p>

              <p>Prendiamo l&apos;esempio del <strong>co-sleeping</strong>: un&apos;idea bellissima sulla carta. Ma nel mio caso, ha portato solo a <strong>13 poppate a notte</strong>. E con il secondo figlio, tutti finivano per svegliarsi a vicenda. Alla fine, ho deciso di abbandonarlo.</p>

              <p>A volte, la relazione di coppia ha bisogno di un po&apos; di spazio, e <strong>avere di nuovo un letto o una stanza solo per mamma e papà può essere importante</strong>. Altre volte, il <strong>sonno frammentato diventa talmente pesante</strong> che <strong>capisci che qualcosa deve cambiare</strong>. O forse il tuo bambino è sempre <strong>irritabile e nervoso</strong> durante il giorno, e senti che <strong>un sonno migliore gli farebbe davvero bene</strong>.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Non è colpa tua, mamma (o papà)!</h2>

              <p>Ci sono tanti motivi per cui si finisce nella spirale dell&apos;insonnia, <strong>ma non è perché hai sbagliato qualcosa</strong>! Hai fatto del tuo meglio, con tutto l&apos;amore possibile. Dobbiamo accettare che <strong>ogni bambino è unico</strong> — porta con sé la propria personalità, le proprie sfide e le proprie esigenze.</p>

              <p>Dopo anni di ricerche (e notti insonni!), oggi so con certezza una cosa: <strong>ogni famiglia deve decidere da sé quando è arrivato il momento di dire &quot;basta&quot;</strong>. Se sei arrivata a questo punto e <strong>senti che è il momento di cambiare</strong>, allora la domanda più importante è: <em>&quot;COME posso aiutare il mio bambino a dormire meglio?&quot;</em></p>

              <p>Secondo diversi studi, dormire bene è essenziale per il <strong>corpo, la mente e l&apos;equilibrio emotivo</strong>. Uno <strong>sviluppo ottimale</strong>, una migliore capacità di apprendimento e memoria, la crescita cerebrale e persino un sistema immunitario forte dipendono dalla <strong>qualità del sonno</strong> del tuo piccolo.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Passo 1: Scopri i ritmi di sonno del tuo bambino</h2>

              <p>Per capire come dorme il tuo bambino, <strong>prendi nota del suo sonno per alcuni giorni</strong>. Lo so, nessuno è entusiasta all&apos;idea di tenere un diario del sonno, ma ti assicuro che <strong>è davvero essenziale</strong> per individuare schemi e dettagli che altrimenti potresti non notare.</p>

              <p>Ti consiglio di annotare il suo ritmo di sonno per almeno una settimana. Scrivi tutto il suo ritmo giornaliero e notturno, includendo:</p>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-6">
                <p className="font-semibold text-warm-800 mb-3">Registra ogni giorno:</p>
                <ul className="space-y-1 text-warm-600">
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Orari di veglia</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti in cui dorme (pisolini e sonno notturno)</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Orari della nanna</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti di alimentazione (allattamento o biberon)</li>
                  <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Momenti di agitazione o pianto</li>
                </ul>
                <p className="mt-3 text-warm-700 font-semibold">Obiettivo: individuare il ritmo naturale del tuo bambino.</p>
              </div>

              <p>Spesso emergono schemi sorprendenti che <strong>semplificano di molto tutti i passaggi successivi!</strong></p>

              <div className="bg-blush-50 border border-blush-100 rounded-2xl p-6 my-6">
                <p className="font-semibold text-warm-800 mb-2">Le note di Sarah</p>
                <p className="text-warm-600 text-sm">Grazie alle mie annotazioni, ho scoperto che uno dei miei bambini <strong>rimaneva sempre sveglio 1-2 ore di notte</strong> se durante il giorno dormiva per più di due ore consecutive. Un&apos;altra sorpresa? Il nostro bambino di 4 anni <strong>si svegliava 1-2 volte per notte</strong> quando saltava il pisolino pomeridiano o andava a letto troppo tardi! Tenere traccia del sonno per alcuni giorni aiuta a individuare schemi nascosti che possono fare una grande differenza!</p>
              </div>

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Come compilare il Diario del Sonno</h3>

              <p>Per facilitarti il lavoro, puoi <strong>scaricare e stampare il nostro Diario del Sonno in PDF</strong>. Così potrai tenere traccia delle abitudini del tuo piccolo con più precisione!</p>

              <ul className="space-y-2 text-warm-600 list-disc pl-5">
                <li>Nella <strong>colonna di sinistra</strong>, scrivi i giorni della settimana.</li>
                <li>Registra <strong>giorno per giorno</strong> quando il tuo bambino <strong>ha dormito, mangiato, pianto o si è agitato</strong>.</li>
                <li>Segna con <strong>un punto grande</strong> quando ha mangiato molto e con <strong>un punto piccolo</strong> quando ha mangiato poco.</li>
                <li><strong>Lascia in bianco</strong> i momenti di veglia.</li>
                <li><strong>Segna con una linea spessa</strong> le fasi di sonno.</li>
                <li><strong>Usa una linea a zig-zag leggera</strong> per i momenti di agitazione.</li>
                <li><strong>Disegna una linea a zig-zag più marcata</strong> per i momenti di pianto.</li>
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

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Monitora il sonno con regolarità</h3>

              <p>Visto che il ritmo del tuo bambino cambia costantemente, soprattutto nel primo anno, <strong>ti consiglio di ripetere questa osservazione ogni 1-3 mesi</strong>. Ovviamente, ci saranno periodi in cui il bisogno di sonno aumenterà o diminuirà (malattie, dentizione, scatti di crescita). Cerca quindi di prendere appunti in un periodo &quot;normale&quot;.</p>

              <p>Dopo qualche giorno di annotazioni, potrai avere una media del sonno del tuo bambino e avrai <strong>tutte le informazioni giuste per passare al prossimo passo!</strong></p>

              <div className="bg-blush-50 border border-blush-100 rounded-2xl p-6 my-6">
                <p className="font-semibold text-warm-800 mb-2">Le note di Sarah</p>
                <p className="text-warm-600 text-sm">Non avrei mai pensato che un bambino potesse <strong>dormire troppo durante il giorno</strong> — finché è arrivata la mia quinta figlia! Lei poteva dormire <strong>ore e ore di fila di giorno</strong>, ma poi restava sveglia <strong>altrettante ore durante la notte</strong>. Ho dovuto <strong>svegliarla regolarmente, anche quando aveva quasi un anno</strong>, altrimenti il sonno notturno ne risentiva tantissimo! Con i miei altri bambini, invece, il problema era l&apos;opposto: pisolini brevissimi da 40 minuti e poi di nuovo svegli — potevo davvero regolare l&apos;orologio su di loro!</p>
              </div>

              <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Analizziamo le tue note!</h3>

              <ul className="space-y-2 text-warm-600 list-disc pl-5">
                <li>Assicurati che il tuo bambino dorma <strong>abbastanza di giorno</strong>, ma senza eccedere.</li>
                <li>Non serve che la durata dei sonnellini sia perfetta, <strong>basta che avvengano quando il tuo piccolo è davvero stanco</strong>.</li>
                <li>Una <strong>routine giornaliera coerente</strong>, che rispetti il suo orologio biologico, è fondamentale per un sonno migliore!</li>
              </ul>

              <p>Di solito, il sonno di un bambino in 24 ore rimane abbastanza costante, anche se può essere distribuito in modo diverso tra il giorno e la notte. Il sonno diurno e quello notturno vengono elaborati in aree diverse del cervello — questo significa che puoi <strong>mantenere le abitudini di addormentamento diurne</strong> che avete (ad esempio allattare, portare in fascia o cullare), e <strong>lavorare comunque sul miglioramento del sonno notturno</strong> senza dover modificare tutto in una volta.</p>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-8">
                <p className="text-warm-700 font-semibold mb-2">Nella prossima lezione</p>
                <p className="text-warm-600 text-sm">Nella mail di domani ti spiegherò come trovare <strong>la routine perfetta</strong> per il tuo piccolo — uno dei segreti per ridurre i risvegli notturni e avere un bambino più sereno. Ti mostrerò come evitare o ridurre al minimo i momenti di irrequietezza e pianto, e perché il numero e la durata dei pisolini giornalieri sono fondamentali per migliorare il sonno notturno. Tieni d&apos;occhio la tua casella di posta — ci sentiamo domani!</p>
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
