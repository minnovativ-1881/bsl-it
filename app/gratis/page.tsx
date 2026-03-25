'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, CheckCircle, Heart, ArrowRight, Award, BookOpen, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

const courseTestimonials = [
  {
    name: 'Melanie',
    text: "All'inizio ero scettica, ma gia con la prima e-mail la mia visione e cambiata. Dal secondo giorno aspettavo con impazienza la prossima mail di Sarah! I consigli pratici, come la tabella con le routine giornaliere, sono davvero preziosi!",
    stars: 5,
    initials: 'Me',
    gradient: 'from-blush-300 to-blush-400',
    highlight: 'visione cambiata dalla prima e-mail',
  },
  {
    name: 'Sabrina',
    text: "Dopo soli 6 giorni, il nostro bambino ha dormito tutta la notte! Ho scelto il metodo piu dolce, e prima si svegliava ogni ora cercando solo il seno.",
    stars: 5,
    initials: 'Sa',
    gradient: 'from-sky-300 to-sky-400',
    highlight: 'giorno 6 — tutta la notte',
  },
  {
    name: 'Linda',
    text: "Il corso via e-mail e fantastico! Si legge velocemente e i consigli possono essere messi in pratica subito. Trovo incredibile che sia completamente gratuito. Grazie mille!",
    stars: 5,
    initials: 'Li',
    gradient: 'from-blush-200 to-blush-300',
    highlight: 'consigli pratici immediati',
  },
  {
    name: 'Inga',
    text: "Finalmente riusciamo a dormire qualche ora in piu di seguito! Anche l'addormentamento di giorno dura al massimo 5 minuti e la sera non piu di 30 minuti. Grazie mille!",
    stars: 5,
    initials: 'In',
    gradient: 'from-sky-200 to-sky-300',
    highlight: 'ore di sonno ininterrotto',
  },
]

const pillars = [
  {
    title: 'Struttura chiara',
    body: 'Il corso e pensato per mamme e papa stanchi e fornisce informazioni in modo mirato e a piccoli passi. Nessuna confusione, solo consigli chiari e pratici.',
    color: 'bg-blush-50 border-blush-200',
    iconColor: 'text-blush-400',
  },
  {
    title: 'Rispetto del legame',
    body: "Non si tratta di metodi drastici come il pianto controllato. Il focus e sempre sulla relazione con il bambino, con dolcezza e sensibilita.",
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Informazioni di supporto',
    body: "Non ti limiterai a conoscere i passi, ma scoprirai anche il perche di ogni suggerimento. Comprendere il 'perche' rende molto piu semplice mettere in pratica i cambiamenti.",
    color: 'bg-blush-50 border-blush-200',
    iconColor: 'text-blush-400',
  },
  {
    title: 'Senza giudizi',
    body: 'Non ti giudichero mai. Il mio obiettivo e fornirti strumenti e alternative, senza mai farti sentire in colpa.',
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-400',
  },
]

const sleepData = [
  {
    src: '/images/sleepdata01.webp',
    caption: 'Primi mesi: all\'inizio il sonno sembrava gestibile, ma dopo 2-3 mesi e peggiorato rapidamente — con fasi di pianto notturno di 1-3 ore.',
  },
  {
    src: '/images/sleepdata02.webp',
    caption: 'Ad aprile: risvegli ogni 1-2 ore, sveglia alle 4 di mattina. A malapena 4 ore di sonno totale per notte.',
  },
  {
    src: '/images/sleepdata03.webp',
    caption: 'Dopo l\'approccio dolce rispettoso del legame: finalmente ore di sonno ininterrotto. Una notte completamente trasformata.',
  },
]

