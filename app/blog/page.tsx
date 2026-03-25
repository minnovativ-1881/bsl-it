'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

const articles = [
  {
    slug: '4-month-sleep-regression',
    title: '4-Month Sleep Regression – Everything You Need to Know',
    excerpt: "Around four months, your baby's sleep changes permanently. Here's what to expect and how to survive this challenging phase with confidence.",
    category: 'Sleep Regression',
    image: '/images/4-month-sleep-regression.webp',
    readTime: '8 min read',
  },
  {
    slug: 'baby-short-naps',
    title: 'Baby Short Naps: Why They Happen and How to Extend Them',
    excerpt: "Your baby wakes after exactly 45 minutes every nap? You're not alone. Here's the science behind short naps and gentle ways to lengthen them.",
    category: 'Naps',
    image: '/images/baby-short-naps.webp',
    readTime: '6 min read',
  },
  {
    slug: 'earlier-baby-bedtime',
    title: 'Earlier Baby Bedtime: Why It Works and How to Make the Switch',
    excerpt: "Counterintuitively, an earlier bedtime often means better sleep — fewer night wakings and longer stretches. Here's how to shift your baby's schedule.",
    category: 'Routines',
    image: '/images/earlier-baby-bedtime.webp',
    readTime: '5 min read',
  },
  {
    slug: 'self-soothing-baby',
    title: 'Self-Soothing: How to Help Your Baby Fall Asleep Independently',
    excerpt: "Self-soothing doesn't mean leaving your baby to cry. Here's how to gently build this skill in a way that respects your baby's needs.",
    category: 'Sleep Methods',
    image: '/images/self-soothing-baby.webp',
    readTime: '7 min read',
  },
  {
    slug: 'why-baby-keeps-waking-up',
    title: 'Why Does My Baby Keep Waking Up at Night?',
    excerpt: "Frequent night waking has many causes — and most of them have gentle solutions. Find out what's behind your baby's night wakings and what actually helps.",
    category: 'Night Waking',
    image: '/images/baby-keeps-waking-up.webp',
    readTime: '9 min read',
  },
]

export default function BlogPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-cream">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blush-100/50 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Sleep insights
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-warm-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              Baby Sleep{' '}
              <em className="text-blush-400 not-italic">Blog</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-warm-500 leading-relaxed"
            >
              Evidence-based insights for tired parents. Clear, practical, and always gentle.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24 sm:pb-32">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-4xl overflow-hidden shadow-soft border border-blush-100 flex flex-col"
                >
                  {/* Image */}
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="relative w-full aspect-square overflow-hidden bg-blush-50">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-contain transition-transform duration-500 hover:scale-105"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blush-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-100">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-warm-400 text-xs mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="font-serif font-light text-warm-800 text-xl leading-snug mb-3">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blush-500 transition-colors">
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-warm-500 text-sm leading-relaxed flex-1 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="pt-4 border-t border-blush-100">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-blush-500 hover:text-blush-600 text-sm font-medium transition-colors"
                      >
                        Read article →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-20 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #D4907F 0%, #E8B4A8 50%, #C07060 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0,30 C480,0 960,60 1440,20 L1440,0 L0,0 Z" fill="#FDF8F3" />
            </svg>
          </div>
          <div className="section-container relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-serif font-light text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
              >
                Want practical sleep tips delivered daily?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join the free email course and start seeing results in the first week.
              </p>
              <button
                onClick={openModal}
                className="bg-white text-blush-500 hover:bg-blush-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center gap-2"
              >
                Join the Free Course
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-sm mt-5">
                No commitment. Unsubscribe anytime. GDPR-compliant.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
