'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star, Moon, Sparkles, Heart, Cloud } from 'lucide-react'
import CloudDivider from './CloudDivider'
import { useOptIn } from '@/context/OptInContext'

const blobPath =
  'M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,41.8C64.8,54.7,53.8,65.9,40.6,73.6C27.4,81.3,13.7,85.5,-0.4,86.1C-14.5,86.7,-29,83.7,-42.3,77C-55.6,70.3,-67.7,59.9,-75.3,46.8C-82.9,33.7,-86,17.9,-85.6,2.1C-85.2,-13.6,-81.3,-27.2,-74,-38.8C-66.7,-50.4,-56,-60,-43.7,-67.9C-31.4,-75.8,-17.5,-82,-1.7,-79.4C14.1,-76.8,30.6,-83.6,44.7,-76.4Z'

const blobPath2 =
  'M41.5,-64.7C55,-57.3,68,-47.7,75.9,-34.7C83.8,-21.7,86.6,-5.3,84.3,10.3C82,25.9,74.6,40.7,63.8,52.5C53,64.3,38.8,73.1,23.6,78.3C8.4,83.5,-7.8,85.1,-23.5,82.3C-39.2,79.5,-54.4,72.3,-65.5,61.4C-76.6,50.5,-83.6,35.9,-85.8,20.8C-88,5.7,-86.2,-9.7,-80.8,-23.8C-75.4,-37.9,-66.4,-50.7,-54.3,-58.8C-42.2,-66.9,-27,-70.3,-12.5,-71.1C2,-71.9,28,-72.1,41.5,-64.7Z'

const floatingStars = [
  { top: '12%', left: '8%', size: 'w-3 h-3', delay: 0 },
  { top: '20%', left: '85%', size: 'w-2 h-2', delay: 0.5 },
  { top: '35%', left: '92%', size: 'w-4 h-4', delay: 1 },
  { top: '65%', left: '5%', size: 'w-2 h-2', delay: 1.5 },
  { top: '75%', left: '88%', size: 'w-3 h-3', delay: 0.8 },
  { top: '50%', left: '78%', size: 'w-2 h-2', delay: 0.3 },
  { top: '85%', left: '15%', size: 'w-3 h-3', delay: 1.2 },
  { top: '15%', left: '50%', size: 'w-2 h-2', delay: 0.7 },
]

const avatarData = [
  { initials: 'M', color: 'from-blush-300 to-blush-400' },
  { initials: 'F', color: 'from-sky-200 to-sky-300' },
  { initials: 'N', color: 'from-sky-200 to-sky-300' },
  { initials: 'J', color: 'from-blush-400 to-blush-500' },
  { initials: 'K', color: 'from-warm-200 to-warm-300' },
]

export default function Hero() {
  const { openModal } = useOptIn()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Decorative blobs */}
      <motion.div
        animate={{ y: [0, -22, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-50 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#F2D4CC" d={blobPath} transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] opacity-40 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#A8CFE8" d={blobPath2} transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Cloud shape — replaces third blob */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/3 right-[22%] opacity-20 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" width="220" height="110">
          <ellipse cx="100" cy="75" rx="90" ry="30" fill="#D8D0EA" />
          <ellipse cx="70" cy="60" rx="45" ry="35" fill="#D8D0EA" />
          <ellipse cx="120" cy="55" rx="50" ry="40" fill="#D8D0EA" />
          <ellipse cx="155" cy="68" rx="35" ry="28" fill="#D8D0EA" />
          <ellipse cx="45" cy="68" rx="30" ry="25" fill="#D8D0EA" />
        </svg>
      </motion.div>

      {/* Floating stars */}
      {floatingStars.map((star, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none ${star.size}`}
          style={{ top: star.top, left: star.left }}
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
        >
          <Star className="w-full h-full text-blush-300 fill-blush-300" />
        </motion.div>
      ))}

      {/* Floating moon top-left */}
      <motion.div
        animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[8%] hidden lg:block pointer-events-none"
      >
        <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center shadow-soft">
          <Moon className="w-7 h-7 text-blush-400 fill-blush-200" />
        </div>
      </motion.div>

      {/* Floating sparkle bottom-right */}
      <motion.div
        animate={{ rotate: [0, -6, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[10%] hidden lg:block pointer-events-none"
      >
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shadow-soft">
          <Sparkles className="w-5 h-5 text-sky-400" />
        </div>
      </motion.div>

      {/* Floating cloud — top right area */}
      <motion.div
        animate={{ x: [0, 14, 0], y: [0, -6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] right-[6%] hidden xl:block pointer-events-none opacity-50"
      >
        <Cloud className="w-14 h-14 text-sky-300 fill-sky-100" strokeWidth={1} />
      </motion.div>

      {/* Floating cloud — lower left */}
      <motion.div
        animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[28%] left-[5%] hidden lg:block pointer-events-none opacity-40"
      >
        <Cloud className="w-10 h-10 text-sky-300 fill-sky-100" strokeWidth={1} />
      </motion.div>

      {/* Main content: two-column on desktop */}
      <div className="relative z-10 section-container w-full py-24 pt-36 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-blush-100 text-blush-600 rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-blush-200"
            >
              <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400" />
              <span>Corso gratuito sul sonno del bambino</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-warm-800 leading-[1.1] mb-6 text-balance"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Con amore verso un sonno migliore
              <br />
              <em className="text-blush-400 not-italic">per neonati e bambini piccoli</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-warm-500 max-w-xl mb-10 leading-relaxed text-balance"
            >
              Ti aiutiamo a trasformare le notti difficili in ore di riposo sereno — con metodi dolci, rispettosi e collaudati da migliaia di famiglie.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-14"
            >
              <button
                onClick={openModal}
                className="btn-primary w-full sm:w-auto justify-center text-base sm:text-lg"
              >
                Si, voglio partecipare!
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#how-it-works"
                className="text-warm-500 hover:text-warm-800 font-medium transition-colors text-sm sm:text-base underline underline-offset-4 decoration-blush-300"
              >
                Scopri come funziona ↓
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <div className="flex items-center">
                {avatarData.map((av, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${av.color} border-2 border-cream flex items-center justify-center text-xs font-bold text-white ${i > 0 ? '-ml-2.5' : ''}`}
                    style={{ zIndex: avatarData.length - i }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-warm-500">
                  <strong className="text-warm-700 font-semibold">50.000+ famiglie</strong> si fidano de Il Regno della Nanna
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg relative"
          >
            {/* Soft background blob behind image */}
            <div className="absolute inset-0 scale-110 rounded-full bg-blush-100 opacity-60 blur-3xl pointer-events-none" />

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <Image
                src="/images/babyschlaf-bild.png"
                alt="Mother gently holding her sleeping baby"
                width={520}
                height={620}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
