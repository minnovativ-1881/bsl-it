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
    slug: 'regressione-sonno-4-mesi',
    title: 'Regressione del sonno 4 mesi – tutto quello che devi sapere',
    excerpt: 'Verso i 4 mesi il sonno del tuo bambino cambia per sempre. Ecco cosa aspettarti e come affrontare questa fase con dolcezza e tanta informazione.',
    category: 'Regressione del Sonno',
    image: '/images/regressione-sonno-4-mesi.webp',
    readTime: '8 min di lettura',
  },
  {
    slug: 'bambino-si-sveglia-notte',
    title: 'Il tuo bambino si sveglia di notte? 10 cause e 12 soluzioni',
    excerpt: 'Risvegli frequenti, notti difficili — ci sono molte cause e altrettante soluzioni dolci. Scopri cosa si nasconde dietro i risvegli notturni del tuo bambino.',
    category: 'Risvegli Notturni',
    image: '/images/bambino-si-sveglia-notte.webp',
    readTime: '9 min di lettura',
  },
  {
    slug: 'bambino-non-dorme-lettino-accanto',
    title: '"Il mio bambino non dorme nel lettino accanto" – 7 consigli',
    excerpt: 'Le culle next to me sono molto apprezzate — ma spesso la teoria è più semplice della pratica. Ecco 7 consigli utili per aiutarti.',
    category: 'Sonno nel Lettino',
    image: '/images/bambino-non-dorme-lettino-accanto.webp',
    readTime: '6 min di lettura',
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
              Approfondimenti sul sonno
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-warm-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              Blog sul Sonno del{' '}
              <em className="text-blush-400 not-italic">Bambino</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-warm-500 leading-relaxed"
            >
              Consigli basati sulla ricerca per genitori stanchi. Chiari, pratici e sempre dolci.
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
                        Leggi l&apos;articolo →
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
                Vuoi consigli pratici sul sonno direttamente in casella di posta?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Iscriviti al corso gratuito via e-mail e inizia a vedere i risultati nella prima settimana.
              </p>
              <button
                onClick={openModal}
                className="bg-white text-blush-500 hover:bg-blush-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center gap-2"
              >
                Iscriviti al Corso Gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-sm mt-5">
                Nessun impegno. Disiscriviti in qualsiasi momento. Conformità GDPR.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
