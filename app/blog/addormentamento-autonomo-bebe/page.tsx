import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Addormentamento Autonomo del Bebè: Guida Completa | Il Regno della Nanna',
  description: 'Come aiutare il tuo bambino ad addormentarsi da solo — senza pianti e nel rispetto del legame. Consigli pratici di una consulente del sonno infantile e mamma di sette bambini.',
}

export default function AddormentamentoAutonomoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Addormentamento Autonomo
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              A partire da quando e come può il mio bambino addormentarsi da solo?
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
                <span>12 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/addormentamento-autonomo-bebe.webp"
                alt="Addormentamento autonomo del bebè"
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
            Sei esausta, il tuo bambino piange e farlo addormentare sembra un&apos;impresa impossibile?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Forse in questo momento l&apos;idea che il tuo bambino possa addormentarsi da solo ti sembra irraggiungibile. E credimi, so bene come ci si sente. Ore di dondolio, allattamenti infiniti, lunghe camminate in braccio – tutto questo può toglierti il sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ma c&apos;è speranza! Come mamma di sei bambini ed esperta del sonno infantile, ho studiato a fondo questo argomento. Il risultato è questo articolo, in cui troverai consigli e strategie collaudate che possono aiutare il tuo bambino a imparare ad addormentarsi autonomamente. Rendi il momento della nanna più sereno e aiuta il tuo piccolo a ottenere il sonno di cui ha bisogno.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Perché il mio bambino dovrebbe imparare ad addormentarsi da solo?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Diciamolo chiaramente: se la vostra situazione vi soddisfa e tutti dormite a sufficienza, non c&apos;è alcun bisogno di cambiare nulla, indipendentemente da ciò che dicono gli altri!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Dalla mia esperienza, però, ci sono diverse situazioni in cui può essere utile insegnare al bambino ad addormentarsi in autonomia:
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Dire addio alle lotte serali e ritrovare l&apos;armonia familiare</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come descritto sopra, il momento della nanna è molto difficile ed è caratterizzato da lunghe battaglie o da un&apos;eccessiva dipendenza dalla presenza dei genitori. Spesso, anche la relazione di coppia ne risente, perché il tempo per stare insieme la sera diventa inesistente. Inoltre, i fratelli e le sorelle possono sentirsi trascurati. Per il benessere della famiglia, la salute di tutti e per serate più tranquille, può quindi essere utile affrontare il problema dell&apos;addormentamento.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Interrompere i risvegli notturni continui</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            A volte i bambini si addormentano abbastanza facilmente grazie all&apos;allattamento o al dondolio. Tuttavia, molte mamme soffrono perché i loro piccoli si svegliano ogni 1-2 ore e non riescono a riaddormentarsi da soli. E così il ciclo ricomincia da capo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questi casi, il sonno frammentato porta a una costante privazione del sonno, con conseguenze che possono arrivare fino alla depressione materna. È comprensibile che i genitori desiderino cambiare le abitudini di addormentamento e riaddormentamento del loro bambino, dato che questi due aspetti sono spesso strettamente collegati.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Favorire l&apos;autonomia del bambino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Forse il tuo bambino è già abbastanza grande e desideri che impari finalmente ad addormentarsi senza il tuo aiuto. Il desiderio di maggiore indipendenza spesso si lega all&apos;imminente inserimento al nido, al ritorno al lavoro della mamma, alla necessità di serate libere per i genitori o all&apos;idea che il bambino possa passare la notte dai nonni. Tutte ragioni valide per iniziare a praticare l&apos;addormentamento in un ambiente familiare.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">4. Creare fin da subito abitudini di sonno salutari</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Alcune mamme, magari per esperienze difficili avute con fratelli maggiori, desiderano stabilire fin da subito abitudini di sonno sane e funzionali. L&apos;obiettivo è creare le basi per un buon riposo e prevenire problemi futuri. Tra queste abitudini, l&apos;addormentamento autonomo occupa (giustamente) un posto di primo piano.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Imparare ad addormentarsi da soli porta diversi vantaggi, tra cui:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Fine delle battaglie serali per addormentarsi</li>
            <li>Tempi di addormentamento e riaddormentamento più rapidi</li>
            <li>Serate libere e un miglior equilibrio di coppia</li>
            <li>Notti più tranquille, con meno risvegli</li>
            <li>Facilità nel dormire anche in ambienti nuovi o insoliti (asilo nido, casa dei nonni, vacanze)</li>
            <li>Sonno più profondo e riposante anche in periodi di malattia, scatti di crescita, dentizione o regressioni del sonno</li>
            <li>Maggiore possibilità di soddisfare il reale bisogno di sonno del bambino</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Un sonno adeguato è fondamentale</strong> per un sistema immunitario sano (sia per la mamma che per il bambino), migliora la concentrazione e la capacità di apprendimento e riduce aggressività, capricci e crisi serali.
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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">A partire da quando il mio bambino può imparare ad addormentarsi da solo?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quando è il momento giusto per insegnare o favorire l&apos;addormentamento autonomo? In breve, non esiste un &quot;momento perfetto&quot;. Ogni bambino è diverso nel modo e nel momento in cui inizia a padroneggiare questa abilità. Il tutto dipende dalla sua personalità, dalla maturazione cerebrale e anche dal comportamento dei genitori. Ci sono neonati che riescono ad addormentarsi tranquillamente nel loro lettino già a 2 mesi (un&apos;eccezione, ma succede) e bambini di 5 anni che ancora richiedono un supporto costante per addormentarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Studi suggeriscono che i bambini che <strong className="text-warm-800">vengono abituati precocemente ad addormentarsi nel loro lettino</strong> (non tramite metodi forzati, ma con un allenamento dolce e graduale) possono mostrare progressi significativi già a partire dai 2-3 mesi. Molti esperti del sonno consigliano di iniziare a lavorare dolcemente su questa abilità intorno alle 8 settimane.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nei paesi anglofoni, la finestra temporale consigliata per un percorso di miglioramento del sonno (incluso l&apos;addormentamento autonomo) è compresa tra i 4 e i 7 mesi. In questa fascia d&apos;età, le abitudini del sonno non sono ancora troppo consolidate e generalmente i bambini oppongono meno resistenza rispetto a fasi successive.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le consulenti del sonno più orientate a un approccio dolce tendono a spostare questa soglia più avanti, <strong className="text-warm-800">intorno ai 6 mesi</strong>. Personalmente condivido questa visione e ritengo che l&apos;età ideale per avviare un percorso di autonomia nel sonno sia <strong className="text-warm-800">tra i 6 e i 7 mesi</strong>. Studi indicano che intorno ai 5,5-6 mesi il bambino sviluppa le capacità cognitive necessarie per apprendere l&apos;autoregolazione emotiva, un aspetto chiave per riuscire ad addormentarsi in autonomia.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per i neonati sotto i 6 mesi: è consigliabile esercitarsi almeno una volta al giorno con l&apos;addormentamento in posizione supina (sulla schiena), che è la posizione più sicura e raccomandata per dormire.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Non esiste quindi una regola d&apos;oro per stabilire il momento perfetto. <strong className="text-warm-800">Il momento giusto è quando voi, come genitori, sentite di essere pronti e decisi a modificare in modo amorevole ma coerente le condizioni di addormentamento del vostro bambino.</strong>
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come posso aiutare il mio bambino ad addormentarsi da solo?</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Tenere un diario del sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per individuare schemi e abitudini specifiche del sonno del tuo bambino, può essere utile tenere un diario per almeno 4-7 giorni. Annota orari di sonno e veglia, modalità di addormentamento e momenti di pianto. A volte emergono schemi chiari – ad esempio, un bambino che piange molto prima di dormire potrebbe essere sovrastimolato o avere una finestra di veglia troppo lunga.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Stabilire un orario fisso e anticipato per la nanna</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un orario di messa a letto coerente è fondamentale. Ti consiglio di scegliere un compromesso tra le abitudini attuali del tuo bambino e l&apos;orario ideale, che (dai 4 mesi in su) dovrebbe essere tra le 19:00 e le 20:00. Anticipare la nanna può risolvere diversi problemi di sonno, ridurre il nervosismo serale e persino prevenire risvegli precoci al mattino!
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Controllare l&apos;ambiente di sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il lettino e lo spazio in cui dorme il tuo bambino devono essere accoglienti, ma soprattutto sicuri. Ciò significa che il bambino dovrebbe dormire sempre sulla schiena, su un materasso rigido e senza cuscini, coperte, peluche grandi o paracolpi spessi. L&apos;uso del sacco nanna è un&apos;ottima soluzione: non solo è più sicuro, ma garantisce che il bambino resti sempre coperto durante la notte.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Infine, è importante che la stanza sia il più buia possibile. I primi raggi di sole al mattino, soprattutto in estate, possono disturbare il sonno e causare risvegli precoci.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">4. Valutare il fabbisogno di sonno e la routine giornaliera</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quanto dorme il tuo bambino durante il giorno e la notte? È fondamentale verificare quante ore di sonno siano appropriate per la sua età e quanto sonno gli stai effettivamente offrendo.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">5. Creare una routine serale coerente</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Una routine della nanna tranquilla e prevedibile è uno degli elementi chiave per favorire l&apos;addormentamento autonomo. Se il bambino vive ogni sera la stessa sequenza di azioni e rituali, il suo corpo e il suo cervello inizieranno a prepararsi automaticamente al sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche prima dei pisolini diurni, è utile seguire una piccola routine fissa che segnali l&apos;arrivo del momento del riposo.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">6. Analizzare le attuali abitudini di sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Può sembrare ovvio, ma è importante fermarsi a riflettere su come il tuo bambino si addormenta attualmente: si addormenta sempre succhiando (seno o ciuccio)? Dorme solo nel lettone? Come avviene l&apos;addormentamento di giorno, di sera e durante la notte? Conosce già il suo lettino e la sua cameretta?
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">7. Introdurre cambiamenti graduali</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Qual è il vostro obiettivo? Il bambino dovrebbe dormire nel suo lettino in cameretta, ma finora ha dormito solo con voi? Allora è meglio introdurre dei cambiamenti graduali prima di iniziare un vero e proprio percorso di addormentamento autonomo. Un&apos;opzione utile è dormire accanto al lettino del bambino per 2-3 notti, così da aiutarlo a familiarizzare con il nuovo ambiente.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Qual è il momento giusto per mettere a nanna il bambino?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Puoi facilitare moltissimo l&apos;addormentamento del tuo bambino se lo metti a dormire nel giusto &quot;finestra di sonno&quot; per la sua età. Quando un bambino è stanco ma non troppo esausto, ha maggiori probabilità di addormentarsi senza pianti o agitazione.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Per trovare il momento giusto, è utile combinare due strategie:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Osservare l&apos;orologio:</strong> Quali sono le finestre di veglia adeguate alla sua età? Cerca di rispettare questi tempi, adattandoli in base al momento della giornata e alla durata dell&apos;ultimo pisolino.</li>
            <li><strong className="text-warm-800">Osservare i segnali di sonno:</strong> Qual è il suo bisogno di sonno individuale? Mostra già segni di stanchezza o sembra improvvisamente più agitato e iperattivo?</li>
          </ol>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Segnali di sonno nel neonato e nel bambino piccolo</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ecco alcuni segnali che indicano che il tuo bambino è stanco:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Si strofina gli occhi</li>
            <li>Diventa più lento nei movimenti</li>
            <li>Perde interesse per le persone e i giocattoli</li>
            <li>Fissa il vuoto</li>
            <li>Ha lo sguardo lucido</li>
            <li>Si succhia il pollice (se ha questa abitudine)</li>
            <li>Diventa irritabile, agitato e si muove in continuazione</li>
            <li>Sbadiglia</li>
            <li>Si tocca o tira le orecchie</li>
            <li>Gira la testa di lato</li>
            <li>Chiede di succhiare (seno, ciuccio) anche se non ha fame</li>
            <li>Cerca il suo peluche preferito (nei bambini più grandi)</li>
          </ul>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come può il mio bambino imparare ad addormentarsi da solo?</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il modo migliore per favorire l&apos;addormentamento autonomo è prepararlo adeguatamente e metterlo a letto quando è <strong className="text-warm-800">sonnolento ma ancora sveglio</strong>. Ciò significa che il bambino è rilassato e assonnato, ma abbastanza cosciente da rendersi conto di essere stato messo nel lettino.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Soddisfare i bisogni primari</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Prima di iniziare, assicurati che il tuo bambino abbia mangiato a sufficienza, abbia il pannolino pulito e che la stanza sia buia e tranquilla.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Preparazione: pigiamino e sacco nanna</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            A seconda dell&apos;età, avvolgi il tuo bambino in un panno (swaddling) o mettilo nel sacco nanna. L&apos;importante è seguire sempre gli stessi segnali che indicano &quot;Ora è ora di dormire&quot;.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Momento di contatto e rilassamento</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questa fase, introduci i vostri rituali di addormentamento. Ad esempio, puoi dedicare qualche minuto al massaggio del bambino, guardare insieme uno o due libretti, o semplicemente fare una passeggiata per casa salutando i peluche. Questo aiuta a creare un momento di connessione e a rilassarlo completamente.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">4. Stanza buia e musica rilassante</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Porta il tuo bambino nella sua cameretta o nello spazio in cui dorme abitualmente. Cantagli sempre la stessa ninna nanna o fai partire una melodia rilassante. Il riconoscimento di questi segnali ripetitivi aiuta il cervello del bambino ad associare il suono al momento di dormire.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">5. Mettere il bambino a letto quando è &quot;assonnato ma sveglio&quot;</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Quando il tuo bambino è molto assonnato ma ancora sveglio, mettilo delicatamente nel suo lettino e aiutalo a rilassarsi lì. Se necessario, puoi inizialmente cullare leggermente la culla o appoggiare delicatamente la mano su di lui per rassicurarlo.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Obiettivo:</strong> Con il passare dei giorni, cerca di metterlo a letto in uno stato di veglia sempre più attento, in modo che impari gradualmente ad addormentarsi in autonomia.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">6. Addormentarsi sdraiato nel lettino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Il vero obiettivo finale è che il bambino impari ad addormentarsi autonomamente, sdraiato nel suo lettino.</strong> Come sempre, ogni bambino è diverso, e potrebbe essere necessario sperimentare un po&apos; per capire quale strategia funziona meglio per lui.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">La chiave è la pratica costante</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Il tuo bambino ha meno di 4-6 mesi?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se vuoi incoraggiare fin da subito abitudini di addormentamento autonome, il consiglio migliore è iniziare già dalla 6ª-8ª settimana e insegnare dolcemente al tuo bambino che può addormentarsi anche sdraiato. Alcuni giorni funzionerà, altri no – ed è perfettamente normale!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Costanza e pazienza sono la chiave del successo.</strong>
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Il tuo bambino ha più di sei mesi?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molti bambini dormono troppo poco e possono trarre grande beneficio da un&apos;anticipazione dell&apos;orario della nanna e da finestre di veglia più brevi durante il giorno. Se il tuo bambino ha più di 6 mesi e le difficoltà con il sonno persistono, è importante adottare un metodo chiaro e un piano d&apos;azione preciso per aiutarlo a imparare a dormire.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ti auguro tanto successo e, soprattutto, <strong className="text-warm-800">notti serene per tutta la famiglia!</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un abbraccio,<br />
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