export default function GratisPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden bg-cream">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blush-100/50 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blush-100 text-blush-600 rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-blush-200"
            >
              <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400" />
              <span>Corso gratuito sul sonno del bambino</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-warm-800 leading-tight mb-6 text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              5 passi utili per{' '}
              <em className="text-blush-400 not-italic">un sonno migliore</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-warm-500 leading-relaxed mb-10 max-w-2xl mx-auto text-balance"
            >
              Avvia subito il corso gratuito via e-mail sul sonno del bambino per trasformare le notti insonni in ore di riposo sereno.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={openModal}
                className="btn-primary text-base sm:text-lg"
              >
                Si, voglio partecipare!
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5 text-warm-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1">30.000+ famiglie</span>
              </div>
            </motion.div>

            <p className="text-warm-400 text-xs mt-5">
              Rispettiamo la tua privacy. Disiscriviti in qualsiasi momento.
            </p>
          </div>
        </section>

        {/* Sarah's Personal Story */}
        <section className="py-20 sm:py-28" style={{ background: '#FBF0EC' }}>
          <div className="absolute inset-0 pointer-events-none" />
          <div className="section-container max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-blush-500 font-semibold text-sm uppercase tracking-widest mb-4 text-center">
                La storia di Sarah
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-8 text-center"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Sei alla ricerca di{' '}
                <em className="text-blush-400 not-italic">notti piu serene?</em>
              </h2>

              <div className="space-y-5 text-warm-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Il tuo bambino trasforma la notte in giorno? Fa fatica ad addormentarsi, a dormire senza interruzioni o a riaddormentarsi? Allora so esattamente come ti senti.
                </p>
                <p>
                  Con il mio quinto bambino ho vissuto notti estenuanti, con allattamenti quasi ogni ora (dormivo a malapena <strong className="text-warm-800">4-5 ore per notte</strong> ed ero completamente distrutta!). Ma dopo aver preso alcune decisioni dolci e rispettose del legame affettivo, abbiamo aiutato la nostra piccola a dormire meglio — e da allora le nostre notti sono davvero cambiate:{' '}
                  <strong className="text-warm-800">7-8 ore di sonno ininterrotto.</strong>
                </p>
                <p>
                  E sai una cosa? Lo stesso e successo a tantissime altre famiglie!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sleep Data Section */}
        <section className="py-20 sm:py-28 bg-cream overflow-hidden">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                I dati
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Come dormivo davvero — <em className="text-blush-400 not-italic">prima e dopo</em>
              </h2>
              <p className="text-warm-500 text-base leading-relaxed">
                Le lacune che vedi sono per lo piu fine settimana o notti in cui il monitoraggio del sonno era disattivato perche le cose erano troppo difficili. I grafici riflettono esattamente cio che ho vissuto.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              {sleepData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="bg-white rounded-4xl overflow-hidden shadow-soft border border-blush-100"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={`Dati del sonno ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-warm-500 text-sm leading-relaxed">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-16 text-center" style={{ background: '#EBF4FA' }}>
          <div className="section-container max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="font-serif font-light text-warm-800 mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}
              >
                Perche lo faccio?
              </h3>
              <p className="text-warm-500 mb-8 text-base">
                Amo i bambini (ne ho sette!) e la privazione del sonno puo mettere a dura prova anche la mamma piu amorevole. E ora di cambiare questo ciclo — in modo dolce, rispettoso e amorevole!
              </p>
              <button onClick={openModal} className="btn-primary">
                Inizia ora il corso gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why This Course */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Perche funziona
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Cosa rende questo corso{' '}
                <em className="text-blush-400 not-italic">diverso</em>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-4xl p-7 border ${pillar.color} shadow-soft`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pillar.iconColor}`} />
                    <h3 className="font-semibold text-warm-800 text-base">{pillar.title}</h3>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed pl-8">{pillar.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12 max-w-2xl mx-auto"
            >
              <p className="font-serif text-2xl sm:text-3xl text-blush-400 italic font-light">
                &ldquo;Non sei &lsquo;responsabile&rsquo; del problema, stai gia dando il massimo!&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Course Testimonials */}
        <section className="py-20 sm:py-28 overflow-hidden" style={{ background: '#FBF0EC' }}>
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0,30 C480,0 960,60 1440,20 L1440,0 L0,0 Z" fill="#FDF8F3" />
            </svg>
          </div>

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-500 font-semibold text-sm uppercase tracking-widest mb-4">
                Cosa dicono i partecipanti
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Genitori veri,{' '}
                <em className="text-blush-400 not-italic">risultati reali</em>
              </h2>
              <p className="text-warm-500 text-base leading-relaxed">
                Oltre 30.000 famiglie hanno seguito questo corso. Ecco cosa dicono alcune di loro.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {courseTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-4xl p-7 shadow-soft border border-blush-100 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-warm-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mb-5">
                    <span className="inline-block bg-blush-100 text-blush-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {t.highlight}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-blush-100">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-warm-800 text-sm">{t.name}</p>
                      <p className="text-warm-400 text-xs">Partecipante al corso</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Sarah Bio */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="section-container max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-strong border-4 border-blush-100">
                  <Image
                    src="/images/sarahmann.webp"
                    alt="Sarah Mann — Consulente del Sonno Infantile"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  L'AUTRICE
                </p>
                <h2
                  className="font-serif font-light text-warm-800 leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                  Chi e <em className="text-blush-400 not-italic">Sarah Mann</em>
                </h2>
                <p className="text-warm-600 leading-relaxed mb-5">
                  Sarah Mann e mamma di sette bambini, germanista, blogger, autrice e consulente certificata del sonno infantile. Le notti insonni con i suoi primi figli l'hanno portata prima sull'orlo della disperazione, e poi alla creazione del suo amato sito web Il Regno della Nanna.
                </p>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Attraverso il suo blog, consulenze personalizzate, libri di successo e corsi pratici, ha gia aiutato{' '}
                  <strong className="text-warm-800">piu di 30.000 genitori</strong> a migliorare il sonno dei loro bambini e a ritrovare una vita familiare piu serena.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Award, text: 'Consulente certificata del sonno infantile — Institute of Sensitive Sleep Consulting, Australia' },
                    { icon: BookOpen, text: 'Master of Education, autrice di diversi libri e corsi' },
                    { icon: Users, text: 'Oltre 30.000 partecipanti ai corsi — 12+ anni di esperienza' },
                    { icon: Heart, text: 'Mamma di 7 figli — sa esattamente cosa stai vivendo' },
                  ].map((cred, i) => {
                    const Icon = cred.icon
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-blush-100 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blush-400" />
                        </div>
                        <p className="text-warm-600 text-sm">{cred.text}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-20 sm:py-28" style={{ background: '#EBF4FA' }}>
          <div className="section-container max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-4">
                Il programma
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Le 5 parti del corso
              </h2>
            </motion.div>

            <div className="space-y-3">
              {[
                'Parte 1 — Ritmi di sonno: Scopri il ritmo biologico del tuo bambino',
                'Parte 2 — Routine quotidiana: Struttura le giornate per un sonno migliore',
                'Parte 3 — Rituale serale: Prepara mente e corpo alla nanna',
                'Parte 4 — Nuove abitudini: Associazioni del sonno che aiutano davvero',
                'Parte 5 — Dormire tutta la notte: I quattro metodi piu efficaci e rispettosi',
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-soft border border-sky-100"
                >
                  <span className="w-8 h-8 rounded-full bg-blush-400 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-warm-700 text-sm font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="relative py-24 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #D4907F 0%, #E8B4A8 50%, #C07060 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0,20 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#EBF4FA" />
            </svg>
          </div>

          <div className="section-container relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-serif font-light text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Inizia ora il corso gratuito.
                <br />
                <em className="not-italic opacity-80">Notti migliori sono piu vicine di quanto pensi.</em>
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Iscriviti ora — completamente gratuito. La tua prima e-mail arriva in pochi minuti.
              </p>
              <button
                onClick={openModal}
                className="bg-white text-blush-500 hover:bg-blush-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center gap-2"
              >
                Si, voglio partecipare!
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-sm mt-5">
                Senza impegno. Disiscriviti quando vuoi.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
