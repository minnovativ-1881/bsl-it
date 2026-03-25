'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Tag, ArrowRight } from 'lucide-react'

const previewArticles = [
  {
    slug: 'regressione-sonno-4-mesi',
    title: 'Regressione del sonno 4 mesi – tutto quello che devi sapere',
    excerpt: 'Verso i 4 mesi il sonno del tuo bambino cambia per sempre. Ecco cosa aspettarti e come affrontare questa fase con dolcezza.',
    category: 'Regressione del Sonno',
    image: '/images/regressione-sonno-4-mesi.webp',
  },
  {
    slug: 'bambino-si-sveglia-notte',
    title: 'Il tuo bambino si sveglia di notte? 10 cause e 12 soluzioni',
    excerpt: 'Risvegli frequenti, notti difficili — ci sono molte cause e altrettante soluzioni dolci. Scopri cosa si nasconde dietro i risvegli notturni.',
    category: 'Risvegli Notturni',
    image: '/images/bambino-si-sveglia-notte.webp',
  },
  {
    slug: 'bambino-non-dorme-lettino-accanto',
    title: '"Il mio bambino non dorme nel lettino accanto" – 7 consigli',
    excerpt: 'Le culle next to me sono apprezzatissime — ma spesso la teoria è più semplice della pratica. Ecco 7 consigli pratici per aiutarti.',
    category: 'Sonno nel Lettino',
    image: '/images/bambino-non-dorme-lettino-accanto.webp',
  },
]

export default function BlogPreview() {
  return (
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
            Blog sul Sonno
          </p>
          <h2
            className="font-serif font-light text-warm-800 leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Dal{' '}
            <em className="text-blush-400 not-italic">Blog sul Sonno</em>
          </h2>
          <p className="text-warm-500 text-base leading-relaxed">
            Consigli basati sulla ricerca per genitori stanchi
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {previewArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-4xl overflow-hidden shadow-soft border border-blush-100 flex flex-col"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden bg-blush-50">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blush-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-100">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif font-light text-warm-800 text-lg leading-snug mb-3">
                  <Link href={`/blog/${article.slug}`} className="hover:text-blush-500 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-blush-500 hover:text-blush-600 text-sm font-medium transition-colors"
                >
                  Leggi di più →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-warm-600 hover:text-blush-500 font-medium transition-colors"
          >
            Tutti gli articoli
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
