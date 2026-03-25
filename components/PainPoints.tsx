'use client'

import { motion } from 'framer-motion'
import { Moon, Clock, Heart, Sun, ChevronRight } from 'lucide-react'
import CloudDivider from './CloudDivider'

const pains = [
  {
    icon: Moon,
    title: 'Risvegli continui',
    body: "Il tuo bambino si sveglia ogni ora e solo l'allattamento o il ciuccio lo riportano a dormire.",
    accent: 'from-blush-400/20 to-blush-500/10',
    iconBg: 'bg-blush-400/20',
    iconColor: 'text-blush-300',
  },
  {
    icon: Clock,
    title: 'Addormentarsi richiede un\'eternita',
    body: "Dondolarlo, allattarlo, tenerlo in braccio per ore — e poi si sveglia non appena lo metti giu.",
    accent: 'from-sky-300/20 to-sky-400/10',
    iconBg: 'bg-sky-300/20',
    iconColor: 'text-sky-300',
  },
  {
    icon: Heart,
    title: 'Senti di fallire',
    body: 'Gli altri sembrano avere figli che dormono bene. Ti chiedi cosa stai sbagliando.',
    accent: 'from-sky-300/20 to-sky-400/10',
    iconBg: 'bg-sky-300/20',
    iconColor: 'text-sky-300',
  },
  {
    icon: Sun,
    title: 'Giorni senza energie',
    body: "Stai sopravvivendo, non vivendo. La stanchezza ti consuma e non riesci a essere la mamma che vorresti essere.",
    accent: 'from-warm-300/20 to-warm-400/10',
    iconBg: 'bg-warm-300/20',
    iconColor: 'text-warm-200',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function PainPoints() {
  return (
    <section className="relative bg-warm-600 py-24 sm:py-32 overflow-hidden">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Soft blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blush-600/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-warm-600/20 blur-3xl" />

      {/* Top cloud edge */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <CloudDivider fill="#FDF8F3" height={110} flip={true} />
      </div>

      <div className="relative z-10 section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blush-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Ti riconosci in questo?
          </p>
          <h2
            className="font-serif font-light text-white leading-tight text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Anche tu conosci
            <br />
            <em className="text-blush-300 not-italic">queste notti?</em>
          </h2>
          <p className="text-warm-300 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Non sei sola. Quasi la meta di tutti i genitori soffre di privazione del sonno. La buona notizia: ci sono soluzioni dolci ed efficaci.
          </p>
        </motion.div>

        {/* Pain cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-5 mb-16"
        >
          {pains.map((pain, i) => {
            const Icon = pain.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`relative rounded-4xl p-7 bg-gradient-to-br ${pain.accent} border border-white/5 backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${pain.iconBg} flex items-center justify-center mt-0.5`}>
                    <Icon className={`w-5 h-5 ${pain.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-2 leading-snug">
                      {pain.title}
                    </h3>
                    <p className="text-warm-300 text-sm leading-relaxed">{pain.body}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Reassurance block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-5xl bg-blush-500/15 border border-blush-400/20 p-8 sm:p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 rounded-5xl bg-gradient-to-br from-blush-400/10 to-transparent" />
          <div className="relative z-10">
            <p className="text-blush-300 font-serif text-3xl sm:text-4xl italic font-light mb-4">
              "Non e colpa tua."
            </p>
            <p className="text-warm-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Il tuo bambino non dorme bene perche nessuno ti ha mai mostrato come aiutarlo.
              Il cervello di un neonato non e programmato per dormire a lungo — ma{' '}
              <strong className="text-white">puo imparare</strong>. Con il metodo giusto.
            </p>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 text-blush-300 hover:text-blush-200 font-semibold transition-colors"
            >
              Scopri la soluzione
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom cloud divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <CloudDivider fill="#EFF6FB" height={90} />
      </div>
    </section>
  )
}
