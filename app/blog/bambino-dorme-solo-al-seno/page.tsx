import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Il Bambino Dorme Solo al Seno? 3 Soluzioni Dolci | Il Regno della Nanna',
  description: 'Se il tuo bambino si addormenta solo allattando, sei in buona compagnia. Ecco come cambiare dolcemente con 3 strategie efficaci rispettose del legame.',
}

export default function BambinoDormeSoloAlSenoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Allattamento e Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Il mio bambino vuole solo il seno per dormire. Come aiutarlo? (3 strategie efficaci)
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
                <span>7 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bambino-dorme-solo-al-seno.webp"
                alt="Bambino dorme solo al seno"
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
            Come consulente del sonno, ricevo molto spesso domande come queste:
          </p>
          <p className="text-warm-600 leading-relaxed mb-4 italic">
            &quot;Il mio bambino si addormenta solo al seno. Come posso aiutarlo a smettere dolcemente? Anche di notte vuole sempre attaccarsi al seno e non si calma in altro modo. Noi genitori soffriamo di una grande mancanza di sonno. Non accetta nemmeno il ciuccio. Come possiamo insegnargli a dormire nel nostro letto o addirittura nel suo letto senza doverlo allattare continuamente di notte?&quot;
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo articolo troverai le risposte a queste domande frequenti!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il mio bambino si addormenta solo al seno. È davvero un problema?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per prima cosa, è importante sottolineare che allattare il tuo bambino per farlo addormentare e confortarlo non è assolutamente un errore o una &quot;cattiva abitudine&quot;!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per molte mamme, l&apos;allattamento al seno è un modo meraviglioso e naturale per far addormentare il proprio bambino e aiutarlo a riaddormentarsi durante la notte. Quindi la risposta è chiara: &quot;No, addormentarsi al seno non è assolutamente <strong className="text-warm-800">un problema di per sé</strong>, né dovrebbe essere evitato fin dall&apos;inizio!&quot;
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La maggior parte dei neonati e dei bambini piccoli ama addormentarsi succhiando – che sia al seno, al ciuccio o al biberon. In effetti, è del tutto normale, sano e perfettamente in linea con la loro fase di sviluppo, soprattutto nei primi mesi di vita. Finché entrambi (!) vi trovate bene e funziona, non c&apos;è alcun motivo per smettere.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Fin dall&apos;inizio dell&apos;umanità, i bambini sono stati allevati con amore, vicinanza e contatto fisico nelle diverse culture. Ancora oggi, in alcune parti del mondo, l&apos;allattamento fino ai 3-7 anni è considerato normale. Inoltre, l&apos;<strong className="text-warm-800">OMS</strong> raccomanda l&apos;allattamento al seno fino ai 2,5 anni.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quindi: finché l&apos;allattamento per addormentarsi funziona e vi fa stare bene, <strong className="text-warm-800">continuate a godervi questa meravigliosa fase di vicinanza!</strong>
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Quando l&apos;allattamento per dormire diventa un problema?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Diventa problematico solo quando l&apos;allattamento frequente e, in particolare, l&apos;allattamento per addormentarsi porta a notti agitate. In questo caso, si sviluppa un&apos;associazione sonno-suzione (<strong className="text-warm-800">associazione seno-sonno</strong>), e il tuo bambino inizierà a richiedere con insistenza il seno per addormentarsi e riaddormentarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questi casi, il risveglio frequente non avviene per fame, ma per abitudine: il bambino non riesce a passare da un ciclo di sonno all&apos;altro senza la suzione. Molti neonati si svegliano ogni 45-90 minuti e richiedono nuovamente la loro abituale associazione di addormentamento.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per interrompere questo ciclo di risvegli notturni frequenti, è quasi sempre necessario <strong className="text-warm-800">eliminare gradualmente l&apos;associazione seno-sonno</strong>.
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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come insegnare al bambino ad addormentarsi da solo senza seno?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            È consigliabile iniziare dal momento dell&apos;addormentamento serale e, se necessario, lavorare gradualmente anche sui risvegli notturni.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come consulente del sonno (e mamma di sette bambini), consiglio di non adottare approcci drastici, ma piuttosto di dare tempo al tuo bambino per adattarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Questi passaggi si sono dimostrati molto efficaci:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-warm-600 mb-6">
            <li>Osserva <strong className="text-warm-800">i ritmi naturali di sonno</strong> del tuo bambino e scopri come supportare il suo bioritmo.</li>
            <li>Assicurati che il tuo bambino segua un <strong className="text-warm-800">ritmo giornaliero stabile</strong> e abbia un orario di nanna <strong className="text-warm-800">adeguato all&apos;età e non troppo tardivo</strong>.</li>
            <li>Introduce una <strong className="text-warm-800">routine serale rilassante</strong> (rituali fissi prima della nanna che facilitino il sonno).</li>
            <li>Aiuta il tuo bambino ad abituarsi gradualmente a nuove <strong className="text-warm-800">abitudini di addormentamento</strong>.</li>
            <li>Impara ad addormentarsi senza seno o suzione. Solo nell&apos;ultimo passo si lavora per ottenere un <strong className="text-warm-800">addormentamento e un sonno autonomo</strong>.</li>
          </ol>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Quali metodi esistono per eliminare l&apos;abitudine di addormentarsi con la suzione?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Esistono diverse strategie per insegnare ai bambini a dormire senza dover succhiare. Personalmente utilizzo <strong className="text-warm-800">5</strong> metodi basati sull&apos;attaccamento, che scelgo in base all&apos;età del bambino, alla sua personalità e allo stile educativo dei genitori. Ora te ne presenterò tre!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            È fondamentale rimanere sempre accanto al proprio bambino per aiutarlo a passare a un sonno più autonomo con dolcezza. Inoltre, è importante assicurarsi che il bambino sia pronto, dal punto di vista dello sviluppo, per ridurre le poppate notturne (di solito tra i 6 e i 9 mesi).
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il metodo del distacco graduale</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con il metodo del distacco graduale, cerchi di ridurre lentamente e con delicatezza l&apos;allattamento al seno per addormentarsi (a partire dai 3-4 mesi circa). Se il tuo bambino si addormenta sempre succhiando, cioè ha il 100% di necessità di suzione per addormentarsi, puoi iniziare riducendo gradualmente questa associazione, staccandolo dal seno al 90% del processo di addormentamento.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Puoi farlo inserendo delicatamente il tuo dito nel suo angolo della bocca per interrompere la suzione. Poi provi a farlo addormentare con altri metodi, come cullarlo, accarezzarlo o cantargli una ninna nanna. Se inizia a piangere forte, riprendi l&apos;allattamento per un momento e riprova dopo poco.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se riesci a ridurre la suzione per addormentarsi al 90%, passa gradualmente all&apos;80%, poi al 70% e così via. <strong className="text-warm-800">L&apos;obiettivo è che il tuo bambino impari gradualmente ad addormentarsi senza il seno in bocca, senza dover piangere.</strong>
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Consigli per i neonati</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per i neonati tra i 2 e i 4 mesi, è utile abituarli occasionalmente ad addormentarsi senza il seno, in modo da prevenire questa forte associazione. Prova a introdurre alternative fin dall&apos;inizio, in modo che il tuo bambino non si abitui esclusivamente a un unico metodo per addormentarsi.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il Metodo PAL</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un altro metodo con cui ho avuto esperienze eccellenti (soprattutto per bambini tra i 4 e gli 8 mesi) è il <strong className="text-warm-800">Metodo PAL – &quot;Pianto Abbracciato con Amore&quot;</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il Metodo PAL non è un vero e proprio metodo di &quot;training del sonno&quot;, ma può aiutare notevolmente a migliorare il sonno del bambino e la sua capacità di dormire per periodi più lunghi. Si basa sul lavoro della psicologa dello sviluppo Dr. Aletha J. Solter.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In poche parole, il Metodo PAL significa che smetti di provare a distrarre o calmare il tuo bambino per farlo addormentare. Invece, lo tieni tra le braccia, permettendogli di esprimere i suoi sentimenti attraverso il pianto, di liberare lo stress e di rilassarsi completamente. Questo spesso porta automaticamente a un sonno migliore e più prolungato.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il Metodo PAL è particolarmente adatto ai bambini di quattro mesi o più che dormono in modo irrequieto o che richiedono il seno o la suzione costante per calmarsi. Molti genitori lo considerano un&apos;alternativa delicata e praticabile ai metodi tradizionali di &quot;sleep training&quot;.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il Metodo della Sedia</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un&apos;ultima tecnica di sleep coaching, particolarmente adatta ai bambini più grandi, attivi e/o dal carattere deciso (a partire dai 6 mesi), è il <strong className="text-warm-800">Metodo della Sedia</strong>. Con questo metodo, il tuo bambino impara fin dall&apos;inizio ad addormentarsi nel suo spazio, solitamente una culla o un lettino con sbarre, senza dipendere dal seno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Uno dei genitori si siede accanto al lettino su una sedia e accompagna il bambino con il contatto fisico e poi, progressivamente, solo con la voce. Nel giro di circa due settimane, il bambino impara ad addormentarsi autonomamente nel suo letto.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con affetto,<br />
            <strong>Sarah</strong>
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi scoprire ulteriori dettagli e strategie?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Iscriviti al corso gratuito sul sonno del bambino e scopri come aiutare il tuo bambino ad addormentarsi senza il seno in modo dolce e rispettoso.
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
