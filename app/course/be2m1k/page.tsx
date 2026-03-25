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
              Parte 2 – Trova la routine giornaliera perfetta
            </h1>

            <CourseNav current={2} />

            <div className="prose prose-warm max-w-none text-warm-600 leading-relaxed space-y-6">

              <p>Oggi iniziamo con uno dei consigli piu importanti per un buon sonno del bambino: grazie a una routine quotidiana ben strutturata, puoi aiutare l&apos;orologio interno del tuo bambino a ritrovare l&apos;equilibrio. Il ritmo biologico del tuo tesoro ti ringraziera: il suo corpicino sapra finalmente quando e il momento di dormire e quando e il momento di stare svegli.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il sonno favorisce il sonno</h2>
              <p>C&apos;e una regola d&apos;oro quando si parla di neonati e bambini piccoli: <em>&quot;Il sonno favorisce il sonno.&quot;</em></p>
              <p>Un buon riposo diurno favorisce un buon addormentamento e un sonno notturno piu tranquillo — e viceversa. Un bambino troppo stanco non solo fatica ad addormentarsi, e piu agitato e piange di piu, ma di solito dorme anche meno e si sveglia piu spesso.</p>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">I vantaggi di una routine quotidiana costante</h2>
              <ul className="space-y-2 text-warm-600 list-disc pl-5">
                <li>Il fabbisogno di sonno del tuo bambino viene soddisfatto</li>
                <li>Si evita l&apos;eccessiva stanchezza</li>
                <li>I sonnellini diventano piu lunghi e rigeneranti</li>
                <li>Addormentarsi diventa piu facile e veloce</li>
                <li>Meno pianti e lamenti</li>
                <li>Riduzione dei risvegli notturni</li>
              </ul>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Routine giornaliere di riferimento</h2>
              <p className="text-warm-500 text-sm italic">In base a un orario di risveglio alle 7:00:</p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-sky-50">
                      <th className="text-left p-3 border border-sky-100 text-warm-700 font-semibold">Eta</th>
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
                <p>* I sonnellini contrassegnati dall&apos;asterisco dovrebbero essere brevi — circa 30-45 minuti.</p>
                <p>Se la tua giornata inizia prima o dopo le 7:00, adatta semplicemente l&apos;orario di conseguenza.</p>
                <p>Tieni presente che i bambini di solito hanno finestre di veglia piu brevi al mattino e possono stare svegli piu a lungo nel pomeriggio e la sera.</p>
              </div>

              <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Come iniziare</h2>
              <p>Il modo piu semplice e stabilire questi punti fissi: un orario di risveglio stabile (ad esempio alle 7:00), un orario fisso per la nanna serale, e il primo sonnellino del mattino. Spesso ci vogliono alcuni giorni per adattarsi a una nuova routine — un po&apos; come il jet lag — ma poi il ritmo biologico del tuo bambino si stabilizzera.</p>

              <p className="text-warm-500 italic">Ti auguro tanta serenita nella messa in pratica, La tua Sarah</p>

            </div>

            <AuthorBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
