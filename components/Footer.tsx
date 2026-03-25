import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const footerLinks = {
  Esplora: [
    { label: 'Blog sul sonno', href: '/blog' },
    { label: 'Corso Gratuito', href: '/gratis' },
    { label: 'Ricerca', href: '/ricerca' },
    { label: 'Chi siamo', href: '/chi-siamo' },
  ],
  Supporto: [
    { label: 'Contatti', href: '/contatti' },
  ],
  'Note Legali': [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Note Legali', href: '/legal' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-warm-800 text-warm-300 overflow-hidden border-t border-white/10">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 section-container pt-24 pb-10">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.webp"
                alt="Il Regno della Nanna"
                width={140}
                height={45}
                className="h-10 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-warm-400 text-sm leading-relaxed max-w-xs">
              Aiutiamo i genitori a dormire meglio — con dolcezza, rispetto del legame e metodi comprovati.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-warm-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-warm-500">
          <p>
            © 2026 Il Regno della Nanna. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Fatto con
            <Heart className="w-3.5 h-3.5 text-blush-400 fill-blush-400" />
            per i genitori
          </p>
        </div>
      </div>
    </footer>
  )
}
