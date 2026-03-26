'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import CloudDivider from './CloudDivider'

const testimonials = [
  {
    name: 'Mamma Mo',
    role: 'Mamma di un bimbo di 2 anni',
    text: 'Ero davvero disperata perche il nostro bambino dormiva malissimo. Ero solo stanca ed esausta. Il Regno della Nanna mi ha aiutata a superare questo periodo. Il metodo WILA ha fatto una grande differenza per noi. Ora nostro figlio ha 2 anni e dorme quasi sempre molto bene. Grazie di cuore!',
    stars: 5,
    image: '/images/testimonial-mo.webp',
    gradient: 'from-blush-300 to-blush-400',
    initials: 'M',
    highlight: 'metodo WILA — grande differenza',
  },
  {
    name: 'Franziska',
    role: 'Mamma di una bimba',
    text: 'Dal continuo allattamento notturno a una piccola regina del sonno in 2-3 settimane! Ora possiamo finalmente dormire tutta la notte. Questo programma e stata la cosa migliore che potesse capitarci — per noi come genitori, per la nostra relazione e per lei stessa.',
    stars: 5,
    image: '/images/testimonial-franziska.webp',
    gradient: 'from-sky-300 to-sky-400',
    initials: 'F',
    highlight: '2-3 settimane',
  },
  {
    name: 'Natascha',
    role: 'Neomamma',
    text: 'Solo con i tuoi consigli siamo riusciti a dimezzare il tempo per addormentarsi, e tutto in modo molto delicato per la mia piccola! Da 5-6 risvegli notturni siamo passati a un massimo di 2. Possiamo solo consigliare Il Regno della Nanna a tutti!',
    stars: 5,
    image: '/images/testimonial-natascha.webp',
    gradient: 'from-sky-200 to-sky-300',
    initials: 'N',
    highlight: 'da 6 a 2 risvegli per notte',
  },
  {
    name: 'Marina',
    role: 'Partecipante al corso',
    text: 'La scorsa notte mi sono svegliata solo due volte. Ha dormito nel SUO letto, nella SUA cameretta fino alle 6:30! Stamattina ero cosi orgogliosa. Ho apportato solo piccole modifiche, ma con un grande impatto!!!',
    stars: 5,
    image: null,
    gradient: 'from-blush-400 to-blush-500',
    initials: 'Ma',
    highlight: 'piccole modifiche, grande impatto',
  },
  {
    name: 'Juli',
    role: 'Partecipante al corso',
    text: 'Mi sono sentita subito coinvolta dallo stile di Sarah: autentico, esperto e amorevole. Ti accompagna passo dopo passo con comprensione e senza pressioni. Per noi, questo corso è stato rivoluzionario. Lo consiglio senza riserve.',
    stars: 5,
    image: null,
    gradient: 'from-blush-300 to-blush-400',
    initials: 'J',
    highlight: 'corso rivoluzionario',
  },
  {
    name: 'Melanie',
    role: 'Partecipante al corso',
    text: 'All\'inizio ero scettica, ma già dopo la prima e-mail la mia prospettiva ha iniziato a cambiare. Il secondo giorno aspettavo con ansia la prossima e-mail di Sarah! Leggendo, si sente subito l\'amore e l\'esperienza che ci sono dietro ogni parola. I consigli pratici, come il piano giornaliero di esempio, sono davvero preziosi.',
    stars: 5,
    image: null,
    gradient: 'from-blush-300 to-blush-400',
    initials: 'Me',
    highlight: 'prospettiva cambiata già dalla prima e-mail',
  },
  {
    name: 'Sabrina',
    role: 'Partecipante al corso',
    text: 'Ho apprezzato molto il ritmo delle e-mail — non mi sono mai sentita sopraffatta, e ogni giorno ero pronta per il passo successivo. Al sesto giorno, la nostra bambina ha dormito tutta la notte. Ho scelto il metodo dolce, e prima si svegliava ogni ora e si addormentava solo allattando.',
    stars: 5,
    image: null,
    gradient: 'from-sky-300 to-sky-400',
    initials: 'Sa',
    highlight: 'al giorno 6 — dormito tutta la notte',
  },
  {
    name: 'Inga',
    role: 'Partecipante al corso',
    text: 'Con questo corso ricevi ogni giorno una e-mail con piccoli passi concreti nella giusta direzione. Tutto si adatta alla tua situazione familiare. Ci ha aiutato enormemente — finalmente dormiamo qualche ora di fila! Per addormentarsi ci vogliono ora al massimo 5 minuti.',
    stars: 5,
    image: null,
    gradient: 'from-blush-200 to-blush-300',
    initials: 'In',
    highlight: 'finalmente ore di sonno ininterrotto',
  },
  {
    name: 'Michelle',
    role: 'Partecipante al corso',
    text: 'Grazie a te abbiamo recuperato le nostre serate come coppia! Mi ha aiutato tantissimo riconoscere il ritmo del mio bambino. Il corso mi ha dato la forza di essere costante. Ho adorato anche il fatto che le informazioni fossero distribuite su più giorni — mi ritrovavo ad aspettare la prossima e-mail con entusiasmo.',
    stars: 5,
    image: null,
    gradient: 'from-sky-200 to-sky-300',
    initials: 'Mi',
    highlight: 'serate come coppia recuperate',
  },
]

const statsData = [
  { value: '50.000+', label: 'Partecipanti ai corsi' },
  { value: '7.000+', label: 'E-book venduti' },
  { value: '100%', label: 'Consulente certificata' },
  { value: '4.8★', label: 'Valutazione media' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#FBF0EC' }}
    >
      {/* Top cloud divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <CloudDivider fill="#FDF8F3" height={110} flip={true} />
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />

      {/* Large decorative quote */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <Quote className="w-64 h-64 text-blush-400" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-blush-500 font-semibold text-sm uppercase tracking-widest mb-4">
            Storie vere
          </p>
          <h2
            className="font-serif font-light text-warm-800 leading-tight mb-5"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
          >
            Mamme che{' '}
            <em className="text-blush-400 not-italic">hanno gia trovato notti serene</em>
          </h2>
          <p className="text-warm-500 text-lg leading-relaxed">
            Non fidarti solo della mia parola. Leggi cosa dicono le altre mamme della loro esperienza.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-3xl py-5 px-4 shadow-soft border border-blush-100"
            >
              <div className="font-serif text-2xl sm:text-3xl font-light text-blush-500 leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-warm-400 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-4xl p-7 shadow-soft border border-blush-100 hover:shadow-medium transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Highlight pill */}
              <div className="mb-5">
                <span className="inline-block bg-blush-100 text-blush-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {t.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-blush-100">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-warm-800 text-sm">{t.name}</p>
                  <p className="text-warm-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-warm-400 text-sm mt-10"
        >
          Risultati reali da famiglie reali. I risultati possono variare in base all'eta e al temperamento del bambino.
        </motion.p>
      </div>

      {/* Bottom cloud divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <CloudDivider fill="#EBF4FA" height={90} />
      </div>
    </section>
  )
}
