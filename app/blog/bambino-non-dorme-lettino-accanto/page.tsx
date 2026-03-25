import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '"Il Mio Bambino Non Dorme nel Lettino Accanto" – Ecco Cosa Puoi Fare | Il Regno della Nanna',
  description: 'Il tuo bambino non vuole dormire nella culla next to me? Scopri le cause più comuni e 7 consigli pratici per aiutarlo ad addormentarsi serenamente nel suo lettino.',
}

export default function BambinoNonDormeLettinoAccantoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Lettino e Culla Next to Me
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              "Il Mio Bambino Non Dorme nel Lettino Accanto" – Ecco Cosa Puoi Fare
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
                <span>8 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bambino-non-dorme-lettino-accanto.webp"
                alt="Bambino Non Dorme nel Lettino Accanto"
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
            <strong className="text-warm-800">In questo articolo scoprirai:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-8">
            <li>Come abituare il tuo bambino a dormire nella culla next to me.</li>
            <li>Quali sono i motivi più comuni per cui i bambini non vogliono dormire nella culla next to me.</li>
            <li>Come facilitare il sonno nella culla next to me con sette consigli utili.</li>
            <li>Perché la culla next to me offre numerosi vantaggi per genitori e bambino.</li>
          </ul>

          <p className="text-warm-600 leading-relaxed mb-4">
            Le culle next to me sono molto apprezzate. E a ragione. Possono migliorare il sonno di mamma e bambino
            e offrono numerosi vantaggi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tuttavia, ciò che in teoria sembra perfetto, nella pratica può rivelarsi più complicato del previsto.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Mi capita spesso di sentire testimonianze come questa:
          </p>
          <blockquote className="border-l-4 border-blush-300 pl-5 italic text-warm-500 mb-6">
            "Quando provo a mettere il mio piccolo nella sua culla la sera, si sveglia subito e inizia a piangere
            disperato. Addormentarlo può richiedere fino a un'ora! Ma se lo tengo in braccio o lo lascio
            addormentarsi accanto a me nel letto, tutto fila liscio."
            <footer className="text-warm-400 text-sm mt-2 not-italic">— Maja (nome modificato)</footer>
          </blockquote>
          <p className="text-warm-600 leading-relaxed mb-4">
            Cosa puoi fare, quindi, se il tuo bambino non vuole dormire nella culla next to me?
            In questo articolo troverai 7 consigli utili!
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Il Tuo Bambino Non Dorme nella Culla Next to Me – Perché?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Di solito, le cause principali sono due:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-warm-600 mb-6">
            <li>Il tuo bambino non è ancora abituato a dormire separato dalla mamma.</li>
            <li>Il rituale della nanna non favorisce il sonno nella culla next to me.</li>
          </ol>
          <p className="text-warm-600 leading-relaxed mb-4">
            (Naturalmente, potrebbero esserci anche altre cause.)
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">1. Dormire Vicino alla Mamma</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il tuo bambino non vuole dormire nella culla next to me? È comprensibile! Stare con la mamma è molto
            più rassicurante. Per nove mesi, il tuo piccolo ha vissuto nel comfort del pancione, sempre vicino a te.
            È quindi naturale che voglia stare ancora a contatto con la mamma, anche durante il sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per questo motivo, imparare a dormire nel proprio lettino è un processo che va affrontato con dolcezza
            e nei tempi giusti. Alcuni bambini si adattano più facilmente, altri hanno bisogno di più tempo. Ma puoi
            aiutarlo a compiere questo passo con maggiore serenità.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">2. Il Processo dell'Addormentamento</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il modo in cui il tuo bambino si addormenta influisce molto sulla qualità del suo sonno. Si addormenta
            troppo tardi? Si addormenta mentre prende il latte e poi viene spostato? Viene cullato o dondolato
            per addormentarsi?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un principio generale da tenere a mente è: i bambini vogliono continuare a dormire nelle stesse condizioni
            in cui si sono addormentati. Per questo motivo, è importante che aiuti il tuo bambino ad addormentarsi
            in un modo che possa mantenere per tutto il sonno.
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Il Tuo Bambino Non Vuole Dormire nella Culla Next to Me? 7 Consigli</h2>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">1. Un Lettino Caldo e Accogliente</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Forse il tuo bambino fatica a dormire separato da te perché percepisce un cambiamento improvviso.
            Per aiutarlo, puoi <strong>riscaldare leggermente la culla</strong> prima di adagiarlo, ad esempio
            usando una borsa dell'acqua calda.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Perché? Se il tuo bambino si addormenta tra le tue braccia, il contatto con un materasso freddo può
            causare un <strong>cambiamento di temperatura</strong> che lo sveglia. (Ricorda di rimuovere la borsa
            dell'acqua calda prima di adagiare il bambino e verifica che la temperatura non sia eccessiva.)
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche una coperta in pile sotto il lenzuolo può rendere il lettino più caldo e confortevole.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">2. Un Buon Profumo</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molte mamme raccontano che il loro bambino dorme meglio quando il lenzuolo della culla ha assorbito
            il loro odore, dopo averlo tenuto nel proprio letto per alcune notti. Questo perché il piccolo
            riconosce il profumo familiare della mamma.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            I neonati hanno un olfatto molto sviluppato. Alla nascita, non possono ancora vedere bene, ma
            riconoscono il tuo odore. Questo li rassicura e li fa sentire vicini a te.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">3. Un Appoggio Delicato</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il tuo bambino si è addormentato tra le tue braccia, fai attenzione a come lo adagi nella culla
            next to me. Prova a posarlo <strong>prima con i piedini</strong>. Se lo metti giù con la testa per
            prima, potrebbe svegliarsi di soprassalto con la sensazione di cadere.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">4. Il Fasciamento</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Fasciare il neonato può essere un ottimo metodo per favorire un sonno tranquillo e ridurre i risvegli
            improvvisi. Io ho fasciato regolarmente tutti i miei bambini per la nanna e ne ho tratto grande beneficio.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Questo metodo è particolarmente utile se il tuo bambino non si addormenta già nella culla, ma deve
            essere posato dopo essersi addormentato in braccio. Oltre alle fasce tradizionali e ai sacchi per
            fasciare, esistono anche apposite fasce con chiusure regolabili.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">5. Usare la Culla Anche di Giorno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per aiutare il tuo bambino ad abituarsi alla culla next to me, puoi utilizzarla anche durante i
            sonnellini diurni. In particolare, il primo pisolino della giornata è ideale per iniziare questa abitudine.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">6. Un Addormentamento Ottimale</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per favorire il sonno nella culla next to me, è fondamentale curare bene il <strong>momento
            dell'addormentamento</strong>. Ecco alcuni aspetti importanti da considerare:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il tuo bambino deve essere stanco, ma non eccessivamente affaticato.</li>
            <li>Cerca di separare il <strong>sonno dall'allattamento o dal biberon</strong> il prima possibile.</li>
            <li>Introduci una routine serale già dal terzo mese di vita.</li>
            <li>Abitua il tuo bambino ad addormentarsi <strong>nel lettino da sveglio ma assonnato</strong>.</li>
          </ul>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">7. Pazienza e Costanza</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se vuoi modificare le abitudini di sonno del tuo bambino, ti consiglio vivamente di non arrenderti
            al primo tentativo se il piccolo protesta. Ogni cambiamento può essere impegnativo, perché i bambini
            — proprio come gli adulti — amano le loro abitudini. Perciò, sii costante e riprova più volte.
          </p>

          {/* CTA Box */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi sapere come aiutare il tuo bambino ad addormentarsi serenamente?</p>
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

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Domande Importanti sulla Culla Next to Me</h2>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Il Mio Bambino Non Dorme nella Culla Next to Me – Devo Fare Qualcosa?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se la vostra situazione attuale vi soddisfa e sei sicura che il tuo bambino dorma in sicurezza, non
            è obbligatorio passare alla culla next to me. Tuttavia, dietro questa domanda si cela spesso un'altra:
            <em> È meglio per il mio bambino avere sempre il mio calore e la mia vicinanza anche di notte?</em>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La risposta dipende dalla vostra esperienza. Molti genitori arrivano qui proprio perché le loro notti
            <strong> non</strong> sono affatto serene. Non sarebbe meglio usare la notte per dormire e recuperare
            la vicinanza e il calore durante il giorno, con momenti di qualità fatti di gioia e serenità?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            L'esperienza ci insegna che i bambini stanno molto meglio quando si abituano gradualmente a dormire
            in modo più indipendente. E cosa c'è di più bello per un bambino di una mamma felice e riposata?
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Posso Far Dormire il Mio Bambino nel Mio Letto?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            In generale, è possibile. Tuttavia, ci sono due aspetti da considerare:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Il rischio di <strong>SIDS</strong> (morte improvvisa del lattante) è più elevato. È fondamentale che i genitori non fumino, non consumino alcol e che il bambino non possa scivolare sotto le coperte.</li>
            <li>Se la mamma è esausta e soffre di privazione del sonno, la situazione cambia completamente. A un certo punto, può essere necessario valutare un cambiamento.</li>
          </ul>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Perché il Mio Bambino Dorme Bene nella Navicella di Giorno, ma Non nella Culla Next to Me di Notte?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molti genitori raccontano esperienze simili. Il problema non è la culla in sé, ma la differenza tra
            il sonno diurno e quello notturno. Questi due tipi di sonno vengono elaborati in aree diverse del
            cervello e possono funzionare in modo molto diverso. Le cause per cui il bambino non vuole dormire
            nella culla next to me sono quindi le stesse che abbiamo già visto sopra.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Quali Sono i Vantaggi di una Culla Next to Me?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le culle next to me sono molto popolari, e con buone ragioni:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Puoi <strong>allattare facilmente</strong> il tuo bambino durante la notte senza doverti alzare.</li>
            <li>Il tuo piccolo <strong>sente la tua vicinanza</strong>, poiché dorme proprio accanto a te.</li>
            <li>Le culle next to me aiutano il bambino ad abituarsi al <strong>proprio spazio per dormire</strong>.</li>
            <li>Si riduce il rischio che il bambino finisca sotto una coperta, contribuendo a <strong>diminuire il rischio di SIDS</strong>.</li>
            <li>La mamma può godere di più spazio per dormire.</li>
          </ul>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Quando È il Momento di Passare dal Next to Me al Lettino?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quando il tuo bambino diventa troppo grande o troppo pesante per la culla, è il momento di passare
            a un lettino tradizionale. Tuttavia, a seconda della personalità e della sensibilità del bambino,
            potresti scoprire che dorme meglio in un lettino indipendente.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">"Quali Aspetti di Sicurezza Devo Considerare?"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per ridurre il rischio di SIDS e garantire un ambiente sicuro per il sonno del neonato:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>L'<strong>American Academy of Pediatrics (AAP)</strong> raccomanda che i bambini dormano nella stessa stanza dei genitori fino ai 6 mesi di età.</li>
            <li>Rimuovi cuscini, coperte, peluche e paracolpi dal lettino del tuo bambino.</li>
            <li>Assicurati che il materasso sia <strong>fermo e rigido</strong>.</li>
            <li>Evita di fumare in casa.</li>
            <li>Non esporre il tuo bambino agli schermi prima di dormire.</li>
            <li>Non fasciare più il bambino una volta che inizia a girarsi da solo.</li>
          </ul>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi saperne di più su come aiutare il tuo bambino a dormire serenamente?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Nel mio corso gratuito via e-mail troverai consigli pratici e metodi dolci adattabili alla
              vostra situazione familiare.
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
