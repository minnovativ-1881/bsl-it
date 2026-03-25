'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useOptIn } from '@/context/OptInContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Ricerca', href: '/ricerca' },
  { label: 'Blog', href: '/blog' },
  { label: 'Chi siamo', href: '/chi-siamo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openModal } = useOptIn()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo.webp"
            alt="Il Regno della Nanna"
            width={120}
            height={40}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-warm-500 hover:text-warm-800 transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-500 hover:text-warm-800 transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            href="/gratis"
            className="bg-blush-400 hover:bg-blush-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-medium hover:-translate-y-0.5"
          >
            Corso Gratuito
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-warm-700 hover:bg-blush-200 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-blush-100"
            style={{ background: 'rgba(253, 248, 243, 0.97)', backdropFilter: 'blur(12px)' }}
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) =>
                link.href.startsWith('/') ? (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                    <Link
                      href={link.href}
                      className="text-warm-600 hover:text-warm-900 font-medium py-1 transition-colors block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-warm-600 hover:text-warm-900 font-medium py-1 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <Link
                  href="/gratis"
                  className="block bg-blush-400 hover:bg-blush-500 text-white px-6 py-3.5 rounded-full font-semibold text-center mt-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Corso Gratuito
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
