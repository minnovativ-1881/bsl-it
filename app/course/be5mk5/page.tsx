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

              <p>Benvenuta alla quinta e ultima parte di questo corso. Oggi ti mostrerò come aiutare il tuo amato bambino a imparare a dormire tutta la notte.</p>

              <p>Fino a qui dovresti già aver completato questi quattro passaggi:</p>
              <ol className="space-y-2 text-warm-600 list-decimal pl-5">
                <li>Hai tenuto, per quanto possibile, un diario del sonno per alcuni giorni e hai individuato i ritmi di sonno del tuo bambino.</li>
                <li>Avete trovato una routine quotidiana che sostiene il ritmo biologico del tuo piccolo. In particolare, il tuo bambino ha un orario della nanna fisso e piuttosto precoce, in cui è davvero stanco.</li>
                <li>Hai introdotto una routine serale dolce e tranquilla, che ora segui ogni sera sempre nello stesso ordine.</li>
                <li>Il tuo tesoro si è già abituato gradualmente a nuove abitudini rassicuranti per addormentarsi, che ora puoi usare come preziosi alleati nel momento del bisogno.</li>
              </ol>

              <p>Questi quattro passaggi rappresentano, a mio avviso, le basi fondamentali per poter passare ora al quinto. Solo così possiamo aiutare il tuo bambino nel modo più rispettoso e semplice possibile a imparare a dormire tutta la notte.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il collegamento tra addormentarsi e dormire tutta la notte</h2>

              <p>La chiave per dormire tutta la notte è <strong>insegnare al tuo bambino ad addormentarsi senza bisogno del tuo aiuto diretto</strong>. Perché il modo in cui si addormenta all&apos;ora della nanna è lo stesso che vorrà utilizzare anche durante la notte per tornare a dormire serenamente.</p>

              <p>Il principio in sé è molto semplice: quando il tuo bambino si sveglia tra una fase di sonno e l&apos;altra e si accorge che tu non ci sei più, che il movimento è cessato o che il ciuccio è caduto, allora si sveglierà completamente e — probabilmente piangendo — reclamerà l&apos;aiuto che conosce per addormentarsi. Saper addormentarsi in autonomia è quindi <strong>la chiave di ogni percorso di apprendimento del sonno</strong>.</p>

              <p>A volte, <strong>bastano piccoli cambiamenti</strong> negli orari di veglia o di nanna o l&apos;introduzione di una routine dell&apos;addormentamento per ottenere risultati sorprendenti. E la nostra esperienza ci ha mostrato che una percentuale sorprendentemente alta di partecipanti ha, alla fine del corso, un bambino che dorme meglio.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Domande importanti e risposte utili</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-warm-800">1. Addormentarsi e dormire tutta la notte: si deve davvero imparare?</p>
                  <p className="text-warm-600">Per molti suona strano: imparare a dormire — non è qualcosa di naturale? In realtà, <strong>dormire è una capacità che si apprende</strong>, in particolare la capacità di calmarsi da soli e prendere sonno. E ogni persona riesce in questo con più o meno facilità. È un po&apos; come imparare a nuotare: alcuni si sentono subito a proprio agio in acqua, altri iniziano con cautela i primi movimenti. Ma alla fine, tutti imparano e ne beneficiano per tutta la vita.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">2. Bisogna smettere completamente di allattare perché il bambino impari a dormire tutta la notte?</p>
                  <p className="text-warm-600">No, imparare a dormire <strong>non significa</strong> dover interrompere completamente l&apos;allattamento. Dopo che, per esempio, ho insegnato alla nostra più piccola a dormire tutta la notte con un metodo che rafforza il legame, ho potuto comunque continuare ad allattarla per farla addormentare durante il giorno e la sera.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">3. Da quando il mio bambino può imparare a dormire tutta la notte?</p>
                  <p className="text-warm-600">È irrealistico aspettarsi che un neonato o un bambino di pochi mesi dorma tutta la notte nel senso adulto del termine. Ma con il passare dei mesi, se il tuo piccolo di 10-12 mesi si sveglia ancora molto spesso, spesso la causa sono abitudini legate al modo in cui si addormenta. Un&apos;età importante è quella di circa 6 mesi. In genere, i bambini hanno bisogno solo di una poppata notturna e sono in grado di calmarsi da soli.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">4. Qual è il metodo giusto per il mio bambino?</p>
                  <p className="text-warm-600">Per me, la cosa più importante è <strong>trovare un metodo che corrisponda al tuo stile educativo e al carattere del tuo bambino</strong>. Solo così potrai essere costante, e solo così il tuo bambino potrà imparare a dormire il prima possibile — e con il minor numero di lacrime. Non esiste una formula magica valida per tutte le famiglie. Credo profondamente che ogni famiglia, ogni bambino e ogni genitore sia unico — e che <strong>voi genitori abbiate il miglior intuito su ciò che è giusto per voi</strong>.</p>
                </div>
                <div>
                  <p className="font-semibold text-warm-800">5. Qual è la tua esperienza con i metodi per imparare a dormire?</p>
                  <p className="text-warm-600">Con il mio quinto figlio ho percorso chilometri su e giù per la camera da letto nei primi sei mesi. Prima le fasi di pianto dopo mezzanotte, poi, dopo una breve pausa di tranquillità, le sveglie mattutine. Senza contare che lo allattavo ogni una o due ore, per tutta la notte. Ero veramente esausta. Alla fine, quando aveva quasi sei mesi, dormivo meno di cinque ore a notte. E non era un&apos;eccezione — era la regola.</p>
                  <p className="text-warm-600 mt-2">Così abbiamo iniziato un percorso di <em>apprendimento del sonno rispettoso del legame</em>… e non ce ne siamo mai pentiti!! Dopo pochi giorni dormiva molto meglio. A volte si svegliava ancora, ma in genere solo una volta per notte, prendeva il suo ciuccio e dormiva fino alle 7 — o anche di più. Sono <strong>infinitamente grata e felice</strong> che abbiamo deciso per questo programma in un&apos;età così precoce. Non solo le nostre notti — <strong>anche le nostre giornate</strong> sono diventate molto più leggere e belle.</p>
                </div>
              </div>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">I quattro metodi più comuni per imparare a dormire</h2>

              <p>Come può il mio amato bambino imparare ad addormentarsi e dormire tutta la notte nel modo più dolce ed efficace possibile, senza dipendere da me? Nella mia consulenza, consiglio spesso <strong>una combinazione di metodi orientati al legame</strong> tra quelli elencati qui sotto, in modo da trovare il giusto equilibrio tra dolcezza ed efficacia per la vostra situazione unica.</p>

              <div className="space-y-6 mt-4">
                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">1. Il metodo del distacco graduale</p>
                  <p className="text-warm-600 text-sm mb-3">Un metodo molto delicato e rispettoso — ideale per i genitori che vogliono evitare il pianto, o comunque limitarlo il più possibile, e che sono pronti a investire tanta pazienza.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Continui ad aiutare il tuo bambino ad addormentarsi (con l&apos;allattamento, il contatto, il dondolio, ecc.), ma riduci pian piano questo supporto — passo dopo passo — finché il bambino riesce idealmente ad addormentarsi da solo nel suo lettino.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Consigli:</strong> Poiché questo metodo è molto delicato, si può provare già a partire dalle 6 settimane di vita. È adatto a tutti i bambini e neonati, e potete scegliere voi il ritmo. Il consiglio è quello di stilare un piccolo piano scritto con dieci passaggi — dal &quot;sonno completamente dipendente da te&quot; al &quot;sonno completamente autonomo&quot;.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">2. Il metodo prendi e rimetti</p>
                  <p className="text-warm-600 text-sm mb-3">Un&apos;altra strategia molto delicata e amorevole.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Dopo aver completato la routine della buonanotte, metti il tuo bambino nel lettino. Se inizia a piagnucolare o a piangere, lo prendi in braccio per consolarlo. Non appena si è calmato e mostra segni di sonnolenza, lo rimetti nel lettino. Ripetete questo processo tutte le volte necessarie, finché non si addormenta.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Consigli:</strong> Questo metodo può essere utilizzato già a partire dalle 6-8 settimane. È importante osservare: il tuo bambino si tranquillizza con questo metodo — oppure si irrita ancora di più? Alcuni bambini si sentono sempre più sopraffatti dal continuo sollevamento e invece di rilassarsi si arrabbiano ancora di più.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">3. Il Metodo PAL (Pianto Abbracciato con Amore)</p>
                  <p className="text-warm-600 text-sm mb-3">Un approccio orientato al legame per aiutare il bambino ad apprendere il sonno in modo rispettoso e profondo. Si basa sul lavoro della psicologa dello sviluppo <strong>Dr. Aletha J. Solter</strong>, fondatrice del movimento <em>Aware Parenting</em>.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Interrompi completamente tutti i tentativi di distrazione e le manovre estenuanti per calmare il bambino all&apos;addormentamento. Invece, tieni il tuo bambino tra le braccia in modo tranquillo e amorevole, così che possa esprimere con le lacrime tutto ciò che &quot;ha nel cuore&quot;. L&apos;importante è che il tuo bambino senta chiaramente che non è solo — accompagnato da contatto fisico intenso e parole dolci e rassicuranti.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Esperienza di Sarah:</strong> Abbiamo utilizzato questo metodo con la nostra quinta figlia, quando aveva sei mesi. Quello che apprezzo di più è il fatto che puoi accompagnare il tuo bambino nella sua frustrazione e che lui possa sentire davvero che sei lì per lui. Si notano spesso già i primi miglioramenti nel sonno dopo poche sessioni di pianto accompagnato.</p>
                </div>

                <div className="border border-warm-100 rounded-2xl p-6 bg-white/60">
                  <p className="font-semibold text-warm-800 text-lg mb-3">4. Il metodo della sedia</p>
                  <p className="text-warm-600 text-sm mb-3">Una buona opzione per i genitori che sanno già che con loro i metodi più dolci non funzionano — oppure che riescono a gestire abbastanza bene la protesta del loro bambino pur restando accanto a lui.</p>
                  <p className="text-warm-600 text-sm"><strong>Come funziona:</strong> Posizioni una sedia accanto alla culla del tuo bambino. Dopo aver concluso la routine serale e quando il tuo piccolo è assonnato, lo metti a dormire e ti siedi sulla sedia accanto a lui mentre si addormenta. La tua sola presenza nel locale gli trasmette sicurezza. Ogni notte, sposti la sedia un po&apos; più lontano dal lettino, finché dopo alcuni giorni o settimane sei fuori dalla stanza.</p>
                  <p className="text-warm-600 text-sm mt-2"><strong>Consigli:</strong> L&apos;età consigliata per iniziare è dai 5 mesi e mezzo — 6 mesi in su. Serve molta costanza e pazienza. Personalmente lo trovo adatto soprattutto ai bambini un po&apos; più grandi, che comprendono già molte cose ma non dormono ancora in un letto da cui possono scendere da soli.</p>
                </div>
              </div>

              <p>Spero tanto che queste informazioni ti siano state utili e che vi abbiano avvicinati un po&apos; di più a notti finalmente più tranquille e riposanti. Ti incoraggio a mettere davvero in pratica <strong>tutti e cinque i passaggi di questo corso</strong> — e non solo alcuni. Quando si ignorano singoli passaggi, qualunque metodo di apprendimento del sonno funziona molto meno bene.</p>

              <div className="bg-blush-50 border border-blush-200 rounded-2xl p-6 my-8">
                <p className="font-semibold text-warm-800 mb-2">Questo è un corso di avviamento — c&apos;è molto di più disponibile</p>
                <p className="text-warm-600 text-sm">Questi cinque passi fanno anche parte dell&apos;e-book <em>&quot;Imparare a dormire tutta la notte in modo rispettoso del legame&quot;</em>, in cui ti mostro concretamente come insegnare al tuo bambino a dormire bene — senza ricette magiche o promesse vuote.</p>
                <p className="text-warm-600 text-sm mt-2">Come mamma di sette figli, so quanto possano essere diverse le situazioni familiari, le visioni educative e le personalità dei bambini. Per questo motivo, il mio e-book non è un manuale teorico pieno di bla bla, ma <strong>un libro pratico da mamma a mamma</strong>, con tanti suggerimenti affettuosi, strategie davvero utili e molte esperienze personali vissute nella nostra grande famiglia. Una cosa per me è particolarmente importante: <strong>rafforzarti nel tuo essere mamma</strong>.</p>
                <Link href="/chi-siamo" className="inline-block mt-3 text-blush-500 font-medium text-sm hover:text-blush-600 transition-colors">
                  Scopri di più su Sarah e il suo team →
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
