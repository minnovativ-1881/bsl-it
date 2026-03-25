'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Moon, AlarmClock, Heart, Users, TrendingDown, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

const bigStats = [
  {
    value: '109',
    unit: 'notti',
    label: 'equivalenti di notti insonni nel primo anno',
    icon: Moon,
    color: 'bg-warm-800 text-white',
    accent: 'text-blush-300',
  },
  {
    value: '1.126',
    unit: 'volte',
    label: 'svegliati dal bambino in un anno',
    icon: AlarmClock,
    color: 'bg-blush-400 text-white',
    accent: 'text-white/70',
  },
  {
    value: '5,5',
    unit: 'ore',
    label: 'di sonno medio per notte — 2,5 ore in meno di prima',
    icon: Clock,
    color: 'bg-sky-400 text-white',
    accent: 'text-white/70',
  },
  {
    value: '76%',
    unit: '',
    label: 'dei genitori raramente o mai riesce a fare un pisolino di giorno',
    icon: TrendingDown,
    color: 'bg-blush-100 text-warm-800',
    accent: 'text-blush-400',
  },
  {
    value: '48%',
    unit: '',
    label: 'si sente spesso o sempre stressato a causa del sonno del bambino',
    icon: Heart,
    color: 'bg-sky-50 text-warm-800',
    accent: 'text-sky-500',
  },
  {
    value: '35%',
    unit: '',
    label: 'si sente spesso o sempre solo durante le cure notturne',
    icon: Users,
    color: 'bg-warm-100 text-warm-800',
    accent: 'text-warm-500',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function RicercaPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-warm-800 relative overflow-hidden">
          {/* Texture a puntini */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-blush-400/20 text-blush-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-400/30 mb-6">
                Sondaggio 2025 · 1.100 Genitori · Primo Anno con il Bambino
              </span>
              <h1
                className="font-serif font-light text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
              >
                Oltre 100 Notti Insonni — Perché la Privazione del Sonno È Molto Più di una Semplice Stanchezza
              </h1>
              <p className="text-warm-300 text-lg leading-relaxed">
                All'inizio del 2024, abbiamo intervistato 1.100 genitori sul loro sonno nel primo anno di vita del loro bambino.
                I risultati confermano ciò che tanti genitori già sentono — ma raramente vedono tradotto in numeri.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schede statistiche principali */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-blush-400 font-semibold text-sm uppercase tracking-widest mb-10"
            >
              I numeri
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {bigStats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className={`rounded-4xl p-7 ${stat.color}`}
                  >
                    <Icon className={`w-6 h-6 mb-4 ${stat.accent}`} />
                    <div className="font-serif font-light leading-none mb-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                      {stat.value}
                      {stat.unit && <span className="text-xl ml-1 opacity-70">{stat.unit}</span>}
                    </div>
                    <p className="text-sm leading-relaxed opacity-80 mt-2">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contenuto dell'articolo con immagini */}
        <article className="max-w-3xl mx-auto px-6 pb-20 space-y-16">

          {/* Sezione 1: Sonno perso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              912 Ore di Sonno Perdute
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              In media, i genitori dormono solo <strong className="text-warm-800">5,5 ore per notte</strong> — 2,5 ore
              in meno rispetto a prima della nascita del bambino. Nel corso di un anno, questo si traduce in 912 ore
              di sonno perdute, equivalenti a <strong className="text-warm-800">38 giorni interi</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed">
              In altre parole: i genitori perdono l'equivalente di <strong className="text-warm-800">109 notti insonni</strong> in
              soli dodici mesi.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-2.webp"
                alt="Statistica: 109 notti insonni"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Sezione 2: Risvegli */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Risvegli Continui
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              I genitori si svegliano in <strong className="text-warm-800">media 3,1 volte per notte</strong> per prendersi
              cura del bambino — più di <strong className="text-warm-800">1.126 interruzioni all'anno</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed">
              E anche quando il bambino si riaddormenta, i genitori non lo fanno immediatamente. In media ci vogliono
              <strong className="text-warm-800"> 16 minuti</strong> per riprendere sonno — oltre 12 giorni interi all'anno
              trascorsi svegli nel letto ad aspettare di riaddormentarsi.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-3.webp"
                alt="Statistiche sui risvegli notturni"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Sezione 3: Pisolini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Recuperare Sonno? Quasi Impossibile.
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              "Dormi quando dorme il bambino" — ma nella realtà, questo non funziona per la maggior parte dei genitori.
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">Il 76% dei genitori</strong> raramente o mai riesce a fare un pisolino durante il giorno.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>In media, i genitori riescono a fare un pisolino <strong className="text-warm-800">solo una volta a settimana</strong>.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-1.webp"
                alt="Statistiche sui pisolini"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Sezione 4: Portare in braccio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Quasi 11 Giorni Interi a Cullare il Bambino per Farlo Addormentare
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              I genitori trascorrono in media <strong className="text-warm-800">10,4 minuti per ogni addormentamento</strong> a
              cullare il bambino. Con un bambino che si addormenta circa quattro volte al giorno, questo equivale a
              <strong className="text-warm-800"> 41,6 minuti al giorno</strong> — e quasi
              <strong className="text-warm-800"> 11 giorni interi all'anno</strong>.
            </p>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-5.webp"
                alt="Statistiche sul cullare il bambino"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Sezione 5: Peso emotivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Più della Semplice Stanchezza — Il Peso Emotivo
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Il sonno insufficiente non è solo una sfida fisica. Il nostro sondaggio mostra che pesa anche
              emotivamente sui genitori in modo significativo:
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">Il 48% dei genitori</strong> si sente spesso o sempre stressato perché il bambino non dorme bene.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">Il 51% si sente ansioso</strong> prima di andare a letto, temendo un'altra notte insonne.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>Solo il <strong className="text-warm-800">19,8% va a letto sentendosi rilassato</strong>.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-4.webp"
                alt="Statistiche sullo stress emotivo"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Sezione 6: Solitudine notturna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Solitudine Notturna
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Nel cuore della notte, mentre tutti gli altri dormono, i genitori si alzano per cullare
              il bambino, allattarlo o cercare disperatamente di calmarlo.
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">Il 35% dei genitori</strong> si sente spesso o sempre solo quando si prende cura del bambino di notte.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>Solo il <strong className="text-warm-800">15% non prova</strong> solitudine notturna.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-6.webp"
                alt="Statistiche sulla solitudine notturna"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Conclusione */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="bg-warm-800 rounded-4xl p-8 sm:p-10 text-center"
          >
            <p className="text-blush-300 font-semibold text-sm uppercase tracking-widest mb-5">
              Conclusione
            </p>
            <h2 className="font-serif font-light text-white text-2xl sm:text-3xl leading-snug mb-6">
              La privazione del sonno non è solo una fase —
              <br />
              <em className="text-blush-300 not-italic">è una sfida che spinge i genitori al limite.</em>
            </h2>
            <p className="text-warm-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Questi numeri dimostrano che ciò che molti genitori vivono come una debolezza personale è in realtà
              un problema sistemico e misurabile. Non sei sola — e ci sono percorsi dolci ed efficaci per uscirne.
            </p>
            <button
              onClick={openModal}
              className="bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Iscriviti al corso gratuito via e-mail
            </button>
          </motion.div>

          {/* Nota metodologica */}
          <p className="text-warm-400 text-xs leading-relaxed border-t border-blush-100 pt-6">
            Sondaggio condotto nel febbraio 2024. Hanno partecipato 1.100 genitori nel primo anno di vita del loro bambino.
            Pubblicato da Il Regno della Nanna (Babyschlummerland). I dati riflettono esperienze auto-riferite.
          </p>

        </article>
      </main>
      <Footer />
    </>
  )
}
