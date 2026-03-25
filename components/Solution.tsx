'use client'

import { motion } from 'framer-motion'
import { Moon, Sunrise, Users, Shield, Smile, Coffee } from 'lucide-react'
import CloudDivider from './CloudDivider'

const benefits = [
  {
    icon: Moon,
    title: 'Falls asleep independently',
    body: 'Your baby learns to fall asleep on their own in 10–15 minutes, without needing you there every single time.',
    color: 'bg-sky-100 text-sky-500',
    border: 'border-sky-200',
  },
  {
    icon: Sunrise,
    title: '6–8 hour sleep stretches',
    body: 'Finally, continuous, restorative sleep for both of you. Your body gets the recovery it so desperately needs.',
    color: 'bg-blush-100 text-blush-500',
    border: 'border-blush-200',
  },
  {
    icon: Smile,
    title: 'Present and smiling again',
    body: 'You rediscover the patience, joy, and presence your baby deserves. You become the mom you always wanted to be.',
    color: 'bg-sky-100 text-sky-500',
    border: 'border-sky-200',
  },
  {
    icon: Shield,
    title: 'Tailored to your child — not a one-size-fits-all',
    body: 'We work with 5 different gentle methods. No baby left to cry alone — the right approach is chosen based on your child\'s unique temperament and your family\'s values.',
    color: 'bg-warm-100 text-warm-500',
    border: 'border-warm-200',
  },
  {
    icon: Users,
    title: 'The whole family breathes again',
    body: 'Your partner finally sleeps, evenings are yours again. Better sleep for everyone transforms the entire family atmosphere.',
    color: 'bg-sand/60 text-warm-500',
    border: 'border-sand',
  },
  {
    icon: Coffee,
    title: 'Evenings finally free',
    body: 'You have space for yourself again — a show, a quiet dinner, a book. Your wellbeing is not a luxury, it\'s a necessity.',
    color: 'bg-blush-100 text-blush-400',
    border: 'border-blush-200',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#EFF6FB' }}
    >
      {/* Subtle background circles */}
      <div className="absolute top-20 right-[-5%] w-80 h-80 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 rounded-full bg-blush-200/30 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4">
            The transformation
          </p>
          <h2
            className="font-serif font-light text-warm-800 leading-tight mb-5 text-balance"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
          >
            Imagine what it feels like{' '}
            <em className="text-sky-400 not-italic">to wake up rested</em>
          </h2>
          <p className="text-warm-500 text-lg leading-relaxed">
            When your baby sleeps well, the whole family thrives.
            This isn't an unreachable dream — it's what families experience every day
            with this method.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`bg-white rounded-4xl p-7 shadow-soft border ${benefit.border} hover:shadow-medium transition-shadow duration-300 group`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-warm-800 text-base mb-2.5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed">{benefit.body}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-5xl px-8 py-6 shadow-soft border border-sky-200 max-w-xl">
            <p className="font-serif text-2xl sm:text-3xl font-light text-warm-700 italic leading-snug">
              "Sleep is not a luxury.
              <br />
              <span className="text-sky-400">It's a right."</span>
            </p>
            <p className="text-warm-400 text-sm mt-3">For you and your baby.</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom cloud divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <CloudDivider fill="#FDF8F3" height={90} />
      </div>
    </section>
  )
}
