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
    unit: 'nights',
    label: 'equivalent sleepless nights in the first year',
    icon: Moon,
    color: 'bg-warm-800 text-white',
    accent: 'text-blush-300',
  },
  {
    value: '1,126',
    unit: 'times',
    label: 'woken up by their baby per year',
    icon: AlarmClock,
    color: 'bg-blush-400 text-white',
    accent: 'text-white/70',
  },
  {
    value: '5.5',
    unit: 'hours',
    label: 'average sleep per night — 2.5 hours less than before',
    icon: Clock,
    color: 'bg-sky-400 text-white',
    accent: 'text-white/70',
  },
  {
    value: '76%',
    unit: '',
    label: 'of parents rarely or never manage to nap during the day',
    icon: TrendingDown,
    color: 'bg-blush-100 text-warm-800',
    accent: 'text-blush-400',
  },
  {
    value: '48%',
    unit: '',
    label: 'often or always feel stressed because of their baby\'s sleep',
    icon: Heart,
    color: 'bg-sky-50 text-warm-800',
    accent: 'text-sky-500',
  },
  {
    value: '35%',
    unit: '',
    label: 'often or always feel lonely during nighttime care',
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

export default function ResearchPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-warm-800 relative overflow-hidden">
          {/* Subtle dot texture */}
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
                2025 Survey · 1,100 Parents · First Year with Baby
              </span>
              <h1
                className="font-serif font-light text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
              >
                Over 100 Sleepless Nights — Why Sleep Deprivation Means More Than Just Fatigue
              </h1>
              <p className="text-warm-300 text-lg leading-relaxed">
                In early 2024, we surveyed 1,100 parents about their sleep in their baby's first year.
                The results confirm what so many parents already feel — but rarely see put into numbers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key stat cards */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-blush-400 font-semibold text-sm uppercase tracking-widest mb-10"
            >
              The numbers
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

        {/* Article content with images */}
        <article className="max-w-3xl mx-auto px-6 pb-20 space-y-16">

          {/* Section 1: Lost sleep */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              912 Lost Hours of Sleep
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              On average, parents sleep only <strong className="text-warm-800">5.5 hours per night</strong> — 2.5 hours
              less than before their baby was born. Over the course of a year, this adds up to 912 lost hours
              of sleep, equivalent to <strong className="text-warm-800">38 full days</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed">
              In other words: parents lose the equivalent of <strong className="text-warm-800">109 sleepless nights</strong> within
              just twelve months.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-2.webp"
                alt="109 sleepless nights statistic"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section 2: Wake-ups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Constant Wake-Ups
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Parents wake up an <strong className="text-warm-800">average of 3.1 times per night</strong> to care for
              their baby — more than <strong className="text-warm-800">1,126 interruptions per year</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed">
              And even when the baby falls back asleep, parents don't immediately do so. On average it takes
              them <strong className="text-warm-800">16 minutes</strong> to fall asleep again — over 12 full days per
              year spent lying awake, waiting for sleep.
            </p>
            <div className="mt-8 rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-3.webp"
                alt="Night wake-up statistics"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section 3: Naps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Catching Up on Sleep? Mostly Impossible.
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              "Just sleep when the baby sleeps" — but in reality, this doesn't work for most parents.
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">76% of parents</strong> rarely or never take naps during the day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>On average, parents manage to lie down for a nap <strong className="text-warm-800">only once per week</strong>.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-1.webp"
                alt="Napping statistics"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section 4: Carrying */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Nearly 11 Full Days Carrying a Baby to Sleep
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Parents spend an average of <strong className="text-warm-800">10.4 minutes per sleep onset</strong> carrying
              their baby. With babies falling asleep about four times a day, this amounts to
              <strong className="text-warm-800"> 41.6 minutes daily</strong> — and nearly
              <strong className="text-warm-800"> 11 full days per year</strong>.
            </p>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-5.webp"
                alt="Baby carrying statistics"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section 5: Emotional toll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              More Than Just Fatigue — The Emotional Toll
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              Insufficient sleep isn't just a physical challenge. Our survey shows it also places a
              significant emotional burden on parents:
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">48% of parents</strong> often or always feel stressed because their baby doesn't sleep well.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">51% feel anxious</strong> before bedtime, fearing another sleepless night.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>Only <strong className="text-warm-800">19.8% go to bed feeling relaxed</strong>.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-4.webp"
                alt="Emotional stress statistics"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section 6: Loneliness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">
              Nighttime Loneliness
            </h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              In the middle of the night, while everyone else is asleep, parents get up to rock their
              baby, feed them, or desperately try to soothe them.
            </p>
            <ul className="space-y-2 text-warm-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span><strong className="text-warm-800">35% of parents</strong> often or always feel lonely when caring for their baby at night.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blush-400 mt-1">·</span>
                <span>Only <strong className="text-warm-800">15% do not experience</strong> nighttime loneliness.</span>
              </li>
            </ul>
            <div className="rounded-3xl overflow-hidden bg-blush-50 border border-blush-100">
              <Image
                src="/images/survey-6.webp"
                alt="Nighttime loneliness statistics"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="bg-warm-800 rounded-4xl p-8 sm:p-10 text-center"
          >
            <p className="text-blush-300 font-semibold text-sm uppercase tracking-widest mb-5">
              Conclusion
            </p>
            <h2 className="font-serif font-light text-white text-2xl sm:text-3xl leading-snug mb-6">
              Sleep deprivation is not just a phase —
              <br />
              <em className="text-blush-300 not-italic">it's a challenge that pushes parents to their limits.</em>
            </h2>
            <p className="text-warm-300 leading-relaxed mb-8 max-w-xl mx-auto">
              These numbers show that what many parents feel as a personal weakness is actually a systemic,
              measurable problem. You are not alone — and there are gentle, effective ways through it.
            </p>
            <button
              onClick={openModal}
              className="bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Join the free email course
            </button>
          </motion.div>

          {/* Methodology note */}
          <p className="text-warm-400 text-xs leading-relaxed border-t border-blush-100 pt-6">
            Survey conducted in February 2024. 1,100 parents in their baby's first year participated.
            Published by Land of Little Dreamers (Babyschlummerland). Data reflects self-reported experiences.
          </p>

        </article>
      </main>
      <Footer />
    </>
  )
}
