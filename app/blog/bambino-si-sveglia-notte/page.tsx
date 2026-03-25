import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bambino Si Sveglia di Notte? 10 Cause e 12 Soluzioni | Il Regno della Nanna',
  description: 'Scopri le 10 cause più comuni dei risvegli notturni nei neonati e le 12 migliori soluzioni per aiutare te e il tuo bambino a trovare finalmente pace di notte.',
}

export default function BambinoSiSvegliaNottePage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Risvegli Notturni
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Bambino Si Sveglia di Notte? 10 Cause e 12 Soluzioni!
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
                <span>24 marzo 2026</span>
                {' · '}
                <span>12 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bambino-si-sveglia-notte.webp"
                alt="Bambino Si Sveglia di Notte"
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
            Dolori da dentizione, difficoltà a riaddormentarsi, esercitarsi a gattonare o a balbettare nel cuore
            della notte? Ci sono molte ragioni per cui il tuo bambino si sveglia spesso — e tante cose che puoi
            fare per aiutarlo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ciao! Sono Sarah Mann, consulente del sonno e mamma di sette bambini. Oggi ti mostrerò le 10 cause
            più comuni dei risvegli frequenti e le 12 migliori soluzioni per aiutare te e il tuo bambino a trovare
            finalmente un po' di pace notturna. Alla fine dell'articolo risponderò anche alle domande più frequenti
            sul sonno interrotto nei neonati e nei bambini piccoli.
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Il Tuo Bambino Si Sveglia Continuamente? Non Sei Sola!</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un gruppo di ricercatori neozelandesi ha scoperto che:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il 50% dei bambini di 3 mesi dorme 5 ore di seguito.</li>
            <li>Il 50% dei bambini di 5 mesi riesce a dormire anche 8 ore di fila.</li>
            <li>Tuttavia, il 15% dei bambini non dorme ancora 5 ore consecutive nemmeno al compimento del primo anno di vita.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Uno studio canadese ha rilevato che:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il 33% dei bambini di 5 mesi che si svegliano frequentemente di notte continua a non dormire 6 ore consecutive nemmeno a 2 anni e mezzo.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            E un altro studio ha scoperto che:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il 40% dei bambini di 8 mesi con problemi di sonno continua ad avere difficoltà a dormire anche a 3 anni.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come vedi, vale sicuramente la pena indagare le cause dei risvegli notturni e trovare strategie
            efficaci per affrontarli!
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Lo Sviluppo del Sonno del Bambino nel Primo Anno</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Partiamo subito con una rassicurazione: è del tutto normale, e nella maggior parte dei casi innocuo,
            che i bambini si sveglino spesso di notte. Anche se è davvero stancante!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche i bambini che inizialmente dormono bene possono improvvisamente iniziare a svegliarsi frequentemente
            di notte. È faticoso e frustrante, ma è un fenomeno comune, soprattutto nel secondo semestre di vita.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ecco come cambia il sonno del bambino nei primi mesi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">A 3–4 mesi</strong> molti bambini iniziano gradualmente ad allungare i loro cicli di sonno notturno.</li>
            <li><strong className="text-warm-800">A 4–6 mesi</strong> il ritmo biologico diventa più definito e, idealmente, una routine giornaliera inizia a stabilizzarsi.</li>
            <li><strong className="text-warm-800">Nel secondo semestre di vita</strong>, il sonno può migliorare, oppure peggiorare a causa di picchi di crescita e regressioni del sonno.</li>
            <li><strong className="text-warm-800">A partire dagli 8 mesi</strong>, i bambini diventano più mobili e attivi, il che può portare a più sonno o a meno sonno.</li>
          </ul>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Perché il Mio Bambino Si Sveglia Continuamente di Notte? – 10 Motivi</h2>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">1. Cambi di Ciclo del Sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            I cicli di sonno dei neonati sono ancora molto brevi, circa 40–50 minuti. Ogni ciclo comprende fasi di
            sonno leggero e profondo. Durante il passaggio da una fase all'altra, i bambini si svegliano leggermente.
            In questi momenti, il loro cervello si pone domande cruciali: <strong>è tutto a posto? posso continuare
            a dormire tranquillamente?</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Questi risvegli parziali sono normali in tutti gli esseri umani. La questione è: il tuo bambino riesce
            a tornare da solo nel sonno, o si sveglia del tutto e piange per chiedere aiuto?
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">2. Onde Cerebrali</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il sonno è strettamente legato a schemi specifici di attività cerebrale. Il dottor Chen, di Seattle,
            spiega:
          </p>
          <blockquote className="border-l-4 border-blush-300 pl-4 italic text-warm-500 mb-4">
            "Dai 6 mesi in poi, osserviamo onde cerebrali che seguono schemi simili a quelli degli adulti."
          </blockquote>
          <p className="text-warm-600 leading-relaxed mb-4">
            In teoria, quindi, la maggior parte dei bambini da questa età è capace di dormire per un periodo di
            6 ore consecutive. <strong>In teoria!</strong>
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">3. Bisogno di Vicinanza</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un neonato è appena arrivato in un mondo completamente nuovo e ha bisogno di orientarsi. Tutto è
            luminoso, rumoroso e sconosciuto: l'unica cosa davvero familiare è il contatto con la pelle e la
            voce della mamma.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Durante il cosiddetto "quarto trimestre" (i primi tre mesi dopo la nascita), è fondamentale rispondere
            ai bisogni del neonato senza forzarlo in una routine. A partire dai 5–6 mesi, però, è possibile aiutarlo
            a comprendere che il giorno è il momento per mangiare e coccolarsi, mentre la notte è il momento per dormire.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">4. Fame</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            I neonati hanno uno stomaco piccolissimo e il latte materno si digerisce rapidamente. Ecco perché nei
            primi mesi hanno bisogno di essere nutriti ogni 2–4 ore. Con il tempo, il loro organismo diventa in
            grado di immagazzinare più energia e, teoricamente, dormire più a lungo senza svegliarsi per la fame.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tuttavia, col passare del tempo, può svilupparsi un'abitudine: il bambino non si sveglia più per vera
            fame, ma perché ha imparato ad addormentarsi solo con la suzione.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">5. Disturbi Fisici</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Alcuni fastidi fisici possono disturbare anche i bambini che normalmente dormono bene. Il più comune?
            <strong className="text-warm-800"> La dentizione.</strong> Il primo dentino spunta di solito tra i 6 e
            i 12 mesi, ma i fastidi possono continuare fino alla prima infanzia.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche raffreddori, infezioni e malattie — specialmente le <strong>otiti</strong> — possono disturbare
            il sonno dei piccoli. Le vere patologie del sonno, come l'apnea notturna, sono invece molto rare nei bambini.
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

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">6. Mancanza di Routine e Rituali</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            I neonati amano la routine. Quando mancano schemi regolari, si sentono disorientati. Un ritmo di vita
            caotico, sonnellini troppo brevi o una messa a letto troppo tardiva possono interferire con lo sviluppo
            di un <strong>sano ritmo biologico</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            I neonati sovraffaticati non solo faticano ad addormentarsi, ma tendono anche a svegliarsi più spesso
            durante la notte. Anche risvegli prolungati nel cuore della notte e un risveglio troppo precoce al
            mattino possono essere causati dalla stanchezza eccessiva.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">7. Regressioni del Sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Poco prima o durante una nuova fase di sviluppo, anche i bambini che dormono meglio possono avere un
            crollo nel sonno. Si tratta solitamente di regressioni che durano tra 2 e 4 settimane. Il motivo è
            semplice: il cervello del bambino è in piena attività perché sta imparando una nuova abilità — rotolarsi,
            strisciare, gattonare, sedersi, alzarsi in piedi, camminare.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">8. Ansia da Separazione</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            L'ansia da separazione inizia solitamente intorno agli <strong>8 mesi</strong> e può manifestarsi con
            alti e bassi fino all'infanzia. Se il tuo bambino diventa improvvisamente molto attaccato a te, piange
            quando lasci la stanza, potrebbe essere questa la causa.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Oggi esistono molte strategie basate sul legame affettivo per aiutare il bambino a dormire meglio senza
            lasciarlo piangere da solo.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">9. Comportamento Notturno dei Genitori</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ovviamente è giusto rispondere ai bisogni di un bambino che piange di notte. Tuttavia, gli studi
            dimostrano che, oltre alla maturità cerebrale e al temperamento del bambino, il comportamento dei
            genitori influisce significativamente sullo sviluppo delle abitudini di sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Attenzione: <strong>non si tratta di un metodo di addestramento al sonno, né di ignorare il pianto
            del bambino!</strong> Il punto è che i bambini fanno molti suoni nel sonno — piagnucolano, si muovono,
            emettono vocalizzi. Aspettare qualche istante per vedere se il bambino si riaddormenta da solo può
            fare una grande differenza!
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">10. Abitudini del Sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se un bambino si addormenta sempre in braccio, al seno o con il biberon in bocca, è una coccola
            meravigliosa e nei primi mesi è importante per favorire il sonno. Tuttavia, tra i <strong>4 e gli 8 mesi</strong>,
            molti genitori si accorgono che i metodi che prima funzionavano ora richiedono troppo tempo, non sono
            più efficaci — oppure vengono richiesti dal bambino ogni 1–2 ore durante la notte!
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Come Reagire Quando il Bambino Si Sveglia di Notte? – 6 Consigli</h2>

          <ol className="space-y-5 text-warm-600 mb-8">
            <li>
              <strong className="text-warm-800">1. Verifica che sia tutto a posto.</strong>
              <p className="mt-1">Controlla se il pannolino è pieno, se ha dolore ai dentini, se sente troppo caldo o freddo. Se il tuo bambino piange in modo diverso dal solito, cerca subito di capire la causa.</p>
            </li>
            <li>
              <strong className="text-warm-800">2. Controlla se la luce o i rumori disturbano il sonno.</strong>
              <p className="mt-1">La stanza dovrebbe essere completamente oscurata. Anche i rumori bianchi o musica rilassante possono essere utili per coprire i rumori esterni.</p>
            </li>
            <li>
              <strong className="text-warm-800">3. Non stravolgere le buone abitudini durante regressioni, malattie o scatti di crescita.</strong>
              <p className="mt-1">Anche se le notti diventano più difficili, cerca un equilibrio. Dagli più sicurezza, ma senza creare nuove abitudini difficili da eliminare in seguito.</p>
            </li>
            <li>
              <strong className="text-warm-800">4. Mantieni le notti tranquille e noiose.</strong>
              <p className="mt-1">Anche se il tuo bambino rimane sveglio a lungo, evita di accendere la luce intensa. Comportati in modo <strong>lento, calmo e poco coinvolgente</strong>. Il giorno è dedicato al gioco, la notte al riposo.</p>
            </li>
            <li>
              <strong className="text-warm-800">5. Fame, sì o no?</strong>
              <p className="mt-1">Non tutti i risvegli notturni sono causati dalla fame. Cerca di evitare che il tuo bambino associ sempre il seno o il biberon al sonno.</p>
            </li>
            <li>
              <strong className="text-warm-800">6. Aspetta, invece di intervenire subito.</strong>
              <p className="mt-1">Se il tuo bambino sta solo mugugnando, ma non piange forte, aspetta 1–2 minuti prima di intervenire. Molti bambini emettono suoni durante il cambio di ciclo del sonno senza svegliarsi del tutto.</p>
            </li>
          </ol>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Come Posso Aiutare il Mio Bambino a Svegliarsi Meno di Notte? – 6 Soluzioni</h2>

          <ol className="space-y-5 text-warm-600 mb-8">
            <li>
              <strong className="text-warm-800">1. Un orario di nanna adeguato all'età.</strong>
              <p className="mt-1">A partire dai 3 mesi, puoi anticipare gradualmente l'orario della messa a letto. La maggior parte dei neonati e dei bambini piccoli dorme meglio con un'ora di nanna intorno alle <strong>19:00</strong>.</p>
            </li>
            <li>
              <strong className="text-warm-800">2. Non mantenere le fasi di veglia troppo a lungo.</strong>
              <p className="mt-1">Troppi bambini vanno a dormire già troppo stanchi, il che peggiora la qualità del sonno. L'eccessiva stanchezza è il principale nemico di un buon sonno!</p>
            </li>
            <li>
              <strong className="text-warm-800">3. Una routine giornaliera con il giusto numero di sonnellini.</strong>
              <p className="mt-1">Il sonno diurno è fondamentale per il sonno notturno. Assicurati che il tuo bambino faccia il numero di pisolini adeguato alla sua età.</p>
            </li>
            <li>
              <strong className="text-warm-800">4. Creare una routine serale rilassante.</strong>
              <p className="mt-1">Rituali serali costanti aiutano il bambino a rilassarsi e a prepararsi al sonno.</p>
            </li>
            <li>
              <strong className="text-warm-800">5. Oggetti di transizione.</strong>
              <p className="mt-1">Un oggetto di conforto, come un panno morbido o un piccolo peluche, può essere molto utile per il sonno. I bambini iniziano a mostrare interesse per un compagno di nanna intorno ai 6–7 mesi.</p>
            </li>
            <li>
              <strong className="text-warm-800">6. Fornire un'adeguata assunzione di calorie durante il giorno.</strong>
              <p className="mt-1">Assicurati che il tuo bambino mangi bene di giorno. A partire dai 4–6 mesi, la maggior parte dei bambini può assumere la maggior parte delle calorie durante il giorno.</p>
            </li>
          </ol>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Come Aiutare il Mio Bambino a Dormire Più a Lungo?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Pochissimi bambini sanno addormentarsi da soli quando sono stanchi. Alcuni non riescono nemmeno ad
            allungare i cicli di sonno notturno in autonomia. Se il tuo bambino continua ad avere problemi nonostante
            una routine ottimale, esistono metodi di sleep coaching delicati e rispettosi del legame con i genitori.
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi una guida passo dopo passo per notti più serene?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Scopri di più con il mio corso gratuito sul sonno del neonato, dove troverai strategie concrete
              adattabili alla vostra situazione familiare.
            </p>
            <Link
              href="/gratis"
              className="inline-block bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Sì! Voglio il corso gratuito
            </Link>
          </div>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Risposte alle Domande Più Frequenti</h2>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Bisogna Tenere il Bambino Sveglio di Giorno?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se pensi di mantenere il tuo bambino sveglio più a lungo durante il giorno nella speranza che dorma
            meglio di notte, la risposta è chiara: <strong>meglio di no!</strong> Tenere il bambino sveglio per
            troppo tempo di solito porta a problemi nell'addormentamento e a notti ancora più agitate.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Perché il Mio Bambino Dorme Solo 30 Minuti?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il tuo bambino si sveglia dopo 30 minuti, significa che fatica a collegare i diversi cicli di sonno.
            Risvegli brevi e frequenti sono spesso un segnale di eccessiva stanchezza. Questi mini-pisolini sono
            molto comuni tra i <strong>4 e i 6 mesi</strong> e fanno parte dello sviluppo del sonno.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Quando i Bambini Iniziano a Svegliarsi Meno di Notte?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Non esiste una risposta univoca. In generale, i bambini allungano gradualmente le fasi di sonno notturno
            nel corso del primo anno. A partire dai <strong>6 mesi</strong>, molti bambini riescono a ridurre le
            poppate notturne a 1–2 volte. Tuttavia, circa il 25% dei bambini continua a svegliarsi frequentemente
            anche dopo l'anno di vita.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Perché il Mio Bambino È Così Irrequieto di Notte?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se è un problema temporaneo, le cause più probabili sono dentizione, infezioni nascoste o regressione
            del sonno. Se invece il problema dura da molto tempo, è probabile che il tuo bambino non abbia ancora
            imparato a gestire il passaggio tra le fasi di sonno.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Perché il Mio Bambino di 7 Mesi Si Sveglia Continuamente?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nella maggior parte dei casi, questo è legato a scatti di crescita e regressioni del sonno. Se il tuo
            bambino di 7 mesi ha iniziato a svegliarsi più spesso e a rifiutare i pisolini, probabilmente sta
            attraversando la regressione del sonno dei 6–7 mesi.
          </p>

          <p className="text-warm-600 leading-relaxed mb-4 mt-8">
            <strong>Con affetto,</strong><br />
            <strong>Sarah</strong>
          </p>

          {/* Riferimenti bibliografici */}
          <div className="mt-10 border-t border-blush-100 pt-6">
            <h3 className="font-semibold text-warm-800 text-lg mb-3">Riferimenti Bibliografici</h3>
            <ol className="space-y-2 text-warm-400 text-sm">
              <li>Henderson, J., France, K. G., Owens, J. L., Blampied, N. M. (2010). <em>Sleeping Through the Night. The Consolidation of Self-regulated Sleep Across the First Year of Life</em>. Pediatrics, 126(5), e1081–7.</li>
              <li>Touchette, É., Petit, D., Paquet, J., Boivin, M., Japel, C., Tremblay, R. E., &amp; Montplaisir, J. Y. (2005). <em>Factors Associated With Fragmented Sleep at Night Across Early Childhood</em>. Archives of Pediatrics &amp; Adolescent Medicine, 159(3), 242.</li>
              <li>Zuckerman, B., Stevenson, J., Bailey, V., &amp; Psych, M. (1987). <em>Sleep Problems in Early Childhood: Continuities, Predictive Factors, and Behavioral Correlates</em>. Pediatrics, 80(5), 664–671.</li>
            </ol>
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
