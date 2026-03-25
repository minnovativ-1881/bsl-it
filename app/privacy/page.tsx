import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-6">

            <h1 className="font-serif font-light text-warm-800 text-4xl mb-10">
              Informativa sulla Privacy
            </h1>

            <div className="space-y-12 text-warm-600 leading-relaxed">

              {/* Sezione 1 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">1. Panoramica sulla Privacy</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Informazioni Generali</h3>
                    <p>
                      Le seguenti informazioni forniscono una panoramica semplice su cosa succede ai tuoi dati personali
                      quando visiti questo sito web. I dati personali sono tutti i dati attraverso i quali puoi essere
                      identificata personalmente. Per informazioni dettagliate sul tema della protezione dei dati, ti
                      invitiamo a consultare la nostra informativa sulla privacy riportata di seguito.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Raccolta Dati su Questo Sito Web</h3>

                    <p className="font-medium text-warm-700 mt-3 mb-1">Chi è responsabile della raccolta dei dati su questo sito web?</p>
                    <p>
                      Il trattamento dei dati su questo sito web viene effettuato dal gestore del sito web. Puoi trovare
                      i dettagli di contatto nella sezione "Informazioni sul responsabile del trattamento" di questa
                      informativa sulla privacy.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">Come raccogliamo i tuoi dati?</p>
                    <p>
                      Alcuni dati vengono raccolti quando ce li fornisci, ad esempio i dati che inserisci in un modulo
                      di contatto. Altri dati vengono raccolti automaticamente o con il tuo consenso quando visiti il
                      sito web tramite i nostri sistemi informatici. Si tratta principalmente di dati tecnici (es.
                      browser internet, sistema operativo o orario di accesso alla pagina). Questi dati vengono raccolti
                      automaticamente non appena accedi a questo sito web.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">Per cosa utilizziamo i tuoi dati?</p>
                    <p>
                      Alcuni dati vengono raccolti per garantire il corretto funzionamento del sito web. Altri dati
                      possono essere utilizzati per analizzare il tuo comportamento come utente.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">Quali diritti hai riguardo ai tuoi dati?</p>
                    <p>
                      Hai il diritto di ricevere gratuitamente, in qualsiasi momento, informazioni sull'origine,
                      sul destinatario e sullo scopo dei tuoi dati personali memorizzati. Hai anche il diritto di
                      richiedere la correzione o la cancellazione di questi dati. Se hai dato il consenso al
                      trattamento dei dati, puoi revocarlo in qualsiasi momento per il futuro. Hai inoltre il
                      diritto di richiedere la limitazione del trattamento dei tuoi dati personali in determinate
                      circostanze. Hai infine il diritto di presentare un reclamo all'autorità di controllo competente.
                    </p>
                    <p className="mt-2">
                      Per questo e qualsiasi altra domanda riguardante la protezione dei dati, puoi contattarci
                      in qualsiasi momento.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Analytics e Strumenti di Terze Parti</h3>
                    <p>
                      Quando visiti questo sito web, il tuo comportamento di navigazione può essere analizzato
                      statisticamente. Questo avviene principalmente tramite i cosiddetti programmi di analisi.
                      Informazioni dettagliate su questi programmi di analisi sono disponibili nella seguente
                      informativa sulla privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sezione 2 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">2. Hosting</h2>
                <p>Ospitiamo i contenuti del nostro sito web con il seguente fornitore:</p>

                <div className="mt-4">
                  <h3 className="font-serif text-warm-800 text-xl mb-2">Vercel</h3>
                  <p>
                    Il fornitore è Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA
                    (di seguito "Vercel"). Per ulteriori dettagli, ti invitiamo a consultare l'informativa sulla
                    privacy di Vercel:{' '}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blush-500 hover:text-blush-600 transition-colors"
                    >
                      https://vercel.com/legal/privacy-policy
                    </a>
                    .
                  </p>
                  <p className="mt-3">
                    L'utilizzo di Vercel si basa sull'art. 6 par. 1 lett. f GDPR. Abbiamo un interesse legittimo
                    a presentare il nostro sito web nel modo più affidabile possibile. Laddove sia stato richiesto
                    il relativo consenso, il trattamento viene effettuato esclusivamente sulla base dell'art. 6
                    par. 1 lett. a GDPR e dell'art. 25 par. 1 TTDSG, nella misura in cui il consenso riguarda
                    la memorizzazione di cookie o l'accesso a informazioni sul dispositivo dell'utente ai sensi
                    del TTDSG. Il consenso può essere revocato in qualsiasi momento.
                  </p>

                  <div className="mt-4">
                    <h3 className="font-serif text-warm-800 text-lg mb-2">Accordo sul Trattamento dei Dati</h3>
                    <p>
                      Abbiamo concluso un accordo sul trattamento dei dati (DPA) per l'utilizzo del servizio
                      sopra menzionato. Si tratta di un contratto richiesto dalla normativa sulla protezione
                      dei dati che garantisce che Vercel tratti i dati personali dei visitatori del nostro
                      sito web esclusivamente in conformità con le nostre istruzioni e nel rispetto del GDPR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sezione 3 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">3. Informazioni Generali e Obblighi di Comunicazione</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Privacy</h3>
                    <p>
                      I gestori di queste pagine prendono molto sul serio la protezione dei tuoi dati personali.
                      Trattiamo i tuoi dati personali in modo riservato e in conformità con le disposizioni
                      normative in materia di protezione dei dati e con la presente informativa sulla privacy.
                    </p>
                    <p className="mt-3">
                      Quando utilizzi questo sito web, vengono raccolti vari dati personali. I dati personali sono
                      dati attraverso i quali puoi essere identificata personalmente. La presente informativa sulla
                      privacy spiega quali dati raccogliamo e come li utilizziamo. Spiega anche come e per quale
                      scopo ciò avviene.
                    </p>
                    <p className="mt-3">
                      Ti invitiamo a notare che la trasmissione di dati tramite internet (ad es. la comunicazione
                      via e-mail) può essere soggetta a vulnerabilità di sicurezza. Una protezione completa dei dati
                      dall'accesso da parte di terzi non è possibile.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Informazioni sul Responsabile del Trattamento</h3>
                    <p>Il responsabile del trattamento dei dati su questo sito web è:</p>
                    <p className="mt-2">
                      Sarah + Timon Mann<br />
                      Rechov HaReem 16, 9090230, Israele
                    </p>
                    <p className="mt-2">
                      Telefono: +49 (0)1567 8472684<br />
                      Email:{' '}
                      <a
                        href="mailto:kontakt@babyschlummerland.de"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        kontakt@babyschlummerland.de
                      </a>
                    </p>
                    <p className="mt-3">
                      Note Legali:{' '}
                      <a
                        href="/legal"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        Informazioni Legali
                      </a>
                    </p>
                    <p className="mt-3">
                      Il responsabile del trattamento è la persona fisica o giuridica che, da sola o insieme ad altri,
                      determina le finalità e i mezzi del trattamento dei dati personali (ad es. nomi, indirizzi
                      e-mail, ecc.).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Durata della Conservazione</h3>
                    <p>
                      Salvo che nella presente informativa sulla privacy sia stato indicato un periodo di conservazione
                      più specifico, i tuoi dati personali rimarranno presso di noi fino a quando la finalità del
                      trattamento non sarà più applicabile. Se fai valere una richiesta di cancellazione legittima
                      o revochi il consenso al trattamento dei dati, i tuoi dati verranno cancellati a meno che non
                      abbiamo altri motivi legalmente ammissibili per conservare i tuoi dati personali (ad es.
                      periodi di conservazione fiscali o commerciali); in quest'ultimo caso, i dati verranno
                      cancellati una volta che tali motivi cessano di applicarsi.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Informazioni Generali sulla Base Giuridica del Trattamento dei Dati su Questo Sito Web</h3>
                    <p>
                      Se hai acconsentito al trattamento dei dati, trattiamo i tuoi dati personali sulla base
                      dell'art. 6 par. 1 lett. a GDPR o dell'art. 9 par. 2 lett. a GDPR se vengono trattate
                      categorie particolari di dati ai sensi dell'art. 9 par. 1 GDPR. In caso di consenso
                      espresso al trasferimento di dati personali a paesi terzi, il trattamento dei dati viene
                      effettuato anche sulla base dell'art. 49 par. 1 lett. a GDPR. Se hai acconsentito alla
                      memorizzazione di cookie o all'accesso a informazioni sul tuo dispositivo (ad es. tramite
                      device fingerprinting), il trattamento dei dati si basa inoltre sull'art. 25 par. 1 TTDSG.
                      Il consenso può essere revocato in qualsiasi momento. Se i tuoi dati sono necessari per
                      l'esecuzione di un contratto o per l'attuazione di misure precontrattuali, trattiamo i
                      tuoi dati sulla base dell'art. 6 par. 1 lett. b GDPR. Trattiamo inoltre i tuoi dati ove
                      necessario per adempiere a un obbligo legale sulla base dell'art. 6 par. 1 lett. c GDPR.
                      Il trattamento dei dati può inoltre essere effettuato sulla base del nostro legittimo
                      interesse ai sensi dell'art. 6 par. 1 lett. f GDPR. Informazioni sulla base giuridica
                      pertinente in ciascun caso individuale sono fornite nelle seguenti sezioni di questa
                      informativa sulla privacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Destinatari dei Dati Personali</h3>
                    <p>
                      Nell'ambito delle nostre attività commerciali, collaboriamo con vari soggetti esterni.
                      Ciò richiede a volte il trasferimento di dati personali a questi soggetti esterni.
                      Condividiamo i dati personali con soggetti esterni solo laddove ciò sia necessario per
                      l'esecuzione di un contratto, laddove siamo legalmente obbligati a farlo (ad es.
                      divulgazione di dati alle autorità fiscali), laddove abbiamo un interesse legittimo al
                      trasferimento ai sensi dell'art. 6 par. 1 lett. f GDPR, o laddove un'altra base giuridica
                      autorizzi il trasferimento. Quando utilizziamo responsabili del trattamento, condividiamo
                      i dati personali dei nostri clienti solo sulla base di un accordo valido sul trattamento
                      dei dati. In caso di trattamento congiunto, viene concluso un accordo di trattamento
                      congiunto.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Revoca del Consenso al Trattamento dei Dati</h3>
                    <p>
                      Molte operazioni di trattamento dei dati sono possibili solo con il tuo consenso espresso.
                      Puoi revocare il consenso già dato in qualsiasi momento. La liceità del trattamento dei
                      dati avvenuto prima della revoca rimane impregiudicata.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">
                      Diritto di Opposizione alla Raccolta dei Dati in Casi Speciali e al Marketing Diretto (Art. 21 GDPR)
                    </h3>
                    <p className="uppercase text-sm leading-relaxed">
                      LADDOVE IL TRATTAMENTO DEI DATI VENGA EFFETTUATO SULLA BASE DELL'ART. 6 PAR. 1 LETT. E O F GDPR,
                      HAI IL DIRITTO IN QUALSIASI MOMENTO DI OPPORTI AL TRATTAMENTO DEI TUOI DATI PERSONALI PER
                      MOTIVI DERIVANTI DALLA TUA SITUAZIONE PARTICOLARE; QUESTO SI APPLICA ANCHE ALLA PROFILAZIONE
                      BASATA SU TALI DISPOSIZIONI. LA RISPETTIVA BASE GIURIDICA SU CUI SI BASA IL TRATTAMENTO PUÒ
                      ESSERE TROVATA NELLA PRESENTE INFORMATIVA SULLA PRIVACY. SE TI OPPONI, NON ELABOREREMO PIÙ
                      I TUOI DATI PERSONALI INTERESSATI A MENO CHE NON POSSIAMO DIMOSTRARE MOTIVI LEGITTIMI COGENTI
                      PER IL TRATTAMENTO CHE PREVALGONO SUI TUOI INTERESSI, DIRITTI E LIBERTÀ, O IL TRATTAMENTO
                      SERVE PER L'ACCERTAMENTO, L'ESERCIZIO O LA DIFESA DI PRETESE LEGALI (OPPOSIZIONE AI SENSI
                      DELL'ART. 21 PAR. 1 GDPR).
                    </p>
                    <p className="uppercase text-sm leading-relaxed mt-3">
                      LADDOVE I TUOI DATI PERSONALI VENGANO TRATTATI PER FINALITÀ DI MARKETING DIRETTO, HAI IL
                      DIRITTO DI OPPORTI IN QUALSIASI MOMENTO AL TRATTAMENTO DEI DATI PERSONALI CHE TI RIGUARDANO
                      PER TALE MARKETING; QUESTO SI APPLICA ANCHE ALLA PROFILAZIONE NELLA MISURA IN CUI SIA
                      CONNESSA A TALE MARKETING DIRETTO. SE TI OPPONI, I TUOI DATI PERSONALI NON SARANNO PIÙ
                      UTILIZZATI PER FINALITÀ DI MARKETING DIRETTO (OPPOSIZIONE AI SENSI DELL'ART. 21 PAR. 2 GDPR).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Diritto di Presentare Reclamo all'Autorità di Controllo Competente</h3>
                    <p>
                      In caso di violazioni del GDPR, gli interessati hanno il diritto di presentare un reclamo
                      a un'autorità di controllo, in particolare nello Stato membro della loro residenza abituale,
                      del loro luogo di lavoro o del luogo della presunta violazione. Il diritto di presentare
                      reclamo esiste senza pregiudizio per qualsiasi altro rimedio amministrativo o giudiziario.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Diritto alla Portabilità dei Dati</h3>
                    <p>
                      Hai il diritto di ricevere i dati che trattiamo automaticamente sulla base del tuo consenso
                      o in adempimento di un contratto, consegnati a te o a terzi in un formato comune leggibile
                      da macchina. Se richiedi il trasferimento diretto dei dati a un altro responsabile del
                      trattamento, ciò avverrà solo nella misura in cui sia tecnicamente fattibile.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Accesso, Rettifica e Cancellazione</h3>
                    <p>
                      Nell'ambito delle disposizioni di legge applicabili, hai il diritto in qualsiasi momento
                      di ottenere gratuitamente informazioni sui tuoi dati personali memorizzati, sulla loro
                      origine e destinatario, e sullo scopo del trattamento dei dati e, se del caso, un diritto
                      alla rettifica o alla cancellazione di tali dati. Per questo e altre domande sul tema dei
                      dati personali, puoi contattarci in qualsiasi momento.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Diritto alla Limitazione del Trattamento</h3>
                    <p>Hai il diritto di richiedere la limitazione del trattamento dei tuoi dati personali. Puoi contattarci in qualsiasi momento per questo scopo. Il diritto alla limitazione del trattamento si applica nei seguenti casi:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Se contesti l'esattezza dei tuoi dati personali memorizzati presso di noi, di solito abbiamo
                        bisogno di tempo per verificarlo. Per la durata della verifica, hai il diritto di richiedere
                        la limitazione del trattamento dei tuoi dati personali.
                      </li>
                      <li>
                        Se il trattamento dei tuoi dati personali era/è illecito, puoi richiedere la limitazione
                        del trattamento dei dati invece della cancellazione.
                      </li>
                      <li>
                        Se non abbiamo più bisogno dei tuoi dati personali ma tu ne hai bisogno per esercitare,
                        difendere o far valere pretese legali, hai il diritto di richiedere la limitazione del
                        trattamento invece della cancellazione.
                      </li>
                      <li>
                        Se hai presentato un'opposizione ai sensi dell'art. 21 par. 1 GDPR, deve essere effettuato
                        un bilanciamento tra i tuoi interessi e i nostri. Finché non è stato ancora determinato
                        i cui interessi prevalgono, hai il diritto di richiedere la limitazione del trattamento
                        dei tuoi dati personali.
                      </li>
                    </ul>
                    <p className="mt-3">
                      Laddove il trattamento dei tuoi dati personali sia stato limitato, tali dati possono —
                      fatte salve le ipotesi di archiviazione — essere trattati solo con il tuo consenso o per
                      l'accertamento, l'esercizio o la difesa di pretese legali, oppure per la tutela dei diritti
                      di un'altra persona fisica o giuridica, o per motivi di interesse pubblico rilevante
                      dell'Unione Europea o di uno Stato membro.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Crittografia SSL/TLS</h3>
                    <p>
                      Per motivi di sicurezza e per proteggere la trasmissione di contenuti riservati, come ordini
                      o richieste che ci invii in qualità di gestore del sito, questo sito utilizza la crittografia
                      SSL o TLS. Puoi riconoscere una connessione crittografata dal fatto che la barra degli
                      indirizzi del browser cambia da "http://" a "https://" e dal simbolo del lucchetto nella
                      barra del browser.
                    </p>
                    <p className="mt-3">
                      Quando la crittografia SSL o TLS è attivata, i dati che ci trasmetti non possono essere
                      letti da terzi.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Opposizione alle E-mail Promozionali</h3>
                    <p>
                      L'utilizzo dei dettagli di contatto pubblicati nell'ambito dell'obbligo di avviso legale
                      per l'invio di pubblicità e materiali informativi non richiesti è espressamente vietato.
                      I gestori di questo sito si riservano il diritto di intraprendere azioni legali in caso di
                      invio non richiesto di informazioni promozionali, ad esempio tramite e-mail di spam.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sezione 4 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">4. Raccolta Dati su Questo Sito Web</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Cookie</h3>
                    <p>
                      Il nostro sito web utilizza i cosiddetti "cookie". I cookie sono piccoli pacchetti di dati
                      che non arrecano danni al tuo dispositivo. Vengono memorizzati temporaneamente per la durata
                      di una sessione (cookie di sessione) o in modo permanente (cookie persistenti) sul tuo
                      dispositivo. I cookie di sessione vengono eliminati automaticamente al termine della visita.
                      I cookie persistenti rimangono memorizzati sul tuo dispositivo finché non li elimini tu
                      stesso o finché non vengono eliminati automaticamente dal tuo browser web.
                    </p>
                    <p className="mt-3">
                      I cookie possono provenire da noi (cookie di prima parte) o da società terze (cookie di
                      terze parti). I cookie di terze parti consentono l'integrazione di determinati servizi di
                      società terze all'interno di siti web (ad es. cookie per l'elaborazione dei servizi di
                      pagamento).
                    </p>
                    <p className="mt-3">
                      I cookie hanno varie funzioni. Molti cookie sono tecnicamente necessari, poiché alcune
                      funzioni del sito web non funzionerebbero senza di essi. Altri cookie possono essere
                      utilizzati per analizzare il comportamento degli utenti o per scopi pubblicitari.
                    </p>
                    <p className="mt-3">
                      I cookie necessari per l'esecuzione del processo di comunicazione elettronica, per la
                      fornitura di determinate funzioni da te richieste o per l'ottimizzazione del sito web
                      (ad es. cookie per la misurazione del pubblico del sito web) vengono memorizzati sulla
                      base dell'art. 6 par. 1 lett. f GDPR, salvo che non sia specificata un'altra base giuridica.
                      Il gestore del sito web ha un interesse legittimo alla memorizzazione dei cookie necessari
                      per la fornitura tecnicamente priva di errori e ottimizzata dei suoi servizi. Laddove sia
                      stato richiesto il consenso alla memorizzazione di cookie e tecnologie di riconoscimento
                      comparabili, il trattamento viene effettuato esclusivamente sulla base di tale consenso
                      (art. 6 par. 1 lett. a GDPR e art. 25 par. 1 TTDSG); il consenso può essere revocato in
                      qualsiasi momento.
                    </p>
                    <p className="mt-3">
                      Puoi configurare il tuo browser in modo da essere informato sull'impostazione dei cookie
                      e da consentire i cookie solo in singoli casi, da escludere l'accettazione dei cookie
                      per determinati casi o in generale, e da abilitare l'eliminazione automatica dei cookie
                      alla chiusura del browser. La disabilitazione dei cookie può limitare la funzionalità
                      di questo sito web.
                    </p>
                    <p className="mt-3">
                      Puoi trovare informazioni su quali cookie e servizi vengono utilizzati su questo sito web
                      nella presente informativa sulla privacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Modulo di Contatto</h3>
                    <p>
                      Se ci invii richieste tramite il modulo di contatto, i tuoi dati del modulo di richiesta,
                      inclusi i dati di contatto da te forniti, verranno memorizzati presso di noi ai fini
                      dell'elaborazione della richiesta e in caso di domande di follow-up. Non condividiamo
                      questi dati senza il tuo consenso.
                    </p>
                    <p className="mt-3">
                      Il trattamento di questi dati si basa sull'art. 6 par. 1 lett. b GDPR se la tua richiesta
                      è correlata all'esecuzione di un contratto o è necessaria per l'attuazione di misure
                      precontrattuali. In tutti gli altri casi, il trattamento si basa sul nostro legittimo
                      interesse alla gestione efficace delle richieste a noi indirizzate (art. 6 par. 1 lett.
                      f GDPR) o sul tuo consenso (art. 6 par. 1 lett. a GDPR) se questo è stato richiesto;
                      il consenso può essere revocato in qualsiasi momento.
                    </p>
                    <p className="mt-3">
                      I dati che hai inserito nel modulo di contatto rimarranno presso di noi fino a quando
                      non ci chiederai di eliminarli, non revocherai il tuo consenso alla memorizzazione o
                      la finalità della memorizzazione dei dati non sarà più applicabile (ad es. dopo che la
                      tua richiesta è stata completamente elaborata). Le disposizioni di legge obbligatorie —
                      in particolare i periodi di conservazione — rimangono impregiudicate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Richiesta tramite E-mail, Telefono o Fax</h3>
                    <p>
                      Se ci contatti tramite e-mail, telefono o fax, la tua richiesta, inclusi tutti i dati
                      personali risultanti (nome, richiesta), verrà memorizzata e trattata da noi ai fini
                      dell'elaborazione della tua richiesta. Non condividiamo questi dati senza il tuo consenso.
                    </p>
                    <p className="mt-3">
                      Il trattamento di questi dati si basa sull'art. 6 par. 1 lett. b GDPR se la tua richiesta
                      è correlata all'esecuzione di un contratto o è necessaria per l'attuazione di misure
                      precontrattuali. In tutti gli altri casi, il trattamento si basa sul nostro legittimo
                      interesse alla gestione efficace delle richieste a noi indirizzate (art. 6 par. 1 lett.
                      f GDPR) o sul tuo consenso (art. 6 par. 1 lett. a GDPR) se questo è stato richiesto;
                      il consenso può essere revocato in qualsiasi momento.
                    </p>
                    <p className="mt-3">
                      I dati inviatici tramite richieste di contatto rimarranno presso di noi fino a quando
                      non ci chiederai di eliminarli, non revocherai il tuo consenso alla memorizzazione o
                      la finalità della memorizzazione dei dati non sarà più applicabile (ad es. dopo che la
                      tua richiesta è stata completamente elaborata). Le disposizioni di legge obbligatorie —
                      in particolare i periodi di conservazione legali — rimangono impregiudicate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Partecipazione a Programmi di Affiliazione</h3>
                    <p>
                      Nell'ambito della nostra offerta online, utilizziamo misure di tracciamento standard del
                      settore sulla base dei nostri interessi legittimi (ossia interesse nell'analisi,
                      nell'ottimizzazione e nel funzionamento economico della nostra offerta online) ai sensi
                      dell'art. 6 par. 1 lett. f GDPR, nella misura in cui queste siano necessarie per il
                      funzionamento del sistema di affiliazione. Le seguenti informazioni spiegano il background
                      tecnico agli utenti.
                    </p>
                    <p className="mt-3">
                      I servizi offerti dai nostri partner contrattuali possono essere pubblicizzati e collegati
                      anche su altri siti web (i cosiddetti link di affiliazione o sistemi after-buy, ad es. quando
                      vengono offerti link a terzi dopo la conclusione di un contratto). I gestori dei rispettivi
                      siti web ricevono una commissione quando gli utenti seguono i link di affiliazione e
                      successivamente usufruiscono delle offerte.
                    </p>
                    <p className="mt-3">
                      In sintesi, è necessario per la nostra offerta online che possiamo tracciare se gli utenti
                      interessati ai link di affiliazione e/o alle offerte disponibili da noi usufruiscono
                      successivamente di tali offerte tramite i link di affiliazione o la nostra piattaforma
                      online. A tale scopo, i link di affiliazione e le nostre offerte vengono integrati con
                      determinati valori che possono far parte del link o essere altrimenti impostati, ad es.
                      in un cookie. Questi valori includono in particolare il sito web di origine (referrer),
                      il tempo, un identificativo online degli operatori del sito web in cui si trovava il link
                      di affiliazione, un identificativo online della rispettiva offerta, un identificativo
                      online dell'utente, nonché valori specifici di tracciamento come l'ID del materiale
                      pubblicitario, l'ID partner e le categorizzazioni.
                    </p>
                    <p className="mt-3">
                      Gli identificativi online degli utenti da noi utilizzati sono valori pseudonimi. Ciò
                      significa che gli identificativi online stessi non contengono dati personali come nomi
                      o indirizzi e-mail. Ci aiutano solo a determinare se lo stesso utente che ha cliccato
                      su un link di affiliazione o era interessato a un'offerta tramite la nostra piattaforma
                      online ha successivamente usufruito dell'offerta, ad es. ha concluso un contratto con
                      il fornitore. Tuttavia, l'identificativo online è personale nel senso che la società
                      partner e noi stessi disponiamo dell'identificativo online insieme ad altri dati
                      dell'utente. Solo in questo modo la società partner può informarci se quell'utente
                      ha usufruito dell'offerta e noi possiamo, ad esempio, pagare il bonus.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Programma Partner Amazon</h3>
                    <p>
                      Sulla base dei nostri interessi legittimi (ossia interesse nel funzionamento economico
                      della nostra offerta online ai sensi dell'art. 6 par. 1 lett. f GDPR), partecipiamo al
                      programma partner Amazon EU, concepito per fornire un mezzo per i siti web attraverso
                      il quale è possibile guadagnare entrate pubblicitarie inserendo pubblicità e link ad
                      Amazon.de (il cosiddetto sistema di affiliazione). In qualità di partner Amazon,
                      guadagniamo dagli acquisti idonei.
                    </p>
                    <p className="mt-3">
                      Amazon utilizza i cookie per poter tracciare l'origine degli ordini. Tra l'altro, Amazon
                      può riconoscere che hai cliccato il link partner su questo sito web e successivamente
                      hai acquistato un prodotto su Amazon.
                    </p>
                    <p className="mt-3">
                      Per ulteriori informazioni sull'utilizzo dei dati da parte di Amazon e sulle opzioni di
                      opt-out, ti invitiamo a consultare l'informativa sulla privacy di Amazon:{' '}
                      <a
                        href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-sm">
                      Nota: Amazon e il logo Amazon sono marchi di Amazon.com, Inc. o di una delle sue
                      società affiliate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">"Baby-Schlaf-Check / Analisi del Sonno"</h3>

                    <p className="font-medium text-warm-700 mt-3 mb-1">1) Finalità e processo del trattamento dei dati</p>
                    <p>Quando utilizzi il nostro <strong>Baby-Schlaf-Check (Analisi del Sonno)</strong>, trattiamo i tuoi dati per:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>inviarti una <strong>valutazione automatizzata come guida</strong> (e-mail con i risultati), e</li>
                      <li>inviarti <strong>ulteriori e-mail utili</strong> sul sonno del bambino successivamente (ad es. consigli personalizzati in base ai tuoi risultati).</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Importante:</strong> La valutazione è una <strong>guida generale</strong> e non
                      sostituisce <strong>il parere medico o una diagnosi</strong>.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">2) Quali dati trattiamo</p>
                    <p>A seconda di ciò che inserisci, trattiamo in particolare:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Indirizzo e-mail (obbligatorio)</li>
                      <li>Nome (se fornito)</li>
                      <li>Nome del bambino (se fornito/opzionale)</li>
                      <li>Informazioni dal check (ad es. orari del sonno, pisolini, finestre di veglia, tempo per addormentarsi, risvegli notturni, valutazione soggettiva)</li>
                    </ul>
                    <p className="mt-2">Memorizziamo inoltre (per la consegna significativa di follow-up corrispondenti) campi di risultato tipici come:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Età in mesi (o fascia d'età)</li>
                      <li>"Problema principale"/area di focus (chiave)</li>
                      <li>Punteggio/stato per area</li>
                    </ul>

                    <p className="font-medium text-warm-700 mt-4 mb-1">3) Base giuridica</p>
                    <p>
                      Il trattamento si basa sul tuo <strong>consenso</strong> (art. 6 par. 1 lett. a GDPR). Puoi
                      revocare il tuo consenso <strong>in qualsiasi momento</strong> (ad es. tramite il link di
                      disiscrizione in qualsiasi e-mail).
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">4) Invio di e-mail tramite KlickTipp</p>
                    <p>
                      Per l'invio e la gestione delle e-mail, utilizziamo <strong>KlickTipp</strong> come nostro
                      fornitore di servizi (email marketing/CRM). KlickTipp tratta i dati per nostro conto.
                      KlickTipp dichiara che i dati vengono trattati <strong>esclusivamente nell'UE</strong>.{' '}
                      <a
                        href="https://www.klicktipp.com/de/marketing-suite/datenschutz-dsgvo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        KlickTipp Privacy &amp; GDPR
                      </a>
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">5) Valutazione automatizzata tramite AI (OpenAI)</p>
                    <p>
                      Per la valutazione automatizzata, utilizziamo un servizio AI di <strong>OpenAI</strong>.
                      In questo modo, i contenuti da te inseriti (e, se del caso, i valori dei risultati
                      intermedi) vengono trasmessi a OpenAI ai fini della generazione della valutazione,
                      e viene restituito un output testuale.
                    </p>
                    <p className="mt-2">
                      OpenAI tratta questi dati per noi come <strong>responsabile del trattamento</strong>
                      nell'ambito di un Addendum sul Trattamento dei Dati.{' '}
                      <a
                        href="https://openai.com/policies/data-processing-addendum/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        OpenAI DPA
                      </a>
                    </p>
                    <p className="mt-2">
                      OpenAI dichiara inoltre che i <strong>dati API non vengono utilizzati per l'addestramento</strong>
                      dei propri modelli per impostazione predefinita, e che i contenuti possono essere
                      memorizzati per un massimo di 30 giorni a fini di monitoraggio degli abusi (salvo
                      diverso accordo).
                    </p>
                    <p className="mt-2">
                      <strong>Nota sui dati sensibili:</strong> Ti invitiamo a non inserire diagnosi mediche,
                      malattie o altri dati sanitari nei campi di testo libero. La valutazione non è progettata
                      per questo scopo.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">6) Destinatari / trasferimenti verso paesi terzi</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>KlickTipp</strong> (invio e-mail, gestione contatti) —{' '}
                        <a
                          href="https://www.klicktipp.com/de/marketing-suite/datenschutz-dsgvo/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blush-500 hover:text-blush-600 transition-colors"
                        >
                          Informativa sulla Privacy
                        </a>
                      </li>
                      <li>
                        <strong>OpenAI</strong> (valutazione AI) —{' '}
                        <a
                          href="https://openai.com/policies/data-processing-addendum/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blush-500 hover:text-blush-600 transition-colors"
                        >
                          DPA
                        </a>
                      </li>
                    </ul>
                    <p className="mt-2">
                      Laddove il trattamento o i trasferimenti al di fuori del SEE siano necessari per OpenAI,
                      ciò viene effettuato sulla base di garanzie adeguate (ad es. Clausole Contrattuali
                      Standard o una decisione di adeguatezza) ai sensi del DPA.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">7) Durata della conservazione</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Conserviamo i tuoi dati per il tempo necessario alle finalità sopra indicate, o fino a quando non revochi il tuo consenso.</li>
                      <li>I log di workflow/sistema (ad es. in n8n) vengono eliminati regolarmente dopo 30 giorni.</li>
                      <li>Per OpenAI si applicano i periodi di conservazione sopra menzionati nell'ambito del servizio (in genere fino a 30 giorni per i contenuti API, salvo diverso accordo).</li>
                    </ul>

                    <p className="font-medium text-warm-700 mt-4 mb-1">8) I tuoi diritti</p>
                    <p>
                      Hai il diritto in qualsiasi momento di accesso, rettifica, cancellazione, limitazione
                      del trattamento, portabilità dei dati e opposizione — nonché il diritto di presentare
                      reclamo a un'autorità di controllo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sezione 5 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">5. Newsletter</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Dati della Newsletter</h3>
                    <p>
                      Se desideri ricevere la newsletter offerta su questo sito web, abbiamo bisogno di un
                      indirizzo e-mail da parte tua, nonché di informazioni che ci consentano di verificare
                      che tu sia il proprietario dell'indirizzo e-mail fornito e che tu acconsenta a ricevere
                      la newsletter. Non vengono raccolti altri dati o vengono raccolti solo su base volontaria.
                      Utilizziamo questi dati esclusivamente per l'invio delle informazioni richieste e non li
                      trasferiamo a terzi.
                    </p>
                    <p className="mt-3">
                      Il trattamento dei dati inseriti nel modulo di iscrizione alla newsletter viene effettuato
                      esclusivamente sulla base del tuo consenso (art. 6 par. 1 lett. a GDPR). Puoi revocare
                      il tuo consenso alla memorizzazione dei dati, dell'indirizzo e-mail e del loro utilizzo
                      per l'invio della newsletter in qualsiasi momento, ad esempio tramite il link
                      "Disiscrivi" nella newsletter. La liceità delle operazioni di trattamento dei dati già
                      avvenute rimane impregiudicata dalla revoca.
                    </p>
                    <p className="mt-3">
                      I dati memorizzati presso di noi ai fini della ricezione della newsletter verranno
                      conservati da noi o dal fornitore del servizio newsletter fino a quando non ti disiscriverai
                      dalla newsletter, ed eliminati dall'elenco di distribuzione della newsletter dopo la
                      disiscrizione o una volta che la finalità cessa di applicarsi. Ci riserviamo il diritto
                      di eliminare o bloccare indirizzi e-mail dal nostro elenco di distribuzione della
                      newsletter a nostra discrezione nell'ambito del nostro legittimo interesse ai sensi
                      dell'art. 6 par. 1 lett. f GDPR.
                    </p>
                    <p className="mt-3">
                      I dati memorizzati presso di noi per altre finalità rimangono impregiudicati.
                    </p>
                    <p className="mt-3">
                      Dopo la tua disiscrizione dall'elenco di distribuzione della newsletter, il tuo indirizzo
                      e-mail può essere memorizzato da noi o dal fornitore del servizio newsletter in una lista
                      di soppressione se ciò è necessario per prevenire futuri invii. I dati della lista di
                      soppressione vengono utilizzati esclusivamente per questo scopo e non vengono uniti ad
                      altri dati. Ciò serve sia al tuo interesse che al nostro interesse nel rispettare i
                      requisiti legali durante l'invio di newsletter (interesse legittimo ai sensi dell'art.
                      6 par. 1 lett. f GDPR). La memorizzazione nella lista di soppressione non è limitata
                      nel tempo.{' '}
                      <strong>
                        Puoi opporti alla memorizzazione se i tuoi interessi prevalgono sul nostro legittimo interesse.
                      </strong>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Come Utilizziamo KlickTipp</h3>
                    <p>
                      (1) Per la comunicazione online con te, utilizziamo i servizi di KLICK-TIPP LIMITED,
                      15 Cambridge Court, 210 Shepherd's Bush Road, London W6 7NJ, Regno Unito.
                      Il rappresentante di KLICK-TIPP LIMITED ai sensi dell'articolo 27 GDPR è
                      Waterton Knowledge Center WKC UG, Friedrichstr. 53a, 15537 Erkner, rappresentata da
                      Ulf Castelle. Otteniamo questi servizi tramite un contratto principale con Digistore24 GmbH,
                      St.-Godehard-Straße 32, 31139 Hildesheim. Digistore24 è un rivenditore che acquista
                      prodotti o servizi come KlickTipp e li vende agli acquirenti senza ulteriore elaborazione
                      significativa. Abbiamo inoltre concluso direttamente con KlickTipp un accordo sul
                      trattamento dei dati ai sensi dell'articolo 28 GDPR. Ciò garantisce che manteniamo il
                      pieno controllo sui dati personali lì trattati e che KlickTipp attua le nostre istruzioni
                      di conseguenza.
                    </p>
                    <p className="mt-3">
                      (2) Memorizziamo i tuoi dati di contatto presso KlickTipp e possiamo trattare i dati
                      che elaboriamo tramite gli strumenti di marketing online descritti più dettagliatamente
                      nella presente informativa sulla privacy. Questi fornitori sono completamente integrati
                      con KlickTipp tramite un'interfaccia sicura. È quindi possibile che KlickTipp venga a
                      conoscenza di questi dati — tuttavia, come già menzionato, KlickTipp non ha alcun diritto
                      di utilizzo proprio riguardo a questi dati ed è pienamente soggetto alle nostre istruzioni.
                    </p>
                    <p className="mt-3">
                      (3) Inoltre, presso KlickTipp abbiamo la possibilità di associare i tuoi dati personali
                      ai cosiddetti tag. KlickTipp distingue due tipi di tag: SmartTag — quando un contatto
                      si registra tramite un modulo di registrazione, riceve automaticamente un tag con il nome
                      del relativo modulo di registrazione. KlickTipp imposta automaticamente anche i tag
                      "E-mail ricevuta", "E-mail aperta", "E-mail cliccata" e "E-mail visualizzata nel browser".
                      Tag manuali — oltre agli SmartTag, è possibile creare tag manuali per etichettare i
                      contatti con, ad esempio, il tag "Cliente" o più specificamente "Prodotto B acquistato".
                    </p>
                    <p className="mt-3">
                      (4) Dettagli su queste e altre opzioni che utilizziamo presso KlickTipp possono essere
                      trovati nel{' '}
                      <a
                        href="https://www.klicktipp.com/handbuch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        Manuale KlickTipp
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      (5) L'informativa sulla privacy di KlickTipp può essere trovata{' '}
                      <a
                        href="https://www.klicktipp.com/datenschutzerklarung/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        qui
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      (6) La politica anti-spam di KlickTipp può essere trovata{' '}
                      <a
                        href="https://www.klicktipp.com/anti-spam-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        qui
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      Le seguenti informazioni forniscono dettagli sul contenuto della nostra newsletter,
                      nonché sulle procedure di registrazione, invio e valutazione statistica e sul tuo
                      diritto di opposizione. Iscrivendoti alla nostra newsletter, acconsenti a riceverla
                      e alle procedure descritte.
                    </p>
                    <p className="mt-3">
                      Contenuto della newsletter: Inviamo newsletter, e-mail e altre notifiche elettroniche
                      contenenti informazioni promozionali (di seguito "newsletter") solo con il consenso
                      dei destinatari o un'autorizzazione legale. Nella misura in cui il contenuto della
                      newsletter viene specificamente descritto nel contesto di una registrazione, esso è
                      determinante per il consenso degli utenti. In caso contrario, le nostre newsletter
                      contengono informazioni sui nostri servizi.
                    </p>
                    <p className="mt-3">
                      Double opt-in e registrazione: La registrazione alla nostra newsletter avviene tramite
                      una procedura di double opt-in. Ciò significa che dopo la registrazione riceverai
                      un'e-mail che ti chiede di confermare la tua registrazione. Questa conferma è necessaria
                      per garantire che nessuno possa registrarsi con l'indirizzo e-mail di qualcun altro.
                      Le registrazioni alla newsletter vengono registrate al fine di poter dimostrare il
                      processo di registrazione in conformità con i requisiti legali. Ciò include la
                      memorizzazione dell'ora di registrazione e conferma, nonché dell'indirizzo IP. Anche
                      le modifiche ai tuoi dati memorizzati presso il fornitore del servizio di invio vengono
                      registrate.
                    </p>
                    <p className="mt-3">
                      Dati di registrazione: Per iscriversi alla newsletter, è sufficiente fornire il tuo
                      indirizzo e-mail. Facoltativamente, ti chiediamo di fornire un nome ai fini di un
                      saluto personale nella newsletter.
                    </p>
                    <p className="mt-3">
                      L'invio della newsletter e la relativa misurazione delle prestazioni vengono effettuati
                      sulla base del consenso dei destinatari ai sensi dell'art. 6 par. 1 lett. a, art. 7 GDPR
                      in combinato disposto con l'art. 7 par. 2 n. 3 UWG, oppure, ove il consenso non sia
                      richiesto, sulla base del nostro legittimo interesse nel marketing diretto ai sensi
                      dell'art. 6 par. 1 lett. f GDPR in combinato disposto con l'art. 7 par. 3 UWG.
                    </p>
                    <p className="mt-3">
                      La registrazione del processo di iscrizione viene effettuata sulla base dei nostri
                      interessi legittimi ai sensi dell'art. 6 par. 1 lett. f GDPR. Il nostro interesse è
                      rivolto all'utilizzo di un sistema di newsletter intuitivo e sicuro che serva sia
                      ai nostri interessi aziendali che alle aspettative degli utenti, e che ci consenta
                      anche di dimostrare il consenso.
                    </p>
                    <p className="mt-3">
                      Cancellazione/revoca — Puoi annullare la ricezione della nostra newsletter in qualsiasi
                      momento, ovvero revocare il tuo consenso. Un link per annullare l'iscrizione alla
                      newsletter si trova alla fine di ogni newsletter. Potremmo conservare gli indirizzi
                      e-mail che hanno annullato l'iscrizione per un massimo di tre anni sulla base dei
                      nostri interessi legittimi prima di eliminarli, al fine di poter dimostrare il consenso
                      precedentemente dato. Il trattamento di questi dati sarà limitato allo scopo di una
                      possibile difesa contro eventuali rivendicazioni. Una richiesta individuale di
                      cancellazione è possibile in qualsiasi momento, a condizione che sia confermata
                      contemporaneamente la precedente esistenza del consenso.
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
