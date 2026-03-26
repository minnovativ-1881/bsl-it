import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Il Metodo PAL: Pianto Abbracciato con Amore | Il Regno della Nanna',
  description: 'Un metodo delicato basato sul lavoro della Dr. Aletha Solter. Come funziona il Metodo PAL, quando usarlo e perché può trasformare il sonno del tuo bambino.',
}

export default function MetodoPalPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Metodi del Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Metodo PAL: Un aiuto dolce per il sonno del neonato
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
                <span>6 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/metodo-pal.webp"
                alt="Metodo PAL - Pianto Abbracciato con Amore"
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
            Molti genitori si chiedono come aiutare il proprio bambino o neonato a sviluppare sane abitudini di sonno. E come possono i bambini imparare ad addormentarsi e dormire in modo autonomo nel modo più dolce possibile?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un&apos;ottima possibilità potrebbe essere il <strong className="text-warm-800">Metodo PAL</strong> (<em>&quot;Pianto Abbracciato con Amore&quot;</em>).
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il Metodo PAL non è una vera e propria tecnica di &quot;addestramento al sonno&quot;. Tuttavia, può essere di grande aiuto per ottenere risultati positivi nel miglioramento del sonno e nella riduzione dei risvegli notturni. Il nome e l&apos;approccio sono il frutto della mia personale evoluzione basata su principi di terapia dell&apos;attaccamento e psicologia dello sviluppo, applicati ai problemi di sonno nei neonati e nei bambini piccoli.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Metodo PAL come tecnica di apprendimento del sonno</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il <em>&quot;Pianto Abbracciato con Amore&quot;</em> è uno dei metodi di apprendimento del sonno più orientati al legame affettivo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Si basa sugli studi della psicologa dello sviluppo <strong className="text-warm-800">Dr. Aletha J. Solter</strong>, fondatrice del movimento <em>Aware Parenting</em>, strettamente legato al concetto di <em>Attachment Parenting</em>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In sintesi, il Metodo PAL prevede di interrompere completamente tutte le strategie di distrazione e calmanti per far addormentare il bambino. Invece, il bambino viene tenuto tranquillamente tra le braccia del genitore, permettendogli di esprimere con le lacrime ciò che ha &quot;sul cuore&quot; e di liberarsi dal suo disagio piangendo. Questo processo porta spesso automaticamente a un sonno più tranquillo e prolungato.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Approfondimenti dalla psicologia dello sviluppo</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ecco alcuni estratti dall&apos;articolo della Dr. Aletha Solter, che ho tradotto personalmente:
          </p>
          <blockquote className="border-l-4 border-blush-300 pl-6 my-6 text-warm-600 italic leading-relaxed">
            <p className="mb-4">&quot;Per comprendere il funzionamento del metodo &apos;Pianto Abbracciato&apos;, è necessario capire perché i neonati piangono. <strong className="text-warm-800 not-italic">Il pianto ha due funzioni fondamentali: comunicazione e guarigione</strong>. Tutti sanno che i neonati piangono per comunicare bisogni primari come fame, freddo o il desiderio di essere tenuti in braccio. Tuttavia, la funzione terapeutica del pianto è meno conosciuta. A volte i bambini piangono per liberarsi dallo stress o da un trauma, anche quando tutti i loro bisogni immediati sono stati soddisfatti.</p>
            <p className="mb-4">Studi dimostrano che i neonati di tutte le culture piangono senza una causa apparente e che questo pianto raggiunge il picco intorno alla sesta settimana di vita.</p>
            <p><strong className="text-warm-800 not-italic">Questo pianto liberatorio è un processo normale e benefico di guarigione, e non aiutiamo affatto i neonati cercando di fermarlo.</strong> Se lasciati soli a piangere, i neonati sperimentano paura e il loro livello di cortisolo (ormone dello stress) aumenta. Tuttavia, non vi è alcuna evidenza scientifica che dimostri che il pianto tra le braccia amorevoli di un genitore aumenti i livelli di stress del bambino. Al contrario, studi hanno dimostrato che gli ormoni dello stress vengono espulsi attraverso le lacrime e che le persone che hanno pianto liberamente presentano una frequenza cardiaca più bassa, una pressione sanguigna ridotta e un&apos;attività cerebrale più armoniosa.&quot;</p>
          </blockquote>

          <p className="text-warm-600 leading-relaxed mb-4">
            Secondo la Dr. Solter, esistono molteplici ragioni per cui un bambino piange. Lei sostiene che un neonato di oltre 6 mesi che si sveglia più volte durante la notte stia cercando di recuperare il <em>&quot;pianto per il rilascio dello stress&quot;</em> o di raggiungere una guarigione emotiva.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo senso, il <strong className="text-warm-800">Metodo PAL</strong> lavora permettendo questi tentativi di pianto e guarigione senza cercare immediatamente di far addormentare di nuovo il bambino. Inoltre, non vengono offerti automaticamente seno, ciuccio, biberon o dondolio come soluzione e distrazione. Al contrario, il bambino viene tenuto serenamente tra le braccia del genitore, accompagnato con parole di comprensione, e gli viene concesso di liberare le sue lacrime, la sua frustrazione o lo stress accumulato.
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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Esperienze personali</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            In particolare nei neonati che piangono molto in generale o che hanno vissuto parti difficili o gravidanze complesse, si può osservare chiaramente come, grazie al Metodo PAL, riescano a raggiungere un nuovo livello di rilassamento, serenità e un sonno più profondo. Ma anche per tutti gli altri bambini vedo solitamente ottimi risultati.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il Metodo PAL è probabilmente il mio metodo preferito per insegnare il sonno ai bambini piccoli, sia con i miei figli che nel mio lavoro come consulente del sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Oggi si sente spesso dire che l&apos;allattamento al seno o il succhiare siano le risposte corrette a qualsiasi forma di irrequietezza. Così, non di rado sento mamme che percepiscono il loro seno come un <em>&quot;ciuccio&quot;</em>, anche quando il bambino non ha fame e la loro schiena è già dolorante per le continue poppate notturne. Qui interviene il Metodo PAL, che porta un cambiamento amorevole con una vicinanza assoluta e una presenza costante.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Posso davvero affermare che il Metodo PAL e la comprensione del suo funzionamento abbiano cambiato la mia vita. Nella mia attività di consulente del sonno, vedo regolarmente come il Metodo PAL sia uno dei metodi più efficaci per i bambini piccoli, specialmente tra i 4 e i 7 mesi. Per molti genitori, è anche il metodo più facile da applicare con serenità, perché il bambino viene accompagnato in modo estremamente fisico e amorevole.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Purtroppo, questa metodologia è ancora poco conosciuta come approccio nel coaching del sonno o per il miglioramento del sonno. Tuttavia, è interessante notare che spesso viene applicata nella <em>&quot;Prima Assistenza Emotiva&quot;</em>, ovvero nei centri di consulenza per neonati che piangono molto.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Noi di <strong className="text-warm-800">Il Regno della Nanna</strong> ci siamo dati la missione di fornire informazioni sistematiche sul Metodo PAL e di offrire un approccio chiaro e strutturato.
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi scoprire come applicare il Metodo PAL con il tuo bambino?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Per ulteriori informazioni e approfondimenti su come migliorare il sonno del tuo bambino, iscriviti al mio corso e-mail gratuito. Scoprirai anche come abbiamo migliorato le abitudini di sonno di nostra figlia di 6 mesi con il Metodo PAL.
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
