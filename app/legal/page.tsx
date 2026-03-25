import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-6">

            <h1 className="font-serif font-light text-warm-800 text-4xl mb-10">
              Note Legali
            </h1>

            <div className="space-y-10 text-warm-600 leading-relaxed">

              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-3">Informazioni ai sensi del § 5 TMG</h2>
                <p>
                  Sarah Mann – minnovation<br />
                  Rechov HaReem 16, 9090230, Israele
                </p>
                <p className="mt-2">
                  Timon Mann – minnovation<br />
                  Rechov HaReem 16, 9090230, Israele
                </p>
              </div>

              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-3">Rappresentata da</h2>
                <p>Sarah Mann</p>
              </div>

              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-3">Contatti</h2>
                <p>
                  Telefono: +49 (0)1567 8472684<br />
                  E-mail:{' '}
                  <a
                    href="mailto:kontakt@babyschlummerland.de"
                    className="text-blush-500 hover:text-blush-600 transition-colors"
                  >
                    kontakt@babyschlummerland.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-3">
                  Responsabile dei contenuti ai sensi del § 55 comma 2 RStV
                </h2>
                <p>
                  Sarah Mann<br />
                  D. Yericho, 9064100, Israele
                </p>
              </div>

              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-6">Disclaimer</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Responsabilità per i contenuti</h3>
                    <p>
                      I contenuti delle nostre pagine sono stati creati con la massima cura. Tuttavia, non possiamo
                      garantire l&apos;accuratezza, la completezza o l&apos;attualità dei contenuti. In qualità di
                      fornitori di servizi, siamo responsabili dei contenuti propri su queste pagine ai sensi delle
                      leggi generali. Tuttavia, non siamo obbligati a monitorare le informazioni di terzi trasmesse
                      o archiviate, né a investigare circostanze che indichino attività illegali. Gli obblighi di
                      rimozione o blocco dell&apos;uso di informazioni ai sensi delle leggi generali rimangono
                      impregiudicati. La responsabilità in questo senso è possibile solo dal momento in cui veniamo
                      a conoscenza di una specifica violazione di legge. Non appena venissimo a conoscenza di tali
                      violazioni, rimuoveremo immediatamente i contenuti pertinenti.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Responsabilità per i link</h3>
                    <p>
                      Il nostro sito web contiene link a siti web esterni di terze parti sul cui contenuto non abbiamo
                      alcuna influenza. Pertanto, non possiamo assumere alcuna responsabilità per tali contenuti
                      esterni. Il rispettivo fornitore o gestore delle pagine collegate è sempre responsabile del
                      loro contenuto. Le pagine collegate sono state verificate al momento del collegamento per
                      possibili violazioni di legge. Non è stato rilevato alcun contenuto illegale al momento del
                      collegamento. Un monitoraggio permanente del contenuto delle pagine collegate non è
                      ragionevole senza prove concrete di una violazione di legge. Non appena venissimo a conoscenza
                      di violazioni di legge, rimuoveremo immediatamente tali link.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Copyright</h3>
                    <p>
                      I contenuti e le opere su queste pagine creati dai gestori del sito sono soggetti alla legge
                      tedesca sul diritto d&apos;autore. La riproduzione, la modifica, la distribuzione e qualsiasi
                      forma di utilizzo al di là dei limiti del diritto d&apos;autore richiedono il consenso scritto
                      del rispettivo autore o creatore. I download e le copie di queste pagine sono consentiti solo
                      per uso privato e non commerciale. Laddove i contenuti di questo sito non siano stati creati
                      dall&apos;operatore, vengono rispettati i diritti d&apos;autore di terzi e i contenuti di
                      terzi sono identificati come tali. Qualora doveste comunque rilevare una violazione del
                      diritto d&apos;autore, vi chiediamo di informarci. Non appena venissimo a conoscenza di
                      violazioni di legge, rimuoveremo immediatamente tali contenuti.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Privacy</h3>
                    <p>
                      L&apos;utilizzo del nostro sito web è generalmente possibile senza fornire dati personali.
                      Laddove vengano raccolti dati personali (come nome, indirizzo o indirizzo e-mail) sulle nostre
                      pagine, ciò avviene, ove possibile, su base volontaria. Questi dati non verranno trasmessi a
                      terzi senza il tuo esplicito consenso.
                    </p>
                    <p className="mt-3">
                      Si segnala che la trasmissione di dati su Internet (ad es. la comunicazione tramite e-mail)
                      può essere soggetta a vulnerabilità della sicurezza. Non è possibile una protezione completa
                      dei dati dall&apos;accesso da parte di terzi.
                    </p>
                    <p className="mt-3">
                      L&apos;utilizzo dei dati di contatto pubblicati nell&apos;ambito dell&apos;obbligo di
                      informativa legale da parte di terzi per l&apos;invio di materiale pubblicitario e informativo
                      non richiesto è espressamente vietato. I gestori di questo sito si riservano il diritto di
                      intraprendere azioni legali in caso di invio di informazioni promozionali non richieste,
                      ad esempio tramite e-mail di spam.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
