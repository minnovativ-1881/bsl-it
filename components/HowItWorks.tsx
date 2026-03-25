'use client'

import { motion } from 'framer-motion'
import { Download, SearchCheck, ListChecks, Sparkles } from 'lucide-react'
import { useOptIn } from '@/context/OptInContext'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Scopri i ritmi di sonno',
    body: 'Impara a leggere il ritmo biologico del tuo bambino e a identificare i suoi schemi di sonno.',
    tag: 'Parte 1',
    tagColor: 'bg-blush-100 text-blush-400',
  },
  {
    number: '02',
    icon: SearchCheck,
    title: 'Crea una routine quotidiana',
    body: "Struttura le giornate in modo che il ritmo naturale del tuo bambino possa esprimersi.",
    tag: 'Parte 2',
    tagColor: 'bg-blush-100 text-blush-400',
  },
  {
    number: '03',
    icon: ListChecks,
    title: 'Introduci un rituale serale',
    body: 'Una routine serena prima della nanna prepara mente e corpo al sonno.',
    tag: 'Parte 3',
    tagColor: 'bg-blush-100 text-blush-400',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Nuove abitudini di addormentamento',
    body: 'Scopri quali associazioni del sonno aiutano davvero il tuo bambino.',
    tag: 'Parte 4',
    tagColor: 'bg-blush-100 text-blush-400',
  },
  {
    number: '05',
    icon: Download,
    title: 'Dormire tutta la notte',
    body: 'Impara i quattro metodi piu efficaci e rispettosi per accompagnare il tuo bambino verso notti continue.',
    tag: 'Parte 5',
    tagColor: 'bg-blush-100 text-blush-400',
  },
]

export default function HowItWorks() {
  const { openModal } = useOptIn()
  return (
    <section id="how-it-works" className="relative bg-cream py-24 sm:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blush-100/40 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Come funziona
          </p>
          <h2
            className="font-serif font-light text-warm-800 leading-tight mb-5"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
          >
            Un percorso{' '}
            <em className="text-blush-400 not-italic">passo dopo passo</em>
          </h2>
          <p className="text-warm-500 text-lg leading-relaxed">
            Il corso gratuito sul sonno del bambino ti guida attraverso cinque lezioni pratiche.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-[2.75rem] top-12 bottom-12 w-0.5 hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, #E8B4A8, #A8CFE8)',
            }}
          />

          <div className="space-y-8 lg:space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6 lg:gap-8 items-start"
                >
                  {/* Step circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full bg-gradient-to-br from-sky-300 to-sky-400 flex flex-col items-center justify-center shadow-medium">
                      <span className="text-white/70 text-[10px] lg:text-xs font-bold leading-none">
                        {step.number}
                      </span>
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white mt-0.5" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white/70 rounded-4xl p-6 lg:p-8 border border-sky-100 shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-semibold text-warm-800 text-base lg:text-lg">
                        {step.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${step.tagColor}`}
                      >
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-warm-500 text-sm lg:text-base leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-warm-500 mb-6 text-base">
            Pronta per iniziare? Il primo passo e completamente gratuito.
          </p>
          <button onClick={openModal} className="btn-primary inline-flex">
            Inizia il corso gratuito
          </button>
        </motion.div>
      </div>
    </section>
  )
}
