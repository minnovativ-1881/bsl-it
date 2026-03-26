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

export default function CoursePart4() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 4 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 4 – Introdurre nuove abitudini del sonno
            </h1>

            <CourseNav current={4} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Cosa ti piace fare prima di addormentarti? Leggere un buon libro o fare due chiacchiere con il tuo partner? Hai bisogno del tuo letto e di un cuscino particolare per rilassarti e prendere sonno?</p>

              <p>Anche il tuo piccolo bambino è simile: sviluppa man mano abitudini e condizioni precise per riuscire a rilassarsi e addormentarsi serenamente. Queste abitudini sono chiamate <strong>associazioni del sonno</strong> — collegano al cervello del tuo bambino il messaggio: <em>&quot;Va tutto bene. Posso lasciarmi andare e dormire.&quot;</em> In risposta, il corpo rilascia ormoni del sonno e del rilassamento, e il piccolo può scivolare serenamente nel sonno.</p>

              <p>Per questo motivo, è importante che tu rifletta su quali abitudini il tuo piccolo ha associato all&apos;addormentamento. Si addormenta durante la poppata? Lo cullate seduti su una palla da ginnastica? Viene sempre allattato o nutrito prima di dormire? Lo tenete in braccio finché non si addormenta? Pensa anche se il rituale è sempre lo stesso durante il giorno, la sera e la notte.</p>

              <p>La difficoltà sta nel fatto che il tuo bambino ha bisogno di queste associazioni per addormentarsi — e di notte, quando si sveglia tra una fase del sonno e l&apos;altra, le reclama di nuovo. Potrebbe quindi accadere che tu debba cullare il tuo bambino per un&apos;ora o due affinché si addormenta, solo per scoprire dopo 30-45 minuti che si è già svegliato. (Le fasi del sonno nei neonati durano proprio questo tempo.)</p>

              <p>A proposito: non pensare che il tuo bambino dorma male solo perché avete instaurato cattive abitudini. È solo uno dei tanti possibili motivi. Per esempio, solo uno dei miei sette figli non ha mai mostrato un comportamento del sonno particolarmente impegnativo. Bambini e mamme sono semplicemente molto diversi — e va benissimo così!</p>

              <p>A dire la verità, le tipiche e coccolose abitudini della buonanotte sono meravigliose. Io adoravo allattare o portare i miei bambini finché si addormentavano. Ma può arrivare un momento — di solito quando il sonno ne risente — in cui è giusto fare dei cambiamenti. In quel caso, è perfettamente legittimo riconoscere che anche mamma e papà hanno dei limiti — e che genitori felici e pieni di vita sono fondamentali per il benessere del tuo bambino.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">7 aiuti utili per il sonno</h2>

              <p>Ora vorrei presentarti alcuni strumenti che possono aiutare il tuo bambino ad addormentarsi in modo un po&apos; più autonomo.</p>

              <div className="space-y-6 mt-6">
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">1. Rumore bianco</p>
                  <p className="text-warm-600 text-sm">Il rumore bianco può essere molto rassicurante per il tuo bambino, perché ricorda i suoni percepiti nell&apos;utero. Molti consulenti del sonno americani consigliano di riprodurre il rumore bianco per tutta la notte. In alternativa, anche una musica rilassante (preferibilmente sempre la stessa) può essere utile.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">2. Copertina per fasciare o sacco nanna per neonati</p>
                  <p className="text-warm-600 text-sm">Questi aiutano a evitare che il piccolo si svegli a causa dei propri riflessi. Esistono anche ottime soluzioni per bambini un po&apos; più grandi.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">3. Camera buia</p>
                  <p className="text-warm-600 text-sm">Assicurati che la cameretta sia buia (anche di giorno) — è dimostrato che favorisce il sonno dei bambini.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">4. Ciuccio</p>
                  <p className="text-warm-600 text-sm">Un ciuccio può essere molto utile. Sì, le opinioni qui sono molto contrastanti. Alcuni bambini lo rifiutano completamente, altri non riescono a farne a meno — e diventa il principale ostacolo al sonno continuo. Molti bambini possono essere abituati a usarlo solo per addormentarsi, per poi toglierlo dalla bocca subito dopo, in modo che non si crei un&apos;associazione fissa con il sonno.</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">5. Sacco nanna</p>
                  <p className="text-warm-600 text-sm">Se il tuo bambino è in grado di girarsi, dovrebbe usare un normale sacco nanna. È molto più sicuro di una coperta. Anche per i bambini piccoli consiglio un sacco nanna — tiene il corpo piacevolmente al caldo e segnala chiaramente: &quot;È ora di dormire.&quot;</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">6. Peluche o copertina di compagnia</p>
                  <p className="text-warm-600 text-sm">Introduce un peluche o una copertina di compagnia. Abitua il tuo bambino gradualmente a un nuovo amico della buonanotte (coinvolgilo nei giochi quotidiani e nella routine serale). Mettilo con lui nel lettino all&apos;addormentamento. Molti bambini più grandi adorano avere un oggetto di riferimento tra le braccia per dormire. (Fai attenzione alla sicurezza: per i neonati dovrebbe essere di dimensioni ridotte e non contenere parti staccabili.)</p>
                </div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <p className="font-semibold text-warm-800 mb-2">7. Segnali del sonno</p>
                  <p className="text-warm-600 text-sm">Utilizza parole o frasi chiave che comunichino al tuo bambino che è ora di dormire (può anche essere sempre lo stesso verso di una ninna nanna) e ripetile subito prima di addormentarsi. La ricerca neurologica conferma l&apos;efficacia di questi rituali. Non sottovalutare la capacità del tuo bambino di comprenderti a livello inconscio e di abituarsi a una frase fissa come segnale del sonno. Un esempio: <em>&quot;Buonanotte, piccolo tesoro. Ti voglio bene. Dormi bene.&quot;</em></p>
                </div>
              </div>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Essere realisti e non arrendersi</h2>

              <p>Ve lo dico con sincerità: alcuni bambini accettano questi cambiamenti con grande facilità, altri invece mostrano poco o nessun interesse a conoscere nuove abitudini per addormentarsi. Succede spesso quando conoscono e amano solo un&apos;unica modalità — e vi sono molto legati. Il classico esempio è l&apos;addormentamento al seno o in braccio.</p>

              <p>Tuttavia, ti consiglio comunque di introdurre le associazioni del sonno sopra elencate — si tratta di creare una nuova abitudine e di permettere al cervello del tuo bambino di registrare che anche la musica è rilassante, o che il suo amato peluche si trova sempre nel lettino. Quello che consiglierei nella maggior parte dei casi è di abituare il tuo bambino a un sacco nanna, a un peluche o copertina e a una musica della buonanotte.</p>

              <div className="bg-blush-50 border border-blush-100 rounded-2xl p-6 my-8">
                <p className="text-warm-700 font-semibold mb-2">Domani: l&apos;ultimo e più importante passo</p>
                <p className="text-warm-600 text-sm">Domani si fa sul serio. Arriviamo all&apos;ultimo — e più importante — passo: come aiutare davvero il tuo bambino a dormire tutta la notte.</p>
                <p className="text-warm-600 text-sm mt-2">A domani, con affetto, Sarah</p>
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
