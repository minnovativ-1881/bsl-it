import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Il Bambino Piange al Momento della Nanna: Cosa Fare | Il Regno della Nanna',
  description: 'Piangere prima di dormire è normale, ma estenuante. Ecco le cause più comuni e le strategie più dolci per aiutare il tuo bambino a rilassarsi e addormentarsi.',
}

export default function BambinoPiangeNannaPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Pianto e Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Il tuo bambino piange prima di addormentarsi? Ecco come aiutarlo!
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
                <span>11 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bambino-piange-nanna.webp"
                alt="Bambino piange prima della nanna"
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
            Oh, posso immaginare benissimo come ti senti in questo momento. Il tuo bambino piange e piange prima di dormire. Sei stressata e frustrata dal rituale della nanna e non sai più cosa fare?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sono felice che tu sia qui. Mi chiamo Sarah, sono mamma di sette bambini e consulente certificata del sonno infantile. E non ho scelto questo lavoro per caso. Qualche anno fa, anch&apos;io mi sentivo spesso sopraffatta dalla situazione del sonno dei miei bambini. E sì, anche per me non era raro che il mio piccolo piangesse prima di addormentarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo articolo scoprirai <strong className="text-warm-800">perché il tuo bambino piange ogni volta prima di dormire, cosa puoi fare per aiutarlo e a quali situazioni particolari dovresti prestare attenzione</strong>.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Perché il tuo bambino piange prima di addormentarsi?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le ragioni per cui il tuo bambino piange quando è ora di dormire possono essere molteplici. La prima cosa da fare è <strong className="text-warm-800">escludere cause più serie</strong>. Il tuo piccolo dovrebbe essere <strong className="text-warm-800">in salute, mangiare bene e crescere normalmente</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <em>(Se hai dubbi su questi aspetti, parla con la tua ostetrica o con il pediatra. Le mamme hanno sempre un ottimo istinto quando qualcosa non va!)</em>
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Disagio fisico</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il pianto è l&apos;unico modo in cui il tuo bambino può comunicarti che qualcosa non va. Prima di tutto, controlla se il tuo piccolo <strong className="text-warm-800">ha fame, sete o il pannolino bagnato</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche la <strong className="text-warm-800">temperatura</strong> può essere un fattore importante: forse sente troppo caldo o troppo freddo. Un&apos;altra possibile causa sono <strong className="text-warm-800">le coliche e i problemi digestivi</strong>, soprattutto nei primi mesi di vita.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Dentizione</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            A seconda dell&apos;età del tuo bambino, i dentini potrebbero essere la causa principale del disagio. Di solito, i primi dentini spuntano tra i <strong className="text-warm-800">6 e gli 8 mesi</strong>, ma alcuni bambini iniziano già <strong className="text-warm-800">a 4 mesi</strong>, mentre altri aspettano fino al <strong className="text-warm-800">12° mese</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Oltre alla febbre leggera e al dolore, ci sono altri segnali che possono indicare la dentizione:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Mordere spesso la mano o altri oggetti</li>
            <li>Maggiore irrequietezza e pianto</li>
            <li>Aumento della salivazione</li>
            <li>Maggiore bisogno di contatto e coccole</li>
          </ul>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Stanchezza eccessiva</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il tuo bambino piange prima di addormentarsi? Forse perché è <strong className="text-warm-800">troppo stanco!</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche se può sembrare controintuitivo, la stanchezza eccessiva è una delle cause più comuni del pianto prima della nanna. Se il tuo bambino si <strong className="text-warm-800">strofina spesso gli occhi, sbadiglia o cerca con insistenza il seno</strong>, significa che è molto stanco – forse anche troppo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            È fondamentale <strong className="text-warm-800">iniziare la routine della nanna un po&apos; prima</strong>, in modo da <strong className="text-warm-800">evitare che il tuo bambino arrivi troppo stanco al momento di dormire</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Controlla il suo fabbisogno di sonno</strong> in base all&apos;età.</li>
            <li><strong className="text-warm-800">Pianifica una routine giornaliera regolare</strong> con pisolini adeguati.</li>
            <li><strong className="text-warm-800">Regola i tempi di veglia</strong> per evitare il sovraffaticamento.</li>
            <li><strong className="text-warm-800">Stabilisci orari ottimali per la nanna</strong> e crea rituali rilassanti.</li>
          </ul>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">4. Sovrastimolazione</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Forse il tuo bambino piange prima di dormire perché è <strong className="text-warm-800">troppo stimolato dagli eventi della giornata</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La sovrastimolazione non è causata solo dai rumori o dalla confusione. Anche odori forti, troppi stimoli visivi o il contatto con persone diverse possono risultare eccessivi per un neonato.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per ridurre la sovrastimolazione è utile:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Creare un ambiente tranquillo e rilassante</strong> prima della nanna.</li>
            <li><strong className="text-warm-800">Stare vicini alla mamma</strong> e ridurre i contatti con estranei nelle ore serali.</li>
            <li><strong className="text-warm-800">Diminuire la luce e i rumori forti</strong>.</li>
            <li><strong className="text-warm-800">Usare rumori bianchi o suoni rilassanti</strong> per favorire il sonno.</li>
            <li><strong className="text-warm-800">Provare a fasciare il bambino</strong> per dargli una sensazione di sicurezza.</li>
          </ul>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">5. La personalità del tuo bambino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ogni bambino è unico e ha <strong className="text-warm-800">bisogni individuali e un carattere distintivo</strong>. Fin dai primi mesi, il tuo bambino inizierà a mostrare la sua personalità. Alcuni neonati trovano facilmente un <strong className="text-warm-800">ritmo sonno-veglia</strong>, mentre altri faticano di più ad addormentarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Una buona <strong className="text-warm-800">routine della nanna</strong>, creata su misura per il suo temperamento, può fare davvero la differenza.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">6. Scatto di crescita e regressione del sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le regressioni del sonno più intense si verificano intorno <strong className="text-warm-800">al 4° mese, al 9° mese e di nuovo al 18° mese</strong>. In queste fasi, il tuo bambino compie enormi passi nello sviluppo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            A volte, in queste settimane, <strong className="text-warm-800">l&apos;unica cosa da fare è resistere e stare vicino al tuo bambino</strong>, che sta affrontando nuove sfide fisiche, emotive e cognitive.
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

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">7. Elaborazione della nascita o di altri eventi significativi</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Forse il tuo bambino piange prima di addormentarsi perché sta <strong className="text-warm-800">elaborando esperienze intense</strong>. Il passaggio dal grembo materno, un ambiente sicuro e ovattato, alla vita esterna può essere un processo impegnativo.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Il pianto come strumento per elaborare le emozioni</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            La psicologa dello sviluppo <strong className="text-warm-800">Dr. Aletha J. Solter</strong> ha una visione molto interessante sul pianto dei neonati. Secondo lei, <strong className="text-warm-800">il pianto è un modo naturale attraverso cui il bambino elabora cambiamenti e emozioni profonde</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per questo, secondo la Dr. Solter, <strong className="text-warm-800">non dovremmo cercare di interrompere il pianto</strong> con distrazioni, ma al contrario accompagnare il nostro bambino <strong className="text-warm-800">con contatto fisico e parole rassicuranti</strong>.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Cosa fare se il tuo bambino piange prima di dormire?</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Calmare il bambino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ecco alcune strategie efficaci per aiutarlo a rilassarsi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Parlare con voce dolce</strong> e rassicurante.</li>
            <li><strong className="text-warm-800">Offrire contatto fisico</strong>, come abbracci o carezze.</li>
            <li><strong className="text-warm-800">Cantare una ninna nanna</strong> o usare suoni rilassanti.</li>
            <li><strong className="text-warm-800">Cambiare il pannolino e massaggiarlo dolcemente</strong>, se necessario.</li>
            <li><strong className="text-warm-800">Fasciarlo</strong>, se gli piace sentirsi avvolto in un tessuto morbido e sicuro.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molti neonati si calmano con l&apos;allattamento o il ciuccio. Tuttavia, se il bambino associa il seno esclusivamente all&apos;addormentamento, potrebbe richiederlo anche più volte durante la notte.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Distrarre il bambino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            A volte, come per noi adulti, <strong className="text-warm-800">un cambio di ambiente aiuta a spezzare il momento di tensione</strong>. Cambiare stanza o fare una passeggiata spesso hanno un effetto calmante sia per il bambino che per i genitori.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Prevenire il pianto prima della nanna</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Uno dei motivi principali per cui i bambini piangono prima di dormire è <strong className="text-warm-800">l&apos;eccessiva stanchezza</strong>. Ecco alcune strategie per evitarlo:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Mettilo a letto prima che sia troppo stanco</strong>. Anche 15 minuti in anticipo possono fare la differenza.</li>
            <li><strong className="text-warm-800">Crea una routine giornaliera regolare</strong>, con tempi di veglia e sonnellini ben organizzati.</li>
            <li><strong className="text-warm-800">Inizia la routine della nanna in anticipo</strong>, per evitare che il tuo bambino arrivi al momento del sonno già agitato.</li>
          </ul>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">4. Accompagnare il bambino con pazienza</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            I bambini percepiscono subito le emozioni dei genitori. Se siamo stressati o tesi, anche loro lo sentono e possono reagire con maggiore agitazione. <strong className="text-warm-800">Se possibile, cerca di rimanere calma e rassicurante.</strong>
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">5. Prenditi una pausa, se necessario</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se senti di non farcela più, <strong className="text-warm-800">prenditi qualche minuto per te stessa</strong>. Se il tuo bambino è al sicuro nel lettino, esci dalla stanza per qualche minuto e fai un respiro profondo. Ricorda: <strong className="text-warm-800">per il tuo bambino è importante che tu sia il più serena possibile</strong>.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Tre cose da NON fare</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Essere troppo frenetici</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Evita troppi cambiamenti e stimoli. Se provi <strong className="text-warm-800">troppe tecniche diverse</strong> in modo frenetico, rischi di agitare ancora di più il tuo bambino, anziché calmarlo. Meno è meglio.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Mai scuotere il bambino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per quanto il pianto continuo possa essere stressante e sfiancante, <strong className="text-warm-800">non scuotere mai il tuo bambino</strong> per calmarlo. Scuotere un neonato può causare <strong className="text-warm-800">traumi, lesioni cerebrali gravi o addirittura la morte</strong>. Se senti di essere arrivata al limite, prenditi una pausa.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Perdere la fiducia in te stessa</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Può essere scoraggiante provare di tutto senza ottenere risultati immediati. <strong className="text-warm-800">Ma non è colpa tua!</strong> Il pianto del tuo bambino non significa che stai sbagliando qualcosa. Prova a vedere questa fase come un processo in cui impari a capire ancora meglio il tuo bambino.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ti mando un grande incoraggiamento per questi momenti impegnativi. <strong className="text-warm-800">Ce la farai!</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con affetto,<br />
            <strong>Sarah</strong>
          </p>

          {/* CTA Box 2 */}
          <div className="my-10 bg-blush-50 border border-blush-200 rounded-3xl p-8 text-center">
            <p className="text-warm-700 font-semibold mb-2">Vuoi migliorare il sonno del tuo bambino passo dopo passo?</p>
            <p className="text-warm-600 mb-5 leading-relaxed">
              Nel mio corso gratuito via e-mail troverai metodi dolci e rispettosi del legame con il tuo bambino,
              adattabili alla vostra situazione familiare.
            </p>
            <Link
              href="/gratis"
              className="inline-block bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Sì! Voglio il corso gratuito
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10 mb-4">FAQ – Domande frequenti</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">È normale che il mio bambino pianga ogni volta prima del pisolino o della nanna?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Un po&apos; di protesta prima di dormire è comune, soprattutto nei neonati e nei bambini piccoli. Tuttavia, se il pianto è intenso e si ripete costantemente, vale la pena indagarne la causa. Spesso si tratta di stanchezza eccessiva, sovrastimolazione o una finestra di veglia troppo lunga — tutti aspetti su cui si può intervenire.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Come riconosco se il mio bambino piange perché è troppo stanco?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">I segnali tipici di stanchezza eccessiva includono: sfregamento degli occhi, sbadigli frequenti, irritabilità improvvisa, iperattività paradossale, e richiesta insistente del seno anche senza fame. Se questi segnali precedono il pianto, la finestra di veglia è probabilmente troppo lunga per la sua età.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Cosa non devo fare quando il mio bambino piange prima di dormire?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Evita di provare troppe tecniche diverse in modo frenetico — questo può agitare ancora di più il bambino. Non scuotere mai il bambino per calmarlo, poiché può causare gravi danni fisici. E non perdere la fiducia in te stessa: il pianto del bambino non significa che stai sbagliando qualcosa.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Perché il mio bambino piange di più la sera? È normale?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Sì, il cosiddetto &quot;pianto serale&quot; è molto comune, soprattutto nei primi 3-4 mesi. Il bambino ha accumulato stimoli per tutto il giorno ed ha bisogno di scaricarli. In molti casi, anticipare la routine serale di 15-30 minuti riduce significativamente questi momenti di agitazione.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Dopo quanto tempo migliorerà la situazione del pianto pre-nanna?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Con cambiamenti coerenti — come rispettare le finestre di veglia, creare una routine serale e anticipare la nanna — molti genitori notano un miglioramento già dopo 1-2 settimane. Alcune fasi di regressione (come intorno ai 4 mesi) possono temporaneamente peggiorare la situazione, ma si tratta di periodi passeggeri.</p>

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
