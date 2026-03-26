import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Il Bambino Non Dorme di Giorno? Cause e Soluzioni | Il Regno della Nanna',
  description: 'I pisolini sono fondamentali per il sonno notturno. Scopri perché il tuo bambino resiste e come aiutarlo — cause, conseguenze e consigli pratici degli esperti.',
}

export default function BambinoNonDormeGiornoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 pb-0 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block bg-blush-100 text-blush-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-200">
                Sonno Diurno
              </span>
            </div>

            <h1 className="font-serif font-light text-warm-800 leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Il tuo bambino non dorme di giorno, dorme troppo poco o solo 30 minuti?
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
                <span>10 min di lettura</span>
                <p className="text-xs text-blush-500 mt-0.5">Consulente certificata del sonno infantile e mamma di sette bambini</p>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-medium mb-10 bg-blush-50">
              <Image
                src="/images/bambino-non-dorme-giorno.webp"
                alt="Bambino non dorme di giorno"
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
            Il tuo bambino accetta solo con tanta pazienza e amore un pisolino di 30 minuti? Oppure hai un piccolo esperto che di giorno proprio non vuole dormire?
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La conseguenza è ovvia: un bambino irritabile. È stanco, nervoso, si lamenta spesso e piange. E al prossimo tentativo di addormentarsi, lotterà almeno con la stessa intensità contro il sonno.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            In questo articolo ti spiego le cause dei pisolini brevi e ti do consigli su cosa fare in questi casi.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Il tuo bambino non dorme di giorno o dorme troppo poco? Le conseguenze</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il tuo piccolo dorme troppo poco di giorno, ecco alcune delle possibili conseguenze:
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li>Difficoltà ad addormentarsi sia di giorno che la sera</li>
            <li>Pisolini molto brevi</li>
            <li>Risvegli frequenti poco dopo essersi addormentato, sia di sera che di notte</li>
            <li>Risvegli notturni frequenti</li>
            <li>Svegliarsi molto presto la mattina (tra le 4 e le 5) e difficoltà a riaddormentarsi</li>
            <li>Pianto e urla al risveglio dopo i pisolini e durante la notte tra un ciclo di sonno e l&apos;altro</li>
          </ul>

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

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">3 motivi per cui il tuo bambino non dorme di giorno – e cosa fare!</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Sovrastanchezza – il nemico numero 1 del sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">La sovrastanchezza è il nemico numero 1 del sonno!</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Perché? Se il tuo bambino è <strong className="text-warm-800">sovrastanco</strong> (o sovrastimolato), il suo <strong className="text-warm-800">equilibrio ormonale</strong> va completamente in tilt! Invece della melatonina, l&apos;ormone del sonno e del rilassamento, nel suo piccolo corpo si scatenano <em>ormoni dello stress</em> che hanno un effetto <em>eccitante</em> e <em>stimolante</em>. Questi ormoni funzionano in modo simile alla caffeina, tenendolo sveglio nonostante la stanchezza o facendolo svegliare poco dopo essersi addormentato.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Di conseguenza, il tuo bambino diventa molto più irritabile (piange, urla e si agita). Questo comportamento si manifesta soprattutto verso sera, segnalando una possibile carenza di sonno o un <strong className="text-warm-800">problema nel ritmo della giornata</strong>.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La situazione è complicata: <strong className="text-warm-800">il sonno scarso di giorno e quello disturbato di notte si rinforzano a vicenda.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Nella maggior parte dei casi, il problema è che passa troppo tempo tra un pisolino e l&apos;altro. Prova a mettere il tuo bambino a dormire ai primi segnali di stanchezza.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tieni presente che tra i 4 e i 5 mesi i pisolini brevi sono assolutamente normali. In molti casi, una routine più strutturata con sonnellini più lunghi diventa possibile solo successivamente.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. Associazioni del sonno</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Le associazioni del sonno sono probabilmente la causa più comune dei pisolini troppo brevi, specialmente nei bambini dai 5-6 mesi in su.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Con &quot;associazioni del sonno&quot; si intendono le <strong className="text-warm-800">abitudini di addormentamento</strong> che il bambino ha consolidato e senza le quali non riesce ad addormentarsi o a prolungare il sonno. Questo include tutto ciò di cui ha &quot;bisogno&quot; per dormire con il tuo aiuto o con un supporto esterno (come essere cullato, allattato, dondolato, ecc.).
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            <strong className="text-warm-800">Il problema principale è che questi aiuti per addormentarsi spesso impediscono al bambino di continuare a dormire dopo un ciclo di sonno.</strong>
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            I cicli di sonno dei neonati durano in genere tra i 30 e i 50 minuti. Alla fine di ogni ciclo, il bambino entra in una fase di sonno leggero e, per istinto, verifica l&apos;ambiente circostante. Se qualcosa è cambiato rispetto a quando si è addormentato, è molto probabile che si svegli.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">3. Regressione del sonno – l&apos;inizio del rifiuto dei pisolini?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Non è raro che i bambini dormano benissimo nei primi mesi e poi, intorno ai 4 mesi, improvvisamente inizino a manifestare problemi di sonno – inclusi quelli legati ai pisolini.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Si tratta della <em>&quot;regressione del sonno dei 4 mesi&quot;</em>, che segna un&apos;importante fase di sviluppo. Anche i modelli di sonno ne sono direttamente influenzati: diventano più ciclici e le fasi di sonno più definite.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Tutto questo spesso porta i bambini a svegliarsi più frequentemente e, a partire dai 5 mesi, i pisolini durano improvvisamente solo 30-40 minuti. Se questa situazione non migliora entro 3-6 settimane, è il momento di pensare a come migliorare il sonno diurno!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Guida: Cosa fare se il tuo bambino dorme troppo poco</h2>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se hai individuato la causa del problema del sonno diurno grazie ai punti precedenti, puoi agire di conseguenza:
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Potresti dover introdurre più <strong className="text-warm-800">costanza e orari più regolari</strong>. Per farlo, potrebbe essere utile ridurre le uscite per due settimane e stabilire una routine fissa. Metti il tuo bambino a dormire ai primi segnali di stanchezza, in una stanza oscurata.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Imparare ad <strong className="text-warm-800">addormentarsi da solo</strong> aiuterà il tuo bambino a non svegliarsi in lacrime dopo ogni ciclo di sonno cercando ciò che lo aveva aiutato ad addormentarsi (cullare, dondolare, ciucciare…).
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se il problema riguarda solo il sonno diurno, consiglio spesso di iniziare lavorando sul primo pisolino del mattino. Questo è quello che riesce più facilmente alla maggior parte dei bambini e che avviene abbastanza presto dopo il risveglio.
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">Consigli degli esperti</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">1. Un piccolo tocco al momento giusto</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Se sai che il tuo bambino si sveglia dopo 30 minuti, potresti provare a toccarlo leggermente dopo 20-25 minuti (con delicatezza) per farlo muovere un po&apos; e, idealmente, farlo riaddormentare.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            L&apos;idea è che, in questo modo, il suo ciclo di sonno venga interrotto e spostato, permettendogli così di superare la soglia dei 30 minuti. Se funziona più volte, il tuo bambino potrebbe adattarsi a questo nuovo schema di sonno più lungo nel giro di 1-2 settimane.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">2. L&apos;ora del pisolino</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Indipendentemente da quanto dorma il tuo bambino, lascialo nel lettino per 60 minuti. Puoi controllarlo, stare accanto a lui, accarezzarlo e rassicurarlo, ma rimane nel lettino per un&apos;ora, che dorma o meno. In questo modo, capirà che non &quot;vale la pena&quot; svegliarsi e gradualmente allungherà i suoi pisolini.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Questo metodo dell&apos;&quot;ora del pisolino&quot; è davvero efficace. Nella maggior parte dei casi, dopo pochi giorni, il bambino capisce il principio e inizia a dormire più a lungo. Questo ha effetti positivi sul suo bisogno complessivo di sonno, sul suo umore, sul sistema immunitario, sulla capacità di apprendimento e molto altro!
          </p>

          <h2 className="font-serif font-semibold text-warm-800 text-2xl mt-10">FAQ – Domande frequenti</h2>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Quando finiranno i pisolini di 30 minuti?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Molti bambini attraversano una fase in cui fanno solo brevi sonnellini di circa 30 minuti. Ma niente paura, non sarà sempre così! Intorno ai 5-6 mesi, la struttura del sonno del tuo bambino continuerà a svilupparsi e i pisolini potrebbero iniziare ad allungarsi.
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            La chiave è avere pazienza e offrire un ambiente e una routine del sonno coerenti. Con il tempo, i pisolini brevi tenderanno naturalmente a diventare più lunghi.
          </p>

          <h3 className="font-serif font-semibold text-warm-700 text-xl mt-8">Come può una routine giornaliera aiutare il mio bambino a dormire meglio?</h3>
          <p className="text-warm-600 leading-relaxed mb-4">
            Avere una routine ben definita può fare miracoli per il sonno del tuo bambino. I bambini amano la prevedibilità e, quando seguono un ritmo costante, riescono ad adattarsi meglio ai momenti di veglia e di sonno.
          </p>
          <ul className="list-disc list-inside space-y-2 text-warm-600 mb-6">
            <li><strong className="text-warm-800">Sicurezza e tranquillità:</strong> Sapere cosa succederà dopo aiuta il bambino a sentirsi sicuro e rilassato.</li>
            <li><strong className="text-warm-800">Regolazione del ritmo sonno-veglia:</strong> Se pasti, gioco e sonno avvengono sempre agli stessi orari, il ritmo interno del bambino si sincronizza meglio.</li>
            <li><strong className="text-warm-800">Sonno notturno migliore:</strong> Un sonno diurno ben strutturato aiuta a evitare che il bambino vada a dormire troppo stanco la sera.</li>
            <li><strong className="text-warm-800">Abitudini di sonno sane:</strong> Creare una routine aiuta a stabilire buone abitudini che potranno durare nel tempo.</li>
          </ul>
          <p className="text-warm-600 leading-relaxed mb-4">
            Spero che tu e il tuo piccolo riusciate presto a godervi più momenti di riposo durante la giornata!
          </p>
          <p className="text-warm-600 leading-relaxed mb-4">
            Un caro saluto dal Regno della Nanna,<br />
            <strong>La tua Sarah</strong>
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
