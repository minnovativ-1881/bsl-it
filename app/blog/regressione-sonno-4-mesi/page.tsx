import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Regressione del Sonno 4 Mesi – Tutto Quello Che Devi Sapere | Il Regno della Nanna',
  description: 'Verso i 4 mesi il sonno del tuo bambino cambia radicalmente. Scopri cosa succede, perché accade e come affrontare la regressione del sonno del 4° mese con serenità.',
}

export default function RegressoneSonno4MesiPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Regressione del Sonno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Regressione del Sonno 4 Mesi – Tutto Quello Che Devi Sapere
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
                <span>10 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/regressione-sonno-4-mesi.webp"
                alt="Regressione del Sonno 4 Mesi"
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
            Verso i 4 mesi, il momento è arrivato: il tuo piccolo tesoro cambia ufficialmente il suo schema di sonno,
            passando dal <em>sonno da neonato</em> a un modello più simile al <em>sonno degli adulti</em>. Una sfida
            enorme per il suo cervello in crescita… E probabilmente te ne sei già accorta: questa trasformazione
            è davvero intensa!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Benvenuta nella regressione del sonno del 4° mese! Qui ti spiegherò a cosa devi prepararti e come
            affrontare questa fase con successo e tanto amore.
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">La Regressione del Sonno del 4° Mese</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sei probabilmente nella stessa situazione di tanti altri genitori in questa fase: all'improvviso il tuo
            bambino dorme peggio, si sveglia più spesso, accorcia drasticamente i suoi sonnellini e appare più
            bisognoso di contatto e irritabile.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nel mio lavoro quotidiano con i genitori (e anche per esperienza personale), posso assicurarti che tra
            i 3 e i 5 mesi molte mamme e papà si trovano ad affrontare problemi di sonno improvvisi con i loro
            bambini. Questo cambiamento nel sonno può portare a una grande stanchezza, soprattutto per le mamme,
            e il tema della privazione del sonno diventa dominante giorno e notte.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Inoltre, i modelli di sonno che si instaurano in questa fase possono persistere per settimane, mesi o addirittura anni.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ma niente panico, <strong className="text-warm-800">non deve per forza essere così!</strong> Ci sono soluzioni
            e strategie che possono aiutarti a superare questa fase senza perderti nel tunnel delle notti insonni!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le regressioni del sonno in altre fasce d'età (come quelle intense degli 8–10 mesi, 11–12 mesi, 18 mesi
            e 2 anni) sono generalmente temporanee.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">La regressione del sonno del 4° mese, invece, porta un cambiamento permanente nel modo in cui il tuo bambino dormirà d'ora in poi.</strong>
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Bambino di 4 Mesi – Sviluppo Mentale e Motorio</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo periodo, il tuo piccolo sta vivendo un incredibile salto di sviluppo, sia a livello cognitivo
            che motorio. Improvvisamente riconosce piccoli eventi e nuove connessioni. Ad esempio, si toglie i calzini
            da solo o butta oggetti a terra per il piacere di sentire il rumore (e mamma o papà li raccolgono ogni
            volta — fantastico!).
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come se non bastasse, inizia a percepirsi come un individuo distinto, potrebbe aver cambiato taglia di
            vestiti e sta diventando sempre più mobile. Magari sta imparando proprio ora a girarsi dalla schiena
            alla pancia!
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Un Nuovo Mondo nel Sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come puoi vedere, intorno ai 4 mesi il tuo bambino ha tantissime cose da elaborare. Oltre a tutto questo,
            tra i 3 e i 5 mesi attraversa una trasformazione radicale e permanente nel suo sonno. Fino a questo
            momento, infatti, il suo sonno era quello tipico di un neonato.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nei primi 3–4 mesi di vita, i neonati trascorrono la maggior parte del loro sonno nella fase di sonno
            profondo. Per questo motivo, spesso è difficile svegliarli e molti di loro riescono a dormire <em>ovunque</em>
            senza problemi. Anche i neonati attraversano fasi di sonno più leggero, ma queste sono molto meno marcate
            rispetto ai bambini più grandi e agli adulti.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ora, con la maturazione del suo cervello, i cicli di sonno del tuo bambino iniziano ad assomigliare
            sempre più a quelli di un adulto. Ed eccoci nel pieno della regressione del sonno del 4° mese!
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Una Tappa Fondamentale</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Come noi adulti, anche il tuo bambino inizia ora ad alternare <strong>fasi di sonno leggero e profondo</strong>,
            che insieme formano un ciclo di sonno completo. In questa fase, un intero ciclo di sonno dura circa 45 minuti.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Tra un ciclo e l'altro, quindi ogni 40–45 minuti, il tuo bambino attraversa delle "micro-risvegli" in cui si sveglia quasi completamente e, in modo inconscio, controlla che tutto sia come prima.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Anche noi adulti lo facciamo: sistemiamo il cuscino, cerchiamo la coperta e controlliamo, quasi senza
            accorgercene, che tutto sia a posto — per poi riaddormentarci subito. Il tuo bambino ora fa esattamente
            la stessa cosa, con una piccola differenza: la parte finale — cioè riaddormentarsi — può diventare
            improvvisamente complicata!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Questa regressione del sonno, che di solito si manifesta attorno ai 4 mesi (ma anche tra i 3 e i 5 mesi
            è considerato normale), è spesso chiaramente percepibile da tutta la famiglia. Purtroppo, si tratta di
            una fase intensa e impegnativa.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tuttavia, questi cambiamenti e le eventuali difficoltà nel sonno sono in realtà un segnale che il tuo
            bambino ha raggiunto <strong className="text-warm-800">un'importante tappa del suo sviluppo</strong> — proprio
            come accade quando impara a gattonare, camminare o parlare!
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

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Cosa Dovresti Sapere sulla Regressione del Sonno del 4° Mese</h2>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Di solito inizia tra i 3,5 e i 4 mesi (ma può variare tra i 3 e i 5 mesi).</li>
            <li>Il bambino inizia ad attraversare diversi cicli di sonno, alternando fasi di sonno leggero e profondo (come gli adulti).</li>
            <li>Il cambiamento nel suo schema di sonno è permanente.</li>
            <li>La regressione del sonno dura solitamente tra 2 e 6 settimane. Se persiste oltre, si può parlare di problemi di sonno a lungo termine.</li>
            <li>Alcuni bambini tornano spontaneamente a dormire bene dopo qualche settimana di notti agitate.</li>
            <li>Altri, invece, faticano a ritrovare un sonno regolare e possono continuare a svegliarsi frequentemente per settimane, mesi o addirittura anni.</li>
          </ul>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Come Influisce la Regressione del 4° Mese sul Sonno?</h2>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Molti bambini iniziano a svegliarsi molto più spesso durante la notte.</li>
            <li>Il tuo bambino potrebbe saltare i pisolini o ridurne drasticamente la durata.</li>
            <li>Addormentarsi e calmarsi diventa improvvisamente più difficile.</li>
            <li>Cambiamenti nell'alimentazione: il tuo bambino potrebbe avere più fame del solito. Ora ha bisogno di più calorie per sostenere la sua crescita.</li>
            <li>Maggiore irritabilità e pianti: il tuo piccolo si calma con difficoltà ed è spesso nervoso.</li>
            <li>Maggiore bisogno di contatto: il bambino cerca più spesso mamma e papà, vuole più attenzioni, coccole e tempo in braccio.</li>
          </ul>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">Sonno del Bambino a 4 Mesi</h3>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>All'inizio della notte, scivola rapidamente nel sonno profondo, ma dopo 45–50 minuti può svegliarsi parzialmente.</li>
            <li>Se supera con successo questo primo ciclo di sonno, le ore successive sono spesso di sonno profondo.</li>
            <li>Successivamente, le fasi di sonno leggero e profondo si alternano, aumentando la probabilità di risvegli frequenti.</li>
            <li>Tra le 4 e le 6 del mattino, il sonno è particolarmente leggero. Molti bambini faticano a riaddormentarsi proprio in questa fascia oraria.</li>
            <li>Nelle prime ore del mattino, poco prima del risveglio, il tuo piccolo entra nuovamente in una fase di sonno profondo per circa 30–60 minuti.</li>
          </ul>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Fabbisogno di Sonno a 4–5 Mesi</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            A 4 mesi, i bambini dormono in media <strong>14–15 ore</strong> nell'arco delle 24 ore. Di queste, circa
            <strong> 10–12 ore sono dedicate al sonno notturno</strong>. Durante il giorno dormono tra le <strong>3 e le 5 ore</strong>,
            distribuite in <strong>3–4 sonnellini</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il quarto mese è spesso conosciuto come il mese dei "sonnellini brevi", perché molti bambini fanno solo
            <strong> un sonnellino più lungo</strong>, mentre gli altri durano appena 30–45 minuti. Questo è del tutto
            normale! Entro il sesto mese, la maggior parte dei bambini stabilizza il proprio ritmo su tre sonnellini
            al giorno, rendendo le giornate più prevedibili e gestibili.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            È molto importante fare attenzione alla durata delle <strong>finestre di veglia</strong>. Un intervallo
            di <strong>1,5–2,5 ore</strong> è perfettamente adeguato.
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Consigli di Sopravvivenza per Genitori Stanchi</h2>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">1. Tante Coccole</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Accetta il fatto che il tuo bambino ha bisogno di te più che mai, anche durante il giorno. Pochi passi
            dello sviluppo sono così faticosi e complessi come questo! Portalo in fascia, nel passeggino, uscite
            all'aria aperta e coccolatelo il più possibile. Fortunatamente, questo periodo di maggiore attaccamento
            e irritabilità durerà solo 2–6 settimane.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">2. Sperimentare Nuovi Metodi di Supporto</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Prova a capire cosa aiuta di più il tuo bambino a dormire meglio, in modo da evitare che diventi
            eccessivamente stanco o sovrastimolato. A volte le strategie che funzionano possono cambiare di
            giorno in giorno.
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Fascia il tuo bambino prima della nanna (se ancora non si gira da solo).</li>
            <li>Valuta l'uso di un ciuccio.</li>
            <li>Prova a sfruttare le passeggiate per ottenere un sonnellino extra.</li>
            <li>Pensa all'uso di una sdraietta a dondolo elettrica. Metti il tuo bambino dentro prima che diventi troppo irritabile.</li>
          </ul>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">3. Nutrire, Nutrire, Nutrire</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Il tuo bambino sta attraversando enormi cambiamenti nello sviluppo. Allo stesso tempo, potrebbe aver
            cambiato taglia di vestiti e ha bisogno di molte calorie. Assicurati che venga nutrito regolarmente
            sia di giorno che di notte. Stai facendo <strong>tutto nel modo giusto</strong> se in questo periodo
            <strong> segui semplicemente il ritmo e i bisogni del tuo piccolo</strong>.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">4. Accettare Aiuto</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Non esitare a chiedere supporto a familiari e amici: sicuramente saranno felici di aiutarti.
            Comunica loro in modo gentile ma chiaro di cosa hai bisogno. Magari qualcuno può occuparsi
            della cucina, passare l'aspirapolvere, o portare il tuo bambino a fare una lunga passeggiata
            mentre tu riposi un po'?
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">5. Routine Serale Fissa</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Uno degli elementi più importanti per aiutare il tuo bambino a sviluppare buone abitudini di sonno
            è una <strong>routine serale costante</strong>. Puoi scegliere le attività che preferisci, ma
            l'importante è che siano <strong>rilassanti e sempre uguali</strong>: bagnetto, massaggio, libro,
            pigiama, poppata, ninna nanna, e poi a nanna.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Gli studi dimostrano che una routine serale fissa ha un impatto positivo sul sonno dei bambini e
            persino sull'umore delle mamme. Inizia abbastanza presto la sera, prima che il tuo bambino sia
            troppo stanco.
          </p>

          <h3 className="font-semibold text-warm-800 text-xl mt-8 mb-3">6. Iniziare a Mettere il Bambino a Letto "Assonnato ma Sveglio"</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Una volta superata la regressione del sonno del 4° mese — e quando il tuo bambino non è più così
            irritabile e bisognoso di contatto — è il momento ideale per aiutarlo, poco a poco, ad addormentarsi
            in autonomia. Il segreto sta nel metterlo a dormire <strong>"assonnato ma sveglio"</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Non scoraggiarti se non funziona subito: ci vuole pazienza! <strong>Molti bambini non sono davvero
            pronti per imparare ad addormentarsi da soli prima dei sei mesi.</strong>
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

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Un Pensiero sul "Sonno Guidato" (Sleep Training) a Questa Età</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un bambino di 4 mesi è ancora troppo piccolo per riuscire ad addormentarsi sempre da solo. Inoltre,
            studi dimostrano che alcuni bambini non sono neurologicamente in grado di calmarsi da soli prima dei
            6 mesi. È una capacità complessa, che richiede tempo!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Poiché non esistono ricerche affidabili sul sleep training prima dei 6 mesi, la mia raccomandazione
            è di adottare — se proprio necessario — solo metodi molto dolci, privilegiando l'<strong>esercizio</strong>
            piuttosto che il "<strong>forzare</strong>" un cambiamento.
          </p>

          <h2 className="font-serif font-light text-warm-800 text-2xl mt-10 mb-4">Niente Panico!</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sì, questo periodo è faticoso, sia per voi che per il vostro bambino. Ma non dimenticare che questa
            trasformazione del sonno è in realtà un <strong>passaggio straordinario nella crescita del tuo bambino</strong>.
            Sta cambiando, dentro e fuori, e si sta sviluppando proprio come dovrebbe. Una meraviglia della natura!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ricorda: le regressioni del sonno sono <strong>solo fasi</strong> e riuscirete a superarle. E presto
            il tuo bambino tornerà a dormire più a lungo. Magari tra qualche settimana questo periodo sarà già
            alle spalle e il tuo piccolo dormirà di nuovo sereno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Ti auguro un cammino il più possibile sereno attraverso la regressione del sonno del 4° mese e
            tantissima gioia con il tuo piccolo tesoro!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Sogni d'oro e un grande abbraccio,<br />
            <strong>Sarah</strong>
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10 mb-4">FAQ – Domande frequenti</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Quanto dura la regressione del sonno dei 4 mesi?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Di solito dura tra le 2 e le 6 settimane. Se i problemi di sonno persistono oltre le 6 settimane, non si tratta più di una semplice regressione, ma di difficoltà a lungo termine che vale la pena affrontare con strategie specifiche.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">La regressione del sonno dei 4 mesi è davvero inevitabile per tutti i bambini?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">La maturazione del sonno che avviene intorno ai 4 mesi è un processo biologico universale. Tuttavia, non tutti i bambini la vivono con la stessa intensità: alcuni attraversano questa fase con pochi cambiamenti, mentre altri mostrano disturbi del sonno molto marcati. Dipende molto dal temperamento del bambino e dalle sue abitudini di addormentamento.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Quali sono i migliori consigli pratici per sopravvivere a questa fase?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Le strategie più utili sono: accettare il maggiore bisogno di vicinanza del bambino, sperimentare nuovi metodi di supporto come la fascia o il passeggino, stabilire una routine serale costante e chiedere aiuto a familiari e amici. Soprattutto, è importante prendersi cura anche di sé stesse come mamme.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">Il cambiamento del sonno ai 4 mesi è permanente?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">Sì. A differenza delle altre regressioni del sonno, quella dei 4 mesi porta un cambiamento strutturale e permanente nel modo in cui il tuo bambino dorme. Da questo momento in poi, i suoi cicli di sonno si alternano tra fasi leggere e profonde, come negli adulti. Questo non significa però che i problemi di sonno dureranno per sempre.</p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8 mb-3">È indicato iniziare il sleep coaching durante la regressione dei 4 mesi?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">In genere no. Un bambino di 4 mesi è ancora neurologicamente immaturo per addormentarsi in autonomia. La raccomandazione è di aspettare che la fase acuta sia passata e che il bambino abbia almeno 5–6 mesi prima di introdurre metodi di apprendimento del sonno, e sempre con approcci molto dolci e rispettosi del legame.</p>

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
