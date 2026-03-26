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

export default function CoursePart2() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">

            <div className="mb-4">
              <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200">
                Corso Gratuito via E-mail · Parte 2 di 5
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Parte 2 – Trova la routine giornaliera perfetta per il tuo bambino
            </h1>

            <CourseNav current={2} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Oggi iniziamo subito con uno dei consigli più importanti per un buon sonno del bambino: grazie a una routine quotidiana ben strutturata, puoi aiutare l&apos;orologio interno naturale del tuo bambino a ritrovare l&apos;equilibrio.</p>

              <p>Il ritmo biologico del tuo tesoro ti ringrazierà: il suo corpicino saprà finalmente quando è il momento di dormire e quando invece è il momento di stare svegli o mangiare. E questo può davvero aiutare entrambi: il tuo bimbo sarà più sereno e tu ti sentirai più sicura nel riconoscere i suoi bisogni — e saprai anche quando puoi concederti una pausa.</p>

              <p>Finiranno quei momenti in cui ti chiedevi: <em>&quot;Sta piagnucolando perché ha fame, sonno o semplicemente è di cattivo umore?&quot;</em></p>

              <p>La cosa bella — e importante — di una routine quotidiana stabile è che il tuo bambino farà abbastanza sonnellini durante il giorno e tu potrai metterlo a dormire sia per i pisolini che per la notte nei tempi giusti.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il sonno favorisce il sonno</h2>

              <p>Durante la prima infanzia esiste una regola d&apos;oro: <em>&quot;Il sonno favorisce il sonno.&quot;</em></p>

              <p>Un buon riposo diurno favorisce un buon addormentamento e un sonno notturno più tranquillo — e viceversa. Questo significa che un sonno notturno problematico può spesso essere collegato a come si svolge la giornata.</p>

              <p>Ecco perché, nel nostro percorso verso notti migliori, non partiamo subito da come addormentarsi o dalla notte stessa, ma cominciamo dalle basi. Una routine giornaliera adatta vi aiuterà idealmente a migliorare il riposo diurno (se finora è stato troppo breve) e a facilitare un addormentamento più rapido e sereno alla sera.</p>

              <p>&quot;Il sonno favorisce il sonno&quot; significa anche che <strong>l&apos;eccessiva stanchezza è uno dei tuoi peggiori nemici</strong>. Questo è dovuto soprattutto all&apos;ormone dello stress, il cortisolo, che inonda il corpo del tuo piccolo quando resta sveglio troppo a lungo. Un bambino troppo stanco non solo fatica ad addormentarsi, è più agitato e piange di più, ma di solito dorme anche meno e si sveglia più spesso.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">I vantaggi di una routine quotidiana costante</h2>

              <ul className="space-y-2 text-warm-600 list-disc pl-5">
                <li>Il fabbisogno di sonno del tuo bambino viene soddisfatto</li>
                <li>Si evita l&apos;eccessiva stanchezza</li>
                <li>I sonnellini diventano più lunghi e rigeneranti</li>
                <li>Addormentarsi diventa più facile e veloce</li>
                <li>Meno pianti e lamenti (grazie all&apos;assenza di sovraffaticamento)</li>
                <li>Riduzione dei risvegli notturni</li>
              </ul>

              <p>Se il tuo bambino va a dormire ogni sera a orari diversi, è molto probabile che faccia più fatica a rilassarsi e si svegli più spesso. Questo perché il suo sistema — inclusi gli ormoni legati al sonno — non riesce a capire quando è ora di addormentarsi. Il suo corpo non sa, ad esempio, se deve iniziare a produrre melatonina — l&apos;ormone del rilassamento e del sonno — alle 19:30 oppure alle 22:00.</p>

              <p>Ecco perché: se eviti con costanza l&apos;eccessiva stanchezza e mantieni ritmi giornalieri regolari, il tuo piccolo ti ringrazierà con un sonno decisamente migliore.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Routine giornaliere di riferimento</h2>
              <p className="text-warm-500 text-sm italic">In base a un orario di risveglio alle 7:00:</p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-sky-50">
                      <th className="text-left p-3 border border-sky-100 text-warm-700 font-semibold">Età</th>
                      <th className="text-left p-3 border border-sky-100 text-warm-700 font-semibold">Orari dei sonnellini</th>
                      <th className="text-left p-3 border border-sky-100 text-warm-700 font-semibold">Ora della nanna</th>
                    </tr>
                  </thead>
                  <tbody className="text-warm-600">
                    <tr><td className="p-3 border border-sky-100">4-5 mesi (4 sonnellini)</td><td className="p-3 border border-sky-100">8:30, 11:30, 14:30, 17:00*</td><td className="p-3 border border-sky-100">20:00-21:00</td></tr>
                    <tr className="bg-warm-50"><td className="p-3 border border-sky-100">4-6 mesi (3 sonnellini)</td><td className="p-3 border border-sky-100">8:30, 12:00, 16:00*</td><td className="p-3 border border-sky-100">19:00-20:00</td></tr>
                    <tr><td className="p-3 border border-sky-100">6-9 mesi (3 sonnellini)</td><td className="p-3 border border-sky-100">9:00, 12:30, 16:00*</td><td className="p-3 border border-sky-100">19:30-20:30</td></tr>
                    <tr className="bg-warm-50"><td className="p-3 border border-sky-100">6-9 mesi (2 sonnellini)</td><td className="p-3 border border-sky-100">9:30, 13:30</td><td className="p-3 border border-sky-100">19:00-20:00</td></tr>
                    <tr><td className="p-3 border border-sky-100">Da 10 mesi (2 sonnellini)</td><td className="p-3 border border-sky-100">9:30, 14:00</td><td className="p-3 border border-sky-100">19:00-20:00</td></tr>
                    <tr className="bg-warm-50"><td className="p-3 border border-sky-100">Dai 18 mesi circa (1 sonnellino)</td><td className="p-3 border border-sky-100">12:00-13:30 (2-2,5h)</td><td className="p-3 border border-sky-100">19:00-20:00</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 text-sm text-warm-600 space-y-2">
                <p>* I sonnellini contrassegnati dall&apos;asterisco non dovrebbero essere troppo lunghi — circa 30-45 minuti.</p>
                <p>Se la vostra giornata inizia prima o dopo le 7:00, adatta di conseguenza gli orari indicati.</p>
                <p>La tabella mostra solo valori medi. In base alla durata dei sonnellini del tuo bambino, puoi spostare leggermente gli orari dei pisolini e della messa a letto.</p>
                <p>Tieni presente che i bambini al mattino riescono a stare svegli solo per poco tempo, mentre nel pomeriggio e verso sera possono tollerare intervalli di veglia un po&apos; più lunghi tra un sonnellino e l&apos;altro.</p>
              </div>

              <p>Lo sapevi che molti problemi di sonno si risolvono da soli quando anticipi l&apos;orario della nanna serale? Sì, lo so che sembra controintuitivo, ma in moltissimi casi è proprio così! Quando i bambini sono troppo stanchi, il loro corpo viene invaso da ormoni &quot;sbagliati&quot;. Di conseguenza, fanno fatica ad addormentarsi e si svegliano più spesso — e prima. Quindi: meglio andare a letto prima che troppo tardi — vale sicuramente la pena provarlo per almeno una settimana!</p>

              <p>Lo stesso principio vale anche per i sonnellini (soprattutto nei primi 9 mesi). Molti pisolini troppo brevi sono dovuti semplicemente al fatto che il bambino è stato messo a dormire troppo tardi. Osserva quindi attentamente il tuo bambino, per riconoscere in tempo i segnali di stanchezza e reagire rapidamente.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come iniziare</h2>

              <p>Il modo più semplice è quello di stabilire i seguenti punti fissi nella vostra giornata:</p>

              <ul className="space-y-3 text-warm-600 list-disc pl-5">
                <li>Fissa un <strong>orario di risveglio abbastanza stabile</strong> (ad esempio alle 7:00). Il tuo bambino dovrebbe iniziare la giornata più o meno sempre alla stessa ora (con una tolleranza di circa 30 minuti). In questo modo, porterai automaticamente stabilità anche nelle altre attività quotidiane. (Sì, è consigliabile svegliare i bambini al mattino, affinché il loro orologio interno si adatti a questi orari!)</li>
                <li>Scegli un <strong>orario fisso per la nanna serale</strong>. A partire dai 3-4 mesi puoi iniziare ad anticiparlo e renderlo un punto di riferimento fisso nella vostra giornata.</li>
                <li>Il <strong>primo sonnellino del mattino</strong> sarà il terzo punto fisso. Considera un intervallo di veglia adeguato in base all&apos;età e stabilisci anche per questo un orario abbastanza regolare.</li>
              </ul>

              <p>Questi tre momenti principali aiuteranno il tuo bambino a regolare il suo ritmo interno e gli daranno più orientamento durante la giornata. Potrai poi integrare l&apos;orario delle poppate e degli altri sonnellini in base a questi punti fissi.</p>

              <p>Spesso ci vogliono alcuni giorni per adattarsi a una nuova routine (un po&apos; come succede con il jet lag), ma poi il ritmo biologico del tuo bambino si stabilizzerà. Un po&apos; di flessibilità (circa mezz&apos;ora) e qualche giornata eccezionale ci stanno sempre — fa parte della vita. Ma una struttura di base porterà sicuramente più serenità e, si spera, anche un sonno decisamente migliore.</p>

              <p>Fare questo passo — ovvero introdurre una routine quotidiana stabile — è davvero importante ed efficace. Secondo la mia esperienza, molti bambini iniziano a dormire meglio semplicemente grazie a una routine ben definita!</p>

              <p className="text-warm-500 italic">Ti auguro tanta serenità nella messa in pratica,<br /><strong>La tua Sarah</strong></p>

            </div>

            <AuthorBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
